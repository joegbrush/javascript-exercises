const palindromes = function (string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return string.split("").reverse().join("") === string;
};

console.log(palindromes("race car"));

// Do not edit below this line
module.exports = palindromes;
