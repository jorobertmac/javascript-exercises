const palindromes = function (string) {
  const validChar = "abcdefghijklmnopqrstuvwxyz0123456789"

  const forward = string
  .toLowerCase()
  .split("")
  .filter((character) => validChar.includes(character))
  .join("")

  const reversed = forward.split("").reverse().join("")

  return forward === reversed
};

// Do not edit below this line
module.exports = palindromes;
