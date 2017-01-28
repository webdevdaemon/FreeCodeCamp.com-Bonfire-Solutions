// 06. Friendly Date Ranges Complete

var months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
};

var suffixes = {
    1: "st",
    2: "nd",
    3: "rd",
    4: "th"
};

function makeFriendlyDates(arr) {
    // create some top-level vars for month, day, and year as well as an empty output var
    var y, m, d, output;
    // create a function to parse a raw date/input into an array of user-friendly values
    function parser(ray) {
        var y = ray[0];
        var m = ray[1];
        var d = parseInt(ray[2]);
        var friendlyD;
        var friendlyM = months[m];
        if (d <= 4) { friendlyD = d + suffixes[d]; }
        if (d > 4 && d < 10) { friendlyD = d + "th"; }
        if (d >= 10) {
            var lastN = d % 10;
            if (lastN > 0 && lastN <= 4 && d > 20) { friendlyD = d + suffixes[lastN]; } else { friendlyD = d + "th"; }
        }
        return [friendlyM, friendlyD, y];
    }
    // assign vars to the two raw date inputs, JIC we need to refer back to them later
    var rawS = arr[0],
        rawE = arr[1];
    // assign vars to the result of running the raw start and end dates through the parser function
    // before feeding the date string into the parser function, split it into an array at the "-" chars
    var start = parser(arr[0].split("-")),
        end = parser(arr[1].split("-"));
    // assign vars to the friendly month, day, and year values of both "parsed" dates
    var sM = start[0],
        sD = start[1],
        sY = start[2]; // start date values
    var eM = end[0],
        eD = end[1],
        eY = end[2]; // end date values
    // if both dates are equal, return that date
    if (rawS === rawE) {
        output = [sM + " " + sD + ", " + sY];
        return output;
    }
    // if start & end year equal 2016 AND start month = end month - ["Month Nth","Xth"]
    // furthermore, if start yr = 2016 & end yr = 2017 - ["Month Nth","Month Xth"]
    if (eY === "2016" && sM === eM) {
        output = [sM + " " + sD, eD];
        return output;
    } else if (eY === "2017" && sY === "2016" && sM <= eM) {
        output = [sM + " " + sD, eM + " " + eD];
        return output;
    }
    // if end yr - start yr <= 1 AND start month <= end month - ["Month Nth, Year", "Month Xth"]
    else if (eY - sY <= 1 && sM <= eM && sD !== eD) {
        output = [sM + " " + sD + ", " + sY, eM + " " + eD];
        return output;
    }
    // if end - start is longer than a year OR
    // end yr - start yr = 1 & the month/day are equal - ["Month Nth, Year", "Month Xth, Year"]
    else if (eY - sY >= 1 && sM < eM ||
        eY - sY === 1 && [sM, sD] === [eM, eD]) {
        output = [sM + " " + sD + ", " + sY, eM + " " + eD + ", " + eY];
        return output;
    }
    // all other scenarios should also return - ["Month Nth, Year", "Month Xth, Year"]
    else {
        output = [sM + " " + sD + ", " + sY, eM + " " + eD + ", " + eY];
        return output;
    }
}
