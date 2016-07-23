import React from 'react';

import Button from'react-bootstrap/lib/Button';
import ButtonToolbar from'react-bootstrap/lib/ButtonToolbar';
import Accordion from'react-bootstrap/lib/Accordion';
import Panel from'react-bootstrap/lib/Panel';
import IngredientsList from './ingredientsList';
import Modal from './modal';

const RecipeList = React.createClass({
  getInitialState () {
    return { modalChanged: 0};
  },
  onModalChange () {
    this.setState({modalChanged: this.state.modalChanged + 1 });
  },
  render () {
    const recipes = Object.keys(sessionStorage).map((recipe, index) => {
      console.log(recipe, index, sessionStorage.getItem(recipe));
      return (
        <Panel header={recipe} eventKey={index} key={index}>
          <Recipe header={recipe} ingredients={sessionStorage.getItem(recipe)} onModalChange={this.onModalChange} />
        </Panel>
      );
    });
    return <Accordion>{recipes}</Accordion>;
  }
});

const Recipe = React.createClass({
  getInitialState() {
    return { showModal: false };
  },
  close() {
    this.setState({ showModal: false });
  },
  open() {
    this.setState({ showModal: true });
  },
  onDelete() {
    sessionStorage.removeItem(this.props.header);
    this.props.onModalChange();
  },
  render () {
    return (
    <div>
      <IngredientsList ingredients={this.props.ingredients}></IngredientsList>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.open}>Edit</Button>
          <Button bsStyle="danger" onClick={this.onDelete}>Delete</Button>
        </ButtonToolbar>
        <Modal title={"Edit This Recipe"} name={this.props.header} success={'Edit Recipe'}
               ingredients={this.props.ingredients} close={this.close} show={this.state.showModal}
               onModalChange={this.props.onModalChange} onDelete={this.onDelete} />
    </div>
    );
  }
});

module.exports = RecipeList;
