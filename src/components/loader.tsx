import React from 'react'
import image from '../assets/loading.gif';

export const  Loader: React.FC<{message:string}> = ({message}) =>{
  return (
    <div className='m-5 mx-auto d-flex flex-row justify-content-between p-2 align-items-center shadow rounded-4' style={{maxWidth:600}}>
        <span className='fw-semi-bold fs-5 text-muted ms-3'> {message} </span>
        <img src={image} className='img-fluid col-5 rounded-circle' alt="loading gif" />
        
    </div>
  )
}