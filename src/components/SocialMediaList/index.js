import React from 'react'
import GithubSvg from './icons/github'
import TwitterSvg from './icons/twitter'
import LinkedinSvg from './icons/linkedin'
import RssSvg from './icons/rss'
import styled from 'styled-components'

const SocialMedia = {}

SocialMedia.Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`

SocialMedia.List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
`

const Separator = styled.span`
  display: block;
  height: 1px;
  border-bottom: 1px dotted #282b2e;
  width: 50px;
  margin-left: 10px;
  margin-right: 10px;
`

SocialMedia.Item = styled(({ className, children, link, title }) => {
  return (
    <li className={className}>
      <a href={link} target="_blank" rel="noopener" aria-label={title}>
        {children}
      </a>
    </li>
  )
})`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  margin-bottom: 0;
  color: ${props => props.theme.colors.lesser};

  &:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    box-shadow: none;
    &:hover svg {
      fill: ${props => props.theme.colors.secondary};
    }
  }

  svg {
    fill: ${props => props.theme.colors.lesser};
  }
`

const SocialMediaList = () => (
  <SocialMedia.Wrapper>
    <Separator />
    <SocialMedia.List>
      <SocialMedia.Item link="//github.com/palasjir" title="Github">
        <GithubSvg />
      </SocialMedia.Item>
      <SocialMedia.Item link="//twitter.com/palasjir" title="Twitter">
        <TwitterSvg />
      </SocialMedia.Item>
      <SocialMedia.Item link="//linkedin.com/in/palasjir" title="Linkedin">
        <LinkedinSvg />
      </SocialMedia.Item>
      <SocialMedia.Item link="/rss.xml" title="Rss">
        <RssSvg />
      </SocialMedia.Item>
    </SocialMedia.List>
    <Separator />
  </SocialMedia.Wrapper>
)

export default SocialMediaList
