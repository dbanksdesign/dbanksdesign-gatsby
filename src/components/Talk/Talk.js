import React from 'react'
import './Talk.css'

export default ({ event, eventLink, title, slideLink, videoLink, description, date }) => (
  <section className="talk">
    <div className="talk-date">
      <div className="talk-date-day">{date.day}</div>
      <div className="talk-date-month">{date.month}</div>
      <div className="talk-date-year">{date.year}</div>
    </div>
    <div className="talk-content">
      <h4 className="talk-event">
        <a href={eventLink}>{event}</a>
      </h4>
      <h5 className="talk-title">{title}</h5>
      {description &&
        <p className="talk-description">{description}</p>}
      {slideLink &&
        <a href={slideLink}>Slides</a>}
      {videoLink &&
        <a href={videoLink}>Video</a>}
    </div>
  </section>
)