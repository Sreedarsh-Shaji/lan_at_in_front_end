import React, { Component } from "react";
import Header from "./CommonComponents/Header";
import Footer from "./CommonComponents/Footer";

import { Modal, Button } from "react-bootstrap";
import AuthenticationDataService from "../AuthenticationComponents/AuthenticationDataService";
import AuthenticationService from "../AuthenticationComponents/AuthenticationService";

import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

class CandidateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modelAction: "Add",
      users: [],

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
    console.log("Student edit profile");

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
    });
  }

  onSubmit(values) {
    const { history } = this.props;

    let requestBody = {
      profileTitle: this.state.profileTitle,
      profileDescription: this.state.profileDescription,
      age: this.state.age,
      gender: this.state.gender,
      address: this.state.address,

      qualification: [
        {
          course: this.state.course1,
          startingYear: this.state.startingYear1,
          endingYear: this.state.endingYear1,
        },
        {
          course: this.state.course2,
          startingYear: this.state.startingYear2,
          endingYear: this.state.endingYear2,
        },
        {
          course: this.state.course3,
          startingYear: this.state.startingYear3,
          endingYear: this.state.endingYear3,
        },
      ],
      skill: [
        {
          skillName: this.state.skill1,
          skillType: this.state.type1,
          yearsOfExperience: this.state.experience1,
        },
        {
          skillName: this.state.skill2,
          skillType: this.state.type2,
          yearsOfExperience: this.state.experience2,
        },
        {
          skillName: this.state.skill3,
          skillType: this.state.type3,
          yearsOfExperience: this.state.experience3,
        },
      ],
    };

    console.log(requestBody);
    console.log(AuthenticationService.getPresentCompany());

    AuthenticationDataService.candidateUpdateProfile(
      new Cookies().get("Jobseeker").username,
      requestBody
    )
      .then((response) => {
        if (response.data == null) {
          alert("Invalid credentials");
          this.setState({ message: "Invalid credentials" });
        } else {
          alert("Added vacancy successfully successfully");
          this.setState({ message: "Valid credentials" });
          history.push("/Candidate/see-profile");
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: "Invalid credentials" });
      });
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
              <h3 style={{ textAlign: "center" }}>Profile Details</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div class=" col-md-12 form-group">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Profile title</label>
                <textarea
                  class="form-control"
                  name="profileTitle"
                  rows="3"
                  onChange={this.handleChange}
                  value={this.state.profileTitle}
                ></textarea>
              </div>
              <br />

              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Profile description
                </label>
                <textarea
                  class="form-control"
                  name="profileDescription"
                  rows="3"
                  onChange={this.handleChange}
                  value={this.state.profileDescription}
                ></textarea>
              </div>
              <br />

              <div class="form-group">
                <label for="exampleFormControlInput1">Age</label>
                <input
                  type="number"
                  class="form-control"
                  name="age"
                  placeholder="age"
                  onChange={this.handleChange}
                  value={this.state.age}
                />
              </div>
              <br />

              <div class="form-group">
                <label for="exampleFormControlInput1">Gender</label>
                <br />
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio1"
                    value="MALE"
                    checked={this.state.gender == "MALE"}
                    onClick={this.handleChange}
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio2"
                    value="FEMALE"
                    checked={this.state.gender == "FEMALE"}
                    onClick={this.handleChange}
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Female
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio2"
                    value="OTHER"
                    checked={this.state.gender == "OTHER"}
                    onClick={this.handleChange}
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Other
                  </label>
                </div>
              </div>
              <br />

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Address</label>
                <textarea
                  class="form-control"
                  name="address"
                  rows="3"
                  value={this.state.address}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <br />

              <label for="exampleInputEmail1">Education</label>
              <small className="form-text text-muted">
                Accepts 3 qualifications
              </small>
              <table border="1">
                <tr>
                  <td>
                    <input
                      type="text"
                      name="course1"
                      placeholder="Course"
                      class="form-control"
                      id="location"
                      value={this.state.course1}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="startingYear1"
                      placeholder="Start Year"
                      class="form-control"
                      id="location"
                      value={this.state.startingYear1}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="endingYear1"
                      placeholder="End Year"
                      class="form-control"
                      id="location"
                      value={this.state.endingYear1}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="course2"
                      placeholder="Course"
                      class="form-control"
                      id="location"
                      value={this.state.course2}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="startingYear2"
                      placeholder="Start Year"
                      class="form-control"
                      id="location"
                      value={this.state.startingYear2}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="endingYear2"
                      placeholder="End Year"
                      class="form-control"
                      id="location"
                      value={this.state.endingYear2}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="course3"
                      placeholder="Course"
                      class="form-control"
                      id="location"
                      value={this.state.course3}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="startingYear3"
                      placeholder="Start Year"
                      class="form-control"
                      id="location"
                      value={this.state.startingYear3}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="endingYear3"
                      placeholder="End Year"
                      class="form-control"
                      id="location"
                      value={this.state.endingYear3}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="row">
            <div class="col-md-12 form-group">
              <label for="exampleInputEmail1">Skill set</label>
              <small className="form-text text-muted">Accepts 3 Skills</small>
              <table>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="skill1"
                      placeholder="Name"
                      class="form-control"
                      id="location"
                      value={this.state.skill1}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="type1"
                      placeholder="Type"
                      class="form-control"
                      id="location"
                      value={this.state.type1}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="experience1"
                      placeholder="Experience"
                      class="form-control"
                      id="location"
                      value={this.state.experience1}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="skill2"
                      placeholder="Name"
                      class="form-control"
                      id="location"
                      value={this.state.skil2}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="type2"
                      placeholder="Type"
                      class="form-control"
                      id="location"
                      value={this.state.type2}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="experience2"
                      placeholder="Experience"
                      class="form-control"
                      id="location"
                      value={this.state.experience2}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="skill3"
                      placeholder="Name"
                      class="form-control"
                      id="location"
                      value={this.state.skill3}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="type3"
                      placeholder="Type"
                      class="form-control"
                      id="location"
                      value={this.state.type3}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="experience3"
                      placeholder="Experience"
                      class="form-control"
                      id="location"
                      value={this.state.experience3}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <button
                type="submit"
                onClick={this.onSubmit}
                class="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default CandidateProfile;
