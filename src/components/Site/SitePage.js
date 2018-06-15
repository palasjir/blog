import React from 'react'
import styled from 'styled-components'

const SitePage = ({ className, children, forReading }) => (
  <div className={className}>{children}</div>
)

export default styled(SitePage)`
  padding-top: ${props => props.theme.s};
  max-width: ${props => (props.forReading ? '1080px' : '1440px')};
  min-width: 300px;
`
