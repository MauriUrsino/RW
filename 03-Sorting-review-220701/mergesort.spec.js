describe('Split Array function', function() {
    it('es capaz de dividir el arreglo en dos partes', function() {
      expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
    });

    it('doesnt break with only one or cero values', function() {
      expect(split([1])).toEqual([[], [1]]);
    });

    it('es capar de dividir el arreglo en dos partes', function() {
        expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
        expect(split([1,2,33,3,4,57])).toEqual([[1,2,33],[3,4,57]]);
    });

    it('es capar de dividir el arreglo impar en dos partes', function() {
      expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
    });

  });
  
  
  describe('Merge', function() {
    it('es capaz de mergear dos arreglos ordenados a un solo arreglo ordenado', function(){
      expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
      expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
      expect(merge([5, 6], [2, 4])).toEqual([2, 4, 5, 6]);
    });

    

  it('joins two arrays in order', function() {
      expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
      expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
      expect(merge([5, 6], [2, 4])).toEqual([2, 4, 5, 6]);
    });

    it('joins two single values', function() {
      expect(merge([1], [2])).toEqual([1, 2]);
    });

  });
  
  
  describe('mergeSort', function() {
    var randomArray = [5, 2, 8, 4, 3, 1, 7, 6, 9];
    var inOrderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    beforeEach(function() {
      spyOn(window, 'split').and.callThrough();
      spyOn(window, 'merge').and.callThrough();
    });


    it('with 1 or fewer elements, returns sorted array', function() {
      expect(mergeSort([])).toEqual([]);
      expect(mergeSort([1000])).toEqual([1000]);
      expect(split.calls.count()).toEqual(0);
      expect(merge.calls.count()).toEqual(0);
    });

  
  it('ordena un arreglo', function () {
    expect(mergeSort([4,2,5,1,6,3])).toEqual([1,2,3,4,5,6]);
    expect(mergeSort(randomArray)).toEqual(inOrderArray);
  });

  

    
  });