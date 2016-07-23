import React from 'react';

import ListGroup from'react-bootstrap/lib/ListGroup';
import ListGroupItem from'react-bootstrap/lib/ListGroupItem';

const IngredientsList = props => {
  const ingredients = props.ingredients.split(',').map((ingredient, index) => {
    return  <ListGroupItem key={index}>{ingredient}</ListGroupItem>;
  });
  return <ListGroup>{ingredients}</ListGroup>;
};

module.exports = IngredientsList;
