const describe = require('./Assertion_lib')
const testRunner = require('./Test_Runner_class')

describe("Math Tests", () => {
    test("adds 1 + 1", () => {
        Assertions.assertEqual(1 + 1, 2);
    });

    test("subtracts 5 - 3", () => {
        Assertions.assertEqual(5 - 3, 2);
    });
});

describe("Array Tests", () => {
    test("Array contains value", () => {
        Assertions.assertContains([1, 2, 3], 3); 
    });
});

testRunner.runTests();