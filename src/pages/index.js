import React from "react"
import { initializeApp } from "../config/firebase.config"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.css"
import Header from "../components/header"

export default () => (
  <div>
    <Header></Header>
    <Header></Header>
    <Header></Header>
  </div>
)
