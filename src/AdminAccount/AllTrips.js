import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';
import AuthenticationService from '../AuthenticationComponents/AuthenticationService';



class AllTrips extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            users: [],
            office: [],
            message : null
        }
        this.openModal = this.openModal.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.getOfficeName = this.getOfficeName.bind(this);

        this.deleteTrip = this.deleteTrip.bind(this);
    }
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    deleteTrip(id)
    {
        AuthenticationDataService.deleteTrip(id).
        then( response => { 
            alert("Deleted trip")
            AuthenticationDataService.getAllTrips().
            then( response => { 
                this.setState ({ users : response.data }) 
                console.log( response.data )
                } )
            } )

            //reload table
         
    }

/*

 {
                                        this.state.users.map(
                                            trips =>
                                                <tr key={trips.tripId}>
                                                    <td>{trips.tripId}</td>
                                                    <td>{trips.agency}</td>
                                                    <td>{trips.pickupOfficeLocation}</td>
                                                    <td>{trips.returnOfficeLocation}</td>
                                                    <td>{trips.startDate}</td>
                                                    <td>{trips.endDate}</td>
                                                    <td><button className="btn btn-warning" >Delete</button></td>
                                                </tr>
                                        )
                                    }

*/

    componentDidMount() { //Called immediately when the component is mounted
        //this.refreshToDos()
        AuthenticationDataService.getAllTrips().
        then( response => { 
            this.setState ({ users : response.data }) 
            console.log( response.data )
            } )
        
        AuthenticationDataService.getAllOfficers().
        then( response => { 
            this.setState ({ office : response.data }) 
            console.log( response.data )
            } )   
    }

    getOfficeName(officeId)//Get office name
    {
       
    }

    handleChange(event)//This is a synthetic event
    {
        this.setState({ [event.target.name]: event.target.value });
    }


    onSubmit(values) {

       // const { history } = this.props;

        let requestBody = {

            agency: AuthenticationService.getLoggedInUser(),
            coordinates : this.state.latittude + "," + this.state.logitude,
            creationDateTime: "2021-07-12T16:04:37.493Z",
            emailId : this.state.email,
            officeAddress:  this.state.location,
            officeAlternatePhone : this.state.alphone,
            officeId : 0,
            officePhone : this.state.phone,
            password: "sample"
    }

        AuthenticationDataService.addOffice(requestBody)
        .then((response) => { 
                if(response.data == null)
                {
                    alert("Invalid credentials");
                    this.setState({message:"Invalid credentials"})
                } 
                else{  
                    alert("Added data successfully");
                    this.setState({message:"Valid credentials"})
                    //history.push('/Agency/Home');
                }
                console.log(response.data) })
        .catch(  
        err=>{
            console.log(err)
            this.setState({error:"Invalid credentials"})
        } )
    
    }

    render() {
        return (
            <div>
                <Header/>
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <br />
                            <h3 style={{ textAlign: "center" }}>All Trips</h3>
                            
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
                                        <th scope="col">Pick Up Office</th>
                                        <th scope="col">Return Office</th>
                                        <th scope="col">Start Date</th>
                                        <th scope="col">End Date</th>
                                        <th scope="col">Agency</th>
                                        <th scope="col">User</th>
                                        <th scope="col">Delete Trips</th>
                                    </tr>
                                </thead>    
                                <tbody>

                                    {
                                        this.state.users.map(
                                            trips =>
                                            trips.active == 1 ?
                                                <tr key={trips.tripId}>
                                                    <td>{trips.tripId}</td>     
                                                    <td>{trips.pickupOfficeLocation}</td>
                                                    <td>{trips.returnOfficeLocation}</td>
                                                    <td>{trips.startDate}</td>
                                                    <td>{trips.endDate}</td>    
                                                    <td>{trips.agency.name}</td>
                                                    <td>{trips.user.name}</td>
                                                    <td><button className="btn btn-warning" onClick={()=>this.deleteTrip(trips.tripId)}>Delete</button></td>           
                                                </tr>:
                                                ""

                                        )
                                    }
                                   
                                </tbody>
                            </table>

                        </div>
                        <div className="col-2"></div>
                    </div>
                    
                    </div>                   
                </div>                 
        );
    }
}

export default AllTrips;