import React, { Component } from 'react';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

class StudentHome extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <br />
                                    <h1 style={{ textAlign: "center",color: "#003300" }}> Welcome Student </h1>
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
                                    <img src="https://ouch-cdn2.icons8.com/2T2UCWmd_7DCacnCp9zfYxE1sadRlhyt_HkJcgay9O0/rs:fit:1216:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjk5/L2IyM2Y0YTM3LTdm/ZTMtNDc2Mi05YTli/LTBjY2Y5ZTQ2ZTY2/ZC5zdmc.png" height="400px" alt="Kia car" />
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
                                        <h2 style={{ color: "#0000ff"}}>Student Home Page </h2>
                                        <p>Student Home Page</p>
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

export default StudentHome;