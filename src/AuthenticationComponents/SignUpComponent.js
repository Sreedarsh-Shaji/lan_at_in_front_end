import { Component } from "react";
import Header from "../LandingPage/Header";
import FooterComponent from "./FooterComponent";
import CompanySignup from "./CompanySignup";
import StudentSignup from "./StudentSignup";
import CandidateSignup from "./CandidateSignup";

class SignUpComponent extends Component {
  constructor() {
    super();
    this.state = {
      usertype: "User",
    };
    this.userSelect = this.userSelect.bind(this);
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h1 style={{ textAlign: "center", color: "#003300" }}>
                {" "}
                Sign Up {this.state.usertype}{" "}
              </h1>
              <br />
            </div>
          </div>
        </div>

        <div className="container">
          <div></div>
          <div className="row">
            <div className="col-md-7">
              <img
                src="https://media.istockphoto.com/vectors/man-working-on-the-internet-on-a-light-background-vector-id1025033348?k=20&m=1025033348&s=612x612&w=0&h=noBXUFqaUhWOCeKg1ekFZ9qHhKvwmFSt0ctITPNNy1w="
                height="500px"
                alt="Kia car"
              />
            </div>
            <div className="col-md-5">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-primary" style={{ width: "110px" }}>
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    onClick={() => this.userSelect("Company")}
                  />
                  Company
                </label>
                <label className="btn btn-primary" style={{ width: "100px" }}>
                  <input
                    type="radio"
                    name="options"
                    id="option3"
                    style={{ width: "100%" }}
                    onClick={() => this.userSelect("User")}
                  />
                  Job Seeker
                </label>
                <label className="btn btn-primary" style={{ width: "100px" }}>
                  <input
                    type="radio"
                    name="options"
                    id="option3"
                    style={{ width: "100%" }}
                    onClick={() => this.userSelect("Student")}
                  />
                  Student
                </label>
                {/* <label className="btn btn-primary" style={{ width: "100px" }}>
                                    <input type="radio" name="options" id="option3" style={{ width: "100%" }}
                                        onClick={() => this.userSelect("User")} />
                                    Student
                                </label> */}
              </div>

              {this.state.usertype === "Company" && <CompanySignup />}
              {this.state.usertype === "User" && <CandidateSignup />}
              {this.state.usertype === "Student" && <StudentSignup />}
            </div>
          </div>
        </div>
      </>
    );
  }

  userSelect(user) {
    this.setState((prevState) => ({
      usertype: user,
    }));
  }
}

export default SignUpComponent;
