import React, { Component } from "react"
import Copy from "../../assets/icons/Copy"
import Recycle from "../../assets/icons/Recycle"
import Share from "../../assets/icons/Share"
import StateContainer from "../../assets/icons/StateContainer"
import "./OfferCard.css"

class OfferCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showHiddenText: false,
		}
	}

	handleHover = () => {
		this.setState({ showHiddenText: true })
	}

	handleLeave = () => {
		this.setState({ showHiddenText: false })
	}

	render() {
		return (
			<div className="offerCardContainer">
				<div className="TopPart">
					<p className="Title">
						عرض التذكرة الخاصة بالفيلم
						<span
							className="RecycleIcon"
							onMouseEnter={this.handleHover}
							onMouseLeave={this.handleLeave}
						>
							<span className="StateContainer">
								{this.state.showHiddenText && <StateContainer text={"حذف"} />}
							</span>
							<Recycle />
						</span>
					</p>
					<p className="Link">
						www.tazkty.com/473847
						<span className="CopyIcon">
							<Copy />
						</span>
					</p>
					<p className="subtitle">فعال حتي 15 يوليو 2023</p>
				</div>

				<div className="BottomPart">
					<div className="TextConatiner">
						<p className="TextOffer">
							خصم
							<span className="Number">25%</span>
						</p>
						<p className="SendContainer">
							<span>
								<Share />
							</span>
							مشاركة
						</p>
					</div>
					<img
						src={require("../../assets/imgs/scan.png")}
						width={80}
						height={80}
						alt="scan"
					/>
				</div>
			</div>
		)
	}
}

export default OfferCard
