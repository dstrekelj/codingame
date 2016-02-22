// Total telephone numbers count.
var telephoneNumbersCount = parseInt(readline()),
// Total elements count.
elementsCount = 0;
// Data structure "storing" the elements.
structure = [];

// Read telephone numbers and store their elements.
for (var i = 0; i < telephoneNumbersCount; i++) {
var telephoneNumber = readline().split('');
storeElements(telephoneNumber, structure);
}

/**
* Elements are counted recursively with use of an array. The
* idea is that the index of an array element corresponds to
* the numeric value of a telephone number element. If, for
* example, structure[2] is undefined (empty), this means that
* there is no entry for a telephone number with the element
* two at this depth of the structure. In this case a new
* array is added at that index and the function moves to that
* position. The result is a series of (empty) nested arrays
* resembling a linked list.
*
* It's not exactly applicable or useful, but it gets the job
* done. The proper way to do it would be a "head and tail"
* approach akin to linked lists.
*/
function storeElements(telephoneNumber, structureReference) {
if (telephoneNumber.length === 0) return 0;

var element = telephoneNumber.shift();
if (structureReference[element] === undefined) {
    structureReference[element] = [];
    elementsCount += 1;
}

return storeElements(telephoneNumber, structureReference[element]);
}

print(elementsCount);
