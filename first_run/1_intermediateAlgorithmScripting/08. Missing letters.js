// Missing letters

// My Solution::

function fearNotLetter(str) {
    var out = [],
        chkArr = [];
    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
    var regX = new RegExp("[" + str + "]"); // Create New reg expression from input string
    // split input to array | find first/last indexes | assign vars to indexes AND values
    var array = str.split(""),
        first = array[0],
        last = array[array.length - 1];
    // find indexOf first and last in alpha to make a key array | assign vars to indexes
    var cF = alpha.indexOf(first),
        cL = alpha.indexOf(last);
    // use for loop to build key array for upcoming filter
    for (var i = cL; i >= cF; i--) { chkArr.unshift(alpha[i]); }
    // assign filter result (array) to output | only keep characters NOT present in the input/regX
    out = chkArr.filter(function(val) {
        return !regX.test(val); });
    if (out[0]) { out = out.join(""); } // If value is present in leftover array, return string of joined indexes
    else { out = undefined; } // if not, out should be UNDEFINED
    return out; // return output
}
