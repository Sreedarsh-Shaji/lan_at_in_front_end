import Cookies from "universal-cookie";

class AuthenticationService {
  registerSuccessfulAdminLogin(
    admin //Registers admin login
  ) {
    console.log("Register successful login");
    sessionStorage.setItem("authenticatedAdmin", admin);
  }

  registerSuccessfulAgencyLogin(
    agency //Registers agency login
  ) {
    console.log("Register successful agency login");
    sessionStorage.setItem("authenticatedAgency", agency);
  }
  registerSuccessfulUserLogin(
    user //Registers User login
  ) {
    console.log("Register successful user login");
    sessionStorage.setItem("authenticatedUser", user);
  }

  isAdminLoggedIn() {
    //Return true if admin is logged in
    let user = sessionStorage.getItem("authenticatedAdmin");
    return user === null ? false : true;
  }

  isAgencyLoggedIn() {
    //Return true if agency is logged in
    let user = sessionStorage.getItem("authenticatedAgency");
    return user === null ? false : true;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    return user === null ? false : true;
  }
  isRecruiterLoggedIn() {
    let user = sessionStorage.getItem("authenticatedRecruiter");
    return user === null ? false : true;
  }

  adminLogout() {
    //Removes admin entity
    sessionStorage.removeItem("authenticatedAdmin");
  }

  agencyLogout() {
    //Removes agency entity
    sessionStorage.removeItem("authenticatedAgency");
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    return user === null ? false : true;
  }

  getLoggedinUsername() {
    return sessionStorage.getItem("authenticatedUser");
  }

  getLoggedInAgency() {
    return sessionStorage.getItem("authenticatedAgency");
  }
  getLoggedInUser() {
    return sessionStorage.getItem("authenticatedUser");
  }

  // Registers all successful login - Job seeker

  registerSuccessfulJobSeekerLogin(
    jobSeeker //Registers Company login
  ) {
    console.log("Register successful jobSeeker login");
    new Cookies().set("JobSeeker", jobSeeker, { path: "/" });
    sessionStorage.setItem("authenticatedjobSeeker", jobSeeker);
  }

  registerSuccessfulCompanyLogin(
    company //Registers Company login
  ) {
    sessionStorage.setItem("authenticatedCompany", company);
  }

  isCompanyLoggedIn() {
    //Return true if Company is logged in
    return sessionStorage.getItem("authenticatedCompany") === null
      ? false
      : true;
  }

  isStudentLoggedIn() {
    //Return true if Company is logged in
    return sessionStorage.getItem("authenticatedStudent") === null
      ? false
      : true;
  }

  studentLogout() {
    sessionStorage.removeItem("authenticatedStudent");
  }

  isJobSeekerLoggedIn() {
    //Return true if Company is logged in
    return sessionStorage.getItem("authenticatedJobseeker") === null
      ? false
      : true;
  }

  companyLogout() {
    sessionStorage.removeItem("authenticatedCompany");
  }

  getPresentCompany() {
    return sessionStorage.getItem("authenticatedCompany");
  }
}

export default new AuthenticationService();
