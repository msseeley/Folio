import React from "react"
import "../styles/style_nav.scss"

const NavLinkOverlay = () => (
  <div id="overlay-descr">
    {/* <p id="about-descr" className="descr">
      Hello! My name is Molly ...
    </p> */}
    <p id="articles-decr" className="descr">
      developer tales, tutorials, and impressions ...
    </p>
    <div id="projects-descr">
      <p>curated works ...</p>
    </div>
    <div id="contact-descr">
      <p>get in touch ...</p>
    </div>
    <div id="resume-descr">
      <p>my long-form resume</p>
    </div>
  </div>
)

export default NavLinkOverlay
