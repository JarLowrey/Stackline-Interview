import React, { Component } from "react";

import Chart from './chart';
import Table from './table';

export default class extends Component {
    render() {
        return (
            <div>
                <Chart retailSaleData = {this.props.retailSaleData}/>
                <Table retailSaleData = {this.props.retailSaleData}/>
            </div>
        );
    }
}
