//#region YI

import { YArg } from '@syls/y/arg';
import { YCond, condIsNumberSig } from '@syls/y/cond';
import { configString as config } from './config.mjs';
import { funcLoopRange, funcLoopRangeIn, funcLoopRangeTo } from '@syls/func';
import { yGetProp } from '@syls/y';
import { numberGetRandomReal } from '@syls/number';

//#endregion
//#region YT

/** ### stringT
 * 
 * Типы модуля `string`.
 * 
 * @typedef stringT
 * 
 * @prop {[string, number]} row
 * @prop {stringT['row'][]} rows
 * @prop {[string, number]} column
 * @prop {stringT['row'][]} columns
 * 
 * @prop {-1|0|1} align
 * @prop {'ru'|'en'} local
 * 
 * @prop {'a'|'e'|'i'|'o'|'u'|'y'} charVowelsEn
 * @prop {'b'|'c'|'d'|'f'|'g'|'h'|'j'|'k'|'l'|'m'|'n'|'p'|'q'|'r'|'s'|'t'|'v'|'w'|'x'|'z'} charConsonantsEn
 * @prop {stringT['charVowelsEn'][]} charVowelsEnUsed
 * @prop {stringT['charConsonantsEn'][]} charConsonantsEnUsed
 * 
 * @prop {stringT['local']} localTo
 * @prop {number} rowIndex
 * @prop {number} columnIndex
 * @prop {number} size
 * @prop {[number, number]} sizes
 * @prop {[number, number]} position
 * @prop {number|[number, number]} index
 * @prop {number[]} indexs
 * @prop {number} length
 * @prop {number} indexEnd
 * @prop {number} indentLength
 * @prop {string} char
 * @prop {string[]} chars
 * @prop {string} fill
 * @prop {string} string
 * @prop {string} indent
 * @prop {string} delimeter
 * @prop {string} substring
 * @prop {string|RegExp} match
 * @prop {[string|RegExp][]} matches
 * @prop {boolean} direction
 * @prop {boolean} initially
 * @prop {[string, number]} pairSymbolIndex
 * @prop {[string, number, number]} pairSymbolPosition
 * @prop {{[K in keyof config['params']['symbols']]: keyof config['params']['symbols'][K]}[keyof config['params']['symbols']]} symbolName
 * 
 * @prop {{
 * vols: (string|[string|number])[],
 * cots: (string|[string|number])[],
 * chance: number?,
 * prefix: string,
 * postfix: string,
 * syllable: number|[number, number],
 * delimeter: string?,
 * capitalize: boolean?,
 * }} wordGenPart
 * @prop {stringT['wordGenPart'][]} wordGenParts
 * 
*/

//#endregion
//#region YV

/** ### stringCharVowelsEn
 * 
 * Гласные буквы английского языка.
 * 
 * ***
 * @type {['a', 'e', 'i', 'o', 'u', 'y']}
*/
export const stringCharVowelsEn = ['a', 'e', 'i', 'o', 'u', 'y'];
/** ### stringRegExpWord
 * 
 * Регулярное выражение поиска слов. 
 * 
 * ***
 * @type {RegExp}
*/
export const stringRegExpWord = /\p{L}+/u;

//#endregion

//#region toCaseUp

/**
 * ### toCaseUp
 * 
 * 
 * 
 * ***
 * @typedef toCaseUpT
 * @prop {} _
 * ***
 * @arg {stringT&toCaseUpT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function toCaseUp(args) {

    let result;

    try {

        let {

            indexs,
            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (!indexs.length) indexs.push(0);

        //#endregion
        //#region comply

        for (const index of indexs) {

            string = stringPaste(string, string[index].toUpperCase(), index);

        };

        result = string;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### toCaseUp
 * 
 * Функция, которая делает заглавными символы по указанным индексам.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['index']} indexs `Индексы`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringToCaseUp(string, ...indexs) {

    return toCaseUp({ string, indexs, });

};

//#endregion
//#region toCaseDown

/**
 * ### toCaseDown
 * 
 * 
 * 
 * ***
 * @typedef toCaseDownT
 * @prop {} _
 * ***
 * @arg {stringT&toCaseDownT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function toCaseDown(args) {

    let result;

    try {

        let {

            string,
            indexs,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (!indexs.length) indexs.push(0);

        //#endregion
        //#region comply

        for (const index of indexs) {

            string = stringPaste(string, string[index].toLowerCase(), index);

        };

        result = string;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### toCaseDown
 * 
 * Функция, которая делает строчными символы по указанным индексам.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['index']} indexs `Индексы`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringToCaseDown(string, ...indexs) {

    return toCaseDown({ string, indexs, });

};

//#endregion
//#region getRow

/**
 * ### getRow
 * 
 * 
 * 
 * ***
 * @typedef getRowT
 * @prop {} _
 * ***
 * @arg {stringT&getRowT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getRow(args) {

    let result;

    try {

        let {

            index,
            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = stringGetRows(string);

        if (index >= result.length) return null;

        result = result[index];

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringGetRow
 * 
 * Функция получения строки по индексу.
 * 
 * ***
 * @arg {stringT['index']} index `Индекс`
 * @arg {stringT['string']} string `Строка`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetRow(string, index) {

    return getRow({ string, index, });

};

//#endregion
//#region getRows

/**
 * ### getRows
 * 
 * 
 * 
 * ***
 * @typedef getRowsT
 * @prop {} _
 * ***
 * @arg {stringT&getRowsT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getRows(args) {

    let result;

    try {

        let {

            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = string.split('\n');

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringGetRows
 * 
 * Функция получения всех строк из текста.
 * 
 * ***
 * @arg {stringT['string']} string `Строка`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetRows(string) {

    return getRows({ string, });

};

//#endregion
//#region getStat

/**
 * ### getStat
 * 
 * 
 * 
 * ***
 * @typedef getStatT
 * @prop {} _
 * ***
 * @arg {stringT&getStatT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getStat(args) {

    let result;

    try {

        let {

            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const stat = {

            syms: string.match(/[^\p{L} \n]/gmsiu)?.length ?? 0,
            nums: string.match(/\d+/gmsi)?.length ?? 0,
            words: string.match(/\p{L}+/uimgs)?.length ?? 0,
            length: string.length,
            rowNum: stringGetRows(string).length,
            columnNum: stringGetColumns(string).length,

        };

        result = stat;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### getStat
 * 
 * Функция получения подробной статистики по тексту.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetStat(string) {

    return getStat({ string, });

};

//#endregion
//#region getSizes

/**
 * ### getSizes
 * 
 * 
 * 
 * ***
 * @typedef getSizesT
 * @prop {} _
 * ***
 * @arg {stringT&getSizesT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getSizes(args) {

    let result;

    try {

        let {

            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = stringGetRows(string);

        if (result.length === 0) return [0];

        for (const index in result) result[index] = result[index].length;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### getSizes
 * 
 * Функция получения размеров текста.
 * 
 * ***
 * @arg {stringT['string']} string `Строка`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetSizes(string) {

    return getSizes({ string, });

};

//#endregion
//#region getMatrix

/**
 * ### getMatrix
 * 
 * 
 * 
 * ***
 * @typedef getMatrixT
 * @prop {} _
 * ***
 * @arg {stringT&getMatrixT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getMatrix(args) {
    
    let result;
    
    try {
        
        let {
            
            string,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        let rows = stringGetRows(string);

        for (const index in rows) rows[index] = rows[index].match(/./gmsi);
        
        result = rows;

        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### stringGetMatrix
 * 
 * Функция получения матрицы символов заданного текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetMatrix(string) {

    return getMatrix({ string, });

};

//#endregion
//#region getSymbol

/**
 * ### getSymbol
 * 
 * 
 * 
 * ***
 * @typedef getSymbolT
 * @prop {} _
 * ***
 * @arg {stringT&getSymbolT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getSymbol(args) {

    let result;

    try {

        let {

            symbolName,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = yGetProp(config.params.symbols, symbolName);

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringGetSymbol
 * 
 * Функция получения символа по его названию.
 * 
 * ***
 * @arg {stringT['symbolName']} symbolName `Символ`
 * @returns {string}
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetSymbol(symbolName) {

    return getSymbol({ symbolName, });

};

//#endregion
//#region getColumn

/**
 * ### getColumn
 * 
 * 
 * 
 * ***
 * @typedef getColumnT
 * @prop {} _
 * ***
 * @arg {stringT&getColumnT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getColumn(args) {

    let result;

    try {

        let {

            index,
            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = stringGetRows(string);

        if (!result.length) return null;

        for (const rowIndex in result) result[rowIndex] = result[rowIndex][index] ?? null;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringGetColumn
 * 
 * Функция получения колоны из текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['index']} index `Индекс`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetColumn(string, index) {

    return getColumn({ string, index, });

};

//#endregion
//#region getColumns

/**
 * ### getColumns
 * 
 * 
 * 
 * ***
 * @typedef getColumnsT
 * @prop {} _
 * ***
 * @arg {stringT&getColumnsT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getColumns(args) {

    let result;

    try {

        let {

            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = [];

        const rows = stringGetRows(string);

        if (!rows.length) return null;

        let rowLengthMax = 0;

        for (const row of rows) {

            if (row.length > rowLengthMax) rowLengthMax = row.length;

        };

        for (let index = 0; index < rowLengthMax; index++) {

            const column = [];

            for (const row of rows) {

                column.push(row[index] ?? null);

            };

            result.push(column);

        };

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringGetColumns
 * 
 * Функция получения массива колонн из указанного текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @returns {string[][]}
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetColumns(string) {

    return getColumns({ string, });

};

//#endregion
//#region getIndexByPosition

/**
 * ### getIndexByPosition
 * 
 * 
 * 
 * ***
 * @typedef getIndexByPositionT
 * @prop {} _
 * ***
 * @arg {stringT&getIndexByPositionT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getIndexByPosition(args) {

    let result;

    try {

        let {

            string,
            rowIndex,
            columnIndex,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const rows = stringGetRows(string);

        if (rowIndex >= rows.length) {

            return [rows.length - 1, rows.at(-1).length];

        };

        let index = 0;

        for (let y = 0; y < rowIndex; y++) {

            if (!rows[y]) {

                break;

            };

            index += rows[y].length + 1;

        };

        const row = rows[rowIndex];

        if (row.length > columnIndex) {

            index += columnIndex;

        } else {

            index += row.length;

        };

        result = index;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringGetIndexByPosition
 * 
 * Функция получения индекса по позиции в тексте.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['rowIndex']} rowIndex `Индекс строки`
 * @arg {stringT['columnIndex']} columnIndex `Индекс столбца`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetIndexByPosition(string, rowIndex, columnIndex) {

    return getIndexByPosition({ string, rowIndex, columnIndex, });

};

//#endregion
//#region getPositionByIndex

/**
 * ### getPositionByIndex
 * 
 * 
 * 
 * ***
 * @typedef getPositionByIndexT
 * @prop {} _
 * ***
 * @arg {stringT&getPositionByIndexT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getPositionByIndex(args) {

    let result;

    try {

        let {

            index,
            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const rows = stringGetRows(string);

        let y = 0, x = 0;

        for (const rowIndex in rows) {

            const rowLength = rows[+rowIndex].length;

            if (rowLength >= index) break;

            y++;

            index -= rowLength + 1;

        };

        result = [y, x = index];

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringGetPositionByIndex
 * 
 * Функция получения позиции по индексу в тексте.
 * 
 * ***
 * @arg {stringT['index']} index `Индекс`
 * @arg {stringT['string']} string `Текст`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetPositionByIndex(string, index) {

    return getPositionByIndex({ string, index, });

};

//#endregion
//#region getSymbolByIndex

/**
 * ### getSymbolByIndex
 * 
 * 
 * 
 * ***
 * @typedef getSymbolByIndexT
 * @prop {} _
 * ***
 * @arg {stringT&getSymbolByIndexT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getSymbolByIndex(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringGetSymbolByIndex
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetSymbolByIndex() {

    return getSymbolByIndex({});

};

//#endregion
//#region getSymbolByPosition

/**
 * ### getSymbolByPosition
 * 
 * 
 * 
 * ***
 * @typedef getSymbolByPositionT
 * @prop {} _
 * ***
 * @arg {stringT&getSymbolByPositionT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getSymbolByPosition(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringGetSymbolByPosition
 * 
 * Функция получения символа из строки по позиции.
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetSymbolByPosition() {

    return getSymbolByPosition({});

};

//#endregion
//#region setRow

/**
 * ### setRow
 * 
 * 
 * 
 * ***
 * @typedef setRowT
 * @prop {} _
 * ***
 * @arg {stringT&setRowT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setRow(args) {

    let result;

    try {

        let {

            index,
            string,
            substring,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const rows = stringGetRows(string);

        rows[index] = substring;

        result = rows.join('\n');

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### setRow
 * 
 * Функция установки строки в заданном тексте по указанному индексу.
 * 
 * ***
 * @arg {stringT['index']} index `Индекс`
 * @arg {stringT['string']} string `Строка`
 * @arg {stringT['substring']} substring `Подстрока`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringSetRow(string, substring, index = 0) {

    return setRow({ string, substring, index, });

};

//#endregion
//#region setRows

/**
 * ### setRows
 * 
 * 
 * 
 * ***
 * @typedef setRowsT
 * @prop {} _
 * ***
 * @arg {stringT&setRowsT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setRows(args) {

    let result;

    try {

        let {

            rows,
            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const rowsNow = stringGetRows(string);

        for (const row of rows) rowsNow[row[1]] = row[0];

        result = rowsNow.join('\n');

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### setRows
 * 
 * Метод установки указанных строк в текст.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['row']} rows `Строки`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringSetRows(string, ...rows) {

    return setRows({ string, rows, });

};

//#endregion
//#region setColumn

/**
 * ### setColumn
 * 
 * 
 * 
 * ***
 * @typedef setColumnT
 * @prop {} _
 * ***
 * @arg {stringT&setColumnT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setColumn(args) {

    let result;

    try {

        let {

            index,
            string,
            substring,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const rows = stringGetRows(string);

        funcLoopRangeIn(rows, (r, ri) => {

            r = stringPad(r, index, ' ', -1);

            rows[ri] = stringPaste(r, substring[ri] ?? '', index, 1);

        });

        result = rows.join('\n');

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### setColumn
 * 
 * Функция установки столбца по заданному индексу.
 * 
 * ***
 * @arg {stringT['index']} index `Индекс`
 * @arg {stringT['string']} string `Строка`
 * @arg {stringT['substring']} substring `Подстрока`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringSetColumn(string, substring, index) {

    return setColumn({ string, substring, index, });

};

//#endregion
//#region setColumns

/**
 * ### setColumns
 * 
 * 
 * 
 * ***
 * @typedef setColumnsT
 * @prop {} _
 * ***
 * @arg {stringT&setColumnsT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setColumns(args) {

    let result;

    try {

        let {

            string,
            columns,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        for (const column of columns) string = stringSetColumn(string, ...column) ?? string;

        result = string;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### setColumns
 * 
 * Функция установки столбцов для указанного текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['column']} columns `Столбцы`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringSetColumns(string, ...columns) {

    return setColumns({ string, columns, });

};

//#endregion
//#region setSymbolByIndex

/**
 * ### setSymbolByIndex
 * 
 * 
 * 
 * ***
 * @typedef setSymbolByIndexT
 * @prop {} _
 * ***
 * @arg {stringT&setSymbolByIndexT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setSymbolByIndex(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringSetSymbolByIndex
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringSetSymbolByIndex() {

    return setSymbolByIndex({});

};

//#endregion
//#region setSymbolByPosition

/**
 * ### setSymbolByPosition
 * 
 * 
 * 
 * ***
 * @typedef setSymbolByPositionT
 * @prop {} _
 * ***
 * @arg {stringT&setSymbolByPositionT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function setSymbolByPosition(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringSetSymbolByPosition
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringSetSymbolByPosition() {

    return setSymbolByPosition({});

};

//#endregion
//#region pad

/**
 * ### pad
 * 
 * 
 * 
 * ***
 * @typedef padT
 * @prop {} _
 * ***
 * @arg {stringT&padT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function pad(args) {

    let result;

    try {

        let {

            fill,
            align,
            length,
            string,
            indent,
            indentLength,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        switch (align) {

            case 0: {

                const value = (length - string.length) / 2;

                result = fill.repeat(Math.ceil(value)) + indent.repeat(indentLength) + string + indent.repeat(indentLength) + fill.repeat(Math.floor(value));

            }; break;
            case 1: result = fill.repeat(length) + string.padStart(indentLength, indent); break;
            case -1: result = string.padEnd(indentLength, indent) + fill.repeat(length); break;

        };

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### pad
 * 
 * Функция доведения текста до указанной длины.
 * Включает возможность выравнивания.
 * 
 * ***
 * @arg {stringT['fill']} fill `Заполнитель`
 * @arg {stringT['align']} align `Выравнивание`
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['length']} length `Длина`
 * @arg {stringT['indent']} indent `Отступ`
 * @arg {stringT['indentLength']} indentLength `Длина отступов`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringPad(string, length, fill = config.params.fillPreset, align = config.params.alignPreset, indent = config.params.indentPreset, indentLength = config.params.indentLengthPreset) {

    return pad({ string, length, fill, align, indent, indentLength, });

};

//#endregion
//#region skip

/**
 * ### skip
 * 
 * 
 * 
 * ***
 * @typedef skipT
 * @prop {} _
 * ***
 * @arg {stringT&skipT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function skip(args) {

    let result;

    try {

        let {

            char,
            string,
            substring,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const matches = string.matchAll(new RegExp(char, 'gmsi'));

        for (const match of matches) {

            if (!substring[match.index]) break;

            string = stringPaste(string, substring[match.index], match.index, 1);

        };

        result = string;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### skip
 * 
 * Функция наложения одного текста на другой таким образом, чтобы указанные символы первого текста заменялись на символы второго текста по одному и тому же индексу.
 * 
 * ***
 * @arg {stringT['char']} char `Символ`
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['substring']} substring `Подтекст`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringSkip(string, substring, char = ' ') {

    return skip({ string, substring, char, });

};

//#endregion
//#region trim

/**
 * ### trim
 * 
 * 
 * 
 * ***
 * @typedef trimT
 * @prop {} _
 * ***
 * @arg {stringT&trimT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function trim(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### trim
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringTrim() {

    return trim({});

};

//#endregion
//#region trimRows

/**
 * ### trimRows
 * 
 * 
 * 
 * ***
 * @typedef trimRowsT
 * @prop {} _
 * ***
 * @arg {stringT&trimRowsT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function trimRows(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### trimRows
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringTrimRows() {

    return trimRows({});

};

//#endregion
//#region split

/**
 * ### split
 * 
 * 
 * 
 * ***
 * @typedef splitT
 * @prop {} _
 * ***
 * @arg {stringT&splitT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function split(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### split
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringSplit() {

    return split({});

};

//#endregion
//#region splitEvery

/**
 * ### splitEvery
 * 
 * 
 * 
 * ***
 * @typedef splitEveryT
 * @prop {} _
 * ***
 * @arg {stringT&splitEveryT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function splitEvery(args) {

    let result;

    try {

        let {

            string,
            length,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const parts = [];

        funcLoopRange(0, string.length - 1, index => index % length === 0 ? parts.push(string[index]) : parts[parts.length - 1] += string[index]);

        result = parts;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### splitEvery
 * 
 * Функция разделения текста на отрывки по `length` символов.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['length']} length `Длина`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringSplitEvery(string, length = 1) {

    return splitEvery({ string, length, });

};

//#endregion
//#region unify

/**
 * ### unify
 * 
 * 
 * 
 * ***
 * @typedef unifyT
 * @prop {} _
 * ***
 * @arg {stringT&unifyT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function unify(args) {

    let result;

    try {

        let {

            chars,
            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        for (let index = 0; index < string.length; index++) {

            const charNext = string[index + 1];

            if (!charNext || charNext !== string[index] || (chars.length && !chars.includes(charNext))) continue;

            string = stringRemove(string, index--);

        };

        result = string;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### unify
 * 
 * Функция удаления идущих подряд дублей символов в тексте.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['char']} chars `Символы`
 * 
 * При указании параметра, исключчает дубли только для указанных символов.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringUnify(string, ...chars) {

    return unify({ string, chars, });

};

//#endregion
//#region paste

/**
 * ### paste
 * 
 * 
 * 
 * ***
 * @typedef pasteT
 * @prop {} _
 * ***
 * @arg {stringT&pasteT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function paste(args) {

    let result;

    try {

        let {

            index,
            length,
            string,
            substring,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (Array.isArray(index)) {

            index = stringGetIndexByPosition(string, ...index);

        };

        //#endregion
        //#region comply

        result = stringAppend(stringRemoveRange(string, index, index + length - 1), substring, index);

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### paste
 * 
 * Функция вставки в текст.
 * 
 * ***
 * @arg {stringT['index']} index `Индекс`
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['length']} length `Длина`
 * @arg {stringT['substring']} substring `Подстрока`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringPaste(string, substring, index = 0, length = substring.length) {

    return paste({ string, substring, index, length, });

};

//#endregion
//#region pasteWrap

/**
 * ### pasteWrap
 * 
 * 
 * 
 * ***
 * @typedef pasteWrapT
 * @prop {} _
 * ***
 * @arg {stringT&pasteWrapT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function pasteWrap(args) {

    let result;

    try {

        let {

            index,
            length,
            string,
            substring,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const rows = stringGetRows(substring);
        const position = Array.isArray(index) ? index : stringGetPositionByIndex(string, index);

        for (const index in rows) {

            string = stringExpandToPosition(string,)

            string = stringPaste(string, rows[index], position, length ?? rows[index].length);

            position[0]++;

        };

        result = string;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### pasteWrap
 * 
 * Функция построчной вставки одного фрагмента текста в другой текст.
 * 
 * ***
 * @arg {stringT['index']} index `Индекс`
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['length']} length `Длина`
 * @arg {stringT['substring']} substring `Подтекст`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringPasteWrap(string, substring, index, length) {

    return pasteWrap({ string, substring, index, length, });

};

//#endregion
//#region pasteSymbol

/**
 * ### pasteSymbol
 * 
 * 
 * 
 * ***
 * @typedef pasteSymbolT
 * @prop {} _
 * ***
 * @arg {stringT&pasteSymbolT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function pasteSymbol(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### pasteSymbol
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringPasteSymbol() {

    return pasteSymbol({});

};

//#endregion
//#region append

/**
 * ### append
 * 
 * 
 * 
 * ***
 * @typedef appendT
 * @prop {} _
 * ***
 * @arg {stringT&appendT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function append(args) {

    let result;

    try {

        let {

            index,
            string,
            substring,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (Array.isArray(index)) {

            index = stringGetIndexByPosition(string, ...index);

        } else if (!index && index !== 0) {

            index = 0;

        };

        //#endregion
        //#region comply

        if (index === 0 && Object.is(-0, index)) {

            result = string += substring;

        } else {

            result = string.slice(0, index) + substring + string.slice(index);

        };

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### append
 * 
 * Функция добавления подстроки в строку по указанному индексу.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['substring']} substring `Подстрока`
 * @arg {stringT['index']|stringT['position']} index `Индекс`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringAppend(string, substring, index = string.length) {

    return append({ string, substring, index, });

};

//#endregion
//#region appendEvery

/**
 * ### appendEvery
 * 
 * 
 * 
 * ***
 * @typedef appendEveryT
 * @prop {} _
 * ***
 * @arg {stringT&appendEveryT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function appendEvery(args) {

    let result;

    try {

        let {

            char,
            index,
            length,
            string,
            initially,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (Object.is(-0, index)) {

            index = string.length - 1;

        } else if (index < 0) {

            index += string.length;

        };

        //#endregion
        //#region comply

        for (let i = index - length - 1; i > 0; i -= length) {

            string = stringAppend(string, char, i);

        };

        for (let i = initially ? index : index + length; i < string.length; i += length + 1) {

            string = stringAppend(string, char, i);

        };

        result = string;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### appendEvery
 * 
 * Функция добавления указанных `char` каждые `length` символов.
 * 
 * ***
 * @arg {stringT['char']} char `Символ`
 * @arg {stringT['index']} index `Индекс`
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['length']} length `Длина`
 * @arg {stringT['initially']} initially `Изначально`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringAppendEvery(string, char = ' ', length = 1, index = 0, initially = false) {

    return appendEvery({ string, char, length, index, initially, });

};

//#endregion
//#region recode

/**
 * ### recode
 * 
 * 
 * 
 * ***
 * @typedef recodeT
 * @prop {} _
 * ***
 * @arg {stringT&recodeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function recode(args) {

    let result;

    try {

        let {

            local,
            string,
            localTo,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        switch (true) {

            case local === 'en' && localTo === 'ru': {

                for (const pair of [

                    ['q', 'й'], ['w', 'ц'], ['e', 'у'], ['r', 'к'], ['t', 'е'], ['y', 'н'], ['u', 'г'], ['i', 'ш'], ['o', 'щ'], ['p', 'з'], ['\\[', 'х'], ['\\]', 'ъ'],
                    ['a', 'ф'], ['s', 'ы'], ['d', 'в'], ['f', 'а'], ['g', 'п'], ['h', 'р'], ['j', 'о'], ['k', 'л'], ['l', 'д'], [';', 'ж'], ['\'', 'э'],
                    ['z', 'я'], ['x', 'ч'], ['c', 'с'], ['v', 'м'], ['b', 'и'], ['n', 'т'], ['m', 'ь'], [',', 'б'], ['\\.', 'ю'],

                ]) {

                    string = string.replace(new RegExp(pair[0], 'gmsi'), pair[1]);

                };

                break;

            };

        };

        result = string;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### recode
 * 
 * Функция изменения локали всего текста.
 * 
 * ***
 * @arg {stringT['local']} local `Локаль`
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['localTo']} localTo `Новая локаль`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringRecode(string, local, localTo) {

    return recode({ string, local, localTo, });

};

//#endregion
//#region remove

/**
 * ### remove
 * 
 * 
 * 
 * ***
 * @typedef removeT
 * @prop {} _
 * ***
 * @arg {stringT&removeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function remove(args) {

    let result;

    try {

        let {

            string,
            indexs,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = string;

        for (const index of indexs.sort((p, c) => c - p)) {

            result = result.slice(0, index) + result.slice(index + 1);

        };

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### remove
 * 
 * Функция удаления символа из указанного текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['index']} indexs `Индексы`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringRemove(string, ...indexs) {

    return remove({ string, indexs, });

};

//#endregion
//#region removeRange

/**
 * ### removeRange
 * 
 * 
 * 
 * ***
 * @typedef removeRangeT
 * @prop {} _
 * ***
 * @arg {stringT&removeRangeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function removeRange(args) {

    let result;

    try {

        let {

            index,
            string,
            indexEnd,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (Array.isArray(index)) {

            index = stringGetIndexByPosition(string, ...index);

        } else if (index < 0) {

            index = 0;

        };

        if (Array.isArray(indexEnd)) {

            indexEnd = stringGetIndexByPosition(string, ...indexEnd);

        };

        //#endregion
        //#region comply

        result = string.slice(0, index) + string.slice(indexEnd + 1);

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### removeRange
 * 
 * Функция удаления диапазона символов от `index` до `indexEnd` из текста.
 * 
 * ***
 * @arg {stringT['string']} string `Строка`
 * @arg {stringT['index']|stringT['position']} index `Индекс`
 * @arg {stringT['indexEnd']|stringT['position']} indexEnd `Конец`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringRemoveRange(string, index, indexEnd = string.length) {

    return removeRange({ string, index, indexEnd, });

};

//#endregion
//#region removeByPosition

/**
 * ### removeByPosition
 * 
 * 
 * 
 * ***
 * @typedef removeByPositionT
 * @prop {} _
 * ***
 * @arg {stringT&removeByPositionT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function removeByPosition(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### removeByPosition
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringRemoveByPosition() {

    return removeByPosition({});

};

//#endregion
//#region filter

/**
 * ### filter
 * 
 * 
 * 
 * ***
 * @typedef filterT
 * @prop {} _
 * ***
 * @arg {stringT&filterT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function filter(args) {

    let result;

    try {

        let {

            string,
            matches,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        for (const match of matches) {

            string = string.replace(new RegExp(match, 'g'), '');

        };

        result = string;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### filter
 * 
 * Функция фильтрации содержимого текста по указаным соответствиям.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['match']} matches `Соответсвия`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringFilter(string, ...matches) {

    return filter({ string, matches, });

};

//#endregion
//#region shield

/**
 * ### shield
 * 
 * 
 * 
 * ***
 * @typedef shieldT
 * @prop {} _
 * ***
 * @arg {stringT&shieldT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function shield(args) {

    let result;

    try {

        let {

            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        string = string.replace(/[^\p{L} ]/ugmsi, "\\$&");
        string = string.replace(/\x1b/gmsi, '\\x1b');
        string = string.replace(/\r/gmsi, '\\r');
        string = string.replace(/\n/gmsi, '\\n');

        result = string.replaceAll('\b', '\\b');

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### shield
 * 
 * Функция экранирования символов текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringShield(string) {

    return shield({ string, });

};

//#endregion
//#region resize

/**
 * ### resize
 * 
 * 
 * 
 * ***
 * @typedef resizeT
 * @prop {} _
 * ***
 * @arg {stringT&resizeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function resize(args) {

    let result;

    try {

        let {

            sizes,
            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        let rows = stringGetRows(string);

        if (rows.length === sizes[0]) {



        } else if (rows.length > sizes[0]) {

            rows = rows.splice(0, sizes[0]);

        } else if (rows.length < sizes[0]) {

            const size = sizes[0] - rows.length;

            for (let index = 0; index < size; index++) rows.push('');

        };

        for (const index in rows) {

            if (rows[+index].length === sizes[1]) {

                continue;

            } else if (rows[+index].length > sizes[1]) {

                rows[+index] = stringRemoveRange(rows[+index], sizes[1]);

            } else if (rows[+index].length < sizes[1]) {

                rows[+index] = stringPad(rows[+index], sizes[1], ' ', -1);

            };

        };

        result = rows.join('\n');

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### resize
 * 
 * Функция изменения размеров текста за счёт добавления/удаления строк и столбцов.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['size']} sizes `Размеры`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringResize(string, ...sizes) {

    return resize({ string, sizes, });

};

//#endregion
//#region expand

/**
 * ### expand
 * 
 * 
 * 
 * ***
 * @typedef expandT
 * @prop {} _
 * ***
 * @arg {stringT&expandT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function expand(args) {

    let result;

    try {

        let {

            sizes,
            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const rows = stringGetRows(string);

        if (sizes[1]) for (const index in rows) {

            rows[+index] = stringPad(rows[+index], sizes[1], ' ', -1);

        };

        for (let index = 0; index < sizes[0]; index++) {

            string += '\n' + ' '.repeat(string.length + (sizes[1] ?? 0));

        };

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### expand
 * 
 * Функция расширения текста добавлением новых строк и колонн.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['size']} sizes `Размеры`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringExpand(string, ...sizes) {

    return expand({ string, sizes, });

};

//#endregion
//#region expandToPosition

/**
 * ### expandToPosition
 * 
 * 
 * 
 * ***
 * @typedef expandToPositionT
 * @prop {} _
 * ***
 * @arg {stringT&expandToPositionT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function expandToPosition(args) {

    let result;

    try {

        let {

            string,
            rowIndex,
            columnIndex,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const rows = stringGetRows(string);

        for (let index = rows.length; index < rowIndex; index++) rows.push('');

        const row = rows.at(-1);

        if (row.length <= columnIndex) rows[rows.length - 1] += ' '.repeat(columnIndex - rows.at(-1).length + 1);

        result = rows.join('\n');

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringExpandToPosition
 * 
 * Функция расширения текста до указанной позиции.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['rowIndex']} rowIndex `Индекс строки`
 * @arg {stringT['columnIndex']} columnIndex `Индекс столбца`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringExpandToPosition(string, rowIndex, columnIndex) {

    return expandToPosition({ string, rowIndex, columnIndex, });

};

//#endregion
//#region search

/**
 * ### search
 * 
 * 
 * 
 * ***
 * @typedef searchT
 * @prop {} _
 * ***
 * @arg {stringT&searchT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function search(args) {

    let result;

    try {

        let {

            string,
            matches,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        for (const match of matches) {

            string = string.match(match).at(-1);

            if (!string) break;

        };

        result = string;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### search
 * 
 * Функция поиска.
 * 
 * Функция последовательно извлекает из результатов предыдущего поиска соответсвия со следующими регулярными выражениями.
 * 
 * ***
 * @arg {stringT['string']} string `Строка`
 * @arg {...stringT['match']} matches `Соответсвия`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringSearch(string, ...matches) {

    return search({ string, matches, });

};

//#endregion
//#region searchJect

/**
 * ### searchJect
 * 
 * 
 * 
 * ***
 * @typedef searchJectT
 * @prop {} _
 * ***
 * @arg {stringT&searchJectT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function searchJect(args) {

    let result;

    try {

        let {

            string,
            matches,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const ject = {};

        for (const index in matches) {

            const match = matches[+index].flags.includes('g') ? string.matchAll(matches[index]) : [string.match(matches[index])];

            for (const submatch of match) for (let key in submatch.groups) {

                let value = submatch.groups[key];

                if (key.includes('_')) {

                    switch (key.split('_').at(-1)) {

                        case 'n': value = +value; break;
                        case 'b': value = !!value; break;

                    };

                    if (typeof value !== 'string') key = stringRemoveRange(key, key.length - 2);

                };

                if (ject[key] === undefined) {

                    ject[key] = value;

                } else if (!Array.isArray(ject[key])) {

                    ject[key] = [ject[key], value];

                } else {

                    ject[key].push(value);

                };

            };

        };

        result = ject;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### searchJect
 * 
 * Функция поиска данных в тексте по указанным соответствиям для создания объекта.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['match']} matches `Соответсвия`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringSearchJect(string, ...matches) {

    return searchJect({ string, matches, });

};

//#endregion
//#region insert

/**
 * ### insert
 * 
 * 
 * 
 * ***
 * @typedef insertT
 * @prop {} _
 * ***
 * @arg {stringT&insertT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function insert(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### insert
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringInsert() {

    return insert({});

};

//#endregion
//#region insertBypass

/**
 * ### insertBypass
 * 
 * 
 * 
 * ***
 * @typedef insertBypassT
 * @prop {} _
 * ***
 * @arg {stringT&insertBypassT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function insertBypass(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### insertBypass
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringInsertBypass() {

    return insertBypass({});

};

//#endregion
//#region formatUrl

/**
 * ### formatUrl
 * 
 * 
 * 
 * ***
 * @typedef formatUrlT
 * @prop {} _
 * ***
 * @arg {stringT&formatUrlT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function formatUrl(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### formatUrl
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringFormatUrl() {

    return formatUrl({});

};

//#endregion
//#region formatDate

/**
 * ### formatDate
 * 
 * 
 * 
 * ***
 * @typedef formatDateT
 * @prop {} _
 * ***
 * @arg {stringT&formatDateT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function formatDate(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### formatDate
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringFormatDate() {

    return formatDate({});

};

//#endregion
//#region formatText

/**
 * ### formatText
 * 
 * 
 * 
 * ***
 * @typedef formatTextT
 * @prop {} _
 * ***
 * @arg {stringT&formatTextT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function formatText(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### formatText
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringFormatText() {

    return formatText({});

};

//#endregion
//#region formatPhone

/**
 * ### formatPhone
 * 
 * 
 * 
 * ***
 * @typedef formatPhoneT
 * @prop {} _
 * ***
 * @arg {stringT&formatPhoneT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function formatPhone(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### formatPhone
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringFormatPhone() {

    return formatPhone({});

};

//#endregion
//#region formatNumber

/**
 * ### formatNumber
 * 
 * 
 * 
 * ***
 * @typedef formatNumberT
 * @prop {} _
 * ***
 * @arg {stringT&formatNumberT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function formatNumber(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### formatNumber
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringFormatNumber() {

    return formatNumber({});

};

//#endregion
//#region formatSample

/**
 * ### formatSample
 * 
 * 
 * 
 * ***
 * @typedef formatSampleT
 * @prop {} _
 * ***
 * @arg {stringT&formatSampleT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function formatSample(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### formatSample
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringFormatSample() {

    return formatSample({});

};

//#endregion
//#region formatReport

/**
 * ### formatReport
 * 
 * 
 * 
 * ***
 * @typedef formatReportT
 * @prop {} _
 * ***
 * @arg {stringT&formatReportT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function formatReport(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### formatReport
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringFormatReport() {

    return formatReport({});

};

//#endregion
//#region reverse

/**
 * ### reverse
 * 
 * 
 * 
 * ***
 * @typedef reverseT
 * @prop {} _
 * ***
 * @arg {stringT&reverseT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function reverse(args) {

    let result;

    try {

        let {

            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = '';

        for (let index = string.length - 1; index > 0; index--) {

            result += string[index];

        };

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### reverse
 * 
 * Функция разворота текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringReverse(string) {

    return reverse({ string, });

};

//#endregion
//#region reflect

/**
 * ### reflect
 * 
 * 
 * 
 * ***
 * @typedef reflectT
 * @prop {} _
 * ***
 * @arg {stringT&reflectT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function reflect(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### reflect
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringReflect() {

    return reflect({});

};

//#endregion
//#region extract

/**
 * ### extract
 * 
 * 
 * 
 * ***
 * @typedef extractT
 * @prop {} _
 * ***
 * @arg {stringT&extractT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function extract(args) {

    let result;

    try {

        let {

            index,
            string,
            indexEnd,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = [stringSubstring(string, index, indexEnd), stringRemoveRange(string, index, indexEnd)];

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### extract
 * 
 * Функция извлечения подстроки из текста.
 * 
 * В качестве результата возвращается массив, где первый элемент - извлеченная строка, а второй - текст с извлеченной из него подстрокой.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['index']} index `Индекс`
 * @arg {stringT['indexEnd']} indexEnd `Конец`
 * @returns {[string, string]}
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringExtract(string, index, indexEnd = string.length) {

    return extract({ string, index, indexEnd, });

};

//#endregion
//#region truncate

/**
 * ### truncate
 * 
 * 
 * 
 * ***
 * @typedef truncateT
 * @prop {} _
 * ***
 * @arg {stringT&truncateT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function truncate(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### truncate
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringTruncate() {

    return truncate({});

};

//#endregion
//#region generateWord

/**
 * ### generateWord
 * 
 * 
 * 
 * ***
 * @typedef generateWordT
 * @prop {} _
 * ***
 * @arg {stringT&generateWordT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function generateWord(args) {

    let result;

    try {

        let {

            delimeter,
            wordGenParts,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        let string = '';

        for (const wordGenPart of wordGenParts) {

            const {

                vols,
                cots,
                chance,
                prefix,
                postfix,
                syllable,
                delimeter,
                capitalize,

            } = wordGenPart;

            funcLoopRange(1, syllable, index => {

                const cotsLast = string.at(-1) in cots ? string.at(-1) : null;

                if (numberGetRandomReal(0, 1)) {

                    const cotsCopy = cots.slice();

                    string += cotsCopy.splice(numberGetRandomReal(0, cotsCopy.length - 1));
                    string += cotsCopy.splice(numberGetRandomReal(0, cotsCopy.length - 1));

                } else {

                    string += cots[numberGetRandomReal(0, cotsCopy.length - 1)];

                };

            });

        };

        string = stringToCaseUp(string);

        result = string;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### stringGenerateWord
 * 
 * Функция генератора произвольных слов.
 * 
 * ***
 * @arg {stringT['delimeter']} delimeter `Разделитель`
 * @arg {stringT['wordGenParts']} wordGenParts `Слова`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGenerateWord(wordGenParts, delimeter) {

    return generateWord({ wordGenParts, delimeter, });

};

//#endregion
//#region substring

/**
 * ### substring
 * 
 * 
 * 
 * ***
 * @typedef substringT
 * @prop {} _
 * ***
 * @arg {stringT&substringT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function substring(args) {

    let result;

    try {

        let {

            index,
            string,
            indexEnd,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = string.slice(index, ++indexEnd);

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### substring
 * 
 * Функция извлечения подстроки из текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['index']} index `Индекс`
 * @arg {stringT['indexEnd']} indexEnd `Конец`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringSubstring(string, index, indexEnd = string.length) {

    return substring({ string, index, indexEnd, });

};

//#endregion
//#region rearrangeRow

/**
 * ### rearrangeRow
 * 
 * 
 * 
 * ***
 * @typedef rearrangeRowT
 * @prop {} _
 * ***
 * @arg {stringT&rearrangeRowT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function rearrangeRow(args) {

    let result;

    try {

        let {

            index,
            string,
            indexEnd

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const rows = stringGetRows(string);

        [rows[index], rows[indexEnd]] = [rows[indexEnd], rows[index]];

        result = rows.join('\n');

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### rearrangeRow
 * 
 * Функция перестановки строк в тексте.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['index']} index `Индекс`
 * @arg {stringT['indexEnd']} indexEnd `Конец`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringRearrangeRow(string, index, indexEnd) {

    return rearrangeRow({ string, index, indexEnd, });

};

//#endregion
//#region rearrangeWord

/**
 * ### rearrangeWord
 * 
 * 
 * 
 * ***
 * @typedef rearrangeWordT
 * @prop {} _
 * ***
 * @arg {stringT&rearrangeWordT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function rearrangeWord(args) {

    let result;

    try {

        let {

            index,
            string,
            indexEnd,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const matches = [];

        const regexp = /\p{L}+/ug;

        for (let count = 0; matches.length !== indexEnd; count++) {

            const match = regexp.exec(string);

            if (count !== index && count !== indexEnd) continue;

            matches.push(match);

        };

        string = stringPaste(string, matches[0][0], matches[1].index, matches[1][0].length);

        string = stringPaste(string, matches[1][0], matches[0].index, matches[0][0].length);

        result = string;

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### rearrangeWord
 * 
 * Функция перестановки слов в тексте по парам индексов.
 * 
 * ***
 * @arg {stringT['index']} index `Индекс`
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['indexEnd']} indexEnd `Конец`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringRearrangeWord(string, index, indexEnd) {

    return rearrangeWord({ string, index, indexEnd, });

};

//#endregion

/**
 * @file string/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/