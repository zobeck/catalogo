import React from "react";
import "../styles/catalogo.css"
import MoreInfo from "./precio";

export default function Libro(props) {
  console.log(props);
  return (
    <>
      <item className="ficha">
        <h3> {props.title}</h3>
        <p>
          <i>{props.author}</i>
        </p>
        <MoreInfo description={props.description} price={props.price} stock={props.stock}/>
      </item>
    </>
  );
}
