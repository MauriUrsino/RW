describe("swap", function () {
  it("toma un arreglo, y un indice y los swapea el elemento del indice con el siguiente", function () {
    var arr = [1, 2, 3, 4];
    swap(arr, 2);
    expect(arr).toEqual([1, 2, 4, 3]);
  });
});

describe("inOrder", function () {
  it("toma un arreglo y un indice y devuelve TRUE si los numeros estan ordenado", function () {
    expect(inOrder([1, 2, 3, 4], 2)).toEqual(true);
  });
  it("toma un arreglo y un indice y devuelve FALSE si los numeros estan desordenados", function () {
    expect(inOrder([1, 2, 4, 3], 2)).toEqual(false);
  });
  it("toma un arreglo y un indice y devuelve TRUE si los numeros son iguales", function () {
    expect(inOrder([1, 2, 4, 4], 2)).toEqual(true);
  });
});

describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("sorts an array", function () {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
  it("calls swap until is sorted", function () {
    spyOn(window, "swap").and.callThrough();
    bubbleSort([1, 2, 3, 5, 4]);
    expect(window.swap.calls.count()).toEqual(1);
  });
  it("calls inOrder until is sorted", function () {
    spyOn(window, "inOrder").and.callThrough();
    bubbleSort([1, 2, 3, 5, 4]);
    expect(window.inOrder.calls.count()).toEqual(7);
  });
});
