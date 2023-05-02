function removeLeftRight(arr, position) {
  if (position === 'left') {
    arr.shift()
  } else {
    arr.pop()
  }

  return arr
}

console.log(removeLeftRight([1, 2, 3, 4, 5], 'left'));
console.log(removeLeftRight([1, 2, 3, 4, 5], 'right'));