import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom"
// Component files
import TodoContainer from "./components/TodoContainer"
import About from './pages/About'
import NotMatch from './pages/NotMatch'
import Navbar from "./pages/Navbar"

// Stylesheet
import "./App.css"


ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
      <Navbar />
         <Routes>
            <Route path='/' element={<TodoContainer />}></Route>
            <Route path="about/*" element={<About/>}></Route>
            <Route path='*' element={<NotMatch />}></Route>
         </Routes>
      </BrowserRouter>

   </React.StrictMode>,
   document.getElementById('root')
)

