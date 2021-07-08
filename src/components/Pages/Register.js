import React from 'react'
import "../scss/Login.scss"


const Register = () => {
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text"/>
                <p className="errorMsg"></p>
                <label>Password</label>
                <input type="password"/>
                <p className="errorMsg"></p>
                <div className="btnContainer">
                <button>Sign in</button>
                <p>Do you have an account? <span>Sign in</span></p>
                </div>
            </div>
        </section>
    )
}

export default Register
