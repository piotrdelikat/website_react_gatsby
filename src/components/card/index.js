import React from 'react';

import './_card.scss';

const Card = (props) => (
<div className="card">
  <img className="img-fluid mw-100 card-img-top" src={props.src} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Lorem Ipsum</h5>
    <p className="card-text">Dolor sit amet consectetur adipisicing elit.<br/> Repellendus, soluta!</p>
  </div>
</div>
);

export default Card;