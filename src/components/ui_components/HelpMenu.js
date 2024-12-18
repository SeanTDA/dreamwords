

import React, { useContext } from 'react';
import { AppContext } from "../../App.js";


import Slider from "react-slick";
import ImageCrop from '../game_components/imageCrop';

import useCollapse from 'react-collapsed';



function HelpMenu() {

    const appContext = useContext(AppContext);
    const { setHelpMenuShown, helpMenuShown, versionCode, levelIndex, history } = appContext;
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();


    function onButtonClicked () {
        setHelpMenuShown(0);
    }

    const isHelpMenuShown = helpMenuShown === 1;


    let faderClassName = "helpMenu-fader";

    if (isHelpMenuShown) {
        faderClassName += " helpMenu-fader-active";
    }

    const exampleImageURL = "https://tada-daydreams.s3.ap-southeast-2.amazonaws.com/tutorial/examples_opt.jpg";

    return (
        <div>
            <div className={faderClassName}> {isHelpMenuShown ? <div>


                <div className="helpMenu-container-outer">
                    <div className="helpMenu-container">
                        <div className="helpMenu-contents">
                        <div className="subMenu-header">
                            <div className="subMenu-center"> HOW TO PLAY </div>
                            <div className="subMenu-right"></div>
                        </div>
                        <div className="helpMenu-guide"> Guess each letter from the set of <b>Daydreams.</b>
                            <br />
                            <br /> Boost your 🔥 daily streak with daily wins.
                            <br />Rack up a 🏆 super streak by surviving with all ❤️❤️❤️ hearts intact.
                            <br />Unlock new ⭐ keycaps by increasing your wins and highest streak.
                            <br /><br />
                            <b>New Daydreams will appear every day!</b>
                            <br />
                            <br />
                            <div className="helpMenu-carousel-container">
                            <Slider autoplay={true} dots={true} arrows={false} pauseOnFocus={true} autoplaySpeed={3200}>
                                <ImageCrop index={0} imageUrl={exampleImageURL} resolution={[1792,1024]} imageSubtitle="APPLECA_DLE" imageClassName="helpMenu-carousel-image" borderRadius="20" />
                                <ImageCrop index={1} imageUrl={exampleImageURL} resolution={[1792,1024]} imageSubtitle="MOSSYSOL_IERSTATUE" imageClassName="helpMenu-carousel-image" borderRadius="20" />
                                <ImageCrop index={2} imageUrl={exampleImageURL} resolution={[1792,1024]} imageSubtitle="DEMON_CGU_TAR" imageClassName="helpMenu-carousel-image" borderRadius="20" />
                                <ImageCrop index={3} imageUrl={exampleImageURL} resolution={[1792,1024]} imageSubtitle="FU_URIS_ICP_RIS" imageClassName="helpMenu-carousel-image" borderRadius="20" />
                            </Slider>
                            </div>
                            <br />






                            <div className="helpMenu-credits">
                            <div className="helpMenu-credits-header" {...getToggleProps()}>
                                <b>{isExpanded ? "- CREDITS" : "+ CREDITS"}</b>
                            </div>
                            <div {...getCollapseProps()}>
                                <div className="helpMenu-credits-body">
                                <br />
                                <b>Game Design & Programming</b>
                                <br /> Sean Simon <br />
                                <a id="twitter" className="helpMenu-hyperlink" href="https://twitter.com/Those6Faces" target="_blank" rel="noopener noreferrer">
                                    <b>@thosesixfaces</b>
                                </a>
                                <br />
                                <br />
                                <b>Game Design</b>
                                <br /> Raymond Leung <br />
                                <a id="twitter" className="helpMenu-hyperlink" href="https://twitter.com/raymondleung" target="_blank" rel="noopener noreferrer">
                                    <b>@raymondleung</b>
                                </a>
                                <br />
                                <br />
                                <b>Executive Producer</b>
                                <br /> Tyrone Estephan <br />
                                <a id="email" className="helpMenu-hyperlink" href="mailto:tyrone@t-da.io" target="_blank" rel="noopener noreferrer">
                                    <b>tyrone@t-da.io</b>
                                </a>
                                <br />
                                <br />
                                <b>Website Bug Fixes</b>
                                <br /> Andrew Morton <br />
                                <br />
                                <b>Special Thanks to</b>
                                <br/><b><a id="gold" className="helpMenu-hyperlink" href="https://www.youtube.com/channel/UC3FwaVaqMKb47gIsh8WDylA" target="_blank" rel="noopener noreferrer"> Harry Gold </a></b> for surpassing a 100x streak <br/>
                                <br />
                                
                                </div>
                            </div>
                            </div>
                            <br />
                            Join the Discord Community
                            <br />

                            <table className="helpMenu-socials">
                                <tr>
                                    <th>
                                        <a href="https://discord.gg/jZZhcVXQtF" target="_blank" rel="noopener noreferrer" className = "helpMenu-discordButton" >
                                            <img src="images/discord-icon.svg" alt="Discord"/>
                                        </a>
                                    </th>
                                    <th>
                                        <a href="https://www.instagram.com/daydreams.ai" target="_blank" rel="noopener noreferrer" className = "instagramButton" >
                                            <img src="images/instagram-icon.svg" alt="Instagram"/>
                                        </a>
                                    </th>
                                </tr>
                            </table>

                            <br />
                            <br /> Day {levelIndex+1}&nbsp;&nbsp;&nbsp;v{versionCode}
                        </div>
                        </div>
                    </div>
                </div>


                
                <div className="simple-closeButton-container">
                    <div className="simple-closeButton" onClick={onButtonClicked}>
                    <img src="images/close.svg" alt="Close" />
                    </div>
                </div>
                </div>:
                <div /> 
                }
            </div>
            </div>
    );
}



export default HelpMenu;






