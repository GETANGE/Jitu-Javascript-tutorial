// TESTING MY KNOWLEDGE ON THE USE "SPREAD AND REST " OPERATORS
const filterAndSort = function(filterfn, ...numbers){
    return numbers.filter(filterfn).sort();
}
// let numbers = [5,3,8,6,2];
const isEven =(num)=> num % 2 == 0;
const results = filterAndSort(isEven, 5,3,8,6,2)
console.log(results); // [ 2, 6, 8 ]

// MERGING OBJECTS FUNCTIONS
const mergeObjects = function(...obj) {
    let result = {};
    for (let o of obj) {
        result = { ...result, ...o };
    }
    return result;
}

const obj1 = { a: 1, b:2}
const obj2 = { c: 3, d:4}
let result = mergeObjects(obj1, obj2);
console.log(result);


// COMBINE ARRAYS FUNCTIONS
const combineArrays = function(...arrays){
    let result = arrays.reduce((acc, val) => acc.concat(val));

    let removeDuplicates = new Set(result);

    let arr = [];

    for(let item of removeDuplicates){
        arr.push(item);
    }

    return arr;
}

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [5, 6, 7];

let result2 = combineArrays(arr1, arr2, arr3);
console.log(result2); 

// EXTRACT PROPERTIES OF FUNCTIONS
const extractProperties = function(objects, ...properties) {
    return objects.map(obj => properties.reduce((acc, prop) => {
        acc[prop] = obj[prop];
        return acc;
    }, {}));
}
const objects = [{a: 1, b: 2, c: 3}, {a: 4, b:5, c:6}]
let result3 = extractProperties(objects, 'a', 'b');
console.log(result3);