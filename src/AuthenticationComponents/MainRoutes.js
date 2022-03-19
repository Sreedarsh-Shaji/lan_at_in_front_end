import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HomePage from '../AdminAccount/HomePage';
import LoginComponent from './LoginComponent';
import AllUsers from '../AdminAccount/AllUsers';
import AllAgencies from '../AdminAccount/AllAgencies';
import AllTrips from '../AdminAccount/AllTrips';
import AllOfficers from '../AdminAccount/AllOfficers';
import AllVehicle from '../AdminAccount/AllVehicle';

import AgencyHomePage from '../AgencyAccount/AgencyHomePage.js'
import AgencyOfficesPage from '../AgencyAccount/AgencyOfficesPage.js'
import Mainpage from '../LandingPage/Mainpage';
import AboutComponent from './AboutComponent';
import SignUpComponent from './SignUpComponent';
import UserHome from '../UserAccount/UserHome';
import ViewTrips from '../AgencyAccount/ViewTrips';
import ViewVehicle from '../AgencyAccount/ViewVehicle';
import ViewOffice from '../UserAccount/ViewOffice';
import ViewUserTrips from '../UserAccount/ViewUserTrips';


class MainRoutes extends Component {
    render() {
        return (
            <div>
                
                <Router>
                    <Switch>
                        
                        <Route path="/Login" exact component={LoginComponent}/>
                        <Route path="/home" exact component={Mainpage}/>
                        <Route path="/about" exact component={AboutComponent}/>
                        <Route path="/sign" exact component={SignUpComponent}/>

                        { /* Admin components */ }
                        <Route path="/Admin/Home" component={HomePage}/>
                        <Route path="/Admin/All-users" component={AllUsers}/>
                        <Route path="/Admin/All-agencies" component={AllAgencies}/>
                        <Route path="/Admin/All-trips" component={AllTrips}/>
                        <Route path="/Admin/All-officers" component={AllOfficers}/>
                        <Route path="/Admin/All-Vehicles" component={AllVehicle}/>

                        { /* Agency components */ }
                        <Route path="/Agency/Home" component={AgencyHomePage}/>
                        <Route path="/Agency/Offices" component={AgencyOfficesPage}/>
                        <Route path="/Agency/trips" component={ViewTrips}/>
                        <Route path="/Agency/vehicles" component={ViewVehicle}/>


                        {/* User componets*/}

                        <Route path="/User/Home" component={UserHome}/>
                        <Route path="/User/Office" component={ViewOffice}/>
                        <Route path="/User/Trips" component={ViewUserTrips}/>

                    </Switch>
                </Router>
            </div>
        );
    }
}

export default MainRoutes;