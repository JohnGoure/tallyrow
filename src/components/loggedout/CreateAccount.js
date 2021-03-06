import React, { Component } from "react"

export class CreateAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : "",
            usernameconfirm:"",
            password : "",
            passwordconfirm : "",
            country : "",
            zipcode : 0,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange(e) {
        e.target.classList.add("active")

        this.setState({
            [e.target.name]: e.target.value
        })

        this.showInputError(e.target.name);
    }

    handleSubmit(e) {
        e.preventDefault()

        this.showFormErrors()
    }

    showFormErrors() {
        const inputs = document.querySelectorAll("input")
        let isFormValid = true

        inputs.forEach(input => {
            input.classList.add("active")
            const isInputValid = this.showInputError(input.name);

            if (isInputValid) {
                isFormValid= false
            }
        })
        return isFormValid;
    }

    showInputError(refName) {
        const validity = this.refs[refName].validity
        const label = document.getElementById(`${refName}Label`).textContent
        const error = document.getElementById(`${refName}Error`)
        const isPassword = refName.indexOf('password') !== -1
        const isPasswordConfirm = refName === 'passwordconfirm'
        const isUsername = refName.indexOf('username') !== -1
        const isUsernameConfirm = refName === 'usernameconfirm'

        if (isPasswordConfirm) {
            if (this.refs.password.value !== this.refs.passwordconfirm.value) {
                this.refs.passwordconfirm.setCustomValidity('Passwords do not match')
            } else {
                this.refs.passwordconfirm.setCustomValidity('')
            }
        }

        if (isUsernameConfirm) {
            if (this.refs.username.value !== this.refs.usernameconfirm.value) {
                this.refs.usernameconfirm.setCustomValidity('Emails do not match')
            } else {
                this.refs.usernameconfirm.setCustomValidity('')
            }
        }

        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`
            } else if (validity.typeMismatch) {
                error.textContent = `${label} should be a valid email address`
            } else if (isPassword && validity.patternMismatch) {
                error.textContent = `${label} should be longer than 4 chars`
            } else if(isUsernameConfirm && validity.customError) {
                error.textContent = 'Emails do not match'
            } else if (isPasswordConfirm && validity.customError) {
                error.textContent = 'Passwords do not match'
            }
            return false
        }
        error.textContent = '';
        return true;
    }

    render() {
        return (
            <div className="container">
                <h1 className="col2">Create an Account</h1>
                <form noValidate>
                    <div className="form-group">
                        <label htmlFor="username" id="usernameLabel">Email</label>
                        <input type="email" className="form-control" id="username" name="username" ref="username" value={this.state.username} onChange={this.handleChange} required />
                        <div className="error" id="usernameError" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="usernameconfirm" id="usernameconfirmLabel">Confirm Email</label>
                        <input type="email" className="form-control" id="usernameconfirm" name="usernameconfirm" ref="usernameconfirm" value={this.state.usernameconfirm} onChange={this.handleChange} required />
                        <div className="error" id="usernameconfirmError" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" id="passwordLabel">Password</label>
                        <input type="password" className="form-control" id="password" name="password" ref="password" value={this.state.password} onChange={this.handleChange} pattern=".{5,}" required />
                        <div className="error" id="passwordError" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordconfirm" id="passwordconfirmLabel">Confirm Password</label>
                        <input type="password" className="form-control" id="passwordconfirm" name="passwordconfirm" ref="passwordconfirm" value={this.state.passwordconfirm} onChange={this.handleChange} pattern=".{5,}" required />
                        <div className="error" id="passwordconfirmError" />
                    </div>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
