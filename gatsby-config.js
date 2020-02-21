module.exports = {
  siteMetadata: {
    siteTitleAlt: `gatsby-mdx-tts-example`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
      },
    },
    `gatsby-plugin-netlify`
  ],
}
