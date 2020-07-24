import React, { Component } from 'react';
import Player from './Player';
import {Link} from 'react-router-dom'
import GameOver from '../CustomContainer/GameOver';



export default class PVE extends Component {
    constructor(props){
        super(props);

        this.state={
            scoreW:this.props.playerScore,
            scoreL:this.props.enemyScore,
            hasFinished: false,
            updatedWins: this.props.recordWins,
            updatedLosses: this.props.recordLoss,
            resultDisplay: "",
            matchResult: "",
            playerChoice: "rock",
            computerChoice: ""            
        }
    }

    //Player Selections
    rockSelect = () => {
        this.setState({
            playerChoice: "rock"
        })
    }

    paperSelect = () => {
        this.setState({
            playerChoice: "paper"
        })
    }

    scissorsSelect = () => {
        this.setState({
            playerChoice: "scissors"
        })
    }
    
    
    //Game Logic
    RPSGameplay(playerPick, computerPick) {

        if (playerPick === computerPick) {
            return 0;
        } else
            if (
                (playerPick === "rock" && computerPick === "scissors") ||
                (playerPick === "paper" && computerPick === "rock") ||
                (playerPick === "scissors" && computerPick === "paper")
            ) {
                return 1;
            } else {
                return -1;
            }

    }    

    //Play Again
    handleReset = (decision) =>{
        this.setState({
            hasFinished: decision,
            scoreW: 0,
            scoreL: 0
        })
    }

    //Run Game
    onShoot = () => {        

        //Player
        const player = this.state.playerChoice;
        console.log("Your choice", player);

        //Computer
        const choices = ["rock", "paper", "scissors"];
        const computer = choices[Math.floor(Math.random() * 3)];
        console.log("Computer choice", computer);      
        

        //Result
        const finalResult = this.RPSGameplay(this.state.playerChoice, computer);
        if (finalResult === -1) {
            this.props.updateEnemyState(this.state.scoreL + 1);
            this.setState({   
                scoreL: this.state.scoreL + 1,             
                computerChoice: computer,
                resultDisplay: "You Lose!"
            })

            //Checking If Match Point Loss
            if(this.state.scoreL + 1 === 3){
                this.setState({
                    hasFinished: true,
                    matchResult: "You Lose!",
                    updatedLosses: this.state.updatedLosses + 1,
                    resultDisplay: "",
                    computerChoice: ""
                })
                this.props.updateRecordLoss(this.props.recordLoss + 1);
                this.props.updatePlayerState(0);
                this.props.updateEnemyState(0);
            }

        } else if (finalResult === 1) {
            this.props.updatePlayerState(this.state.scoreW + 1);
            this.setState({  
                scoreW: this.state.scoreW + 1,              
                computerChoice: computer,
                resultDisplay: "You Win!"
            })

            //Checking If Match Point Win
            if(this.state.scoreW + 1 === 3){
                this.setState({
                    hasFinished: true,
                    matchResult: "You Win!",
                    updatedWins: this.state.updatedWins + 1,
                    resultDisplay: "",
                    computerChoice: ""
                })
                this.props.updateRecordWins(this.props.recordWins + 1);
                this.props.updatePlayerState(0);
                this.props.updateEnemyState(0);
            }
        } else {

            this.setState({
                computerChoice: computer,
                resultDisplay: "Tie!!"
            })
        }        
    }


    render() {
        const showResult = this.state.resultDisplay;
        const showPlayer = this.state.playerChoice;
        const showComputer = this.state.computerChoice;
        const wins = this.state.scoreW;
        const losses = this.state.scoreL;
        const isComplete = this.state.hasFinished;
        const gamePoint = {
            color: "#0091BF"
        }

        return (
            <div className="rps-game">
                <div className="result-message-display">
                    <div className="return">
                        <Link to="/">
                            <button>
                                <i class="fas fa-arrow-alt-circle-left"></i>
                            </button>
                        </Link>
                    </div>
                    <p id="result">{showResult}</p>                    
                </div>


                <div className="player-wins">
                    Player

                    <div className="starbar-player">
                        {wins >= 1 ? <i className="fas fa-star" style={gamePoint}></i> : <i className="fas fa-star"></i>}
                        {wins >= 2 ? <i className="fas fa-star" style={gamePoint}></i> : <i className="fas fa-star"></i>}
                        {wins >= 3 ? <i className="fas fa-star" style={gamePoint}></i> : <i className="fas fa-star"></i>}
                    </div>
                    <Player choice={showPlayer} />
                </div>


                <div className="player-choices">
                    <button
                        type="button"
                        value="rock"
                        onClick={this.rockSelect}
                    >
                        <i class="fas fa-hand-rock"
                            onClick={this.rockSelect} ></i>
                    </button>

                    <button
                        type="button"
                        value="paper"
                        onClick={this.paperSelect}
                    >
                        <i class="fas fa-hand-paper"
                            onClick={this.paperSelect}></i>
                    </button>

                    <button
                        type="button"
                        value="scissors"
                        onClick={this.scissorsSelect}
                    >
                        <i class="fas fa-hand-scissors"
                            onClick={this.scissorsSelect}
                        ></i>
                    </button>
                </div>

                <div className="cpu-wins">
                    Computer 
                    <div className="starbar-cpu">
                        {losses >= 1 ? <i className="fas fa-star" style={gamePoint}></i> : <i className="fas fa-star"></i>}
                        {losses >= 2 ? <i className="fas fa-star" style={gamePoint}></i> : <i className="fas fa-star"></i>}
                        {losses >= 3 ? <i className="fas fa-star" style={gamePoint}></i> : <i className="fas fa-star"></i>}
                    </div>
                    <Player choice={showComputer} />
                </div>

                <div className="confirm-choice">
                    <button
                        type="button"
                        value="shoot"
                        onClick={this.onShoot}
                    >Shoot!
                 </button>

                </div>
                {isComplete ?
                <GameOver 
                reset={this.handleReset}                              
                matchResult={this.state.matchResult}
                /> :
                null
                }            
            </div>
        );
    }
}