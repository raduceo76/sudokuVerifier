/* global describe test expect jest beforeEach */
const validator = require("../sudokuValidator");

beforeEach(() => {
    jest.resetAllMocks();
});

describe("sudokuValidator", () => {
    describe("verify", () => {
        test("Empty sudoku schema ([]) should return false", () => {
            const schema = [];
            const result = validator.verify(schema);

            expect(result).toBe(false);
        });

        test("Empty sudoku schema (null) should return false", () => {
            const schema = null;
            const result = validator.verify(schema);

            expect(result).toBe(false);
        });
    });
});

// More tests come here ...