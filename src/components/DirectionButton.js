import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { medium } from '../utils/theme'

const Title = styled.span``

const ButtonTitle = ({ type, title }) => {
  switch (type) {
    case 'next':
      return (
        <Fragment>
          <Title>{title}</Title> →
        </Fragment>
      )
    case 'prev':
      return (
        <Fragment>
          ← <Title>{title}</Title>
        </Fragment>
      )
    default:
      return null
  }
}

const DirectionButton = ({ title, to, type }) => (
  <li>
    <Link to={to} rel={type}>
      <ButtonTitle type={type} title={title} />
    </Link>
  </li>
)

export default styled(DirectionButton)`
  list-style: none;
`
