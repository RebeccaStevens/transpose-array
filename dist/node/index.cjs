'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Create a new array which is a transposed version of the given array.
 *
 * @param matrix - The matrix to create the transposed one from.
 * @throws {TypeError} When the number of items per row/column are inconsistent.
 * @returns The transposed matrix.
 */
function transpose(matrix) {
    var _a;
    const rows = matrix.length;
    if (rows === 0) {
        return [];
    }
    const columns = matrix[0].length;
    const result = [];
    for (let m_row = 0; m_row < rows; m_row++) {
        if (matrix[m_row].length !== columns) {
            throw new TypeError("Inconsistent number of items per row/column.");
        }
        for (let m_column = 0; m_column < columns; m_column++) {
            (_a = result[m_column]) !== null && _a !== void 0 ? _a : (result[m_column] = new Array(rows));
            result[m_column][m_row] = matrix[m_row][m_column];
        }
    }
    return result;
}
/**
 * Modifies the given array in order to transpose it.
 *
 * @param matrix - The matrix to transpose.
 * @throws {TypeError} When the number of items per row/column are inconsistent.
 */
function transposeInPlace(matrix) {
    var _a;
    const rows = matrix.length;
    if (rows === 0) {
        return;
    }
    const columns = matrix[0].length;
    const maxSize = Math.max(rows, columns);
    for (let m_row = 0; m_row < rows; m_row++) {
        if (matrix[m_row].length !== columns) {
            throw new TypeError("Inconsistent number of items per row/column.");
        }
        for (let m_column = m_row + 1; m_column < maxSize; m_column++) {
            if (m_column >= rows) {
                (_a = matrix[m_column]) !== null && _a !== void 0 ? _a : (matrix[m_column] = new Array(rows));
                matrix[m_column][m_row] = matrix[m_row][m_column];
                continue;
            }
            if (m_column >= columns) {
                matrix[m_row][m_column] = matrix[m_column][m_row];
                continue;
            }
            const temp = matrix[m_row][m_column];
            matrix[m_row][m_column] = matrix[m_column][m_row];
            matrix[m_column][m_row] = temp;
        }
    }
    // Remove any extra rows.
    if (rows > columns) {
        matrix.splice(columns, Number.POSITIVE_INFINITY);
    }
    // Remove any extra columns.
    if (columns > rows) {
        for (let m_row = 0; m_row < columns; m_row++) {
            matrix[m_row].splice(rows, Number.POSITIVE_INFINITY);
        }
    }
}

exports.default = transpose;
exports.transposeInPlace = transposeInPlace;
