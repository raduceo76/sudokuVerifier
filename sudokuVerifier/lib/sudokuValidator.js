const helper = require("./sudokuHelper");

module.exports.verify = function verify(sudokuSchema) {
    // check minimum requirements
    if (!sudokuSchema || sudokuSchema.length !== 9) {
        return false;
    }
    // convert string rows to arrays
    const sudokuArray = helper.getArraySchema(sudokuSchema);

    // check rows
    if (!sudokuArray || !sudokuArray.length || !helper.isValid(sudokuArray)) {
        return false;
    }

    // push collums to be checked (this could be checked by row as well saving memory)
    const columnsArray = helper.getColumnsAsRows(sudokuArray);

    // check columns
    if (!helper.isValid(columnsArray)) {
        return false;
    }

    // get subsquares as arrays
    const subSquaresArray = helper.getSubsquaresAsArrays(sudokuArray);

    // final check of sub grids
    return helper.isValid(subSquaresArray);
};