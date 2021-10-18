import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
} from "@coreui/react";
import { FoxApiService } from "../../services";
import { updateModal } from "../../actions";
import { WithLoading, SubmitSpinner } from "../loadings";

const foxApi = new FoxApiService();

class ForgetPasswordModal extends Component {
  state = {
    email: "",
    error: false,
    success: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async () => {
    this.props.changeSubmitState();
    const requestData = this.state;
    delete requestData.success;
    delete requestData.error;
    await foxApi
      .resetPassword(requestData)
      .then(() => {
        this.setState({
          success: true,
          error: false,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          error:
            "Could not reset your password!" +
            " Please check your the email you entered and try again!" +
            " In case this problem repeats, please contact your administrator!",
        });
      })
      .finally(this.props.changeSubmitState);
  };

  render = () => {
    const { email, error, success } = this.state;
    return (
      <CModal
        show={this.props.modalType === "forgetPasswordModal"}
        onClose={this.props.hideModal}
        color="dark"
      >
        <CModalHeader style={{backgroundColor: "#F63854"}} closeButton>
          <CModalTitle>Request password reset</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {success ? (
            <p className="fox-form-valid-feedback">
              Password reset successful. You'll receive an email to reset your
              password. If you don’t see the email, check your spam or junk
              folder before submitting a new request.
            </p>
          ) : (
            <CForm>
              <CFormGroup>
                <CLabel htmlFor="extend_date">
                  Please, enter your account`s email address. An letter will be
                  send on this address to reset your password.
                </CLabel>
                <CInput
                  disabled={this.props.submitting}
                  readOnly={this.props.submitting}
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Email"
                  required
                />
              </CFormGroup>
            </CForm>
          )}
          {error ? <p className="fox-form-invalid-feedback">{error}</p> : null}
        </CModalBody>
        <CModalFooter>
          {success ? null : (
            <CButton
              disabled={this.props.submitting}
              className="buttonw"
              color="primary"
              onClick={this.handleSubmit}
            >
              <SubmitSpinner submitting={this.props.submitting} />
              Confirm
            </CButton>
          )}{" "}
          <CButton
            disabled={this.props.submitting}
            className="button2"
            color="dark"
            onClick={this.props.hideModal}
          >
            <SubmitSpinner submitting={this.props.submitting} />
            {success ? "Close" : "Cancel"}
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };
}

const mapStateToProps = (state) => ({
  modalType: state.modal.modalType,
});

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(updateModal("", {})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithLoading(ForgetPasswordModal));
