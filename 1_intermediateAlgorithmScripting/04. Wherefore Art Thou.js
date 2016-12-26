// Wherefore Art Thou

// My Solution::

function whatIsInAName(collection, source) {
    // prep - create an array of the keys present in the 2nd arg (source) & assign it a variable
    var keys = Object.keys(source);
    // proactive loop variable for use in a moment...
    var i;
    // use the filter method of the input array (collection) to check each index against the source object, removing anything that falls short of an IDENTICAL match of BOTH the key & value
    // return the filter's output as the main output array for the whatIsInAName function
    return collection.filter(function(val) {
        // use a for loop to loop through the keys present in the source object
        for (i = 0; i < keys.length; i++) {
            // use an if statement to identify the indexes that don't match both the key AND value of the source identically
            if (!val.hasOwnProperty(keys[i]) || val[keys[i]] !== source[keys[i]]) {
                return false;
            }
        }
        return true;
    });
}
