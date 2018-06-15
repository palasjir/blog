import React from 'react'
import Helmet from 'react-helmet'
import SitePage from '../components/Site/SitePage'
import PageSection from '../components/Page/PageSection'
import PageSectionTitle from '../components/Page/PageSectionTitle'
import { createTitle } from '../utils/utils'
import BioIcon from '../components/Icon/bio.svg'

const pageTitle = 'About'

export default class AboutPage extends React.Component {
  render() {
    return (
      <SitePage>
        <Helmet title={createTitle(pageTitle)} />
        <PageSection icon={<BioIcon />}>
          <PageSectionTitle>Bio</PageSectionTitle>
          <p>
            I'm a software engineer. My expertise is web and mobile app
            development, computer vision, machine learning, I'm big fan of
            functional programming.
          </p>
          <p>
            In a personal life I am an enthusiastic climber, MTB rider, skier
            and sci-fi fan.
          </p>
        </PageSection>
      </SitePage>
    )
  }
}
