import React, { Component } from "react";

import Chart from './chart';
import Table from './table';

export default class extends Component {
    render() {
        console.log(this.props.retailSaleData);
        
        return (
            <div>
                <Chart data = {1}/>
                <Table data = {1}/>
            </div>
        );
    }
}
