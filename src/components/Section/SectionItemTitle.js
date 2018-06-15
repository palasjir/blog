import React from 'react'
import SectionList from './SectionList'

const SectionItemTitle = ({ children, link }) => (
  <SectionList.Title>
    <a href={link}>{children}</a>
  </SectionList.Title>
)

export default SectionItemTitle
