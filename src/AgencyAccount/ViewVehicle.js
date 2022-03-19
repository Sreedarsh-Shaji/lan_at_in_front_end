import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';


class ViewVehicle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            carname : '',
            chnumber : '',
            ennumber : '',
            fueltype : '',
            hrrate : '',
            regno : '',
            kms : '',
            office : '',
            users : [],
            offices: []
        };

        this.onSubmit =this.onSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    componentDidMount() { 
        console.log("Agency component did mount");
        AuthenticationDataService.getAllVehicles().
        then( response => { 
            this.setState ({ users : response.data }) 
            console.log( response.data )
            } )
     fetch("http://localhost:8085/api/v1/agency/office")
    .then((response) => {
      return response.json();
    })
    .then(data => {
      let officeFromApi = data.map(office => {
        return {value: office, display: office}
      });
      this.setState({
        teams: [{value: '', display: '(Select office'}].concat(officeFromApi)
      });
    }).catch(error => {
      console.log(error);
    });
    }


    onSubmit(values) {

        const { history } = this.props;

      
        AuthenticationDataService.addVehicle(this.state.carname,this.state.chnumber,this.state.ennumber,this.state.fueltype,this.state.hrrate,this.state.regno,this.state.kms,this.state.office)
        .then((response) => { 
                if(response.data == null)
                {
                    alert("Invalid credentials");
                    this.setState({message:"Invalid credentials"})
                } 
                else{  
                    alert("Vehicle deleted successfully");
                    this.setState({message:"Valid credentials"})
                    history.push('/Agency/vehicles');
                }
                console.log(response.data) })
        .catch(  
        err=>{
            console.log(err)
            this.setState({error:"Invalid credentials"})
        } )  
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
                            <h3 style={{ textAlign: "center" }}>All Vehicle</h3>                           
                        </div>
                    </div>
                    <div className="row">  
                    <div className="col-1"></div>
                        <div className="col-2">
                            <Button variant="primary"  onClick={this.openModal}>
                               ADD Vechicle 
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
                                        <th scope="col">Car Name</th>
                                        <th scope="col">ChassisNumber</th>
                                        <th scope="col">Kilometer</th>
                                        <th scope="col">Fuel Type</th>
                                        <th scope="col">Hourly Rate</th>
                                        <th scope="col">Register Number</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                        this.state.users.map(
                                            vehicle =>
                                                <tr key={vehicle.vehicleId}>
                                                    <td>{vehicle.vehicleId}</td>
                                                    <td>{vehicle.manufacturer}</td>
                                                    <td>{vehicle.engineNumber}</td>
                                                    <td>{vehicle.kmsOperated}</td>
                                                    <td>{vehicle.fuelType}</td>
                                                    <td>{vehicle.hourlyRate}</td>
                                                    <td>{vehicle.registerNumber}</td>
                                                  
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
                            <Modal.Title>{this.state.modelAction == "Add" ? "Add an Vehicle" : "Update the Vehicle"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Car Name</label>
                                    <input type="text" name="carname" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Chassis Number</label>
                                    <input type="number" name="chnumber"  class="form-control" id="location"  onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Engine Number</label>
                                    <input type="text" name="ennumber" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Fuel Type</label>
                                    <input type="text" name="fueltype" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Hourly Rate</label>
                                    <input type="text" name="hrrate" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Kilometer Operated</label>
                                    <input type="text" name="kms" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Register Number</label>
                                    <input type="text" name="regno" class="form-control" id="location" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Office</label>
                                    <select type="text" name="office" class="form-control" id="location" onChange={this.handleChange}>
                                    {this.state.users.map(user => <option key={user.value} value={user.value}>{user.display}</option>)}
                                    </select>    
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

export default ViewVehicle;