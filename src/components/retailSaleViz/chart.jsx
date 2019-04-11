import React, { Component } from "react";
import Plot from 'react-plotly.js';

export default class MyComponent extends Component {
	static getMaxOfArray(arr) {
		return arr.reduce(function (a, b) {
			return Math.max(a, b);
		});
	}
	render() {
		const data = this.props.retailSaleData;

		const dataEmpty = data.weekEnding.length === 0;
		if (dataEmpty) {
			return <div />;
		}

		const yMax = Math.max(MyComponent.getMaxOfArray(data.retailSales), MyComponent.getMaxOfArray(data.wholesaleSales))

		return (
			<div style={{ display: 'block', width: "100%" }}>
				<Plot
					style={{ width: "100%" }}
					data={[
						{
							name: "Retail Sales",
							x: data.weekEnding,
							y: data.retailSales,
							type: 'scatter',
							mode: 'lines',
							line: {'shape': 'spline', 'smoothing': 1.3}, 
							marker: { color: '#45a8f6' },
						},
						{
							name: "Wholesale Sales",
							x: data.weekEnding,
							y: data.wholesaleSales,
							type: 'scatter',
							mode: 'lines',
							line: {'shape': 'spline', 'smoothing': 1.3}, 
							marker: { color: '#9ba6bf' },
						},
					]}
					layout={{
						autosize: true,
						showlegend: false,
						xaxis: {
						},
						yaxis: {
							// range: [-yMax, yMax],
							showgrid: false,
							zeroline: false,
							showline: false,
							autotick: true,
							ticks: '',
							showticklabels: false
						}
					}}
				/>
			</div>
		);
	}
}
