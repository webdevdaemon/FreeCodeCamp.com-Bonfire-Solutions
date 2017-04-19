// Spinal Tap Case

// My Solution::

function spinalCase(str) {
    var dash = "-", spc = " ";          // assign variables to strings representing " " and "-"
    var regX = /([A-Z])|([_ ])|([ ])/g; // create first regex statement for use in our initial replace function
    function spinalize(match, p1, p2, p3) {
        if (p1) { return dash + match.toLowerCase(); }
        if (p2) { return dash;                       }
        if (p3) { return dash;                       }
    }
    var cleanup = /(^-)|([ ])|(--)/g;  // "cleanup" function to wipe away the mess from the first round of replace
    function cleaner(match, p1, p2, p3) {
        if (p1) { return "";   }
        if (p2) { return "";   }
        if (p3) { return dash; }
    }
    str = str.replace(regX, spinalize);   // run 1st function
    return str.replace(cleanup, cleaner); // return result of second... and... BOOOOOM!!! dunzo.
}
