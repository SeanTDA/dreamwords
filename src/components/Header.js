import React, { useContext } from 'react';

import { AppContext } from "../App";


import HelpButton from "./header_components/HelpButton.js";


function Header() {

    const appContext = useContext(AppContext);
    const { gameTitle } = appContext;


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
                    <a href="https://www.instagram.com/daydreams.ai" target="_blank" rel="noopener noreferrer" className = "header-instagramButton" >
                        <img src="images/instagram-icon.svg" alt="Instagram"/>
                    </a>
                </div>
                


            </div>
        </div>);
}

export default Header;
