import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Child from './Child.jsx'
import NotFound from './NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/home',
    Component: Navbar,
  },
  {
    path: '/child',
    Component: Child,
  },
  {
    path: '*',
    Component: NotFound,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)