import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import SitePage from '../components/Site/SitePage'
import PageSection from '../components/Page/PageSection'
import PageSectionTitle from '../components/Page/PageSectionTitle'
import PostsList from '../components/Posts/PostsList'
import SectionIcon from '../components/Icon/writting.svg'

export default class BlogPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <SitePage>
        <Helmet title={siteTitle} />
        <PageSection icon={<SectionIcon />}>
          <PageSectionTitle>Writing</PageSectionTitle>
          <p>
            Subscribe <a href="/feed.xml">via RSS</a>
          </p>
          <PostsList posts={posts} />
        </PageSection>
      </SitePage>
    )
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            fulldate: date
            title
          }
        }
      }
    }
  }
`
