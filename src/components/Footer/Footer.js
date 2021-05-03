import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import * as styles from './Footer.module.css';
import {FaGithub, FaTwitter, FaInstagram, FaDribbble, FaRss} from 'react-icons/fa';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            social {
              twitter
              github
              instagram
              dribbble
            }
          }
        }
      }
    `}
    render={data => {
      const {github, twitter, instagram, dribbble} = data.site.siteMetadata.social;
      return (
        <footer className={styles.footer}>
          <div>© {new Date().getFullYear()},
            Danny Banks.&nbsp;&nbsp;
            <Link to="/credits">Built with open-source</Link>
          </div>

          <div>
            <a className={styles.socialLink}
              aria-label="Blog RSS Feed"
              href="/rss.xml">
              <FaRss />
            </a>
            <a className={styles.socialLink}
              aria-label="Danny Banks on Github"
              href={`https://github.com/${github}`}>
              <FaGithub />
            </a>
            <a className={styles.socialLink}
              aria-label="Danny Banks on Twitter"
              href={`https://twitter.com/${twitter}`}>
              <FaTwitter />
            </a>
            <a className={styles.socialLink}
              aria-label="Danny Banks on Instagram"
              href={`https://instagram.com/${instagram}`}>
              <FaInstagram />
            </a>
            <a className={styles.socialLink}
              aria-label="Danny Banks on Dribbble"
              href={`https://dribbble.com/${dribbble}`}>
              <FaDribbble />
            </a>
          </div>
        </footer>
      )
    }} />
);

export default Footer;