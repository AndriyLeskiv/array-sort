/** 
 * Testing sort functions
 * with Mocha and Node.js Assert module.
 *
 */

const sort = require('./sort.js');
const assert = require('assert');

it('correctly sort by bubbleSort', () => {
  assert.deepEqual(sort.bubbleSort([12,2,18,31,0,7,4,3]), [0,2,3,4,7,12,18,31]);
})

it('correctly sort by selectionSort', () => {
    assert.deepEqual(sort.selectionSort([12,2,18,31,0,7,4,3]), [0,2,3,4,7,12,18,31]);
})

it('correctly sort by insertionSort', () => {
    assert.deepEqual(sort.insertionSort([12,2,18,31,0,7,4,3]), [0,2,3,4,7,12,18,31]);
})

it('correctly sort by shellSort', () => {
    assert.deepEqual(sort.shellSort([12,2,18,31,0,7,4,3]), [0,2,3,4,7,12,18,31]);
})

it('correctly sort by simpleCountingSort', () => {
    assert.deepEqual(sort.simpleCountingSort([12,2,18,31,0,7,4,3]), [0,2,3,4,7,12,18,31]);
})

it('correctly sort by quickSort', () => {
    assert.deepEqual(sort.quickSort([12,2,18,31,0,7,4,3]), [0,2,3,4,7,12,18,31]);
})
