import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class Home extends Component {

    getCurrentDate(separator=''){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
        
     }
     
     logout=()=>{

        cookies.remove('id', {path: "/"});
        cookies.remove('apellido', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('email', {path: "/"}); 
        window.location.href="./";
     }


    render() {
        return (
            <div className="containerPrincipal">
                <h2>Welcome</h2>
                <h4>Tha las time you accessed was</h4>
               
                <br/>
                        <button className="btn btn-primary" onClick={()=> this.logout()}>LOGOUT</button>
            </div>
            
           
        );
        
    }
}

export default Home;