import "./form.scss"

import React from 'react';
import DifficultyLevelInput from "./DificutdLevelInput";

const Form = ({didStarted, titleText, supTitleText, btnText, text}) => {
    return (
        <div className={"formWrapper"}>
            <form className={"form"} action="">
                <h2>{titleText}</h2>
                <h2>{supTitleText}</h2>
                {!didStarted &&
                    <>
                    <p>{text}</p>
                    <DifficultyLevelInput inputValue={"Easy"} />
                    <DifficultyLevelInput inputValue={"Middle"} />
                    <DifficultyLevelInput inputValue={"Hard"} />
                    </>
                }
                <button>{btnText}</button>
            </form>
        </div>
    );
};

export default Form;