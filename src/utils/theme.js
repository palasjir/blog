import styledNormalize from 'styled-normalize'
import { injectGlobal, css } from 'styled-components'

const theme = {
  xxs: '4px',
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '64px',
  xxl: '80px',
  maxVw: '1440px',
  maxVwRead: '1080px',
  minVw: '300px',
  colors: {
    primary: '#fd9721',
    primaryDark: '#eb613d',
    secondary: '#60d9ef',
    text: '#282B2e',
    textBg: 'floralwhite',
    back: '#ffffff',
    footer: '#3e4043',
    lesser: '#bbc0c6',
    shadow: '#828282',
    sectionBorder: '#eee',
  },
}

export const small = (...args) => css`
  @media screen and (max-width: 600px) {
    ${css(...args)};
  }
`
export const medium = (...args) => css`
  @media screen and (min-width: 601px) and (max-width: 1200px) {
    ${css(...args)};
  }
`
export const large = (...args) => css`
  @media screen and (min-width: 1201px) {
    ${css(...args)};
  }
`

export const fluidType = (property, minVw, maxVw, minSize, maxSize) =>
  `${property}: ${minSize};

@media screen and (min-width: ${minVw}) {
  ${property}: calc(${minSize} + ${(
    parseFloat(maxSize) - parseFloat(minSize)
  ).toFixed(3)} * ((100vw - ${minVw}) / ${parseFloat(maxVw) -
    parseFloat(minVw)}));
}

@media screen and (min-width: ${maxVw}) {
  ${property}: ${maxSize};
}
`

export const fluidText = fluidType.bind(null, 'font-size')

const fontUrl = 'https://fonts.googleapis.com/css?family=Space+Mono:400,700'

injectGlobal`
  ${styledNormalize}
  
  @import url(${fontUrl});
  
  html {
    font-size: 1em;
    min-width: ${theme.minVw};
  }
  
  body {
    font-family: "Space Mono", monospace, sans-serif;
    font-variant-ligatures: no-common-ligatures;
    padding: 0;
    margin: 0;
    line-height: 1.45;
    color: ${theme.colors.black};
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 ${theme.m} 0;
    line-height: 1.3;
  }
  
  p {
    margin: 0;
    line-height: 1.6;
  }
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: bold;
    &:hover{
      color: ${theme.colors.secondary};
      text-decoration: underline;
    }
  }
`

export default theme
