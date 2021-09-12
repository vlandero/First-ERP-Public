import React, {useState} from 'react'
import './login.css'
import GoogleLogin from 'react-google-login'

export default function LoginPage() {
    
    let successGoogle = () => {
        alert('Success!');
    }
    let failureGoogle = () => {
        alert('Something went wrong');
    }
    let [nume,setNume] = useState('');
    let [pass,setPass] = useState('');

    function handleChangeNume(e){
        setNume(e.target.value);
    }
    function handleChangePass(e){
        setPass(e.target.value);
    }
    return (
        <div className = 'login-form'>
            <div className = 'div'>
                <form>
                    <div class="container">
                        <label for="uname" style = {{alignSelf:'flex-start'}}><b>Username</b></label>
                        <input className='login-inputs' type="text" placeholder="Username" name="uname" required onChange = {handleChangeNume} value={nume} />
                        <label for="psw" style = {{alignSelf:'flex-start'}}><b>Parola</b></label>
                        <input className='login-inputs' type="password" placeholder="Parola" name="psw" required onChange = {handleChangePass} value={pass} />
                        <button className='login-button' type="submit">Login</button>
                        <GoogleLogin clientId = '36440195250-d24nd0cepu0eagq7mhva79ejboiava49.apps.googleusercontent.com' onSuccess = {successGoogle} onFailure = {failureGoogle} buttonText = 'Login With Google'  cookiePolicy = {'single_host_origin'} redirectUri='https://firsterp.ro'></GoogleLogin>
                    </div>
                </form>
            </div>
        </div>
    )
}
