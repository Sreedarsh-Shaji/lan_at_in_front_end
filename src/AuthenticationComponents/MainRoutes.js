import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HomePage from '../AdminAccount/HomePage';
import LoginComponent from './LoginComponent';
import Mainpage from '../LandingPage/Mainpage';
import AboutComponent from './AboutComponent';
import SignUpComponent from './SignUpComponent';
import UserHome from '../UserAccount/UserHome';
import ViewOffice from '../UserAccount/ViewOffice';
import ViewUserTrips from '../UserAccount/ViewUserTrips';

import CompanyHomePage from '../CompanyComponents/CompanyHome';
import Vacancies from '../CompanyComponents/Vacancies';

import CandidateVacancies from '../CandidateComponents/CandidateVacancies';
import CandidateVacancyDetails from '../CandidateComponents/CandidateVacancyDetails';
import CandidateAppliedPositions from '../CandidateComponents/CandidateAppliedPositions';
import CandidateViewInterviewInvites from '../CandidateComponents/CandidateViewInterviewInvites';
import CandidateProfile from '../CandidateComponents/CandidateProfile';

import RecruiterHome from '../RecruiterComponents/RecruiterHome';

import GetApplicantList from '../CompanyComponents/GetApplicantList';
import ApplicantProfile from '../CompanyComponents/ApplicateProfile';
import InviteForInterview from '../CompanyComponents/InviteForInterview';
import GetInterviewList from '../CompanyComponents/GetInterviewList';
import Recruiters from '../CompanyComponents/Recruiters';

import RecruiterVacancies from '../RecruiterComponents/RecruiterVacancies';
import RecruiterGetApplicantList from '../RecruiterComponents/RecruiterGetApplicantList';

import AdminViewRecruiters from '../AdminAccount/AdminViewRecruiters';
import AdminViewVacancies from '../AdminAccount/AdminViewVacancies';
import AdminViewAllJobSeekers from '../AdminAccount/AdminViewAllJobSeekers';
import AdminViewCompanies from '../AdminAccount/AdminViewCompanies';
import AdminCareerPath from '../AdminAccount/AdminCareerPath';
import AdminAddCareerPath from '../AdminAccount/AdminAddCareerPath';
import RecruiterSeeInterviewSchedule from '../RecruiterComponents/RecruiterSeeInterviewSchedule';
import StudentHome from '../StudentComponents/StudentHome';
import GetCareerPath from '../StudentComponents/GetCareerPath';
import SeeSavedCareerPaths from '../StudentComponents/SeeSavedCareerPaths';

class MainRoutes extends Component {
    render() {
        return (
            <div>
                
                <Router>
                    <Switch>
                        
                        <Route path="/login" exact component={LoginComponent}/>
                        <Route path="/" exact component={Mainpage}/>
                        <Route path="/about" exact component={AboutComponent}/>
                        <Route path="/sign" exact component={SignUpComponent}/>


                        { /* Company Components */ }
                        <Route path="/Company/Home" component={CompanyHomePage}/>
                        <Route path="/Company/Vacancies" component={Vacancies}/>
                        <Route path="/Company/ApplicantList" component={GetApplicantList}/>
                        <Route path="/Company/ApplicantDetail/:mail" component={ApplicantProfile}/>
                        <Route path="/Company/Applciation/invite-for-intervire:data" component={InviteForInterview}/>
                        <Route path="/Company/Applciation/get-interview-list" component={GetInterviewList}/>
                        <Route path="/Company/Recruiters" component={Recruiters}/>

                        {/* Candidate Component */}
                        <Route path="/Candidate/Vacancies" component={CandidateVacancies}/>
                        <Route path="/Candidate/VacancyDetails" component={CandidateVacancies}/>
                        <Route path="/Candidate/see-a-vacancy/:id" component={CandidateVacancyDetails}/>
                        <Route path="/Candidate/see-applied-positions" component={CandidateAppliedPositions}/>
                        <Route path="/Candidate/see-interview-invites" component={CandidateViewInterviewInvites}/>
                        <Route path="/Candidate/see-profile" component={CandidateProfile}/>
                        
                        
                        {/* Recruiter Component */}
                        <Route path="/Recruiter/Home" component={RecruiterHome}/>
                        <Route path="/Recruiter/vacancies" component={RecruiterVacancies}/>
                        <Route path="/Recruiter/applicant-list" component={RecruiterGetApplicantList}/>
                        <Route path="/Recruiter/interview-schedules" component={RecruiterSeeInterviewSchedule}/>


                        { /* Admin components */ }
                        <Route path="/Admin/Home" component={HomePage}/>
                        <Route path="/Admin/View-all-companies" component={AdminViewCompanies}/>
                        <Route path="/Admin/View-all-recruiters" component={AdminViewRecruiters}/>
                        <Route path="/Admin/View-all-vacancies" component={AdminViewVacancies}/>
                        <Route path="/Admin/View-all-job-seekers" component={AdminViewAllJobSeekers}/>
                        <Route path="/Admin/View-all-companies" component={AdminViewCompanies}/>
                        <Route path="/Admin/add-career-path" component={AdminAddCareerPath}/>

                        
                        {/* Student components*/}
                        <Route path="/Student/Home" component={StudentHome}/>
                        <Route path="/Student/Career-path" component={GetCareerPath}/>
                        <Route path="/Student/see-career-path" component={SeeSavedCareerPaths}/>

                    </Switch>
                </Router>
            </div>
        );
    }
}

export default MainRoutes;