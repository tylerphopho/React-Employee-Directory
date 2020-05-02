import React, {Component} from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

export default class Add extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, {});
          });
    }
    render() {
        return(
            <div className="container">
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><h5>Add Employee</h5></div>
                        <div className="collapsible-body">
                            <span>
                                <div className="row">
                                <form className="col s12">
                                    
                                    <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate"/>
                                    <label for="first_name" >First Name</label>
                                    </div>
                                    
                                    <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate"/>
                                    <label for="last_name" >Last Name</label>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input id="email" type="email" className="validate"/>
                                            <label for="email">Email</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="postion" type="text" className="validate"/>
                                            <label for="position">Employee Positon</label>
                                        </div>
                                    </div>
                                </form>
                                </div>
                                <button className="btn waves-effect waves-light" type="submit">Add</button>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

