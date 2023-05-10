import React, { useContext } from 'react';
import { AppContext } from "../../../App.js";

import {getKeycapClassName} from "../../../skins.js";



function getLetterIsHint (thisLetter, hintLetters) {
    if (hintLetters === undefined)
        return false;
    return hintLetters.includes(thisLetter.toLowerCase());
}

function KeyboardKey({ keyVal, keyState }) {

    const appContext = useContext(AppContext);
    const { onSelectLetter, acceptSelectLetter, gameState, selectedKeycap, levelData} = appContext;






    let className = "keyboardKey";

    let subclass = "keyboardKey-disabled";
    const skinClassName = getKeycapClassName(selectedKeycap); 


    if (keyState === "MISTAKE")
        subclass = skinClassName+"-mistake";

    if (keyState === "CORRECT")
        subclass = skinClassName+"-correct";

    if (keyState === "ENABLED")
        subclass = "keyboardKey-enabled " + skinClassName+"-enabled";


    const isSelected = keyState === "MISTAKE" || keyState === "CORRECT";

    if (isSelected)
        subclass += " keyboardKey-selected";

    if (!acceptSelectLetter && !isSelected)
        subclass = "keyboardKey-waiting-for-input";

    const isLetterGoodHint = getLetterIsHint(keyVal, levelData.hintGoodLetters);
    const isLetterBadHint = getLetterIsHint(keyVal, levelData.hintBadLetters);
    if (!isSelected && isLetterGoodHint)
        subclass += " keyboardKey-good-hint";
    if (!isSelected && isLetterBadHint)
        subclass += " keyboardKey-bad-hint";


    className += " " + subclass;


    const selectLetter = () => {
        onSelectLetter(keyVal);
    }



    let appearAnimationDelay = "0ms";   

    
    if (keyState === "ENABLED")
        appearAnimationDelay =  ((1+({"G":0,
        "F":1,"T":1,"Y":1,"H":1,"V":1,
        "R":2,"D":2,"C":2,"B":2,"J":2,"U":2,
        "E":3,"S":3,"X":3,"I":3,"K":3,"N":3,
        "W":4,"A":4,"Z":4,"O":4,"L":4,"M":4,
        "Q":5,"P":5}[keyVal])) * 100)+"ms";


    if (gameState === "RUNNING" || gameState === "GAME_LOST" || gameState === "GAME_WON") {

        return (
            <div className={className} style={{animationDelay : appearAnimationDelay}} onClick={selectLetter} >
                {keyVal} 
    
            </div>);
    } else {
        return (<div/>);
    }



}

export default KeyboardKey;