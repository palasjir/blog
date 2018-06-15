import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import get from 'lodash/get'
import PrevButton from '../components/PrevButton'
import NextButton from '../components/NextButton'
import SitePage from '../components/Site/SitePage'
import PageSection from '../components/Page/PageSection'
import 'prismjs/themes/prism-tomorrow.css'
import PostTime from '../components/Posts/PostTime'

const BlogPostHeader = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${props => props.theme.xs};
  }
  margin-bottom: ${props => props.theme.l};
`

const BlogPostFooter = styled(({ className, next, prev }) => (
  <ul className={className}>
    {prev && (
      <PrevButton to={prev.fields.slug} title={prev.frontmatter.title} />
    )}
    {next && (
      <NextButton to={next.fields.slug} title={next.frontmatter.title} />
    )}
  </ul>
))`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.m}
    calc(2 * ${props => props.theme.l} + ${props => props.theme.m});
`

const BlogPostBody = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: ${props => props.theme.m} 0 ${props => props.theme.s} 0;
  }
  ol,
  ul {
    line-height: 1.6;
  }
  blockquote {
    border-left: 4px solid hotpink;
    padding-left: ${props => props.theme.s};
    margin: ${props => props.theme.s};
  }
  .gatsby-resp-image-link {
    margin-bottom: ${props => props.theme.m};
    margin-top: ${props => props.theme.m};
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous: prev, next } = this.props.pathContext

    return (
      <SitePage forReading>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <PageSection>
          <BlogPostHeader>
            <h2>{post.frontmatter.title}</h2>
            <PostTime dateTime={post.frontmatter.fullDate}>
              {post.frontmatter.date}
            </PostTime>
          </BlogPostHeader>
          <BlogPostBody dangerouslySetInnerHTML={{ __html: post.html }} />
        </PageSection>
        <BlogPostFooter next={next} prev={prev} />
      </SitePage>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        fulldate: date
      }
    }
  }
`
