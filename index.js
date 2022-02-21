
const letterEncryption = new Map([
  ["t", "y"],
  ["y", "n"],
  ["n", "t"],
]);

function funcEncryption(string) {
  const letters = string.split("");
  const result = [];
  for (const letter of letters) {
    result.push(letterEncryption.get(letter));
  }
  return result.join("");
}
