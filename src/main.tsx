import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import OurTeam from './OurTeam.tsx'
import Events from './Events.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Signup.tsx'
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/our-team", element: <OurTeam /> },
  { path: "/sign-up", element: <Signup /> },
  { path: "/events", element: <Events /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
