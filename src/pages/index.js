import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.css'
import Header from '../components/header'

import authService from '../authService'
import ProjectCard from '../components/project-card'
export default () => (
  <div>
    <button onClick={() => authService.getUser()} variant="outline-dark">
      Login Github
    </button>
    <Header></Header>

    <ProjectCard></ProjectCard>
  </div>
)
