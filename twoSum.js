function twoNumberSum(array, targetSum) {
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    let dif = targetSum - array[i];
    if (dif in hash) return [array[i], dif];
    if (!(array[i] in hash)) hash[array[i]] = true;
  }
  return [];
}

let array = [3, 5, -4, 8, 11, 1, -1, 6];

let target = 10;

twoNumberSum(array, target);
