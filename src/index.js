import React from "react"
import {createRoot} from "react-dom/client"
// Component file
import TodoContainer from "./functionBased/components/TodoContainer"
// Stylesheet
import "./functionBased/App.css"

const root=createRoot(document.getElementById("root"))

root.render(
   <React.StrictMode>
    <TodoContainer />
    </React.StrictMode> 
)

