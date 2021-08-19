import React from 'react';
import HoleWrapper from "./HoleWrapper";
import "./_gameAria.scss"


const GameAria = () => {
    return (
        <div id={"game-aria"}>
            <div id={"hole-field"}>
                {
                    [...Array(15)]
                        .map((e, i) =>
                            ([0, 4, 10, 14].includes(i))
                                ? <div key={i}/>
                                : <HoleWrapper key={i}/>
                        )
                }
            </div>
        </div>
    );
};

export default GameAria;