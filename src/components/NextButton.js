import React from 'react'
import styled from 'styled-components'
import DirectionButton from './DirectionButton'

const NextButton = ({ title, to }) => (
  <DirectionButton title={title} to={to} type="next" />
)

export default NextButton
