import React, { useState } from "react"
import OrderArrow from "../assets/icons/OrderArrow"
import Search from "../assets/icons/Search"
import Setting from "../assets/icons/Setting"
import Toggle from "../assets/icons/Toggle"
import TableFooter from "./TableFooter"
import "./UserTable.css"
import UserTableContent from "./UserTableContent"

function UserTable() {
	const [isActivated, setIsActivated] = useState(false)
	const [searchQuery, setSearchQuery] = useState("")
	const [filteredData, setFilteredData] = useState([]) // Replace with your data array

	const toggleActivation = () => {
		setIsActivated((prevState) => !prevState)
	}

	const handleSearchChange = (e) => {
		const query = e.target.value
		setSearchQuery(query)

		const YourDataArray = [
			{
				id: 1,
				userName: "أحمد محمود",
				ticketNumber: "T-101",
				ticketValue: "$50",
				cinemas: ["Cinema A", "Cinema B", "Cinema C"],
				numPeople: 2,
				numPurchases: 3,
				ticketType: "Regular",
			},
		]

		const filteredResults = YourDataArray.filter((item) =>
			item.userName.toLowerCase().includes(query.toLowerCase())
		)

		setFilteredData(filteredResults)
	}

	return (
		<>
			<div className="TopContainer">
				<div className="SearchContainer">
					<p>مبيعات التذاكر</p>
					<div className="SearchBar">
						<Search />
						<input
							type="search"
							placeholder="بحث عن .."
							style={{ border: 0 }}
							value={searchQuery}
							onChange={handleSearchChange}
						/>
					</div>
					<div className="FilterIcon filterSetting">
						<Setting />
					</div>
					<div className="FilterIcon filterOrderArrow">
						<OrderArrow />
					</div>
				</div>
				<div className="NewTicketContainer">
					<p onClick={toggleActivation}>
						<Toggle
							color={isActivated ? "#8A74F9" : "#ABAAB1"}
							circle={"#FFF"}
							transform={isActivated ? "7.0126" : ".1"}
						/>
						{isActivated ? "مفعلة" : "غير مفعلة"}
					</p>
					<button className="TicketButton"> حجز تذكرة جديدة</button>
				</div>
			</div>
			<div className="clientTable">
				<div className="tableHeader">
					<p>#</p>
					<p>المستخدم</p>
					<p>رقم التذكرة</p>
					<p>
						قيمة التذكرة
						<span>
							<OrderArrow />
						</span>
					</p>
					<p>السينمات</p>
					<p>عدد الأشخاص</p>
					<p>عدد مرات الشراء </p>
					<p> التذكرة </p>
				</div>
				<div className="divider" />
				{filteredData.map((dataItem) => (
					<React.Fragment key={dataItem.id}>
						<UserTableContent />
						<UserTableContent />
						<UserTableContent />
						<div className="divider" />
					</React.Fragment>
				))}
				<TableFooter />
			</div>
		</>
	)
}

export default UserTable
