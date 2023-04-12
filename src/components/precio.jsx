import React, { Component } from 'react'

//Accediendo a las props desde un componente de clase
export default class MoreInfo extends Component {
  render() {
    return (
        <>
        <p>{this.props.description}</p>
        <p> ${this.props.price} mxn</p>
        <p> {this.props.stock}</p>
        </>
    )
  }
}
