import React from 'react'
import { Link } from 'react-router-dom'

export const Home : React.FC = ()=> {
  return (
    <div className='container'>
        <div className='rounded-3 shadow mt-5 p-2'>
            <h2 className='m-3'>Hello There</h2>
            <p className='m-3'>
              This React app is built for interacting with
               <a href="https://tanstack.com/query/latest/docs/framework/react/overview" target='_blank' className='btn btn-outline-primary btn-sm mx-3'>Tanstack React Query </a> 
              which is an awesome library for state and APIs query handling.
              <br />
              <br />
              Keep browsing down here for more.
            </p>
            <div className='m-3 mt-5 d-flex justify-content-between'>
              <Link to="/" className='btn btn-outline-primary w-25'>Home</Link>
              <Link to="/example" className='btn btn-outline-success w-25'>Tanstack Example</Link>
              <Link to="/todos" className='btn btn-outline-info w-25'>Typecode API Todos</Link>
            </div>
        </div>
    </div>
  )
}
