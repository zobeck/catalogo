import React from 'react'

export default function Fruteria({name,precio,stock}) {
    console.log(stock)
   
  return (
   <>
     <div>fruteria Graciela</div>
    <h3> {name} </h3>
    <p>{precio}</p>

   </>

  )
}
