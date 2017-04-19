// Everything Be True

// My Solution::

function truthCheck(collection, pre) {
    // write a function, take an object as the input
    function truthy(obj) {
        // write a ternary statement to evaluate if the input obj[pre] evaluates as truthy
        // return the resulting boolean value
        return (obj[pre]) ? true : false;
    }
    // return the result of collection.every(), using the above function to eval each index/object
    return collection.every(truthy);
}
