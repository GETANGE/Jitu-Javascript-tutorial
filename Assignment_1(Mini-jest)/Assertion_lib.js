const Assertions = {
    assertEqual(actual, expected, message) {
        if (actual !== expected) {
            throw new Error(message || `Expected ${expected} but got ${actual}`);
        }
    },

    assertNotEqual(actual, expected, message) {
        if (actual === expected) {
            throw new Error(message || `Expected not ${expected}`);
        }
    },

    assertTrue(value, message) {
        if (!value) {
            throw new Error(message || `Expected truthy value but got ${value}`);
        }
    },

    assertFalse(value, message) {
        if (value) {
            throw new Error(message || `Expected falsy value but got ${value}`);
        }
    },

    assertContains(array, item, message) {
        if (!array.includes(item)) {
            throw new Error(message || `Expected array to contain ${item}`);
        }
    }
};

module.exports = Assertions