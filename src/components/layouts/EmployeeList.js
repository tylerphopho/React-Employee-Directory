import React, {Component} from "react";
import axios from "axios";

const Employee = props => (
    <tr>
        <td>{props.employees.employees.firstName}</td>
        <td>{props.employees.employees.lastName}</td>
        <td>{props.employees.employees.email}</td>
        <td>{props.employees.employees.position}</td>
        <td><a href="" onClick={() => {props.removeEmployee(props.employees._id)}}>Delete</a></td>
    </tr>
)

export default class EmployeeListe extends Component {
    constructor(){
        super();
        this.state = {
            employees: [],
            search: "",
            select: []
        }
    }

updateSearch(event){
    event.preventDefault();
    this.setState({search: event.target.value})
    console.log(event.target.value)
}
    componentDidMount(){
        axios.get("https://tyler.phopho-employee-directory.herokuapp.com/api/employees/")
        .then(res => {
            this.setState({employees: res.data})
        }).catch((error) => {
            console.log(error)
        })
    }
    removeEmployee(id){
        axios.delete("/api/employees/" + id)
        .then(res => console.log(res.data));
        this.setState({
            employees: this.state.employees.filter((_id) => id !== id)
        })
    }

    employeeList(){
        let filteredEmployee = this.state.employees.filter(
            (employee) => {
                return employee.employee.firstName.toLowerCase().indexOf(this.state.search.toLowerCase() != -1)
                || employee.employee.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                || employee.employee.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1
                || employee.employee.position.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
            }
        )
        return filteredEmployee.map(employee => {
            return <Employee employees={employee} removeEmployee={this.removeEmployee} key={Employee._id}/>;
        })
    }
    render(){
        return (
            
        )
    }
}


