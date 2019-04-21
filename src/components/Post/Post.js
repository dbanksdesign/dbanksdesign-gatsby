import React from 'react'
import { Link } from 'gatsby'
import './Post.css'

export default ({ href, title, body, date }) => (
  <section className="post-excerpt">
    <h4 className="post-excerpt-title">
      <Link to={href}>{title}</Link>
    </h4>
    <div className="post-excerpt-date">{date}</div>
    <p className="post-excerpt-body">{body}</p>
  </section>
)