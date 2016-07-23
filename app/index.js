import React from 'react';
import ReactDOM  from 'react-dom';

import Panel from'react-bootstrap/lib/Panel';
import Button from'react-bootstrap/lib/Button';
import Modal from './modal';

import RecipeList from './recipeList';
import recipeData from './data';

const App = React.createClass({
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
    return (
      <Panel>
        <RecipeList recipeData={recipeData}></RecipeList>
        <Button bsStyle="success" onClick={this.open} >Add A Recipe!</Button>
        <Modal title={'Add a New Recipe'} name={"Enter the Recipe's Name"} success={'Add Recipe'} ingredients={"Enter the Recipe's Ingredients, Separated by Commas"} close={this.close} show={this.state.showModal}/>
      </Panel>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
