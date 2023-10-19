/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TrackStar`,
    description: `You've got a long way to go, be comfortable while you run
    `,
    author: 'Phifer Web Solutions',
    siteUrl: `https://trackstar.netlify.app`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'loa9gh5r',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: 'loa9gh5r',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://trackstar.netlify.app',
        sitemap: 'https://trackstar.netlify.app/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*' }],
      },
    },
  ],
}
