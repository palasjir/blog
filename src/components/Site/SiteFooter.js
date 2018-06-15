import React from 'react'
import styled from 'styled-components'

const SiteFooter = ({ className }) => {
  return (
    <footer className={className}>
      <p>
        Made by Jiri Palas in 2018 with{' '}
        <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a> using the{' '}
        <a href="http://ego-icons.com">Ego</a> icons. Typeset in{' '}
        <a href="https://fonts.google.com/specimen/Space+Mono">Space Mono</a>.
      </p>
    </footer>
  )
}

export default styled(SiteFooter)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  line-height: ${props => props.theme.m};
  background: #3e4043;
  padding: ${props => props.theme.xs};
  color: white;
  bottom: 0;
`
