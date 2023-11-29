/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/
let sampWord = "";
function searchLastwords(sampWord){
    let fullWord = sampWord.split(" ");
    let expWord = fullWord.pop()
    console.log(`The last word is ${expWord} with length ${expWord.length}`)
}
searchLastwords("Hello World")

let wordsWithSpace = "";
function searchLastwords(wordsWithSpace) {
    let fullWord = wordsWithSpace.split(" ");
    let lastWord = "";
    for (let i = fullWord.length - 1; i >= 0; i--) {
        if (fullWord[i] == "") {
            continue;
        } else {
            lastWord = fullWord[i]
            console.log(`The last word is ${lastWord} with length ${lastWord.length} `)
            break;
        }
        break;
    }
}
searchLastwords("   fly me   to   the moon  ")

/*
Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
let stringVal1, firstVal = "";
let stringVal2, secondVal = "";
function isAnagram(stringVal1, stringVal2) {

    firstVal = stringVal1.split("")
    secondVal = stringVal2.split("")
    firstVal = firstVal.sort().join("")
    secondVal = secondVal.sort().join("")

    if (firstVal == secondVal) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isAnagram('listen', 'silent')
isAnagram('hello', 'world')
