import React, { Component } from "react";
import Plot from 'react-plotly.js';

export default class extends Component {
	render() {
		return (
			<div style={{ display: 'block' }}>
				<Plot
					data={this.props.data}
				/>
			</div>
		);
	}
}
