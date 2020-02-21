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
        mdx: false,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-mdx-tts",
            options: {
              awsRegion: "eu-central-1",
              defaultVoiceId: "Justin",
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
