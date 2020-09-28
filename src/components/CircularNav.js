import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import CircleType from "circletype"
import "../styles/style.scss"

const CircularNav = () => (
  <nav className="caps w-reg">
    <Link to="#about">about</Link>
    <Link to="#articles">articles</Link>
    <Link to="#projects">projects</Link>
    <Link to="/resume">resume</Link>
    <Link to="#contact">contact</Link>
  </nav>
)

export default CircularNav
