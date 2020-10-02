import React, { useEffect, useRef } from "react"
// import { Link } from "gatsby"
// import CircleType from "circletype"
import "../styles/style_nav.scss"
// import nav from "../styles/images/animated_nav.svg"

//left off: https://css-tricks.com/set-text-on-a-circle/

const CircularNav = () => (
  <div className="container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <defs>
        <style>
          {`.cls-1 {
				fill: #fff;
			}

			.cls-2 {
				fill: #1a1a1a;
			}

			.cls-3 {
				font-size: 30px;
				font-family: RobotoMonoForPowerline-Regular, Roboto Mono for Powerline;
			}`}
        </style>
      </defs>
      <g id="Layer_1" data-name="Layer 1">
        <path
          class="cls-1"
          d="M250,499.5A249.5,249.5,0,0,1,73.58,73.58,249.5,249.5,0,1,1,426.42,426.42,247.84,247.84,0,0,1,250,499.5Z"
        />
        <path d="M250,1A248.93,248.93,0,0,1,426.07,426.07a249,249,0,1,1-273-405.5A247.32,247.32,0,0,1,250,1m0-1C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Z" />
        <circle class="cls-1" cx="250" cy="250" r="174.5" />
        <path d="M250,76a174,174,0,1,1-123,51A172.89,172.89,0,0,1,250,76m0-1A175,175,0,1,0,425,250,175,175,0,0,0,250,75Z" />
        <circle class="cls-2" cx="250" cy="250" r="99.5" />
        <path d="M250,151a99,99,0,1,1-99,99,99.11,99.11,0,0,1,99-99m0-1A100,100,0,1,0,350,250,100,100,0,0,0,250,150Z" />
      </g>
      <g id="Layer_2" data-name="Layer 2">
        <text class="cls-3" transform="translate(193.91 137.9) rotate(-22.49)">
          C
        </text>
        <text
          class="cls-3"
          transform="matrix(0.97, -0.25, 0.25, 0.97, 209.88, 131.23)"
        >
          O
        </text>
        <text class="cls-3" transform="translate(226.63 126.85) rotate(-6.56)">
          N
        </text>
        <text class="cls-3" transform="translate(243.82 124.83) rotate(1.27)">
          T
        </text>
        <text
          class="cls-3"
          transform="matrix(0.99, 0.16, -0.16, 0.99, 261.14, 125.17)"
        >
          A
        </text>
        <text class="cls-3" transform="translate(278.25 127.87) rotate(17.12)">
          C
        </text>
        <text
          class="cls-3"
          transform="matrix(0.91, 0.42, -0.42, 0.91, 294.8, 132.92)"
        >
          T
        </text>
        <text class="cls-3" transform="translate(310.5 140.22) rotate(33.03)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(325.04 149.62) rotate(40.92)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(349.59 173.92) rotate(56.69)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(366.6 203.96) rotate(72.59)">
          {" "}
        </text>
        <text
          class="cls-3"
          transform="matrix(0.03, 1, -1, 0.03, 374.71, 237.52)"
        >
          {" "}
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.25, 0.97, -0.97, -0.25, 373.39, 272.07)"
        >
          {" "}
        </text>
        <text class="cls-3" transform="translate(362.7 304.88) rotate(120.14)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(343.4 333.56) rotate(135.93)">
          {" "}
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.88, 0.47, -0.47, -0.88, 317.05, 355.9)"
        >
          {" "}
        </text>
        <a href="/resume">
          <text
            class="cls-3"
            transform="translate(301.83 364.14) rotate(159.69)"
          >
            R
          </text>
          <text class="cls-3" transform="translate(285.6 370.2) rotate(167.67)">
            E
          </text>
          <text
            class="cls-3"
            transform="translate(268.72 373.93) rotate(175.59)"
          >
            S
          </text>
          <text
            class="cls-3"
            transform="translate(251.43 375.31) rotate(-176.59)"
          >
            U
          </text>
          <text
            class="cls-3"
            transform="matrix(-0.98, -0.2, 0.2, -0.98, 234.16, 374.33)"
          >
            M
          </text>
          <text
            class="cls-3"
            transform="translate(217.18 370.99) rotate(-160.71)"
          >
            E
          </text>
        </a>
      </g>
      <g id="Layer_3" data-name="Layer 3">
        <text
          class="cls-3"
          transform="translate(190.34 58.84) rotate(-14.72)"
        ></text>
        <text class="cls-3" transform="translate(207.3 54.36) rotate(-9.67)">
          A
        </text>
        <text class="cls-3" transform="translate(224.61 51.39) rotate(-4.65)">
          B
        </text>
        <text
          class="cls-3"
          transform="matrix(1, 0.02, -0.02, 1, 242.13, 49.86)"
        >
          O
        </text>
        <text class="cls-3" transform="translate(259.67 50.03) rotate(5.28)">
          U
        </text>
        <text class="cls-3" transform="translate(277.16 51.62) rotate(10.31)">
          T
        </text>
        <text class="cls-3" transform="translate(294.44 54.75) rotate(15.37)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(327.81 65.48) rotate(25.48)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(358.81 81.92) rotate(35.54)">
          {" "}
        </text>
        <text
          class="cls-3"
          transform="matrix(0.7, 0.71, -0.71, 0.7, 386.46, 103.51)"
        >
          {" "}
        </text>
        <text
          class="cls-3"
          transform="matrix(0.57, 0.82, -0.82, 0.57, 409.95, 129.57)"
        >
          {" "}
        </text>
        <text class="cls-3" transform="translate(428.54 159.32) rotate(65.62)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(441.63 191.85) rotate(75.74)">
          {" "}
        </text>
        <text
          class="cls-3"
          transform="matrix(0.07, 1, -1, 0.07, 448.8, 226.19)"
        >
          {" "}
        </text>
        <text class="cls-3" transform="translate(449.89 261.26) rotate(95.73)">
          A
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.19, 0.98, -0.98, -0.19, 448.16, 278.73)"
        >
          R
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.27, 0.96, -0.96, -0.27, 444.9, 295.98)"
        >
          T
        </text>
        <text class="cls-3" transform="translate(440.13 312.88) rotate(110.89)">
          I
        </text>
        <text class="cls-3" transform="translate(433.89 329.3) rotate(115.95)">
          C
        </text>
        <text class="cls-3" transform="translate(426.22 345.09) rotate(120.98)">
          L
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.59, 0.81, -0.81, -0.59, 417.21, 360.14)"
        >
          E
        </text>
        <text class="cls-3" transform="translate(406.89 374.38) rotate(131.01)">
          S
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.72, 0.69, -0.69, -0.72, 395.38, 387.64)"
        >
          {" "}
        </text>
        <text class="cls-3" transform="translate(369.16 410.89) rotate(146)">
          {" "}
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.91, 0.41, -0.41, -0.91, 339.25, 429.26)"
        >
          {" "}
        </text>
        <text class="cls-3" transform="translate(306.62 442.08) rotate(166.2)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(272.22 448.98) rotate(176.26)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(237.16 449.8) rotate(-173.82)">
          {" "}
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.96, -0.28, 0.28, -0.96, 202.48, 444.53)"
        >
          {" "}
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.9, -0.44, 0.44, -0.9, 169.28, 433.26)"
        >
          {" "}
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.8, -0.59, 0.59, -0.8, 138.54, 416.33)"
        >
          {" "}
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.69, -0.72, 0.72, -0.69, 111.23, 394.31)"
        >
          P
        </text>
        <text class="cls-3" transform="translate(99.13 381.61) rotate(-128.56)">
          R
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.55, -0.83, 0.83, -0.55, 88.17, 367.89)"
        >
          O
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.48, -0.88, 0.88, -0.48, 78.44, 353.24)"
        >
          J
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.4, -0.92, 0.92, -0.4, 70.04, 337.82)"
        >
          E
        </text>
        <text class="cls-3" transform="translate(63.03 321.74) rotate(-108.41)">
          C
        </text>
        <text class="cls-3" transform="translate(57.47 305.1) rotate(-103.35)">
          T
        </text>
        <text
          class="cls-3"
          transform="matrix(-0.14, -0.99, 0.99, -0.14, 53.4, 288.01)"
        >
          S
        </text>
        <text class="cls-3" transform="translate(50.85 270.64) rotate(-93.29)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(50.31 235.58) rotate(-83.37)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(55.85 200.95) rotate(-73.27)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(67.39 167.82) rotate(-63.15)">
          {" "}
        </text>
        <text
          class="cls-3"
          transform="matrix(0.6, -0.8, 0.8, 0.6, 84.55, 137.23)"
        >
          {" "}
        </text>
        <text class="cls-3" transform="translate(106.8 110.09) rotate(-43.1)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(133.4 87.24) rotate(-33.1)">
          {" "}
        </text>
        <text class="cls-3" transform="translate(163.59 69.35) rotate(-23.01)">
          {" "}
        </text>
      </g>
    </svg>
  </div>
)

export default CircularNav
