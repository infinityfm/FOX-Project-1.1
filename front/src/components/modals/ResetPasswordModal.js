import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { FoxApiService } from "../../services";
import { updateModal } from "../../actions";
import { WithLoading, SubmitSpinner } from "../loadings";

const foxApi = new FoxApiService();

class ResetPasswordModal extends Component {
  state = {
    error: false,
    success: false,
  };

  handleSubmit = async () => {
    this.props.changeSubmitState();
    await foxApi
      .resetPassword({ email: this.props.email })
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
    const { error, success } = this.state;
    return (
      <CModal
        show={this.props.modalType === "resetPasswordModal"}
        onClose={this.props.hideModal}
        color="dark"
      >
        <CModalHeader closeButton>
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
            <p>Are you sure you want to reset your password?</p>
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
  email: state.modal.email,
});

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(updateModal("", {})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithLoading(ResetPasswordModal));
