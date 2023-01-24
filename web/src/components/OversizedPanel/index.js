import React from 'react'
import styled from 'styled-components'

const Panel = styled.div`
  position: relative;
  width: calc(100% - 1rem);
  margin: 0 auto;
`

const PanelTop = styled.div`
  content: '';
  position: absolute;
  top: -0.5rem;
  left: 0;
  height: 1rem;
  width: 100%;
`

const PanelBottom = styled.div`
  position: absolute;
  top: 80%;
  left: 0;
  height: 1rem;
  width: 100%;
`

export default function OversizedPanel({ hideTop, hideBottom, children }) {
  return (
    <Panel>
      {hideTop || <PanelTop />}
      {children}
      {hideBottom || <PanelBottom />}
    </Panel>
  )
}
