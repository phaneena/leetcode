gain = [-5, 1, 5, 0, -7];
function high(gain) {
  result = [0];
  for (i = 0; i < gain.length; i++) {
    let a = result[i] + gain[i];
    result.push(a);
  }
  return Math.max(...result);
}
console.log(high(gain));
