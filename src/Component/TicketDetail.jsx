import React, { Component } from "react"
import DownloadIcon from "../assets/icons/DownloadIcon"
import FrameTicket from "../assets/icons/FrameTicket"
import "./UserTableContent.css"

class TicketDetail extends Component {
	render() {
		return (
			<div className="ticketContainer">
				<FrameTicket />
				<div className="ticketName">
					<p>
						تذكرة رقم 45.pdf
						<br />
						<span className="pdfDetails">9mb. PDF</span>
					</p>
				</div>
				<DownloadIcon />
			</div>
		)
	}
}

export default TicketDetail
