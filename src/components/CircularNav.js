import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import "../styles/style_nav.scss"
// import nav from "../styles/images/animated_nav.svg"

const CircularNav = () => (
  <div className="nav-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <defs>
        <style>{`.cls-1,.cls-4{fill:#fff;}.cls-2{fill:#1a1a1a;}.cls-3{font-size:30px;font-family:RobotoMonoForPowerline-Regular, Roboto Mono for Powerline;}.cls-4{font-size:12px;font-family:RobotoMonoForPowerline-BoldItalic, Roboto Mono for Powerline;font-weight:700;font-style:italic;}`}</style>
      </defs>
      <g id="Layer_1" data-name="Layer 1">
        <path
          className="cls-1"
          d="M250,499.5A249.5,249.5,0,0,1,73.58,73.58,249.5,249.5,0,1,1,426.42,426.42,247.84,247.84,0,0,1,250,499.5Z"
        />
        <path d="M250,1A248.93,248.93,0,0,1,426.07,426.07a249,249,0,1,1-273-405.5A247.32,247.32,0,0,1,250,1m0-1C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Z" />
        <circle className="cls-1" cx="250" cy="250" r="174.5" />
        <path d="M250,76a174,174,0,1,1-123,51A172.89,172.89,0,0,1,250,76m0-1A175,175,0,1,0,425,250,175,175,0,0,0,250,75Z" />
        <circle className="cls-2" cx="250" cy="250" r="99.5" />
        <path d="M250,151a99,99,0,1,1-99,99,99.11,99.11,0,0,1,99-99m0-1A100,100,0,1,0,350,250,100,100,0,0,0,250,150Z" />
      </g>
      <g id="Layer_2" data-name="Layer 2">
        <a href="#contact" className="link" id="contact-link">
          <text
            className="cls-3"
            transform="translate(192.12 138.81) rotate(-23.41)"
          >
            C
          </text>
          <text
            className="cls-3"
            transform="translate(208.01 131.88) rotate(-15.42)"
          >
            O
          </text>
          <text
            className="cls-3"
            transform="translate(224.67 127.24) rotate(-7.47)"
          >
            N
          </text>
          <text
            className="cls-3"
            transform="translate(241.83 124.86) rotate(0.93)"
          >
            T
          </text>
          <text
            className="cls-3"
            transform="translate(259.16 125.01) rotate(8.24)"
          >
            A
          </text>
          <text
            className="cls-3"
            transform="matrix(0.96, 0.28, -0.28, 0.96, 276.32, 127.44)"
          >
            C
          </text>
          <text
            className="cls-3"
            transform="translate(292.93 132.22) rotate(24.18)"
          >
            T
          </text>
        </a>
        <text
          className="cls-4 descr"
          transform="translate(204.22 253.51)"
          id="contact-desc"
        >
          Get in touch!
        </text>
      </g>
      <g id="Layer_4" data-name="Layer 4">
        <a href="#resume" className="link" id="resume-link">
          <text
            className="cls-3"
            transform="translate(192.03 389.39) rotate(19.16)"
          >
            R
          </text>
          <text
            className="cls-3"
            transform="matrix(0.98, 0.2, -0.2, 0.98, 211.56, 395.99)"
          >
            E
          </text>
          <text
            className="cls-3"
            transform="matrix(1, 0.06, -0.06, 1, 231.78, 399.84)"
          >
            S
          </text>
          <text
            className="cls-3"
            transform="translate(252.35 400.91) rotate(-4.26)"
          >
            U
          </text>
          <text
            className="cls-3"
            transform="translate(272.85 399.21) rotate(-12.08)"
          >
            M
          </text>
          <text
            className="cls-3"
            transform="translate(292.99 394.72) rotate(-19.97)"
          >
            E
          </text>
        </a>
        <text
          className="cls-4 descr"
          transform="translate(183.09 253.51)"
          id="resume-desc"
        >
          My long-form resumé
        </text>
      </g>
      <g id="Layer_3" data-name="Layer 3">
        <a href="#about" className="link" id="about-link">
          <text
            className="cls-3"
            transform="translate(208.99 54) rotate(-9.17)"
          >
            A
          </text>
          <text
            className="cls-3"
            transform="translate(226.33 51.18) rotate(-4.15)"
          >
            B
          </text>
          <text
            className="cls-3"
            transform="matrix(1, 0.02, -0.02, 1, 243.83, 49.87)"
          >
            O
          </text>
          <text
            className="cls-3"
            transform="matrix(0.99, 0.1, -0.1, 0.99, 261.42, 50.12)"
          >
            U
          </text>
          <text
            className="cls-3"
            transform="translate(278.87 51.86) rotate(10.8)"
          >
            T
          </text>
        </a>
        <path d="M250,151a99,99,0,1,1-99,99,99.11,99.11,0,0,1,99-99m0-1A100,100,0,1,0,350,250,100,100,0,0,0,250,150Z" />
        <text
          className="cls-4 descr"
          transform="translate(228.87 245.51)"
          id="about-desc"
        >
          Hello!
          <tspan x="-45.78" y="16">
            My name is Molly...
          </tspan>
        </text>
      </g>
      <g id="Layer_5" data-name="Layer 5">
        <a href="#projects" className="link" id="projects-link">
          <text
            className="cls-3"
            transform="matrix(0.04, 1, -1, 0.04, 24.16, 251.29)"
          >
            P
          </text>
          <text
            className="cls-3"
            transform="translate(25.11 270.91) rotate(82.47)"
          >
            R
          </text>
          <text
            className="cls-3"
            transform="translate(27.76 290.4) rotate(77.46)"
          >
            O
          </text>
          <text
            className="cls-3"
            transform="matrix(0.3, 0.95, -0.95, 0.3, 32.1, 309.57)"
          >
            J
          </text>
          <text
            className="cls-3"
            transform="matrix(0.38, 0.92, -0.92, 0.38, 38.11, 328.31)"
          >
            E
          </text>
          <text
            className="cls-3"
            transform="translate(45.72 346.42) rotate(62.41)"
          >
            C
          </text>
          <text
            className="cls-3"
            transform="translate(54.89 363.82) rotate(57.41)"
          >
            T
          </text>
          <text
            className="cls-3"
            transform="matrix(0.61, 0.79, -0.79, 0.61, 65.54, 380.33)"
          >
            S
          </text>
        </a>
        <path d="M250,151a99,99,0,1,1-99,99,99.11,99.11,0,0,1,99-99m0-1A100,100,0,1,0,350,250,100,100,0,0,0,250,150Z" />
        <text
          className="cls-4 descr"
          transform="translate(197.18 253.51)"
          id="projects-desc"
        >
          Curated work...
        </text>
      </g>
      <g id="Layer_6" data-name="Layer 6">
        <a href="#articles" className="link" id="articles-link">
          <text
            className="cls-3"
            transform="matrix(0.62, -0.79, 0.79, 0.62, 422.13, 396.22)"
          >
            A
          </text>
          <text
            className="cls-3"
            transform="matrix(0.55, -0.84, 0.84, 0.55, 434.19, 380.72)"
          >
            R
          </text>
          <text
            className="cls-3"
            transform="translate(444.88 364.21) rotate(-61.87)"
          >
            T
          </text>
          <text
            className="cls-3"
            transform="matrix(0.39, -0.92, 0.92, 0.39, 454.08, 346.84)"
          >
            I
          </text>
          <text
            className="cls-3"
            transform="matrix(0.31, -0.95, 0.95, 0.31, 461.74, 328.71)"
          >
            C
          </text>
          <text
            className="cls-3"
            transform="translate(467.78 310.01) rotate(-76.92)"
          >
            L
          </text>
          <text
            className="cls-3"
            transform="translate(472.16 290.83) rotate(-81.93)"
          >
            E
          </text>
          <text
            className="cls-3"
            transform="translate(474.84 271.39) rotate(-86.89)"
          >
            S
          </text>
        </a>
        <path d="M250,151a99,99,0,1,1-99,99,99.11,99.11,0,0,1,99-99m0-1A100,100,0,1,0,350,250,100,100,0,0,0,250,150Z" />
        <text
          className="cls-4 descr"
          transform="translate(186.61 237.51)"
          id="articles-desc"
        >
          Tales,tutorials &amp;{" "}
          <tspan x="14.09" y="16">
            impressions...
          </tspan>
        </text>
      </g>
    </svg>
  </div>
)

export default CircularNav
