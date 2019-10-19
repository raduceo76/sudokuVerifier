"use strict";

const { data } = require("./sampleData");
const sudoku = require("./lib/sudokuValidator");

for (const item in data) {
    const output = sudoku.verify(data[item]) ? "valid" : "invalid";
    console.log(`Input ${item} is ${output}`);
}


