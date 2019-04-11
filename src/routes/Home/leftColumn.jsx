import React, { Component } from "react";
import SubtitledImage from '../../components/subtitledImage';
import Button from '@material-ui/core/Button';

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

            </div>
        );
    }
}
