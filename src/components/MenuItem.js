import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export class MenuItem extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            navlink: this.props.navlink,
            title: this.props.title
        }
    }
    render() {
        return(
            <NavLink to={"/" + this.state.navlink} activeClassName="selected" 
            className="menu-item">
            {this.state.title}
            </NavLink>
        )
    }
}