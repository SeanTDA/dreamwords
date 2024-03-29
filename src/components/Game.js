import React, { useContext } from 'react';

import { AppContext } from "../App";


import Footer from "./Footer.js";
import ImageClue from "./game_components/ImageClue.js";
import Hangman from "./game_components/Hangman.js";
import Keyboard from "./game_components/Keyboard.js";
import Rating from "./game_components/Rating.js";
import Countdown from "./game_components/Countdown.js";
import ShareButton from "./game_components/ShareButton.js";
import StreakBar from "./game_components/StreakBar.js";


function Game() {


    const appContext = useContext(AppContext);
    const { gameState, completedLevel } = appContext;

    const isGameRunning = gameState === "RUNNING";
    const isGameOver = gameState === "GAME_WON" || gameState === "GAME_LOST";




    return (
        <div className="game">


            <div className="centerElements">
                <StreakBar />
                <ImageClue completedLevel={completedLevel} />
                <Hangman />
                {
                    isGameOver ?
                        <div> <Rating /><Countdown/><ShareButton /> </div> :
                        isGameRunning ?
                        <div/> : <> </>
                }

            </div>

            {
                !isGameOver ?
                    <Keyboard /> :
                    <div />
            }

            <Footer/>




        </div>);
}

export default Game;