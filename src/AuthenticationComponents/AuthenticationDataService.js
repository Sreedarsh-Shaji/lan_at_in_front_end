import axios from "axios";
import AuthenticationService from "./AuthenticationService";
import Cookies from 'universal-cookie';

class AuthenticationDataService{

    companyURL = "http://localhost:8080/";//"http://54.234.117.216:8080/";
    userURL =    "http://localhost:8080";//"http://54.234.117.216:8080";
    recruiterURL =    "http://localhost:8080";//"http://54.234.117.216:8080";
   
    adminLogin(username,password){
        return axios.get(`${this.companyURL}Admin/login/${username}/${password}`);
    } 

    addOffice(data){
        let ret = axios.post(`http://localhost:8085/api/v1/agency/addOffice`,data);
        return ret;
    } 

    addVehicle(carname,chnumber,ennumber,fueltype,hrrate,regno,kms,office)
    {

        
            let data =
            {
                
                    carName: carname,
                    chassisNumber: chnumber,
                    creationDateTime: "2021-07-13T07:38:48.254Z",
                    currentOffice: office,
                    engineNumber: ennumber,
                    fuelType: fueltype,
                    hourlyRate: hrrate,
                    kmsOperated: 0,
                    manufacturer: "string",
                    registerNumber: regno,
                    status: kms,
                    vehicleId: 0
                  
            }

            let ret = axios.post("http://localhost:8085/api/v1/agency/addVehicle",data)
            return ret;
    }

    agencySignup(data){
        let ret = axios.post(`http://localhost:8085/api/v1/agency/agencySignup/`,data);
        return ret;
    }
    userSignup(data){
        let ret = axios.post(`http://localhost:8085/api/v1/user/usersignup`,data);
        return ret;
    }

    tripAdd(data){

        console.log(data);
        let ret = axios.post(`http://localhost:8085/api/v1/user/addtrip`,data);
        return ret;
    }

    agencyLogin(username,password){
        let ret = axios.get(`http://localhost:8085/api/v1/agency/agencyLogin/${username}/${password}`);
        return ret;
    } 
    userLogin(username,password){
        let ret = axios.get(`http://localhost:8085/api/v1/user/userlogin/${username}/${password}`);
        return ret;
    } 

    getAllusers()
    {
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllUser`)
        return users
    }

    getAllAgencies()
    {
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllAgencies`)
        return users
    }
    getAllOfficers(){
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllOffices`)
        return users
    }
    
    getAnOffice(officeId){
        let ret = axios.get(`http://localhost:8085/api/v1/trips/get-by-id/${officeId}`)
        return ret
    }
    getAllTrips(){
        let users = axios.get(`http://localhost:8085/api/v1/user/user_see_all_trips`)
        return users
    }
    getAllOffices(){
        let users = axios.get(`http://localhost:8085/api/v1/trips/see-all-offices`)
        return users
    }
    getAllVehicles(){
        let users = axios.get(`http://localhost:8085/api/v1/admin/viewAllVehicles`) 
        return users
    }
    deleteVehicle(id){
        let users = axios.delete(`http://localhost:8085/api/v1/admin/vehicle/${id}`) 
        return users
    }

    deleteTrip(id){
        let users = axios.delete(`http://localhost:8085/api/v1/trips/delete/${id}`)
        return users
    }
    deleteUser(id){
        let users = axios.delete(`http://localhost:8085/api/v1/admin/deleteUser/${id}`)
        return users
    }
    

    getAgencyBasesOnOfficeLocation(location){
        let users = axios.get(`http://localhost:8085/api/v1/trips/see-all-offices/${location}`)
        return users
    }    
    getOfficeBasedOnAgencyName(agencyName){
        let users = axios.get(`http://localhost:8085/api/v1/trips/see-office-from-agency/${agencyName}`)
        return users
    }
        
    getVehicleBasedOnOffice(office){
        let v = axios.get(`http://localhost:8085/api/v1/user/user_see_vehicle_by_location/1`)
        return v
    }


//Job Seeker app


//All signup server comm
companySignup(data){
    let ret = axios.post(`${this.companyURL}company/signup`,data);
    return ret;
}

adminAddCareerPath(data){
    let ret = axios.post(`${this.companyURL}career/save`,data);
    return ret;
}

candidateSignup(data){
    let ret = axios.post(`${this.userURL}/api/v1/userAuth/signup-user`,data);
    return ret;
}

// All login server comm
companyLogin(data)
{
    console.log(data);
    let ret = axios.post(this.companyURL+'company/login',data);
    AuthenticationService.registerSuccessfulCompanyLogin(ret);
    return ret;
}

recruiterLogin(data)
{
    console.log(data);
    let ret = axios.post(this.companyURL+'company/login',data);
    sessionStorage.setItem('authenticatedRecruiter',ret);
    console.log("Register successful recruiter login");
    new Cookies().set('Recruiter', data, { path: '/' });
    return ret;
}

candidateLogin(data)
{
    console.log(" in candidate login : "+data);
    let ret = axios.post(`${this.userURL}/api/v1/userAuth/login-user`,data);
    sessionStorage.setItem('authenticatedJobseeker',ret);
    console.log("Register successful candidate login");
    new Cookies().set('Jobseeker', data, { path: '/' });
    return ret;
}

candidateApplyForVacancy(data)
{
    console.log(" in candidateApplyForVacancy() : "+data);
    let ret = axios.post(`${this.userURL}/api/v1/userApply/apply`,data);
    return ret;
}

getAppliedPositions(mail)
{
    console.log(" in getAppliedPositions() : "+mail);
    return axios.get( this.userURL+'/api/v1/userApply/get-bt-mail/'+mail) ;
}


//All company comms
companyRegisterVacancy(data)
{
    console.log(" in company register vacancy : "+data);
    let ret = axios.post(`${this.companyURL}hiring/save-vacancy`,data);
    return ret;
}

getCompanyVacancies()
{
    return axios.get(`${this.companyURL}hiring/get-all-vacancies`) ;
}

getAllCompanies()
{
    return axios.get(`${this.companyURL}Admin/view-all-companies`) ;
}

getAllStudents()
{
    return axios.get(`${this.companyURL}api/v1/userAuth/pass/all`) ;
}

getRecruitersByCompany()
{
    return axios.get(`${this.companyURL}recruiter/get-all`) ;
}

saveRecruitersByCompany(data)
{
    return axios.post(`${this.companyURL}recruiter/save-a-recruiter`,data) ;
}


getVacancyDetailsById(uuid)
{
    console.log(uuid);
    return axios.get( this.companyURL+'hiring/get-vacancy/'+uuid) ;
}

getAllApplicants()
{
    return axios.get(`${this.companyURL}Company/applications/get-all`) ;
}

getInvitedApplicants()
{
    return axios.get(`${this.companyURL}Company/invites/get-all-invited`) ;
}

getApplicantByMailId(mail)
{
    return axios.get(`${this.companyURL}Company/applications/get-by-id/${mail}`);
}

saveInterviewInvite(data)
{
    return axios.post(`${this.companyURL}Company/invites/save`,data);
}


}

export default new AuthenticationDataService();