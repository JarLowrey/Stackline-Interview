import React, { Component } from "react";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class extends Component {
	getRows(){
		const data = this.props.retailSaleData;
		let rows = []
		for(let i=0;i<data.weekEnding.length;i++){
			let row = {
				id: i,
				weekEnding: data.weekEnding[i],
                retailSales: data.retailSales[i],
                wholesaleSales: data.wholesaleSales[i],
                unitsSold: data.unitsSold[i],
                retailerMargin: data.retailerMargin[i],
			}
			rows.push(row);
		}
		return rows;
	}
	render() {
		const rows = this.getRows();

		return (
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="left">Week Ending</TableCell>
						<TableCell align="right">Retail Sales</TableCell>
						<TableCell align="right">Wholesale Sales</TableCell>
						<TableCell align="right">Units Sold</TableCell>
						<TableCell align="right">Retailer Margin</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.id}>
							<TableCell align="left">{row.weekEnding}</TableCell>
							<TableCell align="right">{row.retailSales}</TableCell>
							<TableCell align="right">{row.wholesaleSales}</TableCell>
							<TableCell align="right">{row.unitsSold}</TableCell>
							<TableCell align="right">{row.retailerMargin}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		);
	}
}
