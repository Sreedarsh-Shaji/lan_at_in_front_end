import React,{Component} from 'react'
import { Route,Redirect } from 'react-router'
import AuthenticationService from './AuthenticationService'

class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isAdminLoggedIn)
        {
            return <Route {...this.props}/>//This is the js spread operator
        }
        else{
            return <Redirect to="/Admin/login"/>
        }
    }
}

export default AuthenticatedRoute;