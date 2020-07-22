import React, { Component } from 'react';
import CancelButton from '../ButtonContainer/CancelButton';
import EnterButton from '../ButtonContainer/EnterButton';


export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="loginInfo">
                    <h1>Log In</h1>
                    <form>

                        <input className="inputBox username" type="text" name="username" placeholder="Username" />

                        <br />
                        <br />

                        <input className="inputBox password" type="password" name="password" placeholder="Password" />

                        <br />
                        <br />

                        <center>
                            <div class="btn-group" id="login-btn-group" role="group" aria-label="Basic example">
                                {/* <button type="button" className="btn btn-primary enter">Enter</button> */}
                                <EnterButton />
                                <CancelButton />
                            </div>
                        </center>
                        <br />
                        <button type="button" className="btn btn-link"><b>Forgot your password?</b></button>


                    </form>
                </div>
            </div>
        );
    }
}