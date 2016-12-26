// Sorted Union

// My Solution::

function uniteUnique(arr) {
    var args = Array.from(arguments);
    var argsL = args.length;
    var output = [];
    for (var i = 0; i < argsL; i++) {
        var sub = args[i];
        var subL = args[i].length;
        for (var j = 0; j < subL; j++) {
            var index = sub[j];
            if (output.indexOf(index) < 0) {
                output.push(index);
            }
        }
    }
    return output;
}
