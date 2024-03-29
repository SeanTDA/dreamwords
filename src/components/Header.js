import React, { useContext } from 'react';

import { AppContext } from "../App";


import HelpButton from "./header_components/HelpButton.js";
import MedalsButton from "./header_components/MedalsButton.js";
import {getNumDaysPlayed} from "../historyHelper.js";


function Header() {

    const appContext = useContext(AppContext);
    const { gameTitle, history } = appContext;

    var numDaysPlayed = getNumDaysPlayed(history);


    return (
        <div className="header">
            


            <div className="header-container">

                <div className="header-left">
                <HelpButton/>
                </div>

                <div className="header-center">

                    <div className="header-logo-container">
                        <div className="header-logo">
                            <img src="images/logo.svg" alt="Daydreams"/>
                        </div>
                    </div>

                </div>

                <div className="header-right">
                     <MedalsButton/>
                
                    



                </div>
                


            </div>
        </div>);
}


export default Header;
