import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export class MenuItem extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            navlink: this.props.navlink,
            title: this.props.title,
            col: this.props.col,
            row: this.props.row
        }
        this.grid = this.state.col + " " + this.state.row + " menu-item"
    }

    render() {
        return(
            <div className="navigation row1 col3">
                <NavLink to={"/" + this.state.navlink} activeClassName="selected" className={this.grid}>
                {this.state.title}
                </NavLink>
            </div>
        )
    }
}