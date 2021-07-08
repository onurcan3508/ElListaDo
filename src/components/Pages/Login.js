import React from 'react'
import { Link } from 'react-router-dom';
import "../scss/Login.scss"
import {auth, provider} from "../firebase";
import Google_PNG from "../İmages/google.png"


const Login = ({Logincheck, setLogincheck}) => {


    const SignGoogle = () => {
        auth.signInWithPopup(provider)
        .catch((error) => {
            alert(error.message);
        })
    }




    return (
      <section className="login">
        <div className="loginContainer">
            <label>Kullanıcı Adı</label>
            <input type="text"/>
            <p className="errorMsg"></p>
            <label>Şifre</label>
            <input type="password"/>
            <p className="errorMsg"></p>
            <div className="btnContainer">
            <button>Giriş Yap</button>
            <button onClick={SignGoogle} className="mt-2 google-button"><img src={Google_PNG}></img>Google ile giriş yap</button>
            <p>Üye değil misiniz? <Link className="sign-up">Üye Ol</Link></p>
            </div>
        </div>
    </section>
    );
}

export default Login
