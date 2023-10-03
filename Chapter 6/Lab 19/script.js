// Put your solution here
function divideArray(numbers) {
  let evenNums = [];
  let oddNums = [];

  for (let num of numbers) {
    if (num % 2 == 0) {
      evenNums.push(num)
    }
    else {
      oddNums.push(num)
    }
  }

  evenNums.sort((a, b) => a - b);
  oddNums.sort((a, b) => a - b);

  console.log('Even numbers:')
  for (let num of evenNums) {
    console.log(num)
  }
  if (evenNums.length === 0) {
    console.log("None")
  }

  console.log('Odd numbers:')
  for (let num of oddNums) {
    console.log(num)
  }
  if (oddNums.length === 0) {
    console.log("None")
  }
}