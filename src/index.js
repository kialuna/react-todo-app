import React from "react"
import {createRoot} from "react-dom/client"
// Component file
import TodoContainer from "./components/TodoContainer"
// Stylesheet
import "./App.css"

const root=createRoot(document.getElementById("root"))

root.render(
   <React.StrictMode>
    <TodoContainer />
    </React.StrictMode> 
)

