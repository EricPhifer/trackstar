import { Link } from 'gatsby'
import * as React from 'react'
import { PiCaretRightBold } from 'react-icons/pi'
import styled from 'styled-components'

const Buttonesque = styled(Link)`
  width: 24rem;
  margin-top: 4rem;
  background-color: var(--ctaback);
  color: var(--ctafore);
  border: 0.2rem solid var(--ctafore);
  padding: 1.5rem 3rem;
  font-size: 2.4rem;
  border-radius: 1rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--ctafore);
    color: var(--ctaback);
    border: 0.2rem solid var(--ctaback);
  }
`

export default function Cta() {
  return (
    <Buttonesque to="/buy" className="cta">
      Buy a Pair <PiCaretRightBold />
    </Buttonesque>
  )
}
