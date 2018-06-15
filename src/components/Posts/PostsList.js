import React from 'react'
import styled from 'styled-components'
import { large } from '../../utils/theme'
import PostTime from './PostTime'
import SectionList from '../Section/SectionList'
import SectionItemTitle from '../Section/SectionItemTitle'

const PostsListItem = ({ node }) => {
  const { title, date, fullDate } = node.frontmatter
  return (
    <SectionList.Item key={node.fields.slug}>
      <PostTime dateTime={fullDate}>{date}</PostTime>
      <SectionItemTitle link={node.fields.slug}>{title}</SectionItemTitle>
      <p>{node.excerpt}</p>
    </SectionList.Item>
  )
}

const PostsList = ({ className, posts }) => (
  <SectionList className={className}>
    {posts.map(({ node }, i) => (
      <PostsListItem key={i.toString()} node={node} />
    ))}
  </SectionList>
)

export default PostsList
