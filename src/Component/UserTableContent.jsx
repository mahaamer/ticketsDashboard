import React, { useState } from "react"
import StateContainer from "../assets/icons/StateContainer"
import TicketDetail from "./TicketDetail"
import UserName from "./UserName"
import "./UserTableContent.css"

const UserTableContent = () => {
	const [showHiddenText, setShowHiddenText] = useState(false)
	const text =
		"سينما مصر , مول العرب , برج الأطنان , سرايا القبة , صيدناوي مول , برج العرب"

	const handleHover = () => {
		setShowHiddenText(true)
	}

	const handleLeave = () => {
		setShowHiddenText(false)
	}

	const limit = 4
	const parts = text.split(", ")
	const displayedText = parts.slice(0, limit).join(", ")
	const hiddenText = parts.slice(limit).join(", ")

	return (
		<div className="tableContent">
			<p>1</p>
			<UserName />
			<p> C-101</p>
			<p> $40 </p>

			<p onMouseEnter={handleHover} onMouseLeave={handleLeave}>
				{displayedText}
				{hiddenText && showHiddenText && <StateContainer text={hiddenText} />}
			</p>
			<p> 1</p>
			<p> مرة واحدة </p>

			<TicketDetail />
		</div>
	)
}

export default UserTableContent
