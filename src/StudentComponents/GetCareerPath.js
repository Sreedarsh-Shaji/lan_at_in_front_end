import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';
import AuthenticationService from '../AuthenticationComponents/AuthenticationService';

import Cookies from 'universal-cookie';
import InviteForInterview from './InviteForInterview';


class GetCareerPath extends Component {

    constructor(props) {
        super(props)

        this.state = {

            modelAction: 'Add',
            applicants: [],

            viewProfile : false,
            updateInvite:false,

            plustwo : [],
            graduation : [],
            pg : [],
            career : [],

            ptselected : 'select',
            gselected : 'select',
            pgselected : 'select',
            careerselected : 'select',
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loadData = this.loadData.bind(this);
        this.loadGraduation = this.loadGraduation.bind(this);
        this.loadPg = this.loadPg.bind(this);
        this.loadRoute = this.loadRoute.bind(this);
        this.saveCareerPath = this.saveCareerPath.bind(this);
    }

    openModal = () => { this.setState({ isOpen: true }) };
    closeModal = () => { this.setState({ isOpen: false }) };

    componentDidMount() {   this.loadData();    }

    
    loadData() {

        console.log("Plustwo List mounted");
        AuthenticationDataService.getPlusTwo().
            then(response => {
                this.setState({ plustwo: response.data })
                console.log(response.data)
            })

    }

    onSubmit(values) {


        console.log(new Cookies().get('Student'));

        var requestBody ={
            plusTwo: this.state.ptselected,
            graduation: this.state.gselected,
            postGrad: this.state.pgselected,
            role: this.state.careerselected,
            studentEmail: new Cookies().get('Student').username
        };

        AuthenticationDataService.studentCareerPath(requestBody)
            .then((response) => {
                if (response.data == null) {
                    alert("Save failed");
                }
                else {
                    alert("All career saved successfully");
                }
                console.log(response.data)
            })
    }

    handleChange(event)//This is a synthetic event
    {
        this.setState({ [event.target.name]: event.target.value });
    }

    loadGraduation(event) {
        alert(`Accessing all graduation against ${event.target.value}`);
        this.setState({ ptselected: event.target.value });
        AuthenticationDataService.getGraduation(event.target.value).
            then(response => {
                this.setState({ graduation: response.data });
            })

    }

    
    loadPg(event) {
        alert(`Accessing all post graduation against ${event.target.value}`);
        this.setState({ gselected: event.target.value });
        AuthenticationDataService.getPostGraduation(this.state.ptselected,event.target.value).
            then(response => {
                this.setState({ pg: response.data });
            })

    }

    loadRoute(event) {
        alert(`Accessing all roles against ${event.target.value}`);
        this.setState({ pgselected: event.target.value });
        AuthenticationDataService.getRole(this.state.ptselected,this.state.gselected,event.target.value).
            then(response => {
                this.setState({ career: response.data });
            })

    }
    
    saveCareerPath(event) {
        alert(`career path selected : ${event.target.value}`);
        this.setState({ careerselected: event.target.value });
    }

    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <br />
                            <h3 style={{ textAlign: "center" }}>Career Path</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-2">

                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-11">

                            <form>

                            <div className="form-group">
                                    <label for="exampleFormControlSelect1">Plus Two</label>
                                    <select class="form-control" name='ptselected' onChange={this.loadGraduation} value={this.state.ptselected}>
                                        <option key='select'>select</option>
                                        {
                                            this.state.plustwo.map(
                                                pt => <option key={pt}>{pt}</option>
                                            )
                                        }
                                    </select>
                            </div>
                                
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Graduation</label>
                                    <select class="form-control" name='graduationvalue' onChange={this.loadPg} value={this.state.gselected}>
                                    <option key='select'>select</option>
                                        {
                                            this.state.graduation.map(gd => <option key={gd}>{gd}</option>)
                                        }
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Post Graduation</label>
                                    <select class="form-control" name='plustwovalue' onChange={this.loadRoute} value={this.state.pgselected}>
                                    <option key='select'>select</option>
                                        {
                                            this.state.pg.map(
                                                pt => <option key={pt}>{pt}</option>
                                            )
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Post Graduation</label>
                                    <select class="form-control" name='plustwovalue' onChange={this.saveCareerPath}>
                                    <option key='select'>select</option>
                                        {
                                            this.state.career.map(
                                                pt => <option key={pt}>{pt}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <hr/>
                                <div className="form-group">
                                    <button type="button" class="btn btn-success" style={{ width : '100%' }} onClick={this.onSubmit}>Success</button>
                                </div>

                            </form>

                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default GetCareerPath;