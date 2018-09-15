import React from "react";
import "./fantasyCard.css";

const FantasyCard = props => (

  <img className="img-thumbnail" 
  value={props.id}
  onClick={() => props.handleClick(props.id)} 
  alt={props.name} src={props.image} />


);

export default FantasyCard;