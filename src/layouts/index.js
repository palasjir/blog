import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import SiteFooter from '../components/Site/SiteFooter'
import SiteContent from '../components/Site/SiteContent'
import SiteHeader from '../components/Site/SiteHeader'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: ${props => props.theme.s};
`

const InnerWrapper = styled.div`
  margin: 0 auto;
  min-height: calc(100vh - ${props => props.theme.s});
  min-width: 300px;
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <InnerWrapper>
            <SiteHeader siteTitle="Jiri Palas" />
            <SiteContent>{children()}</SiteContent>
          </InnerWrapper>
          <SiteFooter />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default Template
