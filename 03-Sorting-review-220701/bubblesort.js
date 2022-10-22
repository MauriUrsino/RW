
function swap(array, indice) {
  [array[indice], array[indice + 1]] = [array[indice + 1], array[indice]]
}

function inOrder(array, indice) {
  return array[indice+1] && array[indice] <= array[indice+1]
}

function bubbleSort(arr) {
  for (var j = arr.length; j > 0; j--) {
    var swapped = false;
    for (var i = 0; i < j - 1; i++) {
      if (!inOrder(arr, i)) {
        swap(arr, i);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}