import React from 'react'

function leapYear(year){
    if(year < 1582){
        throw new Error('Leap year rules do not work before 1582');

    }
    //If divisible by 400/100/4
    //Return checks if it was divisible by 400 or if it
    //was divisible by 4 and not 100
    const div400 = year % 400 === 0;
    const div100 = year % 100 === 0;
    const div4 = year % 4 === 0;
    return div400 || (div4 && !div100);
  }

export default leapYear;