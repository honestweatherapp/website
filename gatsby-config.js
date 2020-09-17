module.exports = {
  siteMetadata: {
    title: `HonestWeather`,
    description: `The only app that will tell you what the weather really is.`,
    author: `@honestweatherapp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HonestWeather`,
        short_name: `HonestWeather`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#5CA6E3`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
