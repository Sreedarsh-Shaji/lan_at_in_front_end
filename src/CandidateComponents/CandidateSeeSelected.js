import React, { Component } from "react";
import Header from "./CommonComponents/Header";
import Footer from "./CommonComponents/Footer";

import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from "../AuthenticationComponents/AuthenticationDataService";
import AuthenticationService from "../AuthenticationComponents/AuthenticationService";

import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

class CandidateSeeSelected extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modelAction: "Add",
      users: [],
      message: false,

      rowCount: 1,
    };

    this.loadData = this.loadData.bind(this);
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    console.log("Company home component did mount");
    AuthenticationDataService.jobseekergetSelectedByMail(
      new Cookies().get("Jobseeker").username
    ).then((response) => {
      this.setState({ users: response.data });
      if (response.data[0].uuid !== null) {
        this.setState({ message: "🎉Congrats, you have selections🎉" });
      }
    });
    // fetch("http://localhost:8012/hiring/get-all-vacancies")
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         let officeFromApi = data.map(office => {
    //             return { value: office, display: office }
    //         });
    //         this.setState({
    //             teams: [{ value: '', display: '(Select office' }].concat(officeFromApi)
    //         });
    //     }).catch(error => {
    //         console.log(error);
    //     });
  }

  handleChange(
    event //This is a synthetic event
  ) {
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
              <h3 style={{ textAlign: "center" }}>All Reported Vacancies</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2"></div>
          </div>

          <br />

          <div className="row">
            <div className="col-1"></div>
            <div className="col-11">
              {this.state.message && (
                <div className="alert alert-primary" role="alert">
                  {this.state.message}
                </div>
              )}
              <br />

              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Role</th>
                    <th scope="col">Description</th>
                    <th scope="col">Company</th>
                    <th scope="col">Email</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((vacancy) => (
                    <tr key={vacancy.uuid}>
                      <td>{this.state.rowCount++}</td>
                      <td>{vacancy.applicationProfile.profile.role}</td>
                      <td>{vacancy.applicationProfile.profile.description}</td>
                      <td>
                        {
                          vacancy.applicationProfile.profile.reportingCompany
                            .name
                        }
                      </td>
                      <td>
                        {
                          vacancy.applicationProfile.profile.reportingCompany
                            .email
                        }
                      </td>
                    </tr>
                  ))}
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

export default CandidateSeeSelected;
