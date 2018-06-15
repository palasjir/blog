import React from 'react'
import styled from 'styled-components'
import { large, medium, small, fluidText } from '../../utils/theme'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  ${fluidText('400px', '900px', '24px', '32px')} margin-bottom: 16px;
  text-transform: uppercase;
`

Nav.List = styled.ul`
  list-style: none;
  text-align: center;
  display: inline-flex;
  margin: 0;
  padding: 0;
`

Nav.Item = styled.li`
  margin-left: 8px;
  margin-right: 8px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`

Nav.Link = styled.a`
  font-weight: 500;
  transition: color 0.1s cubic-bezier(0.47, 0, 0.75, 0.72);
  text-decoration: none;
`

export default () => (
  <Nav>
    <Nav.List>
      <Nav.Item>
        <Nav.Link href="/blog/">Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about/">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects/">Projects</Nav.Link>
      </Nav.Item>
    </Nav.List>
  </Nav>
)
