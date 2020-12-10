import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3001/usuarios";

const cookies = new Cookies();
class Login extends Component {

    state={
        form:{
            email:'',
            password:''
        }
    }

    iniciarSesion=async() =>{
        await axios.get(baseUrl, {params: {email: this.state.form.email, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id,{path: "/"});
                cookies.set('apellido', respuesta.apellido,{path: "/"});
                cookies.set('nombre', respuesta.nombre,{path: "/"});
                cookies.set('email', respuesta.email,{path: "/"});
           
                alert(`Bienvenido ${respuesta.nombre}`);
                window.location.href="./home";

            }
        })
        .catch(error=>{
            console.log(error);
            alert('El usuario o la contraseña no son correctos:')
        })
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }



    render() {
        return (
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                    <svg width="10em" height="10em" viewBox="0 0 16 16" class="bi bi-lock" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="btnLock">
                    <path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                    </svg>
                    <br/>
                        <label>Email:</label>
                        <br/>
                        <input type="text" className="form-control" name="email" onChange={this.handleChange}/>
                        <br/>
                        <label>Password:</label>
                        <br/>
                        <input type="password" className="form-control" name="password" onChange={this.handleChange}/>
                        <br/>
                        <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Log In</button>
                    </div>

                </div>

            </div>
        );
    }
}

export default Login;