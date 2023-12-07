import React, { useState } from "react"
import DropBoxArrow from "../assets/icons/DropboaxArrow"
import LeftNavigateArrow from "../assets/icons/LeftArrow"
import RightNavigateArrow from "../assets/icons/arrow"
import "./UserTable.css"

const DropDown = () => {
	const [showOptions, setShowOptions] = useState(false)
	const [selectedOption, setSelectedOption] = useState(20)

	const options = [4, 10, 20, 50, 100]

	const toggleOptions = () => {
		setShowOptions(!showOptions)
	}

	const handleOptionClick = (option) => {
		setSelectedOption(option)
		setShowOptions(false)
	}

	return (
		<div style={{ position: "relative", display: "inline-block" }}>
			<p
				style={{
					border: "1px solid #7E8299",
					padding: 4,
					borderRadius: 4,
					margin: 10,
					fontSize: 12,
					cursor: "pointer",
					lineHeight: 1,
				}}
				onClick={toggleOptions}
			>
				<DropBoxArrow style={{ width: 12, height: 12, marginRight: 5 }} />
				{selectedOption}
			</p>
			{showOptions && (
				<div
					style={{
						position: "absolute",
						top: "100%",
						left: 0,
						border: "1px solid #7E8299",
						borderRadius: 4,
						background: "#FFFFFF",
						zIndex: 10,
					}}
				>
					{options.map((option) => (
						<p
							key={option}
							style={{
								padding: 4,
								margin: 0,
								cursor: "pointer",
								fontSize: 12,
								lineHeight: 1,
							}}
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</p>
					))}
				</div>
			)}
		</div>
	)
}

const TableFooter = () => {
	return (
		<div className="tableBottom">
			<div className="tableBottomRight">
				<p>عرض</p>
				<DropDown />
				<p>من اصل 250</p>
			</div>
			<div className="tableBottomLeft">
				<RightNavigateArrow />
				<div className="tableBottomLeft number">
					<p>1</p>
					<p>2</p>
					<p>3</p>
					<p>4</p>
					<p>5</p>
				</div>
				<LeftNavigateArrow />
			</div>
		</div>
	)
}

export default TableFooter
