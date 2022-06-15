import React, { Component } from 'react';
import './register.css';

function Register() {
    return(
    <div class="container">
        <div class="img">
			<img src="public/guruku-bg.png" width="300" height="500">
		</div>
        <div className="register-content">
            <form action="" method="POST">
                <h2 class="title">Register</h2>

                <div className="formfill">
                    <input className="formfill" type="text" id="username" placeholder="Username"/>
                </div>

                <div className="formfill">
                    <input type="text" id="email" className="formfill" placeholder="Email"/>
                </div>

                <div className="formfill">
                    <input className="formfill" type="password"  id="password" placeholder="Password"/>
                </div>

                <div class="footer">
                    <button type="submit" class="btn">Register</button>
                    <a href="#">Sudah punya akun?</a>
                </div>
            </form>
        </div>
    </div>     
    )       
}
export default Register;