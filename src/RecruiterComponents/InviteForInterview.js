import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';
import AuthenticationService from '../AuthenticationComponents/AuthenticationService';

import Cookies from 'universal-cookie';
import { Card } from 'react-bootstrap';

class InviteForInterview extends Component {

    constructor(props) {
        super(props);

        this.state = {
            applicationProfile: this.props.profiledata,
            invited: true,
            dateAndTimeOfInterview: '',
            meetingDetails: '',
            alert:'',
        };

        this.setDate = this.setDate.bind(this);
        this.setDetails = this.setDetails.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setDate(event) {
        this.setState({ dateAndTimeOfInterview: event.target.value });
        console.log(this.state);
    }

    setDetails(event) {
        this.setState({ meetingDetails: event.target.value })
        console.log(this.state);
    }

    componentDidMount() {

    }

    onSubmit() {

        let requestBody = {

            applicationProfile: this.state.applicationProfile,
            invited: this.state.invited,
            dateAndTimeOfInterview: this.state.dateAndTimeOfInterview,
            meetingDetails: this.state.meetingDetails,

        }

        AuthenticationDataService.saveInterviewInvite(requestBody)
            .then((response) => {
                console.log(response.data);
                if (response.data.email == null) {
                    this.setState({ alert: "Invited for Interview" });
                }
                else {
                    this.setState({ error: "Valid credentials" })
                    alert("Invited successfully");
                }
                console.log(response.data)
            })
            .catch(
                err => {
                    console.log(err)
                    this.setState({ error: "Invalid credentials" })
                })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            { this.state.alert !== '' ? <div className="alert alert-secondary" role="alert">
                                This is a secondary alert—check it out!
                            </div> : ''}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Interview Date time</label>
                                <input type="datetime-local" name="dateAndTimeOfInterview" className="form-control" onChange={this.setDate}
                                    placeholder="Date and Time of interview" />
                                <small className="form-text text-muted">Date of interview schedule</small>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea type="text" name="meetingDetails" className="form-control" onChange={this.setDetails}
                                    placeholder="Details of interview" ></textarea>
                                <small className="form-text text-muted">Please share meeting link / invite here</small>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary" style={{ "width": "100%" }} onClick={ this.onSubmit }>Save Invite</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default InviteForInterview;