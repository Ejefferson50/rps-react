import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

export default class GameOver extends Component {
  constructor(props) {

    super(props);
    this.state = {
      show: true,
      result: this.props.matchResult
    }
  }

  handleReset = () => {
    this.setState({
      show: false,
            
    })
    this.props.reset(false);   
  }

  render() {
    
    return (
      <>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
    <Modal.Title>{this.state.result}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Result Picture Will Be Placed Here
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleReset}>
              Play Again?
            </Button>
            <Link to="/" >
            <Button variant="secondary" onClick={this.handleReset}>Quit</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}