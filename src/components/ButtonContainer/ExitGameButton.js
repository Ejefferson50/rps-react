import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


export default class ExitGameButton extends Component{

    render(){
        const Button = withRouter(({history}) => (
            <button       
            type="button" className="exit"
            id="game-button"
            onClick={() => {history.push('/home')}}
            > Exit</button>
        ));
        return <Button /> 
    }
} 