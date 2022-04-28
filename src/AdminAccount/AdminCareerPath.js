import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';
import AuthenticationService from '../AuthenticationComponents/AuthenticationService';

import Cookies from 'universal-cookie';


class AdminCareerPath extends Component {

    constructor(props) {
        super(props)

        this.state = {

            modelAction: 'Add',
            vacancies: [],

            plusTwo: '',
            graduation: '',
            postGrad: '',
            role: '',

            rowCount:1,
            presentCompay: new Cookies().get('Company'),
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loadData =  this.loadData.bind(this);

    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ rowCount:1 });
        this.setState({ isOpen: false });
        };

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.setState({ rowCount:1 });
        AuthenticationDataService.getCareerPath().
            then(response => {                
                this.setState({ vacancies: response.data });
                console.log(response.data);
            })

    }

    onSubmit(values) {
        const { history } = this.props;
        let requestBody = {

            plusTwo: this.state.plusTwo,
            graduation: this.state.graduation,
            postGrad: this.state.postGrad,
            role: this.state.role,
        }

        console.log(requestBody);
        console.log(AuthenticationService.getPresentCompany())


        AuthenticationDataService.saveCareerPath(requestBody)
            .then((response) => {


                if (response.data == null) {
                    alert("Invalid credentials");
                    this.setState({ message: "Invalid credentials" })
                }
                else {
                    
                    alert("Added career path successfully");
                    this.closeModal();
                    this.loadData();
                    this.props.history.push('/Admin/Careers')

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
        this.setState({ rowCount:1 });
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
                        <div className="col-2">
                            <Button variant="primary" onClick={this.openModal}>
                                +
                            </Button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-11">

                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Plust Two</th>
                                        <th scope="col">Graduation/Other course</th>
                                        <th scope="col">Post Graduation</th>
                                        <th scope="col">Career</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                       //filter((vacancy) => vacancy.reportingCompany.email == this.state.reportingCompany.email)
                                        this.state.vacancies.map(
                                            vacancy =>                               
                                                <tr key={vacancy.uuid}>
                                                    <td>{this.state.rowCount++}</td>
                                                    <td>{vacancy.plusTwo}</td>
                                                    <td>{vacancy.graduation}</td>
                                                    <td>{vacancy.postGrad}</td>
                                                    <td>{vacancy.role}</td>
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
                            <Modal.Title>{this.state.modelAction == "Add" ? "Add a Career path" : "Update a Career Path"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <div class="form-group">
                                <label for="exampleInputEmail1">+2</label>
                                <input type="text" name="plusTwo" class="form-control" id="location" onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Graduation</label>
                                <input type="text" name="graduation" class="form-control" id="location" onChange={this.handleChange}/>
                            </div>
                            
                            <div class="form-group">
                                <label for="exampleInputEmail1">Post Graduation</label>
                                <input type="text" name="postGrad" class="form-control" id="location" onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Career</label>
                                <input type="text" name="role" class="form-control" id="location" onChange={this.handleChange} />
                            </div>
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

export default AdminCareerPath;