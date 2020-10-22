// Add your functions here

function map(array, func) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
}

function reduce(array, func, starting) {
  let result;
  if (starting) {
    result = starting;
    for (let i = 0; i < array.length; i++) {
      result = func(array[i], result);
    }
  } else {
    result = array[0];
    for (let i = 1; i < array.length; i++) {
      result = func(array[i], result);
    }
  }

  return result;
}
