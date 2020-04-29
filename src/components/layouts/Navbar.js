import React, {Component} from "react";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav-wrapper grey darken-4">
                    <div className="container">
                    <a className="brand-logo center">Employee Directory</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;