function addMoreData(object, key, value) {
  object[key] = value

  return object
}

console.log(addMoreData({ name: 'Edo', age: 20 }, 'address', 'Jakarta'));
