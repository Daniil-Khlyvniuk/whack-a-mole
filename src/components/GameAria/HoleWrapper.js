import React from 'react';
import "./gameAria.scss"

const HoleWrapper = () => {
    return (
            <div className={"hole-wrapper"}>
                <div className={"goal"} datacanbeactive="true"></div>
                <div className={"hole"} datacanbeactive="true"></div>
                <div className={"overlap"} datacanbeactive="true"></div>
                <div className={"overlap_1"} datacanbeactive="true"></div>
            </div>
    );
};

export default HoleWrapper;