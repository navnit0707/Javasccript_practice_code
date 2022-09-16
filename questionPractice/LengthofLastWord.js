/*
    Given a string s consisting of some words separated 
    by some number of spaces, return the length of the 
    last word in the string.A word is a maximal substring 
    consisting of non-space characters only.
    Example 1:
    Input: s = "Hello World"
    Output: 5
    Explanation: The last word is "World" with length 5.
*/

/*
  My approach is simple i used lastIndexOf() and trim() . 
  trim helped me to erase the white space around the string 
  and lastIndexof gives me the occurence of first white space then after
  its just a math */

  var lengthOfLastWord = function(s) {
   
    var temp = s.trim().lastIndexOf(" ");
    console.log(temp);
   return (s.trim().length-1 - temp);
    
    
};