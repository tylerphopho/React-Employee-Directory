import React, {Component} from "react";
import EmployeeList from "./EmployeeList";
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
                        <tbody>
                            <EmployeeList />
                        </tbody>
                    </thead>
                </table>
            </div>
        );
    }
};