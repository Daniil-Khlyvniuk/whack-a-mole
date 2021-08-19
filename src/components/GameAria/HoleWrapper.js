import React from 'react';
import "./_gameAria.scss"
import Mole from "../Mole/Mole";

const HoleWrapper = () => {
    return (
            <div className={"hole-wrapper"}>
                <Mole />
                <div className={"goal"} />
                <div className={"hole"} />
                <div className={"overlap"} />
                <div className={"overlap_1"} />
            </div>
    );
};

export default HoleWrapper;