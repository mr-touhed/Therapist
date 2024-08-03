import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'
import Providers from './provider/Providers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
    <RouterProvider router={router}>
            <App />
    </RouterProvider>
    </Providers>
  </React.StrictMode>,
)
