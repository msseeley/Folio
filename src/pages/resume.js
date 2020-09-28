import React from "react"
// import { Link } from "gatsby"

const Resume = () => (
  <div>
    <header className="m-lg">
      <div className="flex space-btwn ctr-vert">
        <div id="personal-titles">
          <h1 id="name" className="caps w-extra-bold f-lg">
            Molly Seeley
          </h1>
          <h2 id="subtitle" className="caps italic w-reg f-md-lg">
            Full Stack Software Engineer
          </h2>
        </div>
        <div id="basic-info" className="align-rt">
          <h4 id="phone" className="f-med-sml">
            413.230.8227
          </h4>
          <h4 id="location" className="f-med-sml">
            New York, NY
          </h4>
          <h4 id="email" className="f-med-sml">
            mseeley89@gmail.com
          </h4>
          {/*
          <h3 className="txt-3">Portfolio Links</h3>
          <a className="f-med-sml" href="https://www.linkedin.com/in/mollyseeley/" target="_blank" id="linkedin">linkedIn</a> |
          <a className="f-med-sml" href="https://github.com/msseeley" target="_blank" id="github">github</a>
          ADD PERSONAL WEBSITE HERE
          */}
        </div>
      </div>
    </header>
    <section className="m-hor-lg">
      <h3 className="caps">Skills</h3>
      <div className="grid m-hor-lg">
        <div className="col-1">
          <h4 className="w-semi-bold m-top-med">Technologies</h4>
        </div>
        <div className="col-2 m-med">
          <h4 className="w-med-bold">Proficient</h4>
          <p>
            JavaScript, ES6, Sequelize, React, Redux, React-Redux, Node,
            Postgres, CSS, HTML
          </p>
          <h4 className="w-med-bold">Knowledgeable</h4>
          <p>React Native, Firebase, Python, JIRA, REST, Mocha, Chai</p>
          <h4 className="w-med-bold">Familiar</h4>
          <p>Django, MongoDB, SQL, AWS, Docker, Enzyme, Jasmine, Angular</p>
        </div>
        <div className="col-1">
          <h4 className="w-semi-bold m-top-med">Soft Skills</h4>
        </div>
        <div className="col-2 m-med">
          <p>
            agile, team management, technical product management, product
            development, qualitative data analysis
          </p>
        </div>
      </div>
    </section>
    <section className="m-lg">
      <h3 className="caps">Experience</h3>
      <div className="grid m-hor-lg">
        <div className="col-1">
          <h4 className="w-semi-bold m-top-med caps">Sub Rosa</h4>
          <h4 className="w-med-bold">October 2019 -</h4>
          <h4 className="w-med-bold">March 2019</h4>
        </div>
        <div className="col-2 m-med">
          <h4 className="w-med-bold caps">
            Full Stack Engineer & Assistant Technical Product Manager
          </h4>
          <p>Engineering, Research & Development</p>
          <ul>
            <li>Stack: React, Redux Sagas, HTML, CSS, Python, AWS, Docker</li>
            <li>
              Automated social media data processing for branding development
              <ul>
                <li>
                  Automated parameter tuning and quantitative analysis of
                  proprietary Natural Language Processing software output
                </li>
                <li>Reduced data run and analysis time by 50%</li>
              </ul>
            </li>
            <li>
              Analyzed NLP data output and developed approaches to improve
              results
              <ul>
                <li>
                  Investigated social media data to understand data trends and
                  related user demographics
                </li>
              </ul>
            </li>
            <li>
              Maintained front-end landing page
              <ul>
                <li>Updated site copy</li>
                <li>Implemented layout and design changes</li>
              </ul>
            </li>
          </ul>
          <h4>Technical Product Management</h4>
          <ul>
            <li>Conducted bi-weekly meetings with off-site dev team</li>
            <li>Managed test prioritization and implementation</li>
            <li>
              Analyzed NLP data output and developed approaches to improve
              results{" "}
            </li>
            <li>Planned client-beta test implementation</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="education">
      <div className="container">
        <h3 className="caps">Education</h3>
        <h4>Grace Hopper Program at Fullstack Academy 2018</h4>
        <h4>
          MA NYU Gallatin ABD, Intersections of Race, Class, Gender, & Family in
          America
        </h4>
        <h4>
          BA Hampshire College 2012 Interdisciplinary Arts, Literature, &
          Creative Writing
        </h4>
      </div>
    </section>
  </div>
)

export default Resume
