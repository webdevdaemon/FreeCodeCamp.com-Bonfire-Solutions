// Pig Latin

// My Solution::

function translatePigLatin(str) {
  //  prep empty array, and string for output, assign both to variables
  var out = [];
  var output = "";
  //  prep reg expression to target vowels, assign to variable
  var re = /[aeiou]/;
  //  create an array of each character from input string, assign variable
  var pre = str.split("");
  //  target zero index of array, assign variable
  var zero = pre[0];
  //  declare var for later use
  var fToB;
  //  create function to test for consanants, returning TRUE if (consonant)
  function isCon(ch) {
    return !re.test(ch);
  }
  //  use if/else to determine course of action if zero index is vowel or consonant
  if (isCon(zero)) {
  //  if consonant is present, push consonants to end until first vowel
    while(isCon(pre[0])) {
      fToB = pre.shift();
      pre.push(fToB);
    }
  //  assign new string to output PLUS "ay" suffix
    output = pre.join("") + "ay";
  } else {
  // if consonant is not present at zero index, assign input to output, plus "way"
    output = str + "way";
  }
  //  return output... AND... THHHWWAAAAAKOOOOOOOOOOM!!!
  return output;
}
