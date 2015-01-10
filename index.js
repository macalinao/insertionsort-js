var insertionsort = module.exports = function(arr, comparator) {
  if (!comparator) {
    comparator = function(a, b) {
      return a - b;
    };
  }

  for (var i = 1; i < arr.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      if (comparator(arr[j + 1], arr[j]) <= 0) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
};
