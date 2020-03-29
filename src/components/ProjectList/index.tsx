import React from 'react'
import styled from "styled-components"
import Image from "gatsby-image"

const ProjectLink = styled.div`
  height: 335px;
  width: 320px;
`

const StyledProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  width: 100%;
  grid-gap: 60px;
`

const ProjectList = ({ projects }) => (
  <StyledProjectList>
    { projects.map(({ title, image_1 }) => (
      <ProjectLink>
        <Image alt={title} sizes={image_1?.sizes} />
      </ProjectLink>
    )) }
  </StyledProjectList>
)

export default ProjectList
