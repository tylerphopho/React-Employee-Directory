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
                <ul class="collapsible">
                    <li>
                        <div class="collapsible-header"><h5>Add Employee</h5></div>
                        <div class="collapsible-body">
                            <span>
                                <div class="row">
                                <form class="col s12">
                                    
                                    <div class="input-field col s6">
                                    <input id="first_name" type="text" class="validate"/>
                                    <label for="first_name" >First Name</label>
                                    </div>
                                    
                                    <div class="input-field col s6">
                                    <input id="last_name" type="text" class="validate"/>
                                    <label for="last_name" >Last Name</label>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input id="email" type="email" class="validate"/>
                                            <label for="email">Email</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input id="postion" type="text" class="validate"/>
                                            <label for="position">Employee Positon</label>
                                        </div>
                                    </div>
                                </form>
                                </div>
                                <button class="btn waves-effect waves-light" type="submit">Add</button>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

