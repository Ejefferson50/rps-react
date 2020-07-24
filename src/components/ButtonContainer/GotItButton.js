import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


export default class GotItButton extends Component{

    render(){
        const Button = withRouter(({history}) => (
            <button       
            type="button" class = "gotit"
            id="game-button"
            onClick={() => {history.push('/')}}
            > <b>Got It! </b></button>
        ));
        return <Button /> 
    }
} 