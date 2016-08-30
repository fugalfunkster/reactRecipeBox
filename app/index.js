import React from 'react';
import ReactDOM  from 'react-dom';

import Panel from'react-bootstrap/lib/Panel';
import Button from'react-bootstrap/lib/Button';
import Modal from './modal';

import RecipeList from './recipeList';

sessionStorage.setItem('Lasagna', 'pasta, tomato sauce, ground beef, mozarella');
sessionStorage.setItem('Hummus', 'tahini, garbanzo beans, lemon juice, cumin');
sessionStorage.setItem('Root Beer Float', 'root beer, ice cream');

Object.keys(sessionStorage).forEach(function(key){
});

const App = React.createClass({
  getInitialState() {
    return { showModal: false,
             modalChanged: 0};
  },
  onModalChange () {
    this.setState({modalChanged: this.state.modalChanged + 1 });
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
        <RecipeList></RecipeList>
        <Button bsStyle="success" onClick={this.open} >Add A Recipe!</Button>
        <Modal title={'Add a New Recipe'} name={"Enter the Recipe's Name"} success={'Add Recipe'} ingredients={"Enter the Recipe's Ingredients, Separated by Commas"} close={this.close} onModalChange={this.onModalChange} show={this.state.showModal}/>
      </Panel>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
