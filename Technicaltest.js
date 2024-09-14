/// TECHNICAL TEST//
//1. List the properties of a JavaScript object
let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.keys(student));  // Output: ['name', 'sclass', 'rollno']

// 2. Delete the rollno property and print the object before and after deletion
let student2 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log("Before deletion:", student2);  // Before deleting rollno

delete student2.rollno;

console.log("After deletion:", student2);  // After deleting rollno

// 3. Get the length of a JavaScript object (number of properties)
var student3 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log("The length of the object is : "+Object.keys(student3).length);  // Output: 3

// 4. Display the reading status of books
let library = [
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false
        }
    ];
    
library.forEach(function(book) {
    console.log(`Book: ${book.title}, Author: ${book.author}, Reading Status: ${book.readingStatus}`);
});

// 7.Return a subset of a string
function subset(str) {
    let result = [];
    
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
        
        return result;
    }
    
    console.log(subset("dog"));  // Output: ["d", "do", "dog", "o", "og", "g"]

// 10. Sort an array of JavaScript objects by libraryID
let library2 = [
        {
            title: 'The Road Ahead',
            author: 'Bill Gates',
            libraryID: 1254
        },
        {
            title: 'Walter Isaacson',
            author: 'Steve Jobs',
            libraryID: 4264
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            libraryID: 3245
        }
    ];
    
    // Sort by libraryID in descending order
    library2.sort((a, b) => b.libraryID - a.libraryID);
    
    console.log(library2);

// 11. Print all methods in a JavaScript object
function all_properties(obj) {
        return Object.getOwnPropertyNames(obj).filter(function(property) {
            return typeof obj[property] === 'function';
        });
    }
    
console.log(all_properties(Array));  // Output: ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

// 12. Write a JavaScript function to parse an URL.
function parseURL(url) {
    var parsedUrl = new URL(url);
    return {
        href: parsedUrl.href,
        protocol: parsedUrl.protocol,
        host: parsedUrl.host,
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        pathname: parsedUrl.pathname,
        search: parsedUrl.search,
        hash: parsedUrl.hash,
        origin: parsedUrl.origin
    };
}

console.log(parseURL("https://www.example.com/path?name=John#section"));

// 13. Retrieve all names of an object's own and inherited properties
function getAllProperties(obj) {
    let properties = [];
    for (let prop in obj) {
        properties.push(prop);
    }
    return properties;
}

  console.log(getAllProperties(new Date()));  // Example with a Date object

// 14. Retrieve all values of an object's properties
function getObjectValues(obj) {
    return Object.values(obj);
}

let student4 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(getObjectValues(student4));  // Output: ["David Rayy", "VI", 12]

// 15. Convert an object into a list of [key, value] pairs
function objectToList(obj) {
    return Object.entries(obj);
}

console.log(objectToList(student4));  // Output: [["name", "David Rayy"], ["sclass", "VI"], ["rollno", 12]]

// 16. Get a copy of the object with keys as values and values as keys
function invertObject(obj) {
    let inverted = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted;
}

console.log(invertObject(student4));  // Output: {"David Rayy": "name", "VI": "sclass", 12: "rollno"}
