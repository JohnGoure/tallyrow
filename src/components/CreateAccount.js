import React, { Component } from "react"

class CreateAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username = "",
            password = "",
            passwordconfirm = "",
            country = "",
            zipcode = 0,
        }
        this.handleChange = this.handleChange.bind(this)
        this.showSubmit= this.handleSubmit.bind(this)
    }

    render() {
        return (
            <form novalidate>
                <div className="form-group">
                    <label htmlFor="username" id="username-label">Username</label>
                    <input type="email" className="form-control" id="username" name="username" ref="username" value={this.state.username} onChange={this.handleChange} required />
                    <div className="error" id="username-error" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" id="password-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" ref="password" value={this.state.password} onChange={this.handleChange} patter=".{5,}" required />
                    <div className="error" id="password-error" />
                </div>
                <div className="form-group">
                    <label htmlFor="password-confirm" id="password-confirm-label">Confirm Password</label>
                    <input type="password" className="form-control" id="password-confirm" name="password-confirm" ref="password-cofnirm" value={this.state.passwordconfirm} onChange={this.handleChange} required />
                    <div className="error" id="password-confirm-error" />
                </div>
                <div className="form-group">
                    <label htmlFor="country" id="country-label">Country</label>
                    <input type="text" list="countries" className="form-control" id="country" name="country" ref="country" value={this.state.country} onChange={this.handleChange} required />
                    <datalist id="countries">
                        <option>Canada</option>
                        <option>China</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                    </datalist>
                    <div className="error" id="country-error" />
                </div>
                <div className="form-group">
                    <label htmlFor="zipcode" id="zipcode-label">Zipcode</label>
                    <input type="number" className="form-control" id="zipcode" name="zipcode" ref="zipcode" value={this.state.zipcode} onChange={this.handleChange} required />
                    <div className="error" id="zipcode-error" />
                </div>
            </form>
        )
    }
}

export default CreateAccount
