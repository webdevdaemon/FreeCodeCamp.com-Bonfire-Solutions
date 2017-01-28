// DNA Pairing

// My Solution::

function pairElement(str) {
    // prep output array
    var output = [];
    // create an array from input string
    var array = str.split("");
    var subArray = [];
    // To iterate through each index of the array, use a switch statement nested inside a for loop
    for (var i = 0; i < array.length; i++) {
        // initialize a new subArray with the current index @ [0]
        subArray = [array[i]];
        // add the corresponding letter for each possible value
        switch (array[i]) {
            case "G":
                subArray.push("C");
                break;
            case "C":
                subArray.push("G");
                break;
            case "T":
                subArray.push("A");
                break;
            case "A":
                subArray.push("T");
                break;
        }
        output.push(subArray);
    }
    return output;
}
