import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import SitePage from '../components/Site/SitePage'
import PageSection from '../components/Page/PageSection'
import PageSectionTitle from '../components/Page/PageSectionTitle'
import PostsList from '../components/Posts/PostsList'
import WritingIcon from '../components/Icon/writting.svg'
import { createTitle } from '../utils/utils'

export default class HomePage extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <SitePage>
        <Helmet title={createTitle('Home')} />
        <PageSection icon={<WritingIcon />}>
          <PageSectionTitle>Latest writting</PageSectionTitle>
          <PostsList posts={posts} />
          <p>
            Subscribe <a href="/feed.xml">via RSS</a>
          </p>
        </PageSection>
      </SitePage>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
    ) {
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
