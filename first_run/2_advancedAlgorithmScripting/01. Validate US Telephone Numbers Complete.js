// 01. Validate US Telephone Numbers Complete

/*
Credit to Xavier Lacey for the regex featured in this solution
( full profile available at: https://github.com/xavierlacey )
------------------------------------------------
Using Xavier's regex as a reference, and the visual tools at DebuggexBeta
I was able to dissect each section of the needed regex string, which has
helped me to FINALLY understand the basic ideas behind regex and it's
uses within the framework of javascript
( DebuggexBeta available at: https://www.debuggex.com)
*/

function telephoneCheck(str) {
    // simply return the boolean result of running regex.test against the input string:

    return /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/igm.test(str);

    // --- to demonstrate my clarity on HOW this solution works: ---
    //   /^ - String/Regex begin
    //   (1\s?)? - ("1" followed by one or none whitespaces) one or none times
    //   (\(\d{3}\)|\d{3}) - (3 digits inside parenthesis) OR (3 digits)
    //   [\s\-]? - [whitespace and/OR dash character] one or none times
    //   (\d{3}) - 3 digits in a row
    //   [\s\-]? - [whitespace and/OR dash character] one or none times
    //   (\d{4}) - 4 digits in a row
    //   $/ - String/Regex end
    //   igm - REGEX FLAGS: [case-insensitive] - [global] - [^ and $ match start & end of line]
}
