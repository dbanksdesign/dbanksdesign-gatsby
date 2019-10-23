module.exports = {
  siteMetadata: {
    title: `dbanksdesign`,
    author: `Danny Banks`,
    description: `Personal portfolio and blog for Danny Banks.`,
    siteUrl: `https://dbanks.design/`,
    social: {
      twitter: `dbanksdesign`,
      github: 'dbanksdesign',
      dribbble: 'dbanksdesign',
      instagram: 'dbanksdesign'
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`,
      },
    },
    `gatsby-transformer-javascript-frontmatter`,
    {
      resolve: `gatsby-mdx`,
      options: {
        // Apply gatsby-mdx to both .mdx and .md files
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              showCaptions: ['alt','title'],
              withWebp: true,
            }
          },{
            resolve: `gatsby-remark-smartypants`
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-141683959-1`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.code.boy }],
                })
              })
            },

            /* if you want to filter for only published posts, you can do
             * something like this:
             * filter: { frontmatter: { published: { ne: false } } }
             * just make sure to add a published frontmatter field to all posts,
             * otherwise gatsby will complain
             **/
            query: `
            {
              allMdx(
                limit: 1000,
                filter: {
                  frontmatter: {
                    draft: {ne: true}
                  }
                },
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    code {
                      body
                    }
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'dbanksdesign RSS feed',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dbanksdesign`,
        short_name: `dbanksdesign`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#DD99FF`,
        display: `standalone`,
        favicon: true,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'www.dbanks.design'
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            subsets: [`latin`],
            variants: [`200`,`400`,`400i`,`700`]
          }, {
            family: 'Source Code Pro',
            subsets: ['latin'],
            variants: ['400']
          }
        ],
      },
    },
  ],
}
