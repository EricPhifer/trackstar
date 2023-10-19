import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import SanityImage from 'gatsby-plugin-sanity-image'
import { PortableText, defaultComponents } from '@portabletext/react'
import Cta from './Cta'

const Header = styled.header`
  width: 100%;
  height: 100dvh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  // optional
  background-image: linear-gradient(
    to bottom,
    var(--white),
    orange,
    var(--black)
  );
  img {
    position: absolute;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    height: calc(100% + 10rem);
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  color: var(--white);
  text-align: center;
  z-index: 10;
  h2 {
    margin: 0;
    padding: 0.5rem 0;
    font-size: 3rem;
    font-variant: small-caps;
    text-shadow: 0.1rem 0 0 var(--gray), -0.1rem 0 0 var(--gray),
      0 0.1rem 0 var(--gray), 0 -0.1rem 0 var(--gray);

    // Mobile view
    @media only screen and (max-width: 615px) {
      font-size: 3.5rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 2.15rem;
    }
    // Landscape view
    @media only screen and (max-height: 600px) {
      font-size: 2rem;
    }
  }
  // Mobile view
  @media only screen and (max-width: 750px) {
    height: 90%;
  }
  @media only screen and (max-height: 500px) {
    height: calc(100% - 15rem);
  }
`

const Title = styled.h1`
  font-size: 8rem;
  font-family: 'Industry Inc', Frutiger, 'Frutiger Linotype', Univers, Calibri,
    'Gill Sans', 'Gill Sans MT', 'Myriad Pro', Myriad, 'DejaVu Sans Condensed',
    'Liberation Sans', 'Nimbus Sans L', Tahoma, Geneva, 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
  margin: 0.7rem 0 0.5rem;
  letter-spacing: 0.75rem;
  font-variant: small-caps;
  line-height: 1;
  text-shadow: 0.1rem 0 0 var(--gray), -0.1rem 0 0 var(--gray),
    0 0.1rem 0 var(--gray), 0 -0.1rem 0 var(--gray);

  // Mobile view
  @media only screen and (max-width: 750px) {
    font-size: 6rem;
  }
  @media only screen and (max-width: 615px) {
    font-size: 5rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 4.2rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    font-size: 3.75rem;
    margin: 0;
  }
`

export default function StoryHero() {
  const { hero } = useStaticQuery(graphql`
    query {
      hero: allSanityHero {
        nodes {
          id
          alt
          title
          source
          _rawTagline
          image {
            asset {
              id
            }
            ...ImageWithPreview
          }
        }
      }
    }
  `)
  const { nodes } = hero
  return (
    <>
      {nodes.map(node => (
        <Header key={node.id}>
          {node.image ? (
            <SanityImage
              {...node.image}
              alt={node.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          ) : (
            <div />
          )}
          <Container>
            <Title>{node.title}</Title>
            <PortableText
              value={node._rawTagline}
              components={defaultComponents}
            />
            <Cta />
          </Container>
        </Header>
      ))}
    </>
  )
}
