describe('Merge Sort', function() {

      function sortNumber(a, b) {
          return a - b;
      }

      var arr;
      beforeEach(function() {
          arr = [2, 1];
          // arr = [5, 6, 1, 3, 8, 4, 5, 10];
          arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
          arr3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
          arr4 = [1, 2, 7];
          arr5 = [3, 8, 9];
      });

      it('splits an array with an odd number of elements', function() {
          expect(split(arr2)).toEqual([
              [1, 2, 3, 4, 5, 6],
              [7, 8, 9, 10, 11]
          ]);
      });


      it('splits an array with an even number of elements', function() {
          expect(split(arr3)).toEqual([
              [10, 9, 8, 7, 6],
              [5, 4, 3, 2, 1]
          ]);
      });

      it('merges two arrays', function() {
          expect(merge(arr4, arr5)).toEqual([1, 2, 3, 7, 8, 9])
      });

      it('handles an empty array', function() {
          expect(mergeSort([])).toEqual([]);
      });

      it('handles an array with one item', function() {
          expect(mergeSort([1])).toEqual([1]);
      });

      it('handles an array with multiple items', function() {
          expect(mergeSort(arr)).toEqual(arr.sort(sortNumber));
      });

      it('handles an array with multiple items in already sorted order', function() {
          expect(mergeSort(arr2)).toEqual(arr2.sort(sortNumber));
      });

      it('handles an array with multiple items in reverse sorted order', function() {
          expect(mergeSort(arr3)).toEqual(arr3.sort(sortNumber));
      });

      // before(function() {
      //     spyOn(window, 'swap').and.callThrough();
      // });

  });
