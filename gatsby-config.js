module.exports = {
  siteMetadata: {
    title: `ernest-arutiunian-portfolio`,
    description: 'Ernest Arutiunian Portfolio',
    copyright: 'This website is copyright 2022 E.A.',
    contact: 'arutiunian.ernest@gmail.com'
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};