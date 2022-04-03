import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';
import AuthenticationService from '../AuthenticationComponents/AuthenticationService';

import Cookies from 'universal-cookie';
import { Card } from 'react-bootstrap';

class ApplicantProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: '',
            presentCompay: new Cookies().get('Company'),
        };

        this.loadData = this.loadData.bind(this);

    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {

        console.log("Company get applicant full detail component did mount");
        AuthenticationDataService.getApplicantByMailId(this.props.mail).
            then(response => {
                this.setState({ user: response.data })
                console.log(response.data)
            })

    }
    render() {
        return (
            <>
                <Card>
                    <Card.Header>Candidate detail</Card.Header>
                    <Card.Body>
                        <table>
                            <tr>
                                <th>Name</th>
                                <td>{ this.state.user.name }</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{ this.state.user.email }</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>{ this.state.user.phone }</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td>{ this.state.user.role }</td>
                            </tr>
                        </table>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default ApplicantProfile;