module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "IKNA",
    description: "A static site made with gatsby and bootstrap ✨",
    keywords: "bootstrap, gatsby",
    author: "mkt",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/LOGO.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
