// Roman Numeral Converter

// My Solution::

function convertToRoman(num) {
    // prep output & error variables
    var output, out = [], error = "";
    // prep output variable and error variable for future use in conversion function
    var roman1s = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var roman10s = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var roman100s = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var roman1000s = ["", "M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "MMMMMMMM", "MMMMMMMMM" ];
    // assign a logical variable to the input
    var input = num;
    // assign a variable to an array, assignin each digit of the input to it's own array
    var arr = num.toString().split("");
    // find the length/number of digits in the input
    var inputL = arr.length;
    console.log(input + ": \n" + inputL);
    // create a function to handle the main conversion task
    function convert(numArray) {
        if (inputL === 4) {
            out.push(roman1000s[numArray[0]]);
            out.push(roman100s[numArray[1]]);
            out.push(roman10s[numArray[2]]);
            out.push(roman1s[numArray[3]]);
        } else if (inputL === 3) {
            out.push(roman100s[numArray[0]]);
            out.push(roman10s[numArray[1]]);
            out.push(roman1s[numArray[2]]);
        } else if (inputL === 2) {
            out.push(roman10s[numArray[0]]);
            out.push(roman1s[numArray[1]]);
        } else if (inputL === 1) {
            out.push(roman1s[numArray[0]]);
        } else {
            // prepare an error message for invalid entries or inputs beyond the scope of this exercise
            error = "number is either not a valid number, or is too large for this edition of 'SUPERAWESOMEONLINEROMANNUMERALCONVERTERMACHINE'";
        }
        // join array of roman nums into a single string and assign it to out variable
        out = out.join("");
        // determine if output should be a roman numeral, or an error
        if (typeof input !== 'number') {
            output = error;
        } else {
            output = out;
        }
    }
    // run the conversion on the input ARRAY
    convert(arr);
    // return output
    return output;
}
