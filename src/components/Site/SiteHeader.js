import React from 'react'
import styled from 'styled-components'
import Index from '../SocialMediaList/index'
import SiteTitle from './SiteTitle'
import SiteNavigation from './SiteNavigation'

const Wrapper = styled.header`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  margin: 0 auto ${props => props.theme.s};
  border-bottom: solid 1px lighten(, 40%);
  color: ;
  width: 100%;
`

export default ({ siteTitle }) => (
  <Wrapper>
    <SiteTitle title={siteTitle} />
    <SiteNavigation />
    <Index />
  </Wrapper>
)
