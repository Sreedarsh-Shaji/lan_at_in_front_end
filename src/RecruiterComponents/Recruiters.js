import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';
import AuthenticationService from '../AuthenticationComponents/AuthenticationService';

import Cookies from 'universal-cookie';


class Recruiters extends Component {

    constructor(props) {
        super(props)

        this.state = {

            modelAction: 'Add',
            vacancies: [],
            recruiters:[],
           
            name:'',password:'',email:'',phone:'',

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
        AuthenticationDataService.getRecruitersByCompany().
            then(response => {
                this.setState({ recruiters: response.data })
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

            name:this.state.name,
            password:this.state.password,
            email:this.state.email,
            phone:this.state.phone,
            company: new Cookies().get('Company'),
        }

        console.log("Payload");
        console.log( requestBody);
        console.log("Present Company");
        console.log( AuthenticationService.getPresentCompany())


        AuthenticationDataService.saveRecruitersByCompany(requestBody)
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
                            <h3 style={{ textAlign: "center" }}>All Recruiters</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-2">
                            <Button variant="primary" onClick={this.openModal}>
                                +
                            </Button>
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
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                      
                                       //
                                        this.state.recruiters
                                        .filter((recruiter) => recruiter.company.email == this.state.presentCompay.email)
                                        .map(
                                            recruiter =>                               
                                                <tr key={recruiter.uuid}>
                                                    <td>{this.state.rowCount++}</td>
                                                    <td>{recruiter.role}</td>
                                                    <td>{recruiter.name}</td>
                                                    <td>{recruiter.email}</td>
                                                    <td>{recruiter.phone}</td>
                                                    <td>{recruiter.company.email}</td>
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
                            <Modal.Title>{this.state.modelAction == "Add" ? "Add a Recruiter" : "Update a Vacancy"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" name="name" class="form-control" id="location" onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">password</label>
                                <input type="text" name="password" class="form-control" id="location" onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">email</label>
                                <input type="email" name="email" class="form-control" id="location" onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Phone Number</label>
                                <input type="text" name="phone" class="form-control" id="location" onChange={this.handleChange} />
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

export default Recruiters;