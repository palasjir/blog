import React from 'react'
import styled from 'styled-components'
import DirectionButton from './DirectionButton'

const PrevButton = ({ title, to }) => (
  <DirectionButton title={title} to={to} type="prev" />
)

export default PrevButton
