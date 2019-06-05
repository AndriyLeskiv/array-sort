// http://mathhelpplanet.com/static.php?p=javascript-algoritmy-sortirovki
// const bigArray = require('./bigArray.js');

const showResult = (idResult, result, idTime, time) => {
    document.getElementById(idResult).innerText = result;
    document.getElementById(idTime).innerText = time;
}

// bubbleSort
const bubbleSort = (array) => {                            
    let length = array.length;
    for (let i = 0; i < length - 1; i++) { 
      for (let j = 0; j < length - 1 - i; j++) { 
        if (array[j + 1] < array[j]) { 
          let t = array[j + 1]; 
          array[j + 1] = array[j]; 
          array[j] = t; 
        }
      }
    }                     
    return array; 
};

const selectionSort = (array) => {
    var length = array.length;
    for (var i = 0; i < length - 1; i++) { 
      var min = i;
      for (var j = i + 1; j < length; j++) { 
        if (array[j] < array[min]) { 
          min = j; 
        }
      } 
      var t = array[min]; 
      array[min] = array[i];
      array[i] = t;
    }                    
    return array;
};

const insertionSort = (array) => {
    var length = array.length;
    for (var i = 0; i < length; i++) {
        var v = array[ i ],
            j = i - 1;
        while (j >= 0 && array[j] > v) {
            array[j + 1] = array[j]; j--;
        }
        array[j + 1] = v;
    }
    return array;
}

const shellSort = (array) => {
    var length = array.length,
        i = Math.floor(length/2);
    while (i > 0) {
        for (var j = 0; j < length; j++) {
            var k = j,
                t = array[j];
            while (k >= i && array[k - i] > t) {
                array[k] = array[k - i];
                k -= i;
            }
            array[k] = t;
        }
        i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
    }
    return array;
}

const simpleCountingSort = (array) => {
    var length = array.length,
        count = [],
        sortedArray = [];
    for (var i = 0; i < length; i++) {
        count[i] = 0;
    }
    for (var i = 0; i < length - 1; i++) {
        for (var j = i + 1; j < length; j++) {
            if (array[i] < array[j]) {
                count[j]++;
            } else {
                count[i]++;
            }
        }
    }
    for (var i = 0; i < length; i++) {
        sortedArray[count[i]] = array[i];
    }
    return sortedArray;
}

const quickSort = (array) => {
    if (array.length == 0) {
        return [];
    }
    var a = [],
        b = [],
        p = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < p) {
            a[a.length] = array[i];
        } else {
            b[b.length] = array[i];
        }
    }
    return quickSort(a).concat(p, quickSort(b));
}
function test() {
    document.getElementById('sortArray').addEventListener('click', () => {
        let array = document.getElementById('array').value.split(',').map(a => Number(a));


        var start = new Date().getTime();
        let bubbleSortArray = bubbleSort(array);
        var end = new Date().getTime();

        showResult('bubbleSortResult', bubbleSortArray, 'bubbleTime', end - start);


        start = new Date().getTime();
        let selectionSortArray = selectionSort(array);
        end = new Date().getTime();

        showResult('selectionSortResult', selectionSortArray, 'selectionTime', end - start);

        start = new Date().getTime();
        let insertionSortArray = insertionSort(array);
        end = new Date().getTime();


        showResult('insertionSortResult', insertionSortArray, 'insertionTime', end - start);

        start = new Date().getTime();
        let shellSortArray = shellSort(array);
        end = new Date().getTime();

        showResult('shellSortResult', shellSortArray, 'shellTime', end - start);

        start = new Date().getTime();
        let simpleCountingArray = simpleCountingSort(array);
        end = new Date().getTime();


        showResult('simpleCountingSortResult', simpleCountingArray, 'simpleCountingTime', end - start);

        start = new Date().getTime();
        let quickSortArray = quickSort(array);
        end = new Date().getTime();

        showResult('quickSortResult', quickSortArray, 'quickTime', end - start);
    });
}

// test();

module.exports = {
    bubbleSort,
    selectionSort,
    insertionSort,
    shellSort,
    simpleCountingSort,
    quickSort
}