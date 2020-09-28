import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"

const IndexPage = () => (
  <div>
    <nav>
      <ul class="caps w-reg">
        <li>
          <Link to="#about">about</Link>
        </li>
        <li>
          <Link to="#articles">articles</Link>
        </li>
        <li>
          <Link to="#projects">projects</Link>
        </li>
        <li>
          <Link to="/resume">resume</Link>
        </li>
        <li>
          <Link to="#contact">contact</Link>
        </li>
      </ul>
    </nav>
  </div>
)
export default IndexPage
