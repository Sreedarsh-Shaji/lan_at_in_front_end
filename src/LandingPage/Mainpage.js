import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainRoutes from '../AuthenticationComponents/MainRoutes';

class Mainpage extends Component {
    render() {
        return (
        
            <div>
               <Header/>

               <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h1 style={{ textAlign: "center",color: "#003300" }}> Lan@In - JOB SEEKER PORTAL </h1>
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
                            <img src="https://teresas.ac.in/wp-content/uploads/2018/04/placement-services.png" height={400} alt="Kia car" />
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
                                <h2 style={{ color: "#0000ff"}}>Lan@in Job Seeker Portal</h2>
                                <p>Shaping a happy career is a priority for all budding professionals. However, the stakes to get there never seemed to be this high.
<br/>
It's though undeniable that countless job portals claim to be the best when it comes to providing the right careers, however, we provide the best website for job search.</p>
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

export default Mainpage;