import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Route'
import Provider from './Provider/Provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' max-w-7xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <RouterProvider router={Routes}></RouterProvider>
        </Provider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
