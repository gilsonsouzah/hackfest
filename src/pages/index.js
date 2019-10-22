import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
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
=======

import '../styles/main.css'
import { Page } from '../components'

export default () => <Page />
>>>>>>> f5e0cb47b142fbb09c0e6143d214fcaa5ed18178
