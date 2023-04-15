import React from 'react'
import { useState } from 'react';



function NewBookReg() {
 
   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");
   const [description, setDescription]  = useState("");
   const [price, setPrice]  = useState("");
   const [stock, setStock] = useState(false);

   const handleSubmit = (e) =>{
    e.preventDefault();
    alert("libro registrado con exito");
   }

  return (
  <>
   <h6>Registra un libro nuevo</h6>
   <form className='formulario'
   onSubmit={handleSubmit}
   >
    <label>Título</label>
    <input
    type="text"
    id='title'
    name='title'
    value={title}
    placeholder='Ingresa el título'
    onChange={(e)=> setTitle(e.target.value)}


    />

    <label>Autor</label>
    <input
    type='text'
    id='author'
    name="author"
    value={author}
    placeholder='Autor'
    onChange={(e) => setAuthor(e.target.value)}

    />

    <label>Descripción</label>
    <input
    type='text'
    id='description'
    name="description"
    value={description}
    placeholder='Agrega una breve descripción'
    onChange={(e) => setDescription(e.target.value)}

    />

    <label>precio</label>
    <input
     type="number"
     id='price'
     name='price'
     value={price}
     placeholder='Ingresa el precio'
     onChange={(e)=> setPrice(e.target.value)}
    />

    <label>En existencia</label>
    <input
     type="radio"
     id='enStock'
     name='Stock'
     value={true}
     placeholder='En stock'
     onChange={(e)=> setStock(e.target.value)}/>
 
 <label>Agotado</label>
<input
     type="radio"
     id='agotado'
     name='Stock'
     value={false}
     placeholder='Agotado'
     onChange={(e)=> setStock(e.target.value)}/>
   
    <button>
      Registrar libro
    </button>
   </form>
  </>
  )
}

export default NewBookReg