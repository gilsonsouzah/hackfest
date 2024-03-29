import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import { VCard } from '../'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        github {
          viewer {
            repositories(first: 100, ownerAffiliations: [ORGANIZATION_MEMBER]) {
              totalCount
              nodes {
                nameWithOwner
                name
                description
                url
                issues(states: OPEN) {
                  totalCount
                }
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.github.viewer.repositories.nodes
        .filter(obj => ['Vi-Ui', 'attiv'].includes(obj.name))
        .map(project => <VCard key={project.name} project={project}></VCard>)
    }
  />
)
