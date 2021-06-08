module.exports = {
  siteMetadata: {
    title: `Portfolio FJT`,
    description: `Frontend developer Federico Tanco`,
    author: `Federico Tanco`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: ["jobs", "projects"],
        singleTypes: [`home-page`, `global`],
      },
    },
    `gatsby-plugin-image`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `src/images/isotipo.png`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
  ],
}
