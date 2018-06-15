import React from 'react'
import Helmet from 'react-helmet'
import PageSection from '../components/Page/PageSection'
import SitePage from '../components/Site/SitePage'
import { createTitle } from '../utils/utils'
import PageSectionTitle from '../components/Page/PageSectionTitle'
import ProjectsIcon from '../components/Icon/projects.svg'
import SectionList from '../components/Section/SectionList'
import projects from '../data/projects.yml'
import SectionItemTitle from '../components/Section/SectionItemTitle'

const pageTitle = 'Projects'

const ProjectsList = ({ projects }) =>
  projects ? (
    <SectionList>
      {projects.map(project => (
        <ProjectsListItem key={project.id} project={project} />
      ))}
    </SectionList>
  ) : null

const ProjectsListItem = ({ project }) => (
  <SectionList.Item>
    <SectionItemTitle link={project.link}>{project.title}</SectionItemTitle>
    <p>{project.description}</p>
  </SectionList.Item>
)

const ProjectsPage = () => (
  <SitePage>
    <Helmet title={createTitle(pageTitle)} />
    <PageSection icon={<ProjectsIcon />}>
      <PageSectionTitle>Side projects</PageSectionTitle>
      <ProjectsList projects={projects} />
    </PageSection>
  </SitePage>
)

export default ProjectsPage
