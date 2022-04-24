import React, { Component } from 'react';
import AuthenticationDataService from "./AuthenticationDataService"
import AuthenticationService from './AuthenticationService';
import { withRouter } from 'react-router';

class CandidateSignup extends Component {

    

    constructor(props) {
        super(props)

        this.state = {
            
            uid: '',
            name: '',
            password: '',
            email: '',
            phone: '',
            role: "JOBSEEKER"
              
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

   

    onSubmit() {

        const { history } = this.props;
        

        let requestBody ={
            
            uid: this.state.uid,
            name: this.state.name,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
            role: this.state.role
              
        }

        AuthenticationDataService.candidateSignup(requestBody)
            .then((response) => { 
                console.log(response);
                if(response.data == null)
                {
                    alert("Invalid credentials");
                    this.setState({message:"Access not available"})
                } 
                else{  
                    alert("Signup successful");
                    this.setState({message:"Valid credentials"})
                    // history.push('/login');
                }
                console.log(response.data) })
        .catch(  
        err=>{
            console.log(err)
            this.setState({error:"Invalid credentials"})
        } )
    }


    componentDidMount() {
        console.log("User component did mount");
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
                            <label>User name</label>
                            <input type="email" name="name" className="form-control" onChange={this.handleChange}
                                placeholder="Enter User Name" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Password" />
                        </div>


                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="number" name="phone" className="form-control" onChange={this.handleChange}
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



export default CandidateSignup;