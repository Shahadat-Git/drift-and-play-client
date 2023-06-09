import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import AuthProvider from './providers/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider context={{}}>
      <AuthProvider>
        <RouterProvider router={router}>

        </RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
