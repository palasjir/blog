import React from 'react'
import styled from 'styled-components'

const SiteContent = styled(({ className, children }) => (
  <main className={className} aria-label="Content">
    {children}
  </main>
))`
  display: flex;
  justify-content: center;
`

export default SiteContent
