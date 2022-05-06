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
        this.setState({  rowCount:1 });
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

        if(this.state.name.length <=0 || this.state.password.length <= 0 || this.state.email <= 0 || this.state.phone<= 0){
            alert(" All fields are mandatory ");
        }
        else if(! /^[a-zA-Z0-9@._]{5,50}/.test(this.state.password)){
            alert(" Password can be alpha neumeric and may contain @ . and _ . Should be between 5 and 50 characters long");
        }
        else if(! /^[a-zA-Z.]{4,10}/.test(this.state.name)){
            alert("Name should contain uppercase and lowercase characters and . operator \n Name should contain minimum 4 characters and maximum 20 characters")
        }
        else if( this.state.email.indexOf('@') < 0  || this.state.email.indexOf('.') < 0 )
        {
           alert("email should contain @ and .");
        }
        else if( this.state.email.lastIndexOf('.') - this.state.email.indexOf('@') < 3 )
        {
           alert("The domain associated with mail should be longer");
        }
        else if(this.state.email.substring(this.state.email.indexOf('.')+1).length <2){
            alert("extension of mail id should be greater than 2");
        }
        else if(this.state.phone.length != 10){
            alert("Accepts only 10 number mobile number");
        }
        else if(! /^[0-9]{10}/.test(this.state.phone)){
            alert("Accepts only 10 number mobile number");
        }
        else if(this.state.phone.charAt(0) != '9' || 
                this.state.phone.charAt(0) != '8' || 
                this.state.phone.charAt(0) != '7' ||
                this.state.phone.charAt(0) != '6'){
            alert("Mobile number must start with numbers 6 to 9");
        }
        else{
        AuthenticationDataService.saveRecruitersByCompany(requestBody)
            .then((response) => {
                if (response.data == "saved") {
                    alert(response.data);
                }
                else {
                    alert(response.data);
                    this.loadData();
                }
                console.log(response.data)
            })
            .catch(
                err => {
                    console.log(err)
                    this.setState({ error: "Invalid credentials" })
                })
        }
    }
    handleChange(event)//This is a synthetic event
    {
        this.setState({  rowCount:1 });
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
                                        <th scope="col">Company Mail</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                      
                                       //
                                        this.state.recruiters
                                        .filter((recruiter) => recruiter.company.email == this.state.presentCompay.email)
                                        .map(
                                            recruiter =>                               
                                                <tr key={recruiter.uid}>
                                                    <td></td>
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
                                <input type="number" name="phone" class="form-control" id="location" onChange={this.handleChange} />
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