// References:
//  https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/#:~:text=In%20JavaScript%2C%20we%20can%20easily,%2C%20time%2C%20and%20time%20zone.

const currentDate = new Date();


let years = document.querySelector("#years")
let months = document.querySelector("#months");
let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");



function calculate(){
    let userInput = new Date(document.getElementById('birthday').value);

    // calculating from 1970
    ageInMs = currentDate.getTime() - userInput.getTime();
    ageInS = ageInMs / 1000;        //milliseconds to seconds
    ageInMins = ageInS / 60;        //seconds to minutes
    ageInHours = ageInMins / 60;    // minutes to hours
    ageInDays = ageInHours / 24;    // hours to days
    ageInMonths = ageInDays / 30.4375;   // days to months
    ageInYears = ageInMonths / 12;  // months to years

    years.innerHTML = Math.floor(ageInYears) + " Years";
    months.innerHTML = Math.floor(ageInMonths % 12) + " Months";
    days.innerHTML = Math.floor(ageInDays % 30.4375) + " Days";
    hours.innerHTML = Math.floor(ageInHours % 24) + " Hours";
    minutes.innerHTML = Math.floor(ageInMins % 60) + " Minutes";
    seconds.innerHTML = Math.floor(ageInS % 60) + " Seconds";
}

function reset(){
    window.location.reload();
}
