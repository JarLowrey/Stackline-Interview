import React, { Component } from "react";

import Toolbar from '@material-ui/core/Toolbar';

export default class extends Component {
    render() {
        return (
            <div>
                <Toolbar>
                    <img
                        alt="logo"
                        src="/imgs/stackline_logo.png"
                        width="150px"
                        height="auto" />
                </Toolbar>
            </div>
        );
    }
}
