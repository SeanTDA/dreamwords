import React, { useEffect, useState }  from 'react';

import { newDate, newDateYMD, newDateYMDH, newDateYMDHM } from '../../date';

function Countdown () {


    const [timeUntilNextDaydream, setTimeUntilNextDaydream] = useState("");

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;



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
            Next Daydream:
            <br/>
            <span className="countdownCounter">
                {timeUntilNextDaydream}
            </span>
            <br/>
            <span className="countdown-announcement">
            </span>

        </div>
         );
}

export default Countdown;