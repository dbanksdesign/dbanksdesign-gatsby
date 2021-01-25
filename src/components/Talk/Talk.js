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
      <h3 className="talk-title">{title}</h3>
      <h4 className="talk-event">
        <a href={eventLink}>{event}</a>
        {slideLink ?
          <span> &bull; <a href={slideLink}>Slides</a></span> : null}
      </h4>
      {description ?
        <p className="talk-description">{description}</p> : null}
      {videoLink ?
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoLink}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> : null}


    </div>
  </section>
)