import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from './aws-exports.js';


 

//Importing Login Features
import Welcome from './components/LoginContainer/Welcome';
import Login from './components/LoginContainer/Login';
import Signup from './components/LoginContainer/Signup';

//Importing User Features
import UserHome from './components/UserContainer/UserHome';
import UserStats from './components/UserContainer/UserStats';
import Donation from './components/CustomContainer/Donation';
import Terms from './components/CustomContainer/Terms';
import Rules from './components/CustomContainer/Rules';
import PVE from './components/GameContainer/PVE';
import PVP from './components/GameContainer/PVP';
import { AmplifyAuthenticator,AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure (awsmobile);

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            totalWins:0,
            totalLoss:0,
            currentPlayerScore:0,
            currentEnemyScore:0
        }
    }

    handleRecordWins = (n) => {
        this.setState({totalWins: n})
    }

    handleRecordLosses = (n) => {
        this.setState({totalLoss: n})
    }

    handleCurrentPlayerScore = (n) => {
        this.setState({currentPlayerScore: n})
    }

    handleCurrentEnemyScore = (n) => {
        this.setState({currentEnemyScore: n})
    }

    render() {
        const wins = this.state.totalWins;
        const losses = this.state.totalLoss;
        const currentWins = this.state.currentPlayerScore;
        const currentLoss = this.state.currentEnemyScore;

        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Welcome} />
                        <Route path='/welcome' component={Welcome} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/terms' component={Terms} />
                        <Route exact path='/user' component={UserHome} />
                        <Route path='/user/rules' component={Rules} />
                        <Route path='/user/profile' render={(props) =>
                        <UserStats 
                        {...props}
                        recordWins={wins}
                        recordLoss={losses}
                        />} />
                        <Route path='/user/donation' component={Donation} />
                        <Route path='/user/pvp' component={PVP} />
                        <Route path='/user/pve' render={(props) => 
                        <PVE 
                        {...props}
                        updateRecordWins={this.handleRecordWins}
                        recordWins={wins}
                        updateRecordLoss={this.handleRecordLosses}
                        recordLoss={losses}
                        updatePlayerState={this.handleCurrentPlayerScore}
                        playerScore={currentWins}
                        updateEnemyState={this.handleCurrentEnemyScore}
                        enemyScore={currentLoss}
                        />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}