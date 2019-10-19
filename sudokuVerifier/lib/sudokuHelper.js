function isValid(grid) {
    if (!grid || !grid.length) {
        return false;
    }

    for (const line of grid) {
        const copyArray = line.concat().sort();

        for (let i = 0; i < copyArray.length - 1; i++) {

            if (copyArray[i] + 1 !== copyArray[i + 1]) {
                return false;
            }
        }
    }

    return true;
}

function getArraySchema(sudokuSchema) {
    const sudokuArraySchema = [];
    for (const item of sudokuSchema || []) {
        const row = item.split(",").map(x => parseInt(x));
        // if the row is not valid there is no need to continue
        if (row.length !== 9 || !isNumericArray(row)) {
            return [];
        }

        sudokuArraySchema.push(row);
    }

    return sudokuArraySchema;
}

function isNumericArray(inputArray) {
    for (const item of inputArray) {
        const regex = /([0-9])/;

        if (!regex.test(item)) {
            return false;
        }
    }

    return true;
}

function getColumnsAsRows(sudokuArray) {
    const columnsArray = [];
    for (let i = 0; i < sudokuArray.length; i++) {
        let columnArray = [];

        for (let j = 0; j < sudokuArray.length; j++) {
            columnArray.push(sudokuArray[j][i]);
        }

        columnsArray.push(columnArray);
    }

    return columnsArray;
}

function getSubsquaresAsArrays(sudokuArray) {
    const subSquaresArray = [];

    for (let i = 0; i < sudokuArray.length; i++) {
        subSquaresArray.push([]);
    }

    for (let i = 0; i < sudokuArray.length; i++) {
        for (let j = 0; j < sudokuArray.length; j++) {
            let x = Math.floor(i / 3);
            let y = Math.floor(j / 3);
            let index = x * 3 + y;

            subSquaresArray[index].push(sudokuArray[i][j]);
        }
    }

    return subSquaresArray;
}

module.exports = {
    isValid: isValid,
    getArraySchema: getArraySchema,
    getColumnsAsRows: getColumnsAsRows,
    getSubsquaresAsArrays: getSubsquaresAsArrays
};