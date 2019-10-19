/* global describe test expect jest beforeEach */
const sudokuHelper = require("../sudokuHelper");

beforeEach(() => {
    jest.resetAllMocks();
});

describe("sudokuHelper", () => {
    describe("isValid", () => {
        test("Valid line should return true", () => {
            const grid = [[1, 2, 3]];

            const result = sudokuHelper.isValid(grid);

            expect(result).toEqual(true);
        });

        test("Invalid line should return false", () => {
            const grid = [[1, 2, 5]];

            const result = sudokuHelper.isValid(grid);

            expect(result).toEqual(false);
        });

        test("Invalid line should return false", () => {
            const grid = [];

            const result = sudokuHelper.isValid(grid);

            expect(result).toEqual(false);
        });
        test("Invalid line should return false", () => {
            const grid = null;

            const result = sudokuHelper.isValid(grid);

            expect(result).toEqual(false);
        });
    });
});

// More tests come here ...