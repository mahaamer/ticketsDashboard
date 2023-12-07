import React from "react"

const StateContainer = ({ classes, text }) => (
	<svg
		className={classes}
		width="148"
		height="41"
		viewBox="0 0 148 41"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M139.998 6.20089e-08C144.416 2.77621e-08 147.998 3.58172 147.998 8L147.998 25C147.998 29.4183 144.416 33 139.998 33L80.8446 33L76.6874 39.5637C75.9022 40.8035 74.0934 40.8035 73.3082 39.5637L69.151 33L7.9978 33C3.57952 33 -0.00219774 29.4183 -0.00219588 25L-0.00219682 8C-0.00219707 3.58172 3.57953 -1.2374e-07 7.99781 -2.76381e-07L139.998 6.20089e-08Z"
			fill="#1C1C28"
		/>

		<text
			x="50%"
			y="50%"
			dominantBaseline="middle"
			textAnchor="middle"
			fill="white"
			fontSize="12"
		>
			{text}
		</text>
	</svg>
)

export default StateContainer
