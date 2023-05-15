import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Posts from "./components/Posts"
import Albums from "./components/Albums"
import Imagen from "./components/Imagen"
import Tareas from "./components/Tareas"
import Users from "./components/Users"
import Comments from "./components/Comments"

const router = createBrowserRouter([

  { 
    path:"/Posts",
    element:<Posts/>,
  },

  { 
    path:"/Comments",
    element:<Comments/>,
  },

  { 
    path:"/Albums",
    element:<Albums/>,
  },

  { 
    path:"/Imagen",
    element:<Imagen/>,
  },

  { 
    path:"/Tareas",
    element:<Tareas/>,
  },

  { 
    path:"/Users",
    element:<Users/>,
  },



])
function App() {
  

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
