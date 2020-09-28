import React from "react"
// import { Link } from "gatsby"

const Resume = () => (
  <div>
    <header>
      <div className="flex space-btwn max-width">
        <div>
          <h1 className="caps w-extra-bold f-med-lg">Molly Seeley</h1>
          {/* <!-- <h2 className="caps italic w-reg f-md-lg">Full Stack Software Engineer</h2> --> */}
        </div>
        <div>
          <p className="align-rt">413.230.8237 | mseeley89@gmail.com</p>
          <a
            className="f-med-sml"
            href="https://www.linkedin.com/in/mollyseeley/"
            target="_blank"
            id="linkedin"
          >
            linkedin.com/in/mollyseeley
          </a>{" "}
          |
          <a
            className="f-med-sml"
            href="https://github.com/msseeley"
            target="_blank"
            id="github"
          >
            github.com/msseeley
          </a>
          {/* <!-- ADD PERSONAL WEBSITE HERE --> */}
        </div>
      </div>
    </header>
    <div className="container">
      <div className="flex space-btwn ctr-vert max-width">
        <h3 className="caps f-med">Experience</h3>
        <h3 className="caps f-med m-hor-lg">Skills</h3>
      </div>
      <div className="grid">
        {/* NYC TECH TALENT PIPELINE */}
        <div className="col-2a m-sml">
          <h4 className="w-semi-bold m-top-sml caps f-med">
            Teaching Assistant | NYC Tech Talent Pipeline | Summer Residency
            Programs
            <br></br> May 2020 – Present
          </h4>
          <ul>
            <p className="w-med-bold italic f-med-sml">
              Academic Mentorship for Node, Express, React, Postgres, HTML, CSS
            </p>
            <ul className="m-hor-sml f-med-sml">
              <li>Answer help tickets & debug code with students</li>
              <li>
                Advise on professional expectations and processes of
                develeopment
              </li>
            </ul>
            <p className="w-med-bold m-top-sml italic ">
              Student Group Projects
            </p>
            <ul className="m-hor-sml">
              <li>Lead daily standup</li>
              <li>Provide technical advisement</li>
            </ul>
          </ul>
        </div>
        {/* SUB ROSA */}
        <div class="col-2b m-sml">
          <h4 class=" w-semi-bold m-top-sml caps">
            Engineer & Assistant Technical Product Manager | Sub Rosa
            <br></br> Oct 2019 – Mar 2020{" "}
          </h4>
          <h4 class="w-semi-bold caps"></h4>
          <p class="w-med-bold m-top-sml italic">
            Engineering, Research & Development
          </p>
          <ul class="m-hor-sml">
            <li>Stack: React, Redux Sagas, HTML, CSS, Python, AWS, Docker</li>
            <li>
              Developed social media data processing for branding
              <ul class="m-hor-sml bullet">
                <li>
                  Automated parameter tuning & quantitative analysis of
                  proprietary NLP software output
                </li>
                <li>Reduced data run & analysis time by 50%</li>
              </ul>
            </li>
            <li>
              Maintained several front-end static sites
              <ul class="m-hor-sml bullet ">
                <li>
                  Reconfigured layout and design changes to accommodate new
                  content
                </li>
                <li>
                  Consulted on technical aspects with design and content
                  specialists
                </li>
              </ul>
            </li>
          </ul>
          <p class="w-med-bold m-top-sml italic ">
            Technical Product Management
          </p>
          <ul class="m-hor-sml ">
            <li>Conducted bi-weekly meetings with off-site dev team</li>
            <li>Managed test prioritization and implementation</li>
            {/* <!-- <li>Analyzed NLP data output and developed approaches to improve results </li> --> */}
            <li>Planned client beta test implementation</li>
          </ul>
        </div>
        {/* FULLSTACK ACADEMY */}
        <div class="col-2c m-sml ">
          <h4 class="w-semi-bold m-top-sml caps f-med">
            {" "}
            Engineer & Teaching Fellow | Fullstack Academy
            <br></br> Jul 2018 – Feb 2019
          </h4>
          <h4 class="w-semi-bold caps "></h4>
          <p class="w-med-bold m-top-sml italic ">Engineering</p>
          <ul class="m-hor-sml ">
            <li>Stack: MongoDB, Express, Angular, Node, React</li>
            <li>
              Created student office hour tracking for internal academic
              platform
            </li>
          </ul>
          <p class="w-med-bold m-top-sml italic ">Academic Advisement</p>
          <ul class="m-hor-sml">
            <li>
              Conducted office hours covering NERP stack, JS fundamentals, &
              best practices
            </li>
            <li>
              Tracked student progress via grading coding assessments & projects
            </li>
            <li class="italic">Managed 6 Student Group Projects</li>
            <ul class="m-hor-sml bullet ">
              <li>
                Guided students through the conception, planning, & development
                of projects
              </li>
              <li>Assigned daily work based on Agile workflow</li>
              <li>
                Guided students through the conception, planning, & development
                of projects
              </li>
              <li>Assisted students with debugging code</li>
            </ul>
            <li>
              Presented weekly reviews of algorithms, data structures,
              functional programming, & optimization
            </li>
          </ul>
          {/* <!-- <p class="w-med-bold m-top-sml italic ">Community Organization</p>
        <ul class="m-hor-sml ">
          <ul class="m-hor-sml">
            <li>Created a Slack channel for students of color & recruited staff support</li>
            <li>Coordinated career advisement for students without college degrees
            </li>
            <li>Organized "Ladies' Lunch" for women-identifying FSA students</li>
          </ul>
        </ul> --> */}
        </div>
        {/* Col -3 */}
        <aside class="col-3 align-ctr">
          <div>
            <div>
              <h4 class="w-med-bold m-top-sml caps">Technologies</h4>
            </div>
            <div class="col-2">
              <p class="w-med-bold italic m-top-sml">Fluent</p>
              <ul>
                <li>JavaScript ES6</li>
                <li>React Redux</li>
                <li>Node Express</li>
                <li>Sequelize</li>
                <li>Postgres</li>
                <li>CSS HTML</li>
              </ul>
              <p class="w-med-bold italic m-top-sml">Proficient</p>
              <ul>
                <li>Mocha Chai</li>
                <li>React Native</li>
                <li>Firebase</li>
                <li>Python</li>
                <li></li>
              </ul>
              <p class="w-med-bold italic m-top-sml">Familiar</p>
              <ul>
                <li>SQL</li>
                <li>Angular</li>
                <li>MongoDB</li>
                <li>Django</li>
                <li>AWS Docker</li>
                <li>Enzyme</li>
              </ul>
            </div>
            <div>
              <h4 class="w-med-bold m-top-sml caps">Soft Skills</h4>
            </div>
            <div class="m-top-sml">
              <ul>
                <li>teaching</li>
                <li>mentorship</li>
                <li>management</li>
                <li>product</li>
                <li>agile</li>
                <li>research</li>
                {/* <!-- <li>qualitative data analysis</li> --> */}
              </ul>
            </div>
          </div>
          <div>
            <h3 class="caps f-med align-ctr m-top-sml">Education</h3>
            <div class="m-top-sml">
              <h4 class="m-top-sml">
                2018
                <br></br>
                <span class="w-med-bold italic">Grace Hopper Program</span>
              </h4>
              <h4 class="m-top-sml">
                ABD
                <br></br>
                <span class="w-med-bold italic">
                  MA NYU Gallatin Social Science
                </span>
              </h4>
              <h4 class="m-top-sml">
                2012
                <br></br>
                <span class="w-med-bold italic">
                  BA Hampshire College Interdisc. Arts
                </span>
              </h4>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
)

export default Resume
