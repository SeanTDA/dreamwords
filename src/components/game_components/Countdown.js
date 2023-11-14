import React, { useEffect, useState, useContext }  from 'react';
import { AppContext } from "../../App";

import { newDate, newDateYMD, newDateYMDH, newDateYMDHM } from '../../date';

function Countdown () {

    const appContext = useContext(AppContext);
    const { levelData } = appContext;

    const [timeUntilNextDaydream, setTimeUntilNextDaydream] = useState("");

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var creditLine = "";
    

    if (levelData.credits !== undefined) {
        creditLine = "Prompt created by " + levelData.credits;
    }

    if (levelData.inspired !== undefined && levelData.inspired.length > 0) {
        creditLine = "Prompt inspired by " + (levelData.inspired).join(" and "); 
    }



    useEffect(() => {
        const interval = setInterval(() => {

            const todayTimestampUTC = newDate();
           // const tomorrowDayUTC = new Date(todayTimestampUTC.getFullYear(), todayTimestampUTC.getMonth(), todayTimestampUTC.getDate(), todayTimestampUTC.getHours(), todayTimestampUTC.getMinutes()+1);
           const tomorrowDayUTC = new Date(todayTimestampUTC.getFullYear(), todayTimestampUTC.getMonth(), todayTimestampUTC.getDate()+1);
            var dateDiff = tomorrowDayUTC - todayTimestampUTC;


            if (dateDiff > 0) {

                var hours = Math.floor((dateDiff % _day) / _hour);
                var minutes = Math.floor((dateDiff % _hour) / _minute);
                var seconds = Math.floor((dateDiff % _minute) / _second);

                setTimeUntilNextDaydream(String(hours).padStart(2, '0')+":"+String(minutes).padStart(2, '0')+":"+String(seconds).padStart(2, '0'));

            } else {
                setTimeUntilNextDaydream("Reload the page");
            }

        }, 100);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="countdown">
            <div className="countdown-sub">
            {creditLine} | {timeUntilNextDaydream}
            </div>
            
            <span className="countdownCounter">
                <a href="https://forms.gle/uszPSiJk2n5UX7UV8" target="_blank" rel="noopener noreferrer">Submit Level Ideas</a>
            </span>

        </div>
    );
    


    /*
    return (
        <div className="countdown">
            Next Daydream:
            <br/>
            <span className="countdownCounter">
                {timeUntilNextDaydream}
            </span>
            <br/>
            <span className="countdown-announcement">
            </span>

        </div>
         );*/
}

export default Countdown;