// eslint-disable-next-line
import { defaultComponents, PortableText } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import SanityImage from 'gatsby-plugin-sanity-image'
import Seo from '../components/Seo'
import Layout from '../components/Layout'

const BuyStyles = styled.div`
  width: 100vw;
  word-wrap: break-word;
  margin-top: 7rem;
  padding-bottom: 15rem;
  display: flex;
  justify-content: center;
`

const Overlord = styled.div`
  max-width: 90rem;
  min-height: 47rem;
  margin-top: 5rem;
  display: inline-flex;
  flex-flow: row wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media only screen and (max-width: 500px) {
    padding: 2rem 2rem 18rem;
  }
`

const ProductCard = styled.div`
  --card-width: 27rem;
  width: var(--card-width);
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0.5px 0.5px 1.2px rgba(0, 0, 0, 0.011),
    1px 1px 2.7px rgba(0, 0, 0, 0.016), 1.7px 1.7px 4.6px rgba(0, 0, 0, 0.019),
    2.6px 2.6px 6.9px rgba(0, 0, 0, 0.022),
    3.8px 3.8px 10px rgba(0, 0, 0, 0.025),
    5.3px 5.3px 14.2px rgba(0, 0, 0, 0.028),
    7.5px 7.5px 20.1px rgba(0, 0, 0, 0.031),
    11px 11px 29.2px rgba(0, 0, 0, 0.034),
    16.9px 16.9px 45px rgba(0, 0, 0, 0.039), 30px 30px 80px rgba(0, 0, 0, 0.05);
  p {
    padding: 0.75rem;
    font-size: 1.6rem;
    line-height: 1.2;
  }
`

const Image = styled.div`
  position: relative;
  border-radius: 0.5rem 0.5rem 0 0;
  img {
    width: var(--card-width);
    height: 20rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`

const Source = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.25rem;
  color: var(--white);
`

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 1.75rem;
  line-height: 1.8;
  letter-spacing: 0.25rem;
`

const Purchase = styled.a`
  width: 100%;
  height: 4rem;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue);
  color: var(--white);
  font-variant: small-caps;
  text-weight: bold;
  font-size: 2.25rem;
  border-radius: 0 0 0.5rem 0.5rem;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: transparent;
    color: var(--blue);
  }
`

export default function Buy() {
  const { gallery } = useStaticQuery(graphql`
    query {
      gallery: allSanityGallery {
        nodes {
          id
          alt
          link
          title
          source
          sourcelink
          _rawDescription
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
  const { nodes } = gallery
  return (
    <Layout>
      <Seo title="Buy TrackStar Shoes" />
      <BuyStyles>
        <Overlord>
          {nodes.map(buy => (
            <ProductCard key={buy.id}>
              <Image>
                <SanityImage
                  {...buy.image}
                  alt={buy.alt}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
                <Source
                  href={buy.sourcelink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {buy.source}
                </Source>
              </Image>
              <Title>{buy.title}</Title>
              <PortableText
                value={buy._rawDescription}
                components={defaultComponents}
              />
              <Purchase
                href={buy.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                Buy Now
              </Purchase>
            </ProductCard>
          ))}
        </Overlord>
      </BuyStyles>
    </Layout>
  )
}
