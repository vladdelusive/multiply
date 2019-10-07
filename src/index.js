module.exports = function multiply(first, second) {
  // your solution
  let x = BigInt(first);
  let y = BigInt(second);
  let answer =  (x * y);
  return answer.toString();
}
