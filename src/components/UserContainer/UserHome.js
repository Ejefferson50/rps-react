import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import RulesButton from '../ButtonContainer/RulesButton';
import { Link } from 'react-router-dom';
import logolite from '../../images/logolite.png';
import {AmplifySignOut} from '@aws-amplify/ui-react';




export default class UserHome extends Component {

    render() {
        return (
            <div className="user-home">              

                <div className="usercontainer">
                    
                    <img src={logolite} alt="logo" />                               


                    <div className="user-home-buttons">
                    <h5>Welcome User</h5>   
                        <Link to="/user/pve" id="user-home-link"><button>PvE</button></Link>
                        <br />
                        <Link to="/user/pvp" id="user-home-link"><button>PvP</button></Link>
                        <br />
                        <Link to="/user/profile" id="user-home-link"><button>Profile</button></Link>
                        <br /> 
                        <Link to="/user/donation" id="user-home-link"><button>Donate</button></Link>
                        <br/>
                        <AmplifySignOut/>
                                               
                        <RulesButton />
                    </div>
                </div>
            </div>
        );
    }
}