import React, { Component } from 'react';
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';
import Header from './CommonComponents/Header';

class AdminAddCareerPath extends Component {

    constructor(props) {
        super(props)

        this.state = {

            uid: '',
            name: '',
            password: '',
            email: '',
            phone: '',
            role: "COMPANY"

        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit(values) {

        const { history } = this.props;

        let requestBody = {
            plusTwo: this.state.plusTwo,
            graduation: this.state.graduation,
            postGrad: this.state.postGrad,
            role: this.state.role,
        }

        AuthenticationDataService.adminAddCareerPath(requestBody)
            .then((response) => {
                if (response.data == null) {
                    alert("Invalid credentials");
                    this.setState({ message: "Invalid credentials" })
                }
                else {
                    alert(response.data);
                    this.setState({ message: "Valid credentials" })
                    //history.push('/Agency/Home');
                }
                console.log(response.data)
            })
            .catch(
                err => {
                    console.log(err)
                    this.setState({ error: "Invalid credentials" })
                })
    }


    componentDidMount() {
        console.log("Company signup component did mount");
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
                            <h3 style={{ textAlign: "center" }}>Add Career path</h3>
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
                        <div className="col-11"></div>
            <div className="container">

                <div className="row">
                    <div className='col-md-12'>
                        <div className="form-group">
                            <label>+2</label>
                            <input type="text" name="plusTwo" className="form-control" onChange={this.handleChange}
                                placeholder="Enter +2 Stream" />
                        </div>

                        <div className="form-group">
                            <label>Graduation</label>
                            <input type="text" name="graduation" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Graduation" />
                        </div>
                        <div className="form-group">
                            <label>Post Graduation</label>
                            <input type="text" name="postGrad" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Post Graduation" />
                        </div>
                        <div className="form-group">
                            <label>Role</label>
                            <input type="text" name="role" className="form-control" onChange={this.handleChange}
                                placeholder="Enter Role" />
                        </div>
                        <button type="submit" className="btn btn-success" style={{ width: "100%" }}
                            onClick={this.onSubmit}
                        >Submit</button>

                    </div>
                </div>
            </div>

            </div>
                        <div className="col-2"></div>
                    </div>
                    
                </div>

        );
    }
}



export default AdminAddCareerPath;