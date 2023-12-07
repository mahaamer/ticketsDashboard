import React from "react"
import "./App.css"
import ApexChart from "./Component/AreaChart/AreaChart.jsx"
import OfferCard from "./Component/Offer/OfferCard.jsx"
import UserTable from "./Component/UserTable.jsx"
import BackArrow from "./assets/icons/BackArrow.jsx"

function App() {
	return (
		<div className="App">
			<div className="Container">
				<Header />
				<div style={{ display: "flex" }}>
					<ApexChart />
					<OfferCard />
				</div>
				<UserTable />
			</div>
		</div>
	)
}

const Header = () => {
	return (
		<div style={{ marginBottom: 26 }}>
			<span>
				<BackArrow />
			</span>
			<span style={{ fontWeight: 800, fontSize: 16, color: "#1C1C28" }}>
				تذكرة رقم #2342
			</span>
		</div>
	)
}

export default App
