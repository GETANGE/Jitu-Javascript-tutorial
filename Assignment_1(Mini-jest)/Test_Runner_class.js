class TestRunner {
    constructor() {
        this.tests = [];  //Initializes an empty array to store all the registered test cases.
        this.executionOrder = 'sequential'; //Sets the default execution order for the tests to 'sequential' (tests will be run in the order they were added).
        this.beforeEachHook = null; // Initializes a hook that will run before each test, set to null by default (no hook).
        this.afterEachHook = null; // Initializes a hook that will run after each test, set to null by default.
        this.beforeAllHook = null; // Initializes a hook that will run before all tests, set to null by default.
        this.afterAllHook = null; // Initializes a hook that will run after all tests, set to null by default.
    }

    registerTest(name, testFunction, tags = []) {
        this.tests.push({ name, testFunction, tags });
// name: A descriptive name for the test.
// testFunction: The function that contains the test logic.
// tags = []: Optional tags for categorizing or filtering tests.
// this.tests.push(...): Adds the test object (with name, testFunction, and tags) to the tests array.
    }

    // Checks if there is a beforeAll hook defined. If so, it runs the hook before executing any tests.
    async runTests() {
        if (this.beforeAllHook) await this.beforeAllHook();

        //  Iterates over all registered tests in the order defined by getTestsInExecutionOrder.
        for (const test of this.getTestsInExecutionOrder()) {
            if (this.beforeEachHook) await this.beforeEachHook(); //Runs the beforeEach hook (if defined) before each individual test.
            try {
                await test.testFunction(); // Runs the test function. If it passes without error, it logs ✅ Passed: ${test.name} to the console.
                console.log(`✅ Passed: ${test.name}`);
            } catch (error) {
                console.error(`❌ Failed: ${test.name}`); //If the test fails (throws an error), it logs ❌ Failed: ${test.name} along with the error message.
                console.error(error.message);
            }
            if (this.afterEachHook) await this.afterEachHook(); //Runs the afterEach hook (if defined) after each individual test.
        }

        if (this.afterAllHook) await this.afterAllHook(); // If an afterAll hook is defined, it runs after all the tests have been executed.
    }

// ilterFn: A function that takes a test as an argument and returns true if the test should be included or false if it should be excluded.
// this.tests = this.tests.filter(filterFn);: Filters the registered tests based on the provided filter function. Only tests that pass the filter will remain in the tests array.
    filterTests(filterFn) {
        this.tests = this.tests.filter(filterFn);
    }

    setExecutionOrder(order) {
        this.executionOrder = order;
    }

    getTestsInExecutionOrder() {
        if (this.executionOrder === 'random') {
            return [...this.tests].sort(() => Math.random() - 0.5);
        }
        return this.tests; // Default: sequential order
    }

    beforeEach(hookFn) {
        this.beforeEachHook = hookFn;
    }

    afterEach(hookFn) {
        this.afterEachHook = hookFn;
    }

    beforeAll(hookFn) {
        this.beforeAllHook = hookFn;
    }

    afterAll(hookFn) {
        this.afterAllHook = hookFn;
    }
}

module.exports = TestRunner;