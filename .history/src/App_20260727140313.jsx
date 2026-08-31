import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  }
])


const App = () => {

}

export default App
