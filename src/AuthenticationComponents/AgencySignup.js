import React, { Component } from 'react';
import AuthenticationDataService from "./AuthenticationDataService"
import AuthenticationService from './AuthenticationService';
import { withRouter } from 'react-router';

class AgencySignup extends Component {

    

    constructor(props) {
        super(props)

        this.state = {
            
                agencyId:'',
                approved: true,
                creationDateTime : '2021-07-12T16:04:37.500Z',
                email :'',
                lastLogin : '2021-07-12T16:04:37.500Z',
                name:'',
                password :'',
                phone:''
              
        }
        
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit(values) {

        const { history } = this.props;

        let requestBody ={
                agencyId: null,
                approved: true,
                creationDateTime : '2021-07-12T16:04:37.500Z',
                email : this.state.email,
                lastLogin : '2021-07-12T16:04:37.500Z',
                name: this.state.name,
                password : this.state.password,
                phone:this.state.phone
        }

        AuthenticationDataService.agencySignup(requestBody)
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
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name="email" className="form-control" onChange={this.handleChange}
                                placeholder="Enter email" />
                            <small className="form-text text-muted">Your registered email goes here</small>
                        </div>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Name" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" onChange={this.handleChange}
                                id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" name="phone" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Phone" />
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



export default AgencySignup;