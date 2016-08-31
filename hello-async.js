// setTimeout(function () {
//     console.log('1');
// }, 2000);

// setTimeout(function () {
//     console.log('3');
// }, 1000);

// console.log('2');

console.log('Challenge:');

function printInTwoSeconds (message) {
    setTimeout(function () {
        console.log(message);
    }, 2000);
    // setTimeout 2000
    //      console to print message var
}

printInTwoSeconds('Hello async!');

// 891af3fc419e981ba9e19403bf463727

// var url = 'http://api.openweathermap.org/data/2.5/weather?appid=891af3fc419e981ba9e19403bf463727&q=' + encodedLocation + '&units=metric';