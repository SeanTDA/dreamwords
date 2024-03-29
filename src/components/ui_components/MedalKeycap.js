
import React, { useContext } from 'react';
import { AppContext } from "../../App.js";
import {getKeycapUnlockProgress, getKeycapUnlockRequirement, getKeycapUnlockCurrent, getKeycapClassName} from "../../skins.js";



function MedalKeycap({keycap}) {

    const appContext = useContext(AppContext);
    const { selectedKeycap, setSelectedKeycap, onSelectKeycap, setMedalsShown, history } = appContext;


    if (keycap === "COMINGSOON")
        return (<div style={{"--var-locked-item-opacity":0.5}} className="medals-item medals-item-locked">
            <div className="medals-item-icon">⏳ </div> 
            </div>)
    




    function onButtonClicked () {
        onSelectKeycap(keycap);    // saves it to data
        setMedalsShown(0);
    }


    
    var isSelected = selectedKeycap === keycap;
    var unlockRequirement = getKeycapUnlockRequirement(keycap, history);
    var unlockCurrent = getKeycapUnlockCurrent(keycap, history);
 
    var unlockProgress = getKeycapUnlockProgress(keycap, history);


    var isUnlocked = unlockProgress >= 1;
    var className = "medals-item";
    
    /*<div className="medals-item-icon">{Math.floor(unlockProgress*1000)/10}% </div> */

    if (!isUnlocked) {
        // locked
        className += " medals-item-locked";
        var lockedOpacity = unlockProgress+0.1;
        return (<div style={{"--var-locked-item-opacity":lockedOpacity}} className={className}>
            
            <div className="medals-item-icon">{unlockCurrent} / {unlockRequirement} </div> 
            
            </div>)
    }



    if (isSelected) className += " medals-item-selected";
    if (isUnlocked) className += " selectable";
    className += " " + getKeycapClassName(keycap) + "-icon";



    return (<div className={className} onClick={onButtonClicked}> 
    <div className="medals-item-icon">★</div> 
    
    </div> );

};



export default MedalKeycap;