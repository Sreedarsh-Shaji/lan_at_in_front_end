import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';
import AuthenticationService from '../AuthenticationComponents/AuthenticationService';

import Cookies from 'universal-cookie';
import Card from "react-bootstrap/Card";


class CandidateVacancyDetails extends Component {

    constructor(props) {
        super(props)

        console.log(this.props);

        this.state = {

            modelAction: 'Add',
            users: [],

            data: '',
            reportingCompany: '',
            qualification1: '',
            qualification2: '',
            qualification3: '',

            skill1:'',
            skill2:'',
            skill3:'',

            rowCount: 1,


        };

        this.onSubmit = this.onSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loadData = this.loadData.bind(this);

        this.loadData();

    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    componentDidMount() {
        this.loadData();
    }

    loadData() {

        console.log("candidate vacancy details component did mount");
        AuthenticationDataService.getVacancyDetailsById(this.props.match.params.id).
            then(response => {
                this.setState({ data: response.data });
                this.setState({ reportingCompany: response.data.reportingCompany });
                this.setState({ qualification1: response.data.qualification[0] });
                this.setState({ qualification2: response.data.qualification[1] });
                this.setState({ qualification3: response.data.qualification[2] });
                this.setState({ skill1:response.data.skill[0] });
                this.setState({ skill2:response.data.skill[1] });
                this.setState({ skill3:response.data.skill[2] });
                console.log(response.data);

            })

    }

    onSubmit(values) {

        let js = new Cookies().get('Jobseeker');
        console.log(new Cookies().get('Jobseeker'));

        const { history } = this.props;

        let requestBody = {

            profile:this.state.data,
            jobseeker: js,
        }


        AuthenticationDataService.candidateApplyForVacancy(requestBody)
            .then((response) => {
                if (response.data == null) {
                    alert("Invalid details");
                    this.setState({ message: "Invalid details" })
                }
                else {
                    alert(response.data);
                    this.setState({ message: "Valid credentials" })
                 history.push('/candidate/vacancies');
                }
                console.log(response.data)
            })
            .catch(
                err => {
                    console.log(err)
                    this.setState({ error: "Invalid credentials" })
                })
    }
    handleChange(event)//This is a synthetic event
    {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div>
                <Header />

                <div className="container">

                <div className="row">
                    <div className="col-md-6">

                        {this.state.message && <div className="alert alert-default" role="alert">
                            {this.state.message}
                        </div>}

                    </div>
                </div>

                    <div className="row">
                        <div className="col">
                            <br />
                            <h3 style={{ textAlign: "center" }}>All Reported Vacancies</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-2">
                        </div>
                    </div>



                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-md-12'>
                                <Card style={{ width: "68rem" }}>
                                    <Card.Body>
                                        <Card.Title style={{ color: "blue" }}>Job Description</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            Title
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {this.state.data.role}
                                        </Card.Text>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            Detailed Description
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {this.state.data.description}
                                        </Card.Text>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            Location
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {this.state.data.locationOfEmployment}
                                        </Card.Text>

                                        <Card.Subtitle className="mb-2 text-muted">
                                            Mode Of Employeement
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {this.state.data.modeOfEmployment == null ? "not specified" : this.state.data.modeOfEmployment}
                                        </Card.Text>

                                        <Card.Subtitle className="mb-2 text-muted">
                                            Payscale
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {this.state.data.minPay} to {this.state.data.maxPay}
                                        </Card.Text>
                                        {/* <Card.Link href="#"> For Students</Card.Link> */}
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-4'>
                                <Card style={{ width: "22rem" }}>
                                    <Card.Body>
                                        <Card.Title style={{ color: "blue" }}>Company Details</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">

                                        </Card.Subtitle>
                                        <Card.Text>
                                            {(this.state.reportingCompany.name)}
                                        </Card.Text>
                                        <hr /><Card.Subtitle className="mb-2 text-muted">
                                            Company Mail
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {(this.state.reportingCompany.email)}
                                        </Card.Text>
                                        <hr /><Card.Subtitle className="mb-2 text-muted">
                                            Company Phone
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {(this.state.reportingCompany.phone)}
                                        </Card.Text>
                                        {/* <Card.Link href="#"> For Students</Card.Link> */}
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-md-4'>
                                <Card style={{ width: "22rem" }}>
                                    <Card.Body>
                                        <Card.Title style={{ color: "blue" }}>Qualification</Card.Title>
                                        <Card.Text>
                                            
                                        {
                                                this.state.qualification1.course !== '' ? <>
                                                
                                                <strong>Course</strong> : {this.state.qualification1.course}<br/>
                                                <strong>Starting Year</strong> : {this.state.qualification1.startingYear}<br/>
                                                <strong>Ending Year</strong> : {this.state.qualification1.endingYear}<br/>
                                                
                                                </>:''
                                            }
                                            
                                            <hr/>
                                            {
                                                this.state.qualification2.course !== '' ? <>
                                                
                                                <strong>Course</strong> : {this.state.qualification2.course}<br/>
                                                <strong>Starting Year</strong> : {this.state.qualification2.startingYear}<br/>
                                                <strong>Ending Year</strong> : {this.state.qualification2.endingYear}<br/>
                                                <hr/>
                                                </>:''
                                            }
                                            
                                            
                                            {
                                                this.state.qualification3.course !== '' ? <>
                                                
                                                <strong>Course</strong> : {this.state.qualification3.course}<br/>
                                                <strong>Starting Year</strong> : {this.state.qualification3.startingYear}<br/>
                                                <strong>Ending Year</strong> : {this.state.qualification3.endingYear}<br/>
                                                
                                            <hr/>
                                                </>:''
                                            }
                                            
                                        

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-md-4'>
                                <Card style={{ width: "22rem" }}>
                                    <Card.Body>
                                        <Card.Title style={{ color: "blue" }}>Skill set</Card.Title>
                                        <Card.Text>
                                        {
                                                this.state.skill1.skillName !== '' ? <>
                                                
                                                <strong>Skill</strong> : {this.state.skill1.skillName}<br/>
                                                <strong>Skill Levelr</strong> : {this.state.skill1.skillType}<br/>
                                                <strong>Years of Exp</strong> : {this.state.skill1.yearsOfExperience}<br/>
                                                
                                                </>:''
                                            }
                                            
                                            <hr/>
                                            {
                                                this.state.skill2.course !== '' ? <>
                                                
                                                <strong>Skill</strong> : {this.state.skill2.skillName}<br/>
                                                <strong>Skill Level</strong> : {this.state.skill2.skillType}<br/>
                                                <strong>Years of Exp</strong> : {this.state.skill2.yearsOfExperience}<br/>
                                                <hr/>
                                                </>:''
                                            }
                                            
                                            
                                            {
                                                this.state.skill3.course !== '' ? <>
                                                
                                                <strong>Skill</strong> : {this.state.skill3.skillName}<br/>
                                                <strong>Skill Level</strong> : {this.state.skill3.skillType}<br/>
                                                <strong>Years of Exp</strong> : {this.state.skill3.yearsOfExperience}<br/>
                                                
                                            <hr/>
                                                </>:''
                                            }
                                            
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        
                        <div className='row'>
                            <div className='col-md-12'>
                                <hr/>
                                <button type="button" style={{ "width":"100%"}} className="btn btn-primary" onClick={this.onSubmit}>Apply for this position</button>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-12'>
                                <hr></hr>
                            </div>
                        </div>

                    </div>




                    <Modal show={this.state.isOpen}>
                        <Modal.Header closeButton onClick={this.closeModal}>
                            <Modal.Title>{this.state.modelAction == "Add" ? "Add a Vacancy" : "Update a Vacancy"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                           

                        </Modal.Body>
                        {

                            /*<Modal.Footer>
                                <Button variant="secondary" onClick={this.closeModal} >Close</Button>
                            </Modal.Footer>*/
                        }
                    </Modal>
                </div>

            </div>
        );
    }
}

export default CandidateVacancyDetails;