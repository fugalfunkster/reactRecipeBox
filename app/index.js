import React from 'react';
import ReactDOM  from 'react-dom';

import Button from'react-bootstrap/lib/Button';
import ButtonToolbar from'react-bootstrap/lib/ButtonToolbar';
import Accordion from'react-bootstrap/lib/Accordion';
import Panel from'react-bootstrap/lib/Panel';
import ListGroup from'react-bootstrap/lib/ListGroup';
import ListGroupItem from'react-bootstrap/lib/ListGroupItem';

const recipeData = [
  {
    name: 'Lasagna',
    ingredients: ['pasta', 'tomato sauce', 'ground beef', 'mozarella']
  },
  {
    name: 'Pastagana',
    ingredients: ['pasta', 'tomato sauce', 'ground beef', 'mozarella']
  },
  {
    name: 'Pastagonia',
    ingredients: ['pasta', 'tomato sauce', 'ground beef', 'mozarella']
  }
];

const App = React.createClass({
  render () {
    return (
      <Panel>
        <RecipeList></RecipeList>
        <Button bsStyle="success">Add A Recipe!</Button>
      </Panel>
    );
  }
});

const RecipeList = props => {
  const recipes = recipeData.map((recipe, index) => {
    return (
      <Panel header={recipe.name} eventKey={index} key={index}>
        <IngredientsList ingredients={recipe.ingredients}></IngredientsList>
        <ButtonToolbar>
          <Button bsStyle="primary">Edit</Button>
          <Button bsStyle="danger">Delete</Button>
        </ButtonToolbar>
      </Panel>
    );
  });
  return <Accordion>{recipes}</Accordion>;
};

const IngredientsList = props => {
  const ingredients = props.ingredients.map((ingredient, index) => {
    return  <ListGroupItem key={index}>{ingredient}</ListGroupItem>;
  });
  return <ListGroup>{ingredients}</ListGroup>;
};

ReactDOM.render(<App />, document.getElementById('app'));
