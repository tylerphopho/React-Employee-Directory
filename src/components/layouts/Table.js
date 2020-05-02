import React, {Component} from "react";
import "materialize-css/dist/css/materialize.min.css";

export default class Table extends Component {
    render() {
        return (
            <div className="container">
                <table className="responsive-table centered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
};