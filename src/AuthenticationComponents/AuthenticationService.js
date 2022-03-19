class AuthenticationService{

    registerSuccessfulAdminLogin(admin)//Registers admin login
    {
        console.log("Register successful login");
        sessionStorage.setItem('authenticatedAdmin',admin);
    }

    
    registerSuccessfulAgencyLogin(agency)//Registers agency login
    {
        console.log("Register successful agency login");
        sessionStorage.setItem('authenticatedAgency',agency);
    }
    registerSuccessfulUserLogin(user)//Registers User login
    {
        console.log("Register successful user login");
        sessionStorage.setItem('authenticatedUser',user);
    }

    isAdminLoggedIn()//Return true if admin is logged in
    { 
        let user = sessionStorage.getItem('authenticatedAdmin');
        return user === null ? false : true ;
    }

    isAgencyLoggedIn()//Return true if agency is logged in
    { 
        let user = sessionStorage.getItem('authenticatedAgency');
        return user === null ? false : true ;
    }
    isUserLoggedIn(){
        let user=sessionStorage.getItem('authenticatedUser')
        return user === null? false :true;
    }


    adminLogout()//Removes admin entity
    {
        sessionStorage.removeItem('authenticatedAdmin');
    }

    agencyLogout()//Removes agency entity
    {
        sessionStorage.removeItem('authenticatedAgency');
    }

    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
    }

    
    isUserLoggedIn()
    { 
        let user = sessionStorage.getItem('authenticatedUser');
        return user === null ? false : true ;
    }

     getLoggedinUsername()
     {
         return sessionStorage.getItem('authenticatedUser');
     }

     getLoggedInAgency()
     {
        return sessionStorage.getItem('authenticatedAgency');
     } 
     getLoggedInUser()
     {
        return sessionStorage.getItem('authenticatedUser');
     } 

}

export default new AuthenticationService(); 