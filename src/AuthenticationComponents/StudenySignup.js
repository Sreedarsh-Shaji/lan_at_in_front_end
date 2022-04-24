import React, { Component } from 'react';
import AuthenticationDataService from "./AuthenticationDataService"
import AuthenticationService from './AuthenticationService';
import { withRouter } from 'react-router';

class StudenySignup extends Component {

    constructor(props) {
        super(props)

        this.state = {

            uid: '',
            name: '',
            password: '',
            email: '',
            phone: '',
            role: "COMPANY"

        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit(values) {

        const { history } = this.props;

        let requestBody = {
            uid: this.state.uid,
            name: this.state.name,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
            role: "COMPANY"
        }

        AuthenticationDataService.companySignup(requestBody)
            .then((response) => {
                if (response.data == null) {
                    alert("Invalid credentials");
                    this.setState({ message: "Invalid credentials" })
                }
                else {
                    alert(response.data);
                    this.setState({ message: "Valid credentials" })
                    //history.push('/Agency/Home');
                }
                console.log(response.data)
            })
            .catch(
                err => {
                    console.log(err)
                    this.setState({ error: "Invalid credentials" })
                })
    }


    componentDidMount() {
        console.log("Company signup component did mount");
    }

    handleChange(event)//This is a synthetic event
    {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="container">

<div className="row">
                    <div className="col-md-6">

                        {this.state.error && <div className="alert alert-danger" role="alert">
                            {this.state.error}
                        </div>}

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <hr/>
                        <div className="alert alert-info" role="alert">
                            This is a Limited account, Please use Jobseeker profile for full functionality.
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div>
                        <div className="form-group">
                            <label>User name</label>
                            <input type="email" name="name" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Company Name" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Name" />
                        </div>


                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="number" name="phone" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Phone" />
                        </div>
                        <button type="submit" className="btn btn-success" style={{ width: "100%" }}
                            onClick={this.onSubmit}
                        >Submit</button>

                    </div>
                </div>
            </div>
        );
    }
}



export default StudenySignup;