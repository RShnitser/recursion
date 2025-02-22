// 9. Three-Sum Problem
// Write a recursive function to find all unique triplets in an array that sum to zero.
// You must return an array of arrays where each subarray contains a valid triplet.
//
// Example Test Cases:
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Expected Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // Output: []
console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]

function threeSumRecursive(arr, start, dat, res){

  if((arr.length - start) + dat.length < 3){
    return;
  }

  if(dat.length === 3){
    const sum = dat[0] + dat[1] + dat[2];
    if(sum === 0){
      dat.sort();
      for(const r of res){
        if(dat[0] === r[0] && dat[1] === r[1] && dat[2] === r[2]){
          return;
        }
      }
      res.push(dat);
    }
    return;
  }

  const newdat = [...dat, arr[start]];

  threeSumRecursive(arr, start + 1, dat, res);
  threeSumRecursive(arr, start + 1, newdat, res);
 
}

function threeSum(arr: number[]): number[][] { 
  const result = [];
  threeSumRecursive(arr, 0, [], result)
  return result;
}

// 10. Rock, Paper, Scissors (Generate All Possible Outcomes)
// Write a recursive function that generates all possible outcomes of a game of Rock, Paper, Scissors for n rounds.
// Each round has three choices: "rock", "paper", or "scissors".
// The function should return an array of arrays, where each inner array represents a sequence of moves.
//
// Example Test Cases:
console.log(rockPaperScissors(2));
// Expected Output: [
//   ["rock", "rock"], ["rock", "paper"], ["rock", "scissors"],
//   ["paper", "rock"], ["paper", "paper"], ["paper", "scissors"],
//   ["scissors", "rock"], ["scissors", "paper"], ["scissors", "scissors"]
// ]
console.log(rockPaperScissors(1));
// Expected Output: [["rock"], ["paper"], ["scissors"]]

function rpsRecursive(n, dat, res){
  if(dat.length === n){
    res.push(dat);
    return;
  }

  rpsRecursive(n, [...dat, "rock"], res);
  rpsRecursive(n, [...dat, "paper"], res);
  rpsRecursive(n, [...dat, "scissors"], res);
}

function rockPaperScissors(n) {
  const result = [];
  rpsRecursive(n, [], result);
  return result;
}
