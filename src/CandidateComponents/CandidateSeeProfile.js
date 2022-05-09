import React, { Component } from "react";
import Header from "./CommonComponents/Header";
import Footer from "./CommonComponents/Footer";

import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from "../AuthenticationComponents/AuthenticationDataService";
import AuthenticationService from "../AuthenticationComponents/AuthenticationService";

import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

class CandidateSeeProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modelAction: "Add",
      data: "",

      role: "",
      description: "",
      course1: "",
      startingYear1: "",
      endingYear1: "",
      course2: "",
      startingYear2: "",
      endingYear2: "",
      course3: "",
      startingYear3: "",
      endingYear3: "",

      skill1: "",
      type1: "",
      experience1: "",
      skill2: "",
      type2: "",
      experience2: "",
      skill3: "",
      type3: "",
      experience3: "",
      employmentLocation: "",
      employmentMode: "",
      shouldPossessPassport: "",
      willingToRelocate: "",
      linkedInProfile: "",

      rowCount: 1,

      profileTitle: "",
      profileDescription: "",
      age: "",
      gender: "",
      address: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    console.log("Candidate see profile did mount!");
    AuthenticationDataService.jobseekerSeeIfProfileSet(
      new Cookies().get("Jobseeker").username
    ).then((response) => {
      if (response.data != true) {
        alert("The profile is not set, kindly set your profile to proceed");
      } else {
        AuthenticationDataService.jobseekergetProfileById(
          new Cookies().get("Jobseeker").username
        ).then((response) => {
          this.setState({ profileTitle: response.data.profile.profileTitle });
          this.setState({
            profileDescription: response.data.profile.profileDescription,
          });
          this.setState({ age: response.data.profile.age });
          this.setState({ gender: response.data.profile.gender });
          this.setState({ address: response.data.profile.address });

          this.setState({ skill1: response.data.profile.skill[0].skillName });
          this.setState({ type1: response.data.profile.skill[0].skillType });
          this.setState({
            experience1: response.data.profile.skill[0].yearsOfExperience,
          });
          this.setState({ skill2: response.data.profile.skill[1].skillName });
          this.setState({ type2: response.data.profile.skill[1].skillType });
          this.setState({
            experience2: response.data.profile.skill[1].yearsOfExperience,
          });
          this.setState({ skill3: response.data.profile.skill[2].skillName });
          this.setState({ type3: response.data.profile.skill[2].skillType });
          this.setState({
            experience3: response.data.profile.skill[2].yearsOfExperience,
          });

          this.setState({
            course1: response.data.profile.qualification[0].course,
          });
          this.setState({
            startingYear1: response.data.profile.qualification[0].startingYear,
          });
          this.setState({
            endingYear1: response.data.profile.qualification[0].endingYear,
          });
          this.setState({
            course2: response.data.profile.qualification[1].course,
          });
          this.setState({
            startingYear2: response.data.profile.qualification[1].startingYear,
          });
          this.setState({
            endingYear2: response.data.profile.qualification[1].endingYear,
          });
          this.setState({
            course3: response.data.profile.qualification[2].course,
          });
          this.setState({
            startingYear3: response.data.profile.qualification[2].startingYear,
          });
          this.setState({
            endingYear3: response.data.profile.qualification[2].endingYear,
          });

          console.log(response.data);
        });
      }
    });
  }

  onSubmit(values) {
    const { history } = this.props;

    history.push("/Candidate/see-profile");
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
            <div className="col-md-12">
              <br />
              <h3 style={{ textAlign: "center" }}>
                Profile Details{" "}
                <a
                  href="edit-profile"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Edit Profile"
                >
                  ✎
                </a>
              </h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div class=" col-md-12 form-group">
              <center>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label for="exampleFormControlTextarea1">
                          <b>Profile title</b>
                        </label>
                      </td>
                      <td> : </td>
                      <td>
                        <div class="alert alert-dark" role="alert">
                          {this.state.profileTitle}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="exampleFormControlTextarea1">
                          <b>Profile description </b>
                        </label>
                      </td>
                      <td> : </td>
                      <td>
                        <div class="alert alert-dark" role="alert">
                          {this.state.profileDescription}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="exampleFormControlTextarea1">
                          <b>Age </b>
                        </label>
                      </td>
                      <td> : </td>
                      <td>
                        <div class="alert alert-dark" role="alert">
                          {this.state.age}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="exampleFormControlTextarea1">
                          <b>Gender </b>
                        </label>
                      </td>
                      <td> : </td>
                      <td>
                        <div class="alert alert-dark" role="alert">
                          {this.state.gender}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="exampleFormControlTextarea1">
                          <b>Address </b>
                        </label>
                      </td>
                      <td> : </td>
                      <td>
                        {" "}
                        <div class="alert alert-dark" role="alert">
                          {this.state.address}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="exampleFormControlTextarea1">
                          <b>Education </b>
                        </label>
                      </td>
                      <td> : </td>
                      <td>
                        <table>
                          <thead>
                            <th className="border">Course</th>
                            <th className="border">Start Year</th>
                            <th className="border">End Year</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.course1}
                                </div>
                              </td>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.startingYear1}
                                </div>
                              </td>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.endingYear1}
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.course2}
                                </div>
                              </td>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.startingYear2}
                                </div>
                              </td>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.endingYear2}
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.course3}
                                </div>
                              </td>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.startingYear3}
                                </div>
                              </td>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.endingYear3}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="exampleFormControlTextarea1">
                          <b>Skill </b>
                        </label>
                      </td>
                      <td> : </td>
                      <td>
                        <table>
                          <thead>
                            <th className="border">Name</th>
                            <th className="border">Type</th>
                            <th className="border">Experience</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.skill1}
                                </div>
                              </td>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.type1}
                                </div>
                              </td>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.experience1}
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.skill2}
                                </div>
                              </td>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.type2}
                                </div>
                              </td>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.experience2}
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.skill3}
                                </div>
                              </td>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.type3}
                                </div>
                              </td>
                              <td className="border">
                                <div class="alert alert-dark" role="alert">
                                  {this.state.experience3}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CandidateSeeProfile;
