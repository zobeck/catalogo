import React, { Component } from 'react'

//Accediendo a las props desde un componente de clase
export default class MoreInfo extends Component {
  render() {
    
    return (
        <>
        <p>{this.props.edicion}</p>
        <p><i>{this.props.nombre}</i></p>
    
        
        </>
    )
  }
}
