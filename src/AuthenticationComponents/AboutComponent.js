import { Component } from "react";
import Header from '../LandingPage/Header';
import FooterComponent from './FooterComponent';

class AboutComponent extends Component{
    render(){
        return(

            <>
                <Header/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <br />
                                <h1 style={{ textAlign: "center" ,color: "#003300"}}> About</h1>
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
                                <img src="https://3p6y693soagg24ij033i3rcg-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/541072.jpg" alt="Kia car" />
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
                                    
                                    <h2 style={{ color: "#0000ff"}}>What We Do</h2>
                                    <p>Small businesses are always strapped for cash, this is the reason we are asking you to Understand Real Reason to Invest in Technology for your business. Take start and make an investment to Progress–anytime, anywhere, with a sense of security & the need for speed.</p>
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
                <FooterComponent/>
            </>
        );
    }
}
export default AboutComponent;