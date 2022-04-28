import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';
import AuthenticationService from '../AuthenticationComponents/AuthenticationService';

import Cookies from 'universal-cookie';


class AdminViewVacancies extends Component {

    constructor(props) {
        super(props)

        this.state = {

            modelAction: 'Add',
            vacancies: [],

            role: '',
            description: '',
            course1: '',
            startingYear1: '',
            endingYear1: '',
            course2: '',
            startingYear2: '',
            endingYear2: '',
            course3: '',
            startingYear3: '',
            endingYear3: '',
            skill1: '',
            type1: '',
            experience1: '',
            skill2: '',
            type2: '',
            experience2: '',
            skill3: '',
            type3: '',
            experience3: '',
            employmentLocation: '',
            employmentMode: '',
            shouldPossessPassport: '',
            willingToRelocate: '',
            linkedInProfile: '',

            rowCount:1,
            presentCompay: new Cookies().get('Company'),
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loadData =  this.loadData.bind(this);

    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    componentDidMount() {
        this.loadData();
    }

    loadData() {

        console.log("Company home component did mount");
        AuthenticationDataService.getCompanyVacancies().
            then(response => {
                this.setState({ vacancies: response.data })
                console.log(response.data)
            })
        // fetch("http://localhost:8012/hiring/get-all-vacancies")
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then(data => {
        //         let officeFromApi = data.map(office => {
        //             return { value: office, display: office }
        //         });
        //         this.setState({
        //             teams: [{ value: '', display: '(Select office' }].concat(officeFromApi)
        //         });
        //     }).catch(error => {
        //         console.log(error);
        //     });

    }

    onSubmit(values) {

        const { history } = this.props;

        let requestBody = {

            role: this.state.role,
            description: this.state.description,
            linkedInProfile: this.state.linkedInProfile,
            qualification: [
                { course: this.state.course1, startingYear: this.state.startingYear1, endingYear: this.state.endingYear1 },
                { course: this.state.course2, startingYear: this.state.startingYear2, endingYear: this.state.endingYear2 },
                { course: this.state.course3, startingYear: this.state.startingYear3, endingYear: this.state.endingYear3 },
            ],
            skill: [
                { skillName: this.state.skill1, skillType: this.state.type1, yearsOfExperience: this.state.experience1 },
                { skillName: this.state.skill2, skillType: this.state.type2, yearsOfExperience: this.state.experience2 },
                { skillName: this.state.skill3, skillType: this.state.type3, yearsOfExperience: this.state.experience3 },
            ],
            locationOfEmployment: this.state.employmentLocation,
            modeOfEmployment: this.state.modeOfEmployment,
            shouldPossesPassport: this.state.shouldPossessPassport,
            willingToRelocate: this.state.willingToRelocate,
            reportingCompany: new Cookies().get('Company'),
        }

        console.log(requestBody);
        console.log(AuthenticationService.getPresentCompany())


        AuthenticationDataService.companyRegisterVacancy(requestBody)
            .then((response) => {
                if (response.data == null) {
                    alert("Invalid credentials");
                    this.setState({ message: "Invalid credentials" })
                }
                else {
                    alert("Added vacancy successfully successfully");
                    this.setState({ message: "Valid credentials" })
                    history.push('/Company/Vacancies');
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

                    <br />

                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-11">

                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Mode of Employement</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                      
                                       //filter((vacancy) => vacancy.reportingCompany.email == this.state.reportingCompany.email)
                                        this.state.vacancies.map(
                                            vacancy =>                               
                                                <tr key={vacancy.uuid}>
                                                    <td>{this.state.rowCount++}</td>
                                                    <td>{vacancy.role}</td>
                                                    <td>{vacancy.description}</td>
                                                    <td>{vacancy.locationOfEmployment}</td>
                                                    <td>{vacancy.modeOfEmployment}</td>
                                                </tr>
                                                
                                        )
                                    }

                                </tbody>
                            </table>

                        </div>
                        <div className="col-2"></div>
                    </div>
                    <Modal show={this.state.isOpen}>
                        <Modal.Header closeButton onClick={this.closeModal}>
                            <Modal.Title>{this.state.modelAction == "Add" ? "Add a Vacancy" : "Update a Vacancy"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Role / Position</label>
                                <input type="text" name="role" class="form-control" id="location" onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Job Description</label>
                                <textarea name="description" class="form-control" id="location" onChange={this.handleChange}></textarea>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Education</label>
                                <small className="form-text text-muted">Accepts 3 qualifications</small>
                                <table>
                                    <tr>
                                        <td><input type="text" name="course1" placeholder='Course' class="form-control" id="location" onChange={this.handleChange} /></td>
                                        <td><input type="number" name="startingYear1" placeholder='Start Year' class="form-control" id="location" onChange={this.handleChange} /></td>
                                        <td><input type="number" name="endingYear1" placeholder='End Year' class="form-control" id="location" onChange={this.handleChange} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="course2" placeholder='Course' class="form-control" id="location" onChange={this.handleChange} /></td>
                                        <td><input type="number" name="startingYear2" placeholder='Start Year' class="form-control" id="location" onChange={this.handleChange} /></td>
                                        <td><input type="number" name="endingYear2" placeholder='End Year' class="form-control" id="location" onChange={this.handleChange} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="course3" placeholder='Course' class="form-control" id="location" onChange={this.handleChange} /></td>
                                        <td><input type="number" name="startingYear3" placeholder='Start Year' class="form-control" id="location" onChange={this.handleChange} /></td>
                                        <td><input type="number" name="endingYear3" placeholder='End Year' class="form-control" id="location" onChange={this.handleChange} /></td>
                                    </tr>
                                </table>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Skill set</label>
                                <small className="form-text text-muted">Accepts 3 Skills</small>
                                <table>
                                    <tr>
                                        <td><input type="text" name="skill1" placeholder='Name' class="form-control" id="location" onChange={this.handleChange} /></td>
                                        <td><input type="text" name="type1" placeholder='Type' class="form-control" id="location" onChange={this.handleChange} /></td>
                                        <td><input type="number" name="experience1" placeholder='Experience' class="form-control" id="location" onChange={this.handleChange} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="skill2" placeholder='Name' class="form-control" id="location" onChange={this.handleChange} /></td>
                                        <td><input type="text" name="type2" placeholder='Type' class="form-control" id="location" onChange={this.handleChange} /></td>
                                        <td><input type="number" name="experience2" placeholder='Experience' class="form-control" id="location" onChange={this.handleChange} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="skill3" placeholder='Name' class="form-control" id="location" onChange={this.handleChange} /></td>
                                        <td><input type="text" name="type3" placeholder='Type' class="form-control" id="location" onChange={this.handleChange} /></td>
                                        <td><input type="number" name="experience3" placeholder='Experience' class="form-control" id="location" onChange={this.handleChange} /></td>
                                    </tr>
                                </table>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Employeement Location</label>
                                <input type="text" name="employmentLocation" class="form-control" id="location" onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Employment Mode</label>
                                <input type="text" name="employmentMode" class="form-control" id="location" onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Should Possess Passport</label>
                                <input type="text" name="hrrate" class="form-control" id="location" onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Should Relocate</label>
                                <input type="text" name="willingToRelocate" class="form-control" id="location" onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Company Liked in Profile</label>
                                <input type="url" name="linkedInProfile" class="form-control" id="location" onChange={this.handleChange} />
                            </div>
                            {/* <div class="form-group">
                                    <label for="exampleInputEmail1">Office</label>
                                    <select type="text" name="office" class="form-control" id="location" onChange={this.handleChange}>
                                    {this.state.users.map(user => <option key={user.value} value={user.value}>{user.display}</option>)}
                                    </select>    
                                </div> */}
                            <button type="submit" onClick={this.onSubmit} class="btn btn-primary">Submit</button>

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

export default AdminViewVacancies;