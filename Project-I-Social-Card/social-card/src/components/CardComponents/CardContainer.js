import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

function CardContainer() {
  return (
    <a href="https://www.reactjs.org">
      <CardBanner />
      <CardContent />
    </a>
  );
}


export default CardContainer;
