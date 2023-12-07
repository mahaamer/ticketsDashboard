import React from "react"
import ReactApexChart from "react-apexcharts"
import "./AreaChart.css"

class ApexChart extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			series: [
				{
					name: "استخدام",
					data: [130, 180, 70, 150, 250, 170, 230, 190, 200, 145, 100, 220],
				},
			],
			options: {
				chart: {
					height: 350,
					type: "area",
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					curve: "smooth",
					width: 2,
				},
				colors: ["#8A74F9"],
				xaxis: {
					type: "category",
					categories: [
						"ديسمبر",
						"نوفمبر",
						"اكتوبر",
						"سبتمبر",
						"اغسطس",
						"يوليو",
						"يونيو",
						"مايو",
						"ابريل",
						"مارس",
						"فبراير",
						"يناير",
					],
				},
				yaxis: {
					min: 50,
					max: 250,
					tickAmount: 5,
					forceNiceScale: false,
					labels: {
						show: false,
					},
				},
				tooltip: {
					x: {
						format: "dd/MM/yy HH:mm",
					},
				},
			},
			selectedOption: "monthly",
		}
	}

	handleDropdownChange = (event) => {
		this.setState({ selectedOption: event.target.value })
	}

	getChartData = () => {
		const { selectedOption } = this.state

		if (selectedOption === "yearly") {
			this.setState({
				series: [
					{
						name: "استخدام",
						data: [130, 180, 70, 150, 250, 170, 230, 190, 200, 145, 100, 220],
					},
				],
			})
		} else {
			this.setState({
				series: [
					{
						name: "استخدام",
						data: [30, 44, 80, 250, 20, 10, 30, 20, 50],
					},
				],
			})
		}
	}

	render() {
		const { options, series, selectedOption } = this.state

		return (
			<div id="chart" className="top-card">
				<h3>إحصائيات إستخدام القسيمة</h3>
				<span>05 يوليو , 2023 - 05 أغسطس , 2023</span>
				<select value={selectedOption} onChange={this.handleDropdownChange}>
					<option value="monthly">شهريا</option>
					<option value="yearly">سنويا</option>
				</select>
				<button onClick={this.getChartData}>Show Chart</button>
				<ReactApexChart
					options={options}
					series={series}
					type="area"
					height={144}
				/>
			</div>
		)
	}
}

export default ApexChart
