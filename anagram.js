const fs = require("fs");
const rl = require("readline");
const prompts = rl.createInterface(process.stdin, process.stdout);

dictionary = [];

function findAnagrams1(word) {
  let output = [];
  let sortedWord = word.split("").sort().join("");
  for (i = 0; i < dictionary.length; i++) {
    let currentWord = dictionary[i];
    let currentSortedWord = currentWord.split("").sort().join("");

    if (currentSortedWord == sortedWord) {
      output.push(currentWord);
    }
  }
  output.forEach((currentWord) => {
    console.log(currentWord);
  });
}

function findAnagrams2(word) {
  let sortedWord = word.split("").sort().join("");

  dictionary
    .filter((currentWord) => {
      let currentSortedWord = currentWord.split("").sort().join("");
      return currentSortedWord == sortedWord;
    })
    .forEach((currentWord) => {
      console.log(currentWord);
    });
}

function startApp() {
  prompts.question("Enter word: ", function (word) {
    fs.readFile("dictionary.txt", (err, data) => {
      if (err) throw err;
      dictionary = data.toString().split("\n");
      findAnagrams1(word);
    });
  });
}

startApp();
