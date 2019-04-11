import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        return (
            <div
                style={{ marginBottom: '25px' }}>
                <div style={{ textAlign: 'center' }}>
                    <img
                        alt={this.props.alt}
                        src={this.props.src}
                        width="100px" height="auto"
                        style={{ display: 'block', margin: '0 auto' }} />


                    <Typography variant="h6" gutterBottom >
                        {this.props.title}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom color="secondary">
                        {this.props.sub}
                    </Typography>
                </div>
            </div>
        );
    }
}


MyComponent.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
};

export default MyComponent;