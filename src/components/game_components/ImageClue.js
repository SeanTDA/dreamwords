import React, {useContext, useEffect} from 'react';

import {AppContext} from "../../App"; 




function ImageClue () {


    const appContext = useContext(AppContext);
    const {levelData, setSelectedDreamDisplayIndex, selectedDreamDisplayIndex, isDreamDisplayAutoMode, setIsDreamDisplayAutoMode} = appContext;
    
//
//<img id="imageClueImage" src="https://ipfs.io/ipfs/QmYiTM4uSYryNq3KhvLc7WKnnHH7STe69WfyXcPtZDMP9T/00000000000000000000000000001100.png" alt="Image"/>


    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

/*
    async function autoMode () {
        await timeout(500);
        console.log("checking.. " + isDreamDisplayAutoMode);
        if (isDreamDisplayAutoMode)
            cycleForward();
    }
*/



    const selectDot1 = () => {
        setIsDreamDisplayAutoMode(false);
        setSelectedDreamDisplayIndex(0);
    }
    const selectDot2 = () => {
        setIsDreamDisplayAutoMode(false);
        setSelectedDreamDisplayIndex(1);
    }
    const selectDot3 = () => {
        setIsDreamDisplayAutoMode(false);
        setSelectedDreamDisplayIndex(2);
    }
    const selectDot4 = () => {
        setIsDreamDisplayAutoMode(false);
        setSelectedDreamDisplayIndex(3);
    }

    const cycleForward = () => {

        let newSelectedDreamDisplayIndex = selectedDreamDisplayIndex;
        newSelectedDreamDisplayIndex++;
        if (newSelectedDreamDisplayIndex > 3)
        newSelectedDreamDisplayIndex = 0;     
        setSelectedDreamDisplayIndex(newSelectedDreamDisplayIndex); 
    }

    const cycleBackward = () => {
        let newSelectedDreamDisplayIndex = selectedDreamDisplayIndex;
        newSelectedDreamDisplayIndex--;
        if (newSelectedDreamDisplayIndex < 0)
        newSelectedDreamDisplayIndex = 3;     
        setSelectedDreamDisplayIndex(newSelectedDreamDisplayIndex); 
    }


    useEffect(() => {
        const interval = setInterval(_ => {
          if (isDreamDisplayAutoMode) {
            cycleForward();
          }
        }, 1500);
        return _ => clearInterval(interval);
      });




    let imgClueClassName = "imageClueImage";

    imgClueClassName += (selectedDreamDisplayIndex+1);


    return (

        <div>

            <div className="imageClueContainer">
                <img className={imgClueClassName} src={levelData.imageURL} alt="Image"/>
            </div>

            <div className="imageClueImage-dots">
                <span className={selectedDreamDisplayIndex == 0 ? "imageClueImage-dot active" : "imageClueImage-dot"} onClick={selectDot1}></span>
                <span className={selectedDreamDisplayIndex == 1 ? "imageClueImage-dot active" : "imageClueImage-dot"} onClick={selectDot2}></span>
                <span className={selectedDreamDisplayIndex == 2 ? "imageClueImage-dot active" : "imageClueImage-dot"} onClick={selectDot3}></span>
                <span className={selectedDreamDisplayIndex == 3 ? "imageClueImage-dot active" : "imageClueImage-dot"} onClick={selectDot4}></span>
            </div>
        </div>
        
        );
}

export default ImageClue;