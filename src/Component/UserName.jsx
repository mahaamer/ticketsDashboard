import React, { Component } from "react"
import Avatar from "../assets/icons/Avatar"
import "./UserTableContent.css"

class UserName extends Component {
	render() {
		return (
			<div>
				<div className="userNameContainer">
					<Avatar className="avatar" />
					<div className="NameContainer">
						<p>
							أحمد محمود
							<br />
							<span className="phoneNumber">0123456789</span>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default UserName
