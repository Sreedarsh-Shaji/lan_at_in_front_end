import React, { Component } from 'react';
import AuthenticationDataService from "./AuthenticationDataService"
import AuthenticationService from './AuthenticationService';
import { withRouter } from 'react-router';

class UserSignup extends Component {

    

    constructor(props) {
        super(props)

        this.state = {
            backgroundColor : "#fff",
            creationDateTime : "2021-07-14T05:02:29.236Z",
            email : '',
            lastLogin : null,
            licenseNumber: '',
            name : '',
            password : '',
            phoneNumber: '',
            status : null,
            userId : 0
              
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

   

    onSubmit() {

        const { history } = this.props;
        

        let requestBody ={
            
                creationDateTime : "2021-07-14T05:02:29.236Z",
                email : this.state.email,
                lastLogin : "2021-07-14T05:02:29.236Z",
                licenseNumber: this.state.licenseNumber,
                name : this.state.name,
                password : this.state.password,
                phoneNumber: this.state.phoneNumber,
                status : "true",
                userId : 0
              
        }

        AuthenticationDataService.userSignup(requestBody)
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


    componentDidMount() {
        console.log("Admin component did mount");
    }

    handleChange(event)//This is a synthetic event
    {
        this.setState({ [event.target.name]: event.target.value });
        
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-6">

                        {this.state.error && <div className="alert alert-danger" role="alert">
                            {this.state.error}
                        </div>}

                    </div>
                </div>

                <div className="row">
                    <div>
                        <div className="form-group" >
                            <label>Email address</label>
                            <input type="email" name="email" className="form-control" onChange={this.handleChange}
                                placeholder="Enter email" style={{ backgroundColor: this.state.backgroundColor }} />
                            <small className="form-text text-muted">Your registered email goes here</small>
                        </div>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Name"  style={{ backgroundColor: this.state.backgroundColor }}/>
                        </div>

                        <div className="form-group">
                            <label>LicenseNumber</label>
                            <input type="text" name="licenseNumber" className="form-control" onChange={this.handleChange}
                                placeholder="Enter LicenseNumber"  style={{ backgroundColor: this.state.backgroundColor }}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" onChange={this.handleChange}
                                id="exampleInputPassword1" placeholder="Password"  style={{ backgroundColor: this.state.backgroundColor }}/>
                        </div>

                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" name="phoneNumber" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Phone"  style={{ backgroundColor: this.state.backgroundColor }} />
                        </div>

                        <button type="submit" className="btn btn-success" style={{ width: "100%" }}
                            onClick={this.onSubmit}
                        >Submit</button>

                    </div>
                </div>
            </div>
        );
    }
}



export default UserSignup;