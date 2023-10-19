import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-flex;
  font-size: 2.4rem;
  padding: 2rem 0;
  a {
    font-size: 2.4rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    height: calc(100% + 10rem);
  }
`

const MapIframe = styled.iframe`
  width: 100%;
  border: 0;
`

export default function Map() {
  return (
    <Section>
      <MapIframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208957.83255263738!2d-106.84162979504082!3d35.08257892231796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220addd309837b%3A0xc0d3f8ceb8d9f6fd!2sAlbuquerque%2C%20NM!5e0!3m2!1sen!2sus!4v1697738764281!5m2!1sen!2sus"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="location-map"
      />
    </Section>
  )
}
