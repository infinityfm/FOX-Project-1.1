import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CCol,
  CButton,
  CInputFile,
  CLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCardSubtitle,
} from "@coreui/react";
import DjangoCSRFToken from "django-react-csrftoken";
import { FoxApiService } from "../../../services";
import { getProfileFetch } from "../../../actions";
import { WithLoading, SubmitSpinner, WithLoadingSpinner } from "../../loadings";

const foxApi = new FoxApiService();

class SafetyPresets extends Component {
  state = {
    personal_declaration_template: "",
    safety_quiz_template: "",
    safety_video_url: "",
    error: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleFileUpload = (event) => {
    this.setState({
      [event.target.name]: event.target.files[0],
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.changeSubmitState();
    const requestData = this.state;
    delete requestData.error;
    const formData = new FormData();
    Object.entries(requestData).forEach(([key, value]) => {
      value ? formData.append(key, value) : null;
    });
    await foxApi
      .patchCompanySafetyInfo(this.props.company, formData)
      .then(() => {
        this.props.history.push(`/safety/video`);
      })
      .catch((error) => {
        const errors = handleError({
          error: error,
          operation: "Safety info upload",
          validationFields: [
            "personal_declaration_template",
            "safety_quiz_template",
            "safety_video_url",
          ],
        });
        this.setState({
          error: errors,
        });
      })
      .finally(() => this.props.changeSubmitState());
  };

  componentDidMount = async () => {
    await this.props
      .getProfileFetch()
      .catch((error) => console.log(error))
      .finally(() => this.props.changeLoadingState());
  };

  render = () => {
    return (
      <CCard style={{marginLeft:"25%", marginRight:"25%"}}>
        <CCardHeader style={{textAlign:"left"}}>
          <CCardTitle style={{fontWeight:"bold"}}>Safety Requirements Settings</CCardTitle>
          <CCardSubtitle>
            Insert the url link to the safety requirements video and upload the
            safety quiz and personal declaration templates
          </CCardSubtitle>
        </CCardHeader>
        <CCardBody>
          <WithLoadingSpinner loading={this.props.loading}>
            {this.props.role === "CliAdm" ? (
              <CRow>
                <CCol>
                  <CForm onSubmit={this.handleSubmit}>
                    <DjangoCSRFToken />
                    <CFormGroup>
                      {/* <CLabel htmlFor="safety_video_url">Url to document</CLabel> */}
                      <CInput
                        type="url"
                        id="safety_video_url"
                        name="safety_video_url"
                        placeholder="URL to safety requirements video"
                        pattern="https://.*"
                        value={this.state.safety_video_url}
                        onChange={this.handleChange}
                      />
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="safety_quiz_template">
                        Safety Quiz Template
                      </CLabel>
                      <CInputFile
                        id="safety_quiz_template"
                        name="safety_quiz_template"
                        onChange={this.handleFileUpload}
                      />
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="personal_declaration_template">
                        Personal Declaration Template
                      </CLabel>
                      <CInputFile
                        id="personal_declaration_template"
                        name="personal_declaration_template"
                        onChange={this.handleFileUpload}
                      />
                    </CFormGroup>
                    <CFormGroup>
                      <CButton
                        className="buttonw"
                        type="submit"
                        color="dark"
                        variant="outline"
                        block
                        style={{width:"25%", marginLeft:"75%"}}
                      >
                        <SubmitSpinner submitting={this.props.submitting} />
                        Submit
                      </CButton>
                    </CFormGroup>
                    {this.state.error ? <p>{this.state.error}</p> : null}
                  </CForm>
                  <CLink to="/safety/video" style={{marginLeft:"90%"}}>See preview</CLink>
                </CCol>
              </CRow>
            ) : (
              <Redirect to="/safety/video" />
            )}
          </WithLoadingSpinner>
        </CCardBody>
      </CCard>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    role: state.currentUser.role,
    company: state.currentUser.company,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WithLoading(SafetyPresets)));
