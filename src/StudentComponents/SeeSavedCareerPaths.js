import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import AuthenticationDataService from '../AuthenticationComponents/AuthenticationDataService';

import Cookies from 'universal-cookie';

class SeeSavedCareerPaths extends Component {

    constructor(props) {
        super(props)

        this.state = {
           careerPaths:[],
           rowCount:1,
        };

        this.loadData = this.loadData.bind(this);
    
    }


    componentDidMount() {
        this.loadData();
    }

    loadData() {

        console.log("Company get applicant list component did mount");
        AuthenticationDataService.studentSeeSavedPath(new Cookies().get('Student').username).
            then(response => {
                this.setState({ careerPaths: response.data })
                console.log(response.data)
            })

    }

    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <br />
                            <h3 style={{ textAlign: "center" }}>Saved Career Paths</h3>
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
                                        <th scope="col">+2</th>
                                        <th scope="col">Graduation</th>
                                        <th scope="col">Post Graduation</th>
                                        <th scope="col">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {


                                        this.state.careerPaths
                                            .map(
                                                app =>
                                                    <tr key={app.id}>
                                                        <td>{this.state.rowCount++}</td>
                                                        <td>{app.plusTwo}</td>
                                                        <td>{app.graduation}</td>
                                                        <td>{app.postGrad}</td>
                                                        <td>{app.role}</td>
                                                        </tr>

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

export default SeeSavedCareerPaths;