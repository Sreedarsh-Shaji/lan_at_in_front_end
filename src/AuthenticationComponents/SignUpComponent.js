import { Component } from "react";
import Header from "../LandingPage/Header";
import FooterComponent from "./FooterComponent";
import AgencySignup from "./AgencySignup";
import UserSignup from "./UserSignup";

class SignUpComponent extends Component{


    constructor() {
        super();
        this.state = {
            usertype: "User"
        }
        this.userSelect = this.userSelect.bind(this);
    }
    
    render(){
        return(
            <>
                <Header/>
                    <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <br/>
                                    <h1 style={{ textAlign: "center" ,color: "#003300"}}> Sign Up {this.state.usertype} </h1>
                                    <br/>
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

                            <div className="btn-group btn-group-toggle" data-toggle="buttons"> 
                                <label className="btn btn-primary" style={{ width:"110px" }}>
                                    <input type="radio" name="options" id="option2"
                                    onClick={() => this.userSelect("Agency")}/> 
                                    Agency
                                </label>
                                <label className="btn btn-primary" style={{ width:"100px" }}>
                                    <input type="radio" name="options" id="option3" style={{ width:"100%" }} 
                                    onClick={() => this.userSelect("User")}/> 
                                    User
                                </label>
                            </div>

                            {this.state.usertype === "Agency" && <AgencySignup/>}
                            {this.state.usertype === "User" && <UserSignup/>}

                        </div>
                    </div>
                </div>        

                
            </>
        );
    }
    
    userSelect(user)
    {
        this.setState(prevState => ({
            usertype: user
          }));
    }
}

export default SignUpComponent;