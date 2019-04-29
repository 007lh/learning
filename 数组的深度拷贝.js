
nestedNumbers = [[1], [2]];
numbersCopy = JSON.parse(
  JSON.stringify(nestedNumbers)
);
numbersCopy[0].push(300);
console.log(nestedNumbers, numbersCopy);
// nestedNumbers = [[1], [2]]
// numbersCopy = [[1, 300], [2]]
// These two arrays are completely separate!