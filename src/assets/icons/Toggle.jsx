import React from "react"

const Toggle = ({ classes, color, circle, transform }) => (
	<svg
		className={classes}
		width="35"
		height="18"
		viewBox="0 0 35 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			width="34.0005"
			height="18"
			rx="9"
			transform="matrix(-1 0 0 1 34.75 0)"
			fill={color}
		/>
		<circle
			cx={transform}
			cy="7.0126"
			r="7.0126"
			transform="matrix(-1 0 0 1 16.6877 1.9874)"
			fill={circle}
		/>
	</svg>
)

export default Toggle
