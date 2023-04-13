import React from "react";
import "../styles/catalogo.css"
import MoreInfo from "./precio";
import Funcional from "./Funcional";

export default function Libro({valores}) {

  console.log(valores);
  return (
    <>
      <item className="ficha">
        <h2>{valores.nombre}</h2>

        <p> Del aclamado {valores.autor}</p>
       
        <p>${valores.precio} mxn</p>
       <MoreInfo edicion={valores.edicion} nombre={valores.nombre} />
       <Funcional  autor={valores.autor}/>

      </item>
    </>
  );
}
