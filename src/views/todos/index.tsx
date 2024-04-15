import React from 'react'
import { ErrorComponent } from '../../components/error'

export const Todos : React.FC = () =>{
  return (
    <div className='container'>
        <ErrorComponent message='Awaiting todos' />
    </div>
  )
}
