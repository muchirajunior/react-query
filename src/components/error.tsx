import React from 'react'
import image from '../assets/error.png';

export const  ErrorComponent : React.FC<{message:string}> = ({message}) =>{
  return (
    <div className='container bg-danger-subtle mt-5 mx-auto d-flex p-2 align-items-center shadow rounded-3'>
        <img src={image} className='col-1 m-3 rounded-circle' width={200} alt="Error image" />
        <span className='fw-semi-bold text-muted ms-3 flex-fill text-center'> {message} </span>
    </div>
  )
}