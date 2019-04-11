import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import RetailSaleViz from '../../components/retailSaleViz';

export default class extends Component {
	render() {
		return (
			<div>
				<Typography  variant="h6">Retail Sales</Typography>
				<RetailSaleViz />
			</div>
		);
	}
}
