import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CForm, CFormGroup, CInput, CLabel, CContainer, CRow, CCol } from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { userRegisterFetch } from '../../actions'


class FoxRegisterForm extends Component {

    state = {
        username: "",
        password: "",
        password2: "",
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userRegisterFetch({
            password: this.state.password,
            token: this.state.registrationToken
        })
    }

    render() {
        return (
            <CContainer fluid={true}>
                <CRow className="mt-2 mb-2">
                    <CCol sm="8" className="mx-auto">
                        <CForm
                            onSubmit={this.handleSubmit}
                        >
                            {/* <DjangoCSRFToken /> */}
                            <CFormGroup>
                                <CLabel htmlFor="username">Name</CLabel>
                                <CInput
                                    id="username"
                                    name='username'
                                    placeholder="Enter your name"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    readOnly
                                    required />
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="nf-password">Password</CLabel>
                                <CInput
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Password.."
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    required
                                />
                                <CLabel htmlFor="nf-password">Confirm Password</CLabel>
                                <CInput
                                    type="password"
                                    id="password2"
                                    name="password2"
                                    placeholder="Confirm Password.."
                                    value={this.state.password2}
                                    onChange={this.handleChange}
                                    required
                                />
                            </CFormGroup>
                            <CFormGroup>
                                <CInput type="submit" value="Submit" color="info" />
                            </CFormGroup>
                            {this.props.loginError
                                ? <p>INVALID CREDENTIALS! PLEASE, CHECK YOUR PASSWORD AND PASSWORD CONFIRMATION FIELDS!</p>
                                : null
                            }
                        </CForm>
                    </CCol>
                </CRow>
            </CContainer >
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        registerError: state.registerError,
        registrationToken: state.registrationToken
    }
}

const mapDispatchToProps = dispatch => ({
    userRegisterFetch: credentials => dispatch(userRegisterFetch(credentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(FoxRegisterForm)