import React, { Component } from 'react';
import Header from '../../components/header';

import Grid from '@material-ui/core/Grid';
import LeftColumn from './leftColumn';
import RightColumn from './rightColumn';

export default class extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{ flexGrow: 1, margin: "100px 50px" }}>
                    <Grid container spacing={40}>
                        <Grid item xs={2}>
                            <LeftColumn />
                        </Grid>
                        <Grid item xs={10}>
                            <RightColumn />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
