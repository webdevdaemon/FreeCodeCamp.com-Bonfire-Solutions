// Arguments Optional

// My Solution::

function addTogether() {
    var output;, a1 = arguments[0], a2 = arguments[1];
    function isNum(n) {
        if   (typeof n !== "number") { return undefined; }
        else { return n; }
    }
    if (arguments.length > 1) {
        if   (typeof a1 !== "number" || typeof a2 !== "number") { output = undefined; }
        else { output = a1 + a2; }
    } else {
        var a3 = a1;
        if   (typeof a1 !== "number")  		{ output = undefined; }
        else { output = function(a2) { return isNum(a3 += a2); }; }
    }
    return output;
}
