import React, { Component } from 'react';

import AdminLogin from './AdminLogin';
import CandidateLogin from './CandidateLogin';
import CompanyLogin from './CompanyLogin';
import RecruiterLogin from './RecruiterLogin';
import FooterComponent from './FooterComponent';
import Header from '../LandingPage/Header';
import StudentLogin from './StudentLogin';

class LoginComponent extends Component {

    constructor() {
        super();
        this.state = {
            usertype: "Admin"
        }

        this.userSelect = this.userSelect.bind(this);
    }


    render() {
        return (
            <>
                <Header/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h1 style={{ textAlign: "center" }} className=" p-3 mb-2 bg-primary text-white">Login  {this.state.usertype}</h1>
                            <br />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <hr />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div></div>
                    <div className="row">
                        <div className="col-md-7">
                            <img src="https://media.istockphoto.com/vectors/man-working-on-the-internet-on-a-light-background-vector-id1025033348?k=20&m=1025033348&s=612x612&w=0&h=noBXUFqaUhWOCeKg1ekFZ9qHhKvwmFSt0ctITPNNy1w=" height="450px" alt="Kia car" />
                        </div>
                        <div className="col-md-5">

                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-primary active">
                                    <input type="radio" name="options" id="option1" style={{ width:"100%" }} 
                                    onClick={() => this.userSelect("Admin")}/> 
                                    Admin
                                </label>
                               
                                <label className="btn btn-primary" style={{ width:"110px" }}>
                                    <input type="radio" name="options" id="option3" style={{ width:"100%" }} 
                                    onClick={() => this.userSelect("Candidate")}/> 
                                    Job Seeker
                                </label>
                                
                                <label className="btn btn-primary" style={{ width:"110px" }}>
                                    <input type="radio" name="options" id="option3" style={{ width:"100%" }} 
                                    onClick={() => this.userSelect("Student")}/> 
                                    Student
                                </label>
                            </div>
                            <hr/>
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-primary" style={{ width:"110px" }}>
                                    <input type="radio" name="options" id="option2"
                                    onClick={() => this.userSelect("Company")}/> 
                                    Company
                                </label>
                                
                                <label className="btn btn-primary" style={{ width:"110px" }}>
                                    <input type="radio" name="options" id="option3" style={{ width:"100%" }} 
                                    onClick={() => this.userSelect("Recruiter")}/> 
                                    Recruiter
                                </label>
                            </div>

                            <br />

                            <br />

                            {this.state.usertype === "Admin" && <AdminLogin />}
                            {this.state.usertype === "Company" && <CompanyLogin />}
                            {this.state.usertype === "Candidate" && <CandidateLogin />}
                            {this.state.usertype === "Recruiter" && <RecruiterLogin /> }
                            {this.state.usertype === "Student" && <StudentLogin /> }

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <hr />
                        </div>
                    </div>
                </div>

                <FooterComponent />

            </>
        );
    }


    userSelect(user)
    {
        this.setState(prevState => ({
            usertype: user
          }));
    }

}

export default LoginComponent;