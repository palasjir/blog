import React from 'react'
import styled from 'styled-components'
import { large, small, medium } from '../../utils/theme'

const SectionBlock = styled.section`
  ${small`
    padding: ${props => `${props.theme.s} ${props.theme.m}`};
  `}
  ${medium`
    padding: ${props => `${props.theme.s} ${props.theme.l}`};
  `}
  ${large`
    padding: ${props => `${props.theme.m} ${props.theme.xl}`};
  `}
  position: relative;
  align-items: center;
  margin-bottom: ${props => props.theme.m};
`

const SectionBlockInner = styled.div`
  position: relative;
  z-index: 10;
  background: ${props => props.theme.colors.textBg};
  box-shadow: ${props =>
    `${props.theme.xs} ${props.theme.xs}`} rgba(0,0,0,0.15);
  min-height: ${props => props.theme.xl};
  border-left: solid ${props => props.theme.colors.sectionBorder};
  ${small`
    padding: ${props => props.theme.s};
    border-left-width: ${props => props.theme.xs};
  `}
  ${medium`
    padding: ${props =>
      `${props.theme.l} ${props.hasIcon ? props.theme.xl : props.theme.l}`};
    border-left-width: ${props => props.theme.s};
  `}
  ${large`
    padding: ${props => `${props.theme.l} ${props.theme.xxl}`};
    border-left-width: ${props => props.theme.m};
  `}
`

const IconBlock = styled.div`
  ${small`
    display: none;
  `};
  display: flex;
  position: absolute;
  left: -40px;
  top: 35px;
  ${large`
    left: -60px;
    top: 35px;
  `};
  justify-content: center;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 110;
  border-radius: 100%;
  border: ${props => props.theme.xxs} solid ${props => props.theme.colors.text};
  width: ${props => props.theme.xl};
  height: ${props => props.theme.xl};
  color: ${props => props.theme.colors.text};
  background: ${({ theme }) => theme.colors.primaryDark};
  border-color: ${({ theme }) => theme.colors.primaryDark};
  ${large`
    width: ${props => props.theme.xxl};
    height: ${props => props.theme.xxl};
  `};

  span {
    display: block;
  }

  svg {
    display: block;
    height: ${props => props.theme.l};
    width: ${props => props.theme.l};
    ${large`
      ${props => props.theme.xl};
      ${props => props.theme.xl};
    `} path, polygon, polyline, rect, line {
      fill: ${({ theme }) => theme.colors.text};
      stroke: ${({ theme }) => theme.colors.text};
      fill: white;
      stroke: white;
      fill: transparent;
    }
  }
`

const PageSection = ({ children, icon }) => (
  <SectionBlock>
    <SectionBlockInner hasIcon={!!icon}>
      {icon && (
        <IconBlock>
          <Icon>{icon}</Icon>
        </IconBlock>
      )}
      {children}
    </SectionBlockInner>
  </SectionBlock>
)

export default PageSection
