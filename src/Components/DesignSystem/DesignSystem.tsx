import React from 'react';
import Typography from "./Typography";
import Colors from "./Colors";
import "./designSystem.scss";
import Interactives from "./Interactives";

function DesignSystem() {
    return (
        <div className="designSystem">
            <h1 className="heading-l ">Design System</h1>
            <Colors />
            <Typography />
            <Interactives />
        </div>
    );
}

export default DesignSystem;