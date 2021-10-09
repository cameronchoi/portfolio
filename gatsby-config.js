module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [`gatsby-plugin-styled-components`, `gatsby-plugin-fontawesome-css`, {
        resolve: `gatsby-plugin-manifest`,
        options: {
            icon: "src/images/whitelogo.png"
        }
    }],
}