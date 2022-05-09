import React, { Component } from "react";
import Header from "./CommonComponents/Header";
import AuthenticationDataService from "../AuthenticationComponents/AuthenticationDataService";

import Cookies from "universal-cookie";

class UpgradeProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      careerPaths: [],
      rowCount: 1,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { history } = this.props;

    AuthenticationDataService.studentUpdateCareer(
      new Cookies().get("Student").username
    ).then((response) => {
      if (response.data == null) {
        alert("Save failed");
      } else {
        alert("Profile Updated Successfully");
        history.push("/login");
      }
      console.log(response.data);
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="row">
            <div className="col">
              <br />
              <h3 style={{ textAlign: "center" }}>
                Upgrade to Job Seeker Profile
                <hr />
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div class="jumbotron">
                <h1 class="display-4">Hello, Student!</h1>
                <p class="lead">
                  By clicking the below button, you are upgrading your current
                  profile to a job seeker profile.
                </p>
                <hr class="my-4" />
                <p>
                  All your data will be reset to ,match the job seeker profile.
                  You can start looking for a job that lmatches your registered
                  profile from here on. All the best
                </p>
                <p class="lead">
                  <a
                    class="btn btn-primary btn-lg"
                    href="#"
                    role="button"
                    onClick={this.onSubmit}
                  >
                    Choose to Upgrade
                  </a>
                </p>
              </div>
            </div>
            <div className="col-2"></div>
          </div>

          <br />

          <div className="row">
            <div className="col-1"></div>
            <div className="col-11"></div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpgradeProfile;
