import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';

export default class extends Component {
    render() {
        return (
            <div>
                <img
                    alt="blender"
                    src="/imgs/blender.png"
                    width="100px" height="auto"
                    style={{ display: 'block', margin: '0 auto' }} />


                <Typography component="h2" variant="h1" gutterBottom>
                    Shark Ninja
                </Typography>
            </div>
        );
    }
}
