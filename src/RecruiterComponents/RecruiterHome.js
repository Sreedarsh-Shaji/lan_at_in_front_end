import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

class RecruiterHome extends Component {


    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <br />
                                    <h1 style={{ textAlign: "center",color: "#003300" }}> Company </h1>
                                    <br />
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div></div>
                            <div className="row">
                                <div className="col-md-7">
                                    <img src="https://previews.123rf.com/images/jemastock/jemastock1809/jemastock180908735/109933511-grafikdesign-des-firmengeb%C3%A4udes-isometrische-vektorillustration.jpg" height="400px" alt="Kia car" />
                                </div>
                                <div className="col-md-5">

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <br/>  
                                                <br/>
                                                <hr/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="section-title">
                                        <h2 style={{ color: "#0000ff"}}>Recruiter Home Page </h2>
                                        <p>Company can manage and operate on the resources from here on</p>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <hr/>
                                            </div>
                                        </div>
                                    </div>                           
                                </div>
                            </div>
                        </div>
                <Footer/>
            </div>
        );
    }
}

export default RecruiterHome;