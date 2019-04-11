import React, { Component } from "react";
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography";

import SubtitledImage from '../../components/subtitledImage';

const navBarIconWidth = '20px';

export default class extends Component {
    render() {
        return (
            <div>
                <SubtitledImage
                    src="/imgs/blender.png"
                    alt="blender"
                    title="Shark Ninja"
                    sub1="Magic Bullet NutriBullet 12-Piece"
                    sub2="High-Speed Blender/Mixer System" />

                <Button color="primary">Pantry</Button>
                <Button color="primary">Obsolete</Button>
                <Button color="primary">Blender</Button>
                <Button color="primary">Lightning Deal</Button>

                <List >
                    <ListItem button>
                        <img src="/imgs/icons/home.png" alt="home"
                            width={navBarIconWidth} height="auto" />
                        <Typography style={{ marginLeft: '15px' }}
                            variant="button"
                            color="secondary">
                            OVERVIEW
                        </Typography>
                    </ListItem>
                    <ListItem button>
                        <img src="/imgs/icons/sales.png" alt="sales"
                            width={navBarIconWidth} height="auto" />

                        <Typography style={{ marginLeft: '15px' }}
                            variant="button"
                            color="primary">
                            SALES
                        </Typography>
                    </ListItem>
                </List>
            </div>
        );
    }
}
