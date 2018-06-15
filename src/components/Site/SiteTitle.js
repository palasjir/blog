import React from 'react'
import styled from 'styled-components'
import { fluidText } from '../../utils/theme'

const Link = styled.a`
  display: flex;
  justify-content: center;
  font-size: calc(2em + 4vmin);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.005rem;
  color: ${props => props.theme.colors.text};
  &:hover {
    text-decoration: none;
  }
`

const SiteTitle = ({ title }) => <Link href="/">{title}</Link>

export default SiteTitle
