import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from'react-bootstrap/lib/Button';
import FormGroup from'react-bootstrap/lib/FormGroup';
import FormControl from'react-bootstrap/lib/FormControl';
import ControlLabel from'react-bootstrap/lib/ControlLabel';

module.exports = React.createClass({
  getInitialState() {
    return {
      name: this.props.name,
      ingredients: this.props.ingredients
    };
  },
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  },
  handleIngredientsChange(e) {
    this.setState({ ingredients: e.target.value });
  },
  setSessionStorage() {
    sessionStorage.setItem(this.state.name, this.state.ingredients);
    this.props.onModalChange();
    this.props.close();
  },
  render() {
    return (
  <Modal show={this.props.show} onHide={this.props.close}>
    <Modal.Header>
      <Modal.Title>{this.props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Recipe Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Ingredients</ControlLabel>
          <FormControl componentClass="textarea" value={this.state.ingredients} onChange={this.handleIngredientsChange}/>
        </FormGroup>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={this.props.close}>Cancel</Button>
      <Button bsStyle="primary" onClick={this.setSessionStorage}>{this.props.success}</Button>
    </Modal.Footer>
  </Modal>
    );
  }
});

    
