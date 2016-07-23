import React from 'react';

import Button from'react-bootstrap/lib/Button';
import ButtonToolbar from'react-bootstrap/lib/ButtonToolbar';
import Accordion from'react-bootstrap/lib/Accordion';
import Panel from'react-bootstrap/lib/Panel';
import IngredientsList from './ingredientsList';
import Modal from './modal';

const RecipeList = React.createClass({
  getInitialState() {
    return { showModal: false };
  },
  close() {
    this.setState({ showModal: false });
  },
  open() {
    this.setState({ showModal: true });
  },
  render () {
    const recipes = this.props.recipeData.map((recipe, index) => {
      return (
        <Panel header={recipe.name} eventKey={index} key={index}>
          <IngredientsList ingredients={recipe.ingredients}></IngredientsList>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.open}>Edit</Button>
            <Button bsStyle="danger">Delete</Button>
          </ButtonToolbar>
          <Modal title={"Edit This Recipe"} name={recipe.name} success={'Edit Recipe'} ingredients={recipe.ingredients} close={this.close} show={this.state.showModal}/>
        </Panel>
      );
    });
    return <Accordion>{recipes}</Accordion>;
  }
});

module.exports = RecipeList;
