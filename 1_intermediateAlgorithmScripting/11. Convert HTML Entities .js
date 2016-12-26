// Convert HTML Entities

// My Solution::

function convertHTML(str) {
    //   list all available entities in an array, assign a var
    var entities = ["&amp;", "&lt;", "&gt;", "&apos;", "&quot;"];
    //   combine regex objects into a single expression, wrap each with "()", separate with "|"
    var regX = /(&)|(<)|(>)|(')|(")/ig;
    //   write callback function for string.replace
    function toHtml(match, p1, p2, p3, p4, p5) {
        if (p1) { return entities[0]; }
        if (p2) { return entities[1]; }
        if (p3) { return entities[2]; }
        if (p4) { return entities[3]; }
        if (p5) { return entities[4]; }
    }
    //   return result of str.replace when toHTML is used as a callback
    return str.replace(regX, toHtml);
}
