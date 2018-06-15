import { large } from '../../utils/theme'
import styled from 'styled-components'

const SectionList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

SectionList.Item = styled.li`
  margin-bottom: ${props => props.theme.l};
  ${large`
    width: calc((100% - 80px)/2);
    &:nth-child(2n) {
      margin-left: 80px;
    }
  `};
`

SectionList.Title = styled.h3`
  margin-bottom: ${props => props.theme.m};
`

export default SectionList
