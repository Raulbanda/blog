const autoprefixer = require('autoprefixer')
const mqPacker = require('css-mqpacker') // compresses media queries into a single query
const cssnano = require('css-mqpacker') // super compressor

module.exports = {
  siteMetadata: {
    siteUrl: `https://raul-banda.netlify.app/`,
    title: `Raul Banda Poemas`,
    description: `Raul Banda promover el poema en la cultura Boliviana  `,
    twitter_handle: `@Raul`,
    keywords:
      'Cultura, Poemas, Cochabamba, literatura boliviana',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chapters`,
        path: `${__dirname}/src/data/chapters`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      // options: {
      //   excludePattern: /(excluded-link|external)/,
      // },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          autoprefixer(),
          cssnano({
            preset: [
              `default`,
              {
                autoprefixer: true,
                discardUnused: true,
                mergeIdents: true,
                zindex: true,
              },
            ],
          }),
          mqPacker({
            sort: true,
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raul Banda Poemas`,
        short_name: `Poema`,
        start_url: `/`,
        background_color: `#412779`,
        theme_color: `#412779`,
        display: `minimal-ui`,
        icon: `src/assets/favicon/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Abhaya Libre`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168890606-1`,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-netlify-cms`
  ],
}
