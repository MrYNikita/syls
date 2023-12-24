//#region YI

import { YArg } from '@syls/y/arg';
import { YCond, condIsArray, condIsNumber, condIsNumberSig } from '@syls/y/cond';
import { configString as config } from './config.mjs';
import { funcLoopRange, funcLoopRangeIn, funcLoopRangeTo } from '@syls/func';
import { yGetProp } from '@syls/y';
import { numberGetRandomReal } from '@syls/number';
import { arrayAppend, arrayGetRand, arrayGetRandMany } from '@syls/array';
import { ansiCreate, ansiCreateByJect, ansiCreateColor, ansiCreateColorReset, ansiGetParamColor, ansiGetParamColorReset, ansiRegExp } from '../-submodule/ansi/-module/module.mjs';

//#endregion
//#region YT

/** ### stringT
 * 
 * Типы модуля `string`.
 * 
 * @typedef {import('../-submodule/ansi/-module/export.mjs').ansiT} ansiT
 * 
 * 
 * @typedef stringT
 * 
 * @prop {stringT['style'][]} styles
 * @prop {keyof config['params']['styles']} style
 * 
 * @prop {string|RegExp} regexp
 * @prop {stringT['regexp'][]} regexpes
 * 
 * @prop {ansiT['foreground']} foreground
 * @prop {ansiT['background']} background
 * @prop {ansiT['foreground']} foregroundEnd
 * @prop {ansiT['background']} backgroundEnd
 * @prop {stringT['colorPoint']} colorPoints
 * @prop {[ansiT['foreground'], ansiT['background'], stringT['index'], stringT['index'], ('skip'|null), boolean]} colorPoint
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
 * @prop {number|[number, number]} indexEnd
 * @prop {stringT['index']} indexs
 * @prop {number} length
 * @prop {number} indentLength
 * 
 * @prop {string} urlFragment
 * @prop {string[]} urlPath
 * @prop {string|number} urlPort
 * @prop {[string, string][]} urlQuery
 * @prop {'127.0.0.1'|'localhost'} urlHost
 * @prop {'http'|'https'|'ftp'|'mailto'} urlScheme
 * 
 * @prop {string} pass
 * @prop {string} char
 * @prop {string[]} chars
 * @prop {string} fill
 * @prop {string} string
 * @prop {string[]} strings
 * @prop {[string, string, boolean]} inserts
 * @prop {string} indent
 * @prop {string} delimeter
 * @prop {string} substring
 * @prop {string|RegExp} match
 * @prop {[string|RegExp][]} matches
 * @prop {[string, number]} pairSymbolIndex
 * @prop {[string, number, number]} pairSymbolPosition
 * 
 * @prop {boolean} flagExpand
 * @prop {boolean} direction
 * @prop {boolean} initially
 * @prop {boolean} flagAll
 * @prop {boolean} flagBias
 * @prop {{[K in keyof config['params']['symbols']]: keyof config['params']['symbols'][K]}[keyof config['params']['symbols']]} symbolName
 * 
 * @prop {{
 * lang: 'ru'|'en',
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
//#region toCaseCaps

/**
 * ### toCaseCaps
 * 
 * 
 * 
 * ***
 * @typedef toCaseCapsT
 * @prop {} _
 * ***
 * @arg {stringT&toCaseCapsT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function toCaseCaps(args) {

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

        for (let char of string) result += char.toUpperCase();

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
 * ### stringToCaseCaps
 * 
 * Функция увеличения регистра всех символов текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringToCaseCaps(string) {

    return toCaseCaps({ string, });

};

//#endregion
//#region toCaseUncaps

/**
 * ### toCaseUncaps
 * 
 * 
 * 
 * ***
 * @typedef toCaseUncapsT
 * @prop {} _
 * ***
 * @arg {stringT&toCaseUncapsT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function toCaseUncaps(args) {

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

        for (let char of string) result += char.toLowerCase();

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
 * ### stringToCaseUncaps
 * 
 * Функция уменьшения регистра всех символов текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringToCaseUncaps(string) {

    return toCaseUncaps({ string, });

};

//#endregion
//#region toCaseCapitalize

/**
 * ### toCaseCapitalize
 * 
 * 
 * 
 * ***
 * @typedef toCaseCapitalizeT
 * @prop {} _
 * ***
 * @arg {stringT&toCaseCapitalizeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function toCaseCapitalize(args) {

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

        result = string[0].toUpperCase() + string.slice(1);

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
 * ### stringToCaseCapitalize
 * 
 * Функция увеличения регистра первого символа в тексте.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringToCaseCapitalize(string) {

    return toCaseCapitalize({ string, });

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
//#region getAnsi

/**
 * ### getAnsi
 * 
 * 
 * 
 * ***
 * @typedef getAnsiT
 * @prop {} _
 * ***
 * @arg {stringT&getAnsiT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getAnsi(args) {

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

        const data = [];
        const regexp = new RegExp(ansiRegExp, 'ms');

        let match = null;

        while (match = string.match(regexp)) {

            string = stringRemoveRange(string, match.index, match.index + match[0].length - 1);

            data.push([match[0], match.index]);

        };

        result = data;

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
 * ### stringGetAnsi
 * 
 * Функция получения `ansi` вставок из указанного текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetAnsi(string) {

    return getAnsi({ string, });

};

//#endregion
//#region getCount

/**
 * ### getCount
 * 
 * 
 * 
 * ***
 * @typedef getCountT
 * @prop {} _
 * ***
 * @arg {stringT&getCountT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getCount(args) {

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

        let count = 0;

        funcLoopRangeIn(matches, match => count += (string.match(new RegExp(match, 'msg')).length ?? 0));

        result = count;

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
 * ### stringGetCount
 * 
 * Функция подсчёта совпадней по строке.
 * 
 * ***
 * @arg {stringT['string']} string `Строка`
 * @arg {...stringT['match']} matches `Совпадения`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGetCount(string, ...matches) {

    return getCount({ string, matches });

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
 * @returns {string[]}
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
            flagExpand,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (Array.isArray(index)) {

            if (flagExpand) string = stringExpand(string, ...index);

            index = stringGetIndexByPosition(string, ...index);

        } else if (flagExpand) {

            string = stringExpand(string, 0, index);

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
 * @arg {stringT['flagExpand']} flagExpand `Расширяемость`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringPaste(string, substring, index = 0, length = substring.length, flagExpand) {

    return paste({ string, substring, index, length, flagExpand, });

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
//#region color

/**
 * ### color
 * 
 * 
 * 
 * ***
 * @typedef colorT
 * @prop {} _
 * ***
 * @arg {stringT&colorT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function color(args) {

    let result;

    try {

        let {

            string,
            foreground,
            background,
            foregroundEnd,
            backgroundEnd,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = ansiCreateByJect({ foreground, background, }) + string + ansiCreate(ansiGetParamColorReset(foregroundEnd, backgroundEnd));

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
 * ### stringColor
 * 
 * Функция перекраски текста.
 * 
 * Текст перекрашивается от начала и до самого конца.
 * В аргументе указывается нексколько параметров, среди которых:
 * 
 * 1. Цвет текста.
 * 2. Цвет после текста.
 * 
 * Цвет после текста обозначается - `ender`.
 * По дефолту вместо него вставляется сброс цвета.
 * 
 * ***
 * @arg {stringT['foreground']} foreground `Цвет переднего плана`
 * @arg {stringT['background']} background `Цвет фона`
 * @arg {stringT['foregroundEnd']} foregroundEnd `Завершающий цвет переднего плана`
 * @arg {stringT['backgroundEnd']} backgroundEnd `Завершающий цвет фона`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringColor(string, foreground, background, foregroundEnd, backgroundEnd) {

    return color({ string, foreground, background, foregroundEnd, backgroundEnd, });

};

//#endregion
//#region paint

/**
 * ### paint
 * 
 * 
 * 
 * ***
 * @typedef paintT
 * @prop {} _
 * ***
 * @arg {stringT&paintT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function paint(args) {

    let result;

    try {

        let {

            string,
            colorPoints,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        funcLoopRangeIn(colorPoints, colorPoint => {

            if (condIsArray(colorPoint[2])) colorPoint[2] = stringGetIndexByPosition(string, ...colorPoint[2]);

            if (condIsNumber(colorPoint[3]) && colorPoint[3] > 0) colorPoints.push([colorPoint[4], colorPoint[5], colorPoint[2] + colorPoint[3]]);

        });

        //#endregion
        //#region comply

        const ansi = stringGetAnsi(string);

        string = stringFilter(string, ansiRegExp);

        funcLoopRangeIn(colorPoints, (colorPoint, colorPointIndex) => {

            let prefix = colorPoint[0] === 'skip' ? 'skip' : !colorPoint[0] ? ansiCreate(ansiGetParamColorReset()) : ansiCreate(ansiGetParamColor(colorPoint[0], colorPoint[1]));
            let flagPaste = false;

            if (ansi.length) for (const index in ansi) {

                if (ansi[index][1] >= colorPoint[2] && !flagPaste) {

                    if (prefix === 'skip' && colorPointIndex) prefix = ansi[index - 1][0];

                    flagPaste = true;

                    arrayAppend(ansi, index, [prefix, colorPoint[2]]);

                    if (!colorPoint[5]) break;

                } else if (flagPaste) {

                    ansi[index][1] += prefix.length;

                };

            };

            if (!flagPaste) {

                if (prefix === 'skip') prefix = ansi.at(-2)[0];

                ansi.push([prefix, colorPoint[2]]);

            };

        });

        if (ansi.length) funcLoopRange(ansi.length - 1, 0, index => string = stringPaste(string, ansi[index][0] === '\x1b[' ? ansiCreate(ansiGetParamColorReset()) : ansi[index][0], ansi[index][1], 0));

        if (ansi?.at?.(-1)?.[0] !== ansiCreate(ansiGetParamColorReset())) string += ansiCreate(ansiGetParamColorReset());

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
 * ### stringPaint
 * 
 * Функция раскраски текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['colorPoint']} colorPoints `Цветовые точки`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringPaint(string, ...colorPoints) {

    return paint({ string, colorPoints, });

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
//#region appendRows

/**
 * ### appendRows
 * 
 * 
 * 
 * ***
 * @typedef appendRowsT
 * @prop {} _
 * ***
 * @arg {stringT&appendRowsT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function appendRows(args) {

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

        for (const row of rows) arrayAppend(rowsNow, row[1], row[0]);

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
 * ### stringAppendRows
 * 
 * Функция добавления строк в текст.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['row']} rows `Строки`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringAppendRows(string, ...rows) {

    return appendRows({ string, rows, });

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
//#region removeRows

/**
 * ### removeRows
 * 
 * 
 * 
 * ***
 * @typedef removeRowsT
 * @prop {} _
 * ***
 * @arg {stringT&removeRowsT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function removeRows(args) {

    let result;

    try {

        let {

            string,
            indexs,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        indexs = indexs.sort((p, c) => (p?.[0] ?? p) - (c?.[0] ?? c));

        //#endregion
        //#region comply

        const rows = stringGetRows(string);

        while (indexs.length) {

            const index = indexs.pop();

            if (condIsArray(index)) {

                rows.splice(index[0], index[1]);

            } else {

                rows.splice(index, 1);

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
 * ### stringRemoveRows
 * 
 * Функция удаления строк из указанного текста.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['index']} indexs `Индексы`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringRemoveRows(string, ...indexs) {

    return removeRows({ string, indexs, });

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

        funcLoopRange(1, sizes[1], () => rows.push(''));

        if (sizes[1]) funcLoopRangeIn(rows, (_, index) => rows[index] = rows[index].padEnd(rows[index].length + sizes[1], ' '));

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

            pass,
            string,
            flagAll,
            substring,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        console.log(flagAll)

        string = flagAll ? string.replaceAll(pass, substring) : string.replace(pass, substring);

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
 * ### insert
 * 
 * Функция вставки значения на место пропуска.
 * 
 * ***
 * @arg {stringT['pass']} pass `Пропуск`
 * @arg {stringT['string']} string `Строка`
 * @arg {stringT['flagAll']} flagAll `Режим полного замещения`
 * @arg {stringT['substring']} substring `Подстрока`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringInsert(string, substring, pass = config.params.insertPass, flagAll) {

    return insert({ string, substring, pass, flagAll, });

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

            string,
            inserts,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        funcLoopRangeIn(inserts, insert => {

            let substring = insert, flagAll = false, pass = config.params.insertPass;

            if (condIsArray(insert)) {

                const args = new YArg(...insert)

                    .setFirst(

                        ['substring', 'string'],
                        ['pass', 'string'],
                        ['flagAll', 'bool']

                    );

                ({ substring, pass, flagAll } = args.used);

            };

            string = stringInsert(string, substring, pass, flagAll);

        });

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
 * ### insertBypass
 * 
 * Функция для многократной подстановки значений в текст.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {...stringT['inserts']} inserts `Подстановки`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringInsertBypass(string, ...inserts) {

    return insertBypass({ string, inserts, });

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

            urlHost = '127.0.0.1',
            urlPath,
            urlPort,
            urlQuery,
            urlScheme,
            urlFragment,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        urlPath = urlPath ? urlPath = '/' + urlPath.join('/') : '';
        urlQuery = urlQuery ? urlQuery.filter(param => param.every(elem => elem)).map(param => param.join('=')).join('&') : '';
        urlFragment = urlFragment ? '#' + urlFragment : '';

        urlQuery && (urlQuery = '?' + urlQuery);

        //#endregion
        //#region comply

        result = `${urlScheme}://${urlHost}${urlPort}${urlPath}${urlQuery}${urlFragment}`;

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
 * Функция получения `URL`.
 * 
 * ***
 * @arg {stringT['urlHost']} urlHost `Хост`
 * @arg {stringT['urlPort']} urlPort `Порт`
 * @arg {stringT['urlPath']} urlPath `Путь`
 * @arg {stringT['urlQuery']} urlQuery `Параметры`
 * @arg {stringT['urlScheme']} urlScheme `Схема`
 * @arg {stringT['urlFragment']} urlFragment `Фрагмент`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringFormatUrl(urlScheme, urlHost, urlPort, urlPath, urlQuery, urlFragment) {

    return formatUrl({ urlScheme, urlHost, urlPath, urlPort, urlQuery, urlFragment, });

};

//#endregion
//#region formatPathOS

/**
 * ### formatPathOS
 * 
 * 
 * 
 * ***
 * @typedef formatPathOST
 * @prop {} _
 * ***
 * @arg {stringT&formatPathOST} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function formatPathOS(args) {

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
 * ### stringFormatPathOS
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
export function stringFormatPathOS() {

    return formatPathOS({});

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
//#region formatCode

/**
 * ### formatCode
 * 
 * 
 * 
 * ***
 * @typedef formatCodeT
 * @prop {} _
 * ***
 * @arg {stringT&formatCodeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function formatCode(args) {

    let result;

    try {

        let {

            style,
            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        let code = '';

        switch (style) {

            case 'syls': {



            }; break;

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
 * ### stringFormatCode
 * 
 * Функция форматирования текста в код.
 * 
 * ***
 * @arg {stringT['style']} style `Стиль`
 * @arg {stringT['string']} string `Текст`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringFormatCode(string, style) {

    return formatCode({ string, style, });

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
//#region formatHighlight

/**
 * ### formatHighlight
 * 
 * 
 * 
 * ***
 * @typedef formatHighlightT
 * @prop {} _
 * ***
 * @arg {stringT&formatHighlightT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function formatHighlight(args) {

    let result;

    try {

        let {

            style,
            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        /** @type {ansiT['color']} */
        let colorNum = null;
        /** @type {ansiT['color']} */
        let colorText = null
        /** @type {ansiT['color']} */
        let colorPunct = null
        /** @type {ansiT['color']} */
        let colorOperand = null
        /** @type {ansiT['color']} */
        let colorQuote = null;
        /** @type {ansiT['color']} */
        let colorQuoteNum = null;
        /** @type {ansiT['color']} */
        let colorQuoteText = null;

        let text = '';

        switch (style) {

            case 'rl': {

                colorNum = 'yellow';
                colorText = 'white';
                colorPunct = 'white';
                colorQuote = 'magentaLight';
                colorOperand = 'red';

            }; break;
            case 'syls': default: {

                colorNum = 'yellow';
                colorText = 'cyan';
                colorPunct = 'white';
                colorQuote = 'orange';
                colorOperand = 'red';

                text += ansiCreateColor(null, 'blueDark');

            }; break;

        };

        let charQuote = null;

        let flagText = false;
        let flagNum = false;
        let flagQuote = false;
        let flagOperand = false;
        let flagQuoteNum = false;
        let flagQuoteText = false;

        for (const index in string) {

            const char = string[index];

            if (/\p{L}/u.test(char) && !flagText) {
                
                flagNum = false;
                flagText = true;
                flagOperand = false;

                if (flagQuote) {

                    text += ansiCreateColor(colorQuoteText ?? colorQuote);

                } else {

                    text += ansiCreateColor(colorText);

                };

            } else if (/\d/.test(char) && !flagNum) {

                flagNum = true;
                flagText = false;
                flagOperand = false;

                if (flagQuote) {

                    text += ansiCreateColor(colorQuoteNum ?? colorQuote);

                } else {

                    text += ansiCreateColor(colorNum);

                };

            } else if (/"|'/.test(char)) {

                if (flagQuote) {

                    flagQuote = false;
                    charQuote = null;

                    text += char + ansiCreateColor(colorText);

                    continue;

                } else {
                
                    flagQuote = true;
                    charQuote = char;

                    text += ansiCreateColor(colorQuote);

                };

            } else if (/!|\.|,|:|;/.test(char)) {

                text += ansiCreateColor(colorPunct) + char;

                if (flagText) {

                    text += ansiCreateColor(flagQuote ? colorQuoteText ?? colorQuote : colorText);

                } else if (flagNum) {

                    text += ansiCreateColor(flagQuote ? colorQuoteNum ?? colorQuote : colorNum);

                };

                continue;

            } else if (/\+|\-|\*|:|=|~/.test(char) && flagNum && !flagOperand) {

                flagOperand = true;
                flagNum = false;
                flagText = false;

                text += ansiCreateColor(colorOperand);

            };

            text += char;

        };

        text += ansiCreateColorReset();

        result = text;

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
 * ### stringFormatHighlight
 * 
 * Функция форматирования для подсветки данных в тексте.
 * 
 * ***
 * @arg {stringT['style']} style `Стиль`
 * @arg {stringT['string']} string `Текст`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringFormatHighlight(string, style) {

    return formatHighlight({ string, style, });

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
//#region extractByRegExp

/**
 * ### extractByRegExp
 * 
 * 
 * 
 * ***
 * @typedef extractByRegExpT
 * @prop {} _
 * ***
 * @arg {stringT&extractByRegExpT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function extractByRegExp(args) {

    let result;

    try {

        let {

            string,
            regexp,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const match = string.match(regexp);

        if (!match) return null;

        result = [match[0], stringRemoveRange(string, match.index, match.index + match[0].length - 1)];

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
 * ### stringExtractByRegExp
 * 
 * Функция извлечения совпадений из текста по регулярному выражению.
 * 
 * ***
 * @arg {stringT['string']} string `Текст`
 * @arg {stringT['regexp']} regexp `Выражение`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringExtractByRegExp(string, regexp) {

    return extractByRegExp({ string, regexp, });

};

//#endregion
//#region extractByRegExpAll

/**
 * ### extractByRegExpAll
 * 
 * 
 * 
 * ***
 * @typedef extractByRegExpAllT
 * @prop {} _
 * ***
 * @arg {stringT&extractByRegExpAllT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function extractByRegExpAll(args) {

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
 * ### stringExtractByRegExpAll
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
export function stringExtractByRegExpAll() {

    return extractByRegExpAll({});

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

        let word = '';
        let delimeterNow = '';

        funcLoopRangeIn(wordGenParts, wordGenPart => {

            const {

                lang,
                cots = [],
                vols = [],
                chance,
                prefix,
                postfix,
                syllable = 1,
                delimeter,
                capitalize,

            } = wordGenPart;

            if (chance && numberGetRandomReal(1, 100) <= chance) return;

            delimeter && (delimeterNow = delimeter);

            prefix && (word += prefix);

            let cotLast = cots.includes(word.at(-1)) ? word.at(-1) : '';

            switch (lang) {

                case 'ru': funcLoopRange('а'.charCodeAt(), 'я'.charCodeAt(), index => {

                    const char = String.fromCharCode(index);

                    if (/[аояуиеюйэ]/i.test(char)) {

                        vols.push(char);

                    } else if (/[^ьъ]/i.test(char)) {

                        cots.push(char);

                    };

                }); break;
                case 'en': funcLoopRange('a'.charCodeAt(), 'z'.charCodeAt(), index => {

                    const char = String.fromCharCode(index);

                    if (/[aeyuoi]/i.test(char)) {

                        vols.push(char);

                    } else {

                        cots.push(char);

                    };

                }); break;

            };

            if (!cots.length && !vols.length) {

                postfix && (word += postfix);
                capitalize && (word = stringToCaseUp(word));
                delimeterNow && (word += delimeterNow);

                return;

            };

            if (numberGetRandomReal(0, 1)) word += arrayGetRand(vols);

            funcLoopRangeTo((condIsArray(syllable) ? numberGetRandomReal(...syllable) : syllable) - 1, () => {

                if (cots.length > 2 && numberGetRandomReal(0, 1)) {

                    word += arrayGetRandMany(cots, 2, false, cotLast).join('');

                    cotLast = word.at(-1);

                } else if (cots.length) {

                    cotLast = arrayGetRand(cots, cots.length === 1 ? null : cotLast);

                    word += cotLast;

                };

                word += arrayGetRand(vols);

            });

            postfix && (word += postfix);
            capitalize && (word = stringToCaseUp(word));
            delimeterNow && (word += delimeterNow);

        });

        delimeterNow && (word = word.slice(0, -delimeterNow.length));

        result = word;

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
 * @arg {...stringT['wordGenPart']} wordGenParts `Слова`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringGenerateWord(...wordGenParts) {

    return generateWord({ wordGenParts, });

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