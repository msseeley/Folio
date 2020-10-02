import React, { useEffect, useRef } from "react"
// import { Link } from "gatsby"
// import CircleType from "circletype"
import "../styles/style_nav.scss"
import nav from "../styles/images/animated_nav.svg"

//left off: https://css-tricks.com/set-text-on-a-circle/

const CircularNav = () => (
  <div className="container">
    <img src={nav} />
  </div>
)

export default CircularNav
