import React from "react"
import CircularNav from "../components/CircularNav"
import Resume from "../components/Resume"
import About from "../components/About"

const IndexPage = () => (
  <div>
    <CircularNav />
    <About />
    <Resume id="resume" />
  </div>
)
export default IndexPage
