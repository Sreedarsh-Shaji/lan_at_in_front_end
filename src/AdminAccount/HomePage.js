import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <br />
                                    <h1 style={{ textAlign: "center",color: "#003300" }}> ADMIN </h1>
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
                                    <img src="https://i.pinimg.com/originals/94/09/7e/94097e458fbb22184941be57aaab2c8f.png" height="400px" alt="Admin Home image" />
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
                                        <h2 style={{ color: "#0000ff"}}>Admin</h2>
                                        <p>Admin account details</p>
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

export default HomePage;