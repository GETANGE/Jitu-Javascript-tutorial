const TestRunner = require('./Test_Runner_class')

const testRunner = new TestRunner();

function test(name, testFn) {
    testRunner.registerTest(name, testFn);
}

function describe(name, suiteFn) {
    console.log(`Suite: ${name}`);
    suiteFn();
}

// Example test suite with before/after hooks
testRunner.beforeAll(() => {
    console.log("Before all tests");
});

testRunner.afterAll(() => {
    console.log("After all tests");
});

testRunner.beforeEach(() => {
    console.log("Before each test");
});

testRunner.afterEach(() => {
    console.log("After each test");
});

describe("Sample Test Suite", () => {
    test("adds 2 + 2", () => {
        Assertions.assertEqual(2 + 2, 4, "2 + 2 should be equal to 4");
    });

    test("checks array contains", () => {
        Assertions.assertContains([1, 2, 3], 2, "Array should contain 2");
    });
});

// Run the tests
testRunner.runTests();
