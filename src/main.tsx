import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './config.ts'
import "bootstrap/dist/js/bootstrap.min.js";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
