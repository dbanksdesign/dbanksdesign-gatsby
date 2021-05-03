import React, { Fragment } from 'react'
import SEO from '$components/SEO'
import Role, {Roles} from '$components/Role'
import aboutPhoto from './assets/about_photo.jpg'
import unicorn from './assets/unicorn.png'
import highlightVideo from './assets/highlight.mp4'
import annotateVideo from './assets/annotate.mp4'
import dragDropVideo from './assets/drag_drop.mp4'
import './blogmate.css'

export const frontmatter = {
  title: "Blogmate",
  date: '2015-05-06T23:46:37.121Z',
  category: "portfolio",
  description: "Test",
  graphic: "assets/logo.svg"
}

const Blogmate = () => (
  <>
    <SEO title="" />
    <section>
      <div>
        <p>What we wanted was an application that allowed us to save articles (like instapaper/readability), but with a social aspect of creating reading lists that people could see and follow, be able to highlight and annotate articles, have everything searchable. Highlighting and annotating are powerful educational tools but they aren't used as much in technology and could benefit by being able to search for keywords in the highlights and annotations.</p>
      </div>
    </section>

    <hr />

    <section className="article_content_section">
      <div className="center_article_content">
        <h2>Interaction</h2>
        <p>The impetus behind a lot of design and interaction decisions was that I wanted to make the application feel as if you are directly interacting with the content. I didn't want forms or buttons (or as few as possible) to make using the application be an extension of how people normally interact with paper documents. Highlighting text, writing in margins, etc.</p>

        <figure className="blogmate_animation_figure">
          <div className="blogmate_animation_height"></div>
          <video className="blogmate_animation_video" autoPlay loop muted src={highlightVideo}>
          </video>
        </figure>

        <figure className="blogmate_animation_figure">
          <div className="blogmate_animation_height"></div>
          <video className="blogmate_animation_video" autoPlay loop muted src={annotateVideo}>
          </video>
        </figure>

        <figure className="blogmate_animation_figure">
          <div className="blogmate_animation_height"></div>
          <video className="blogmate_animation_video" autoPlay loop muted src={dragDropVideo}>
          </video>
        </figure>
      </div>
    </section>

    <section className="article_content_section">
      <h2>Roles &amp; Responsibilities</h2>
      <Roles>
        <Role icon="product_icon"
          title="Product Lead"
          description="Blogmate was the product I really wanted so I assumed more of the product lead role." />

        <Role icon="design_icon"
          title="Lead Designer"
          description="I created all the designs" />

        <Role icon="develop_icon"
          title="Front-End Developer"
          description="HTML/CSS/JS was my domain while our other developer, Austin, handled the Ruby on Rails." />
      </Roles>
    </section>

    <section className="article_content_section">
      <div className="bg_photo_article_content">
        <img src={aboutPhoto} />
      </div>
    </section>

    <section className="article_content_section">
      <div className="wide_article_content">
        <h2>Technology</h2>

        <div className="blogmate_technologies">
          <div className="blogmate_technology_frontend">
            <img src={unicorn} className="blogmate_technology_img" />
            <h5>CoffeeScript</h5>
            <p>First project I switched from Javascript and never looked back.</p>
          </div>
          <div className="blogmate_technology_frontend">
            <img src={unicorn} className="blogmate_technology_img" />
            <h5>Backbone</h5>
            <p>The bulk of the app is the backbone client-side app. It is very self-contained </p>
          </div>
          <div className="blogmate_technology_frontend">
            <img src={unicorn} className="blogmate_technology_img" />
            <h5>Mustache</h5>
            <p>Our templating language of choice, the SMT gem gave us the ability to have the templates automatically available in our Backbone app.</p>
          </div>
        </div>

        <div className="blogmate_technology_separator">
          <h6>client side application</h6>
          <hr />
          <h6>back end application</h6>
        </div>

        <div className="blogmate_technologies">
          <div className="blogmate_technology_backend">
            <img src={unicorn} className="blogmate_technology_img" />
            <h5>Ruby on Rails</h5>
            <p>Our Rails layer is very thin, it just handles authentication, serves assets, and sends JSON packets back and forth to Backbone.</p>
          </div>

          <div className="blogmate_technology_backend">
            <img src={unicorn} className="blogmate_technology_img" />
            <h5>PostgreSQL</h5>
            <p>While still being a traditional relational database, postgres gave us the ability to do full text search on articles/annotations.</p>
          </div>

          <div className="blogmate_technology_backend">
            <img src={unicorn} className="blogmate_technology_img" />
            <h5>Unicorn</h5>
            <p>Gave us multiple processes and allowed us for (kind of) seamless deploys.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Blogmate;