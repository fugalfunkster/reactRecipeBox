import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from'react-bootstrap/lib/Button';
import FormGroup from'react-bootstrap/lib/FormGroup';
import FormControl from'react-bootstrap/lib/FormControl';
import ControlLabel from'react-bootstrap/lib/ControlLabel';

module.exports = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },
  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },
  handleChange(e) {
    this.setState({ value: e.target.value });
  },
  render() {
    return (
  <Modal show={this.props.show} onHide={this.props.close}>
    <Modal.Header>
      <Modal.Title>{this.props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <FormGroup controlId="formBasicText"
                   validationState={this.getValidationState()}>
          <ControlLabel>Recipe Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.props.name}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Ingredients</ControlLabel>
          <FormControl componentClass="textarea" placeholder={this.props.ingredients} />
        </FormGroup>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={this.props.close}>Cancel</Button>
      <Button bsStyle="primary">{this.props.success}</Button>
    </Modal.Footer>
  </Modal>
    );
  }
});

    
