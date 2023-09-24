//#region YI

import { configString as config } from './config.mjs';
import { funcBypass } from '@syls/func';
import { yClassifyProp, yGetProperty } from '@syls/y';
import { dateGetMesuares } from '@syls/y/date';
import { condIsNumberLimit, condIsString } from '@syls/y/cond';
// import { arrayGetDevideByCount, arrayJoin } from '@syls/array';

//#endregion
//#region YT

/** ### stringT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Основной параметр модуля `string`.
 *
 * @typedef stringT
 * @prop {string} string
 *
*/
/** ### stringTRow
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef stringTRow
 * @prop {number} y
 *
*/
/** ### stringTLocal
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 * 
 * 
 * 
 * @typedef stringTLocal
 * @prop {string} local
 * 
*/
/** ### stringTIndex
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {import('../ject/many/module.mjs').manyTIndex} stringTIndex
 *
*/
/** ### stringTLimit
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {import('../ject/many/module.mjs').manyTLimit} stringTLimit
 *
*/
/** ### stringTLength
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {import('../ject/many/module.mjs').manyTLength} stringTLength
 *
*/
/** ### stringTColumn
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef stringTColumn
 * @prop {number} x
 *
*/
/** ### stringTInsert
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef stringTInsert
 * @prop {string} find
 * @prop {string} value
 *
*/
/** ### stringTPosition
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {stringTRow&stringTColumn} stringTPosition
 *
*/

/** ### stringTTCase
 * - Тип `TT`
 * 
 * 
 * 
 * @typedef {'и'|'р'|'д'|'в'|'т'|'п'} stringTTCase
 * 
*/
/** ### stringTTGender
 * - Тип `TT`
 * 
 * 
 * 
 * @typedef {'m'|'f'|'n'} stringTTGender
 * 
*/
/** ### stringTTSymbol
 * - Тип `TT`
 * 
 * ***
 * 
 * Данный тип описывает все допустимые символы из словоря символов.
 * 
 * ***
 * 
 * @typedef {Omit<config.value['value']['symbols'], 'table'>} stringTTsymbolFilter
 * @typedef {{[K in keyof stringTTsymbolFilter]: keyof stringTTsymbolFilter[K]}[keyof stringTTsymbolFilter]} stringTTSymbol
 * 
*/
/** ### stringTTInserts
 * - Тип `TT`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 *
 *
 * @typedef {(string|[string,string])} stringTTInserts
 *
*/

//#endregion
//#region YV



//#endregion

//#region toWordsFromNumber

/** ### stringTFToWordsFromNumber
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `toWordsFromNumber`.
 * 
 * @typedef {stringTFUToWordsFromNumber&stringT} stringTFToWordsFromNumber
 * 
*/
/** ### stringTFUToWordsFromNumber
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `toWordsFromNumber`.
 * 
 * @typedef stringTFUToWordsFromNumber
 * @prop {string} local
 * @prop {boolean} declensionMany
 * @prop {stringTTCase} declensionCase
 * @prop {number|string} number
 * @prop {stringTTGender} declensionGender
*/

/** @arg {stringTFToWordsFromNumber} t */
function toWordsFromNumberDeceit(t) {

    try {

        return toWordsFromNumberVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFToWordsFromNumber} t */
function toWordsFromNumberVerify(t) {

    const {



    } = t;

    return toWordsFromNumberHandle(t);

};
/** @arg {stringTFToWordsFromNumber} t */
function toWordsFromNumberHandle(t) {

    const {



    } = t;

    return toWordsFromNumberComply(t);

};
/** @arg {stringTFToWordsFromNumber} t */
function toWordsFromNumberComply(t) {

    const {

        local,
        number,
        declensionCase,
        declensionGender,

    } = t;

    let result = '';

    switch (local) {

        case 'ru': {

            let [unit, dozen, hundred] = number.toString().split('').reverse().map(elem => +elem);

            const roots = [

                'нул',
                'од',
                'дв',
                'тр',
                'чет',
                'пят',
                'шест',
                'сем',
                'вос',
                'девят',
                'десят'

            ];
            const hundredPostfix = [

                'сто',
                'ести',
                'исто',
                'ыресто',
                'ьсот',
                'стами',
                'стах'

            ];
            const dozenPostfix = [

                'инадцать',
                'ацать',
                'идцать',
                'сорок',
                'ьдесят',

            ];

            if (hundred) {

                const index = hundred;

                switch (declensionCase) {

                    case 'и': {

                        switch (index) {

                            case 1: hundred = 'сто'; break;
                            case 2: hundred = 'двести'; break;
                            case 3: hundred = 'тристо'; break;
                            case 4: hundred = 'черытесто'; break;
                            case 5: hundred = 'пятьсот'; break;

                        };

                    }; break;
                    case 'р': {

                        switch (index) {

                            case 1: hundred = 'ста'; break;
                            case 2: hundred = 'двухста'; break;
                            case 3: hundred = 'трёхста'; break;
                            case 4: hundred = 'четырёхста'; break;
                            case 5: hundred = 'пятиста'; break;
                            case 6: hundred = 'шестиста'; break;
                            case 7: hundred = 'семиста'; break;
                            case 8: hundred = 'восьмиста'; break;
                            case 9: hundred = 'девятиста'; break;

                        };

                    }; break;
                    case 'д': {

                        switch (index) {

                            case 1: hundred = 'ста'; break;
                            case 2: hundred = 'двухстам'; break;
                            case 3: hundred = 'трёхстам'; break;
                            case 4: hundred = 'четырёхстам'; break;
                            case 5: hundred = 'пятистам'; break;
                            case 6: hundred = 'шестистам'; break;
                            case 7: hundred = 'семистам'; break;
                            case 8: hundred = 'восьмиста'; break;
                            case 9: hundred = 'девятиста'; break;

                        };

                    }; break;

                };

            };
            if (unit || (!dozen && !hundred && (unit || unit === 0))) {

                const index = unit;

                unit = roots[index];

                switch (declensionCase) {

                    case 'и': {

                        switch (index) {

                            case 1: unit += 'ин'; break;
                            case 2: unit += 'а'; break;
                            case 3: unit += 'и'; break;
                            case 4: unit += 'ыре'; break;
                            case 8: unit += 'емь'; break;
                            default: unit += 'ь'; break;

                        };

                    }; break;
                    case 'р': {

                        switch (index) {

                            case 0: unit += 'я'; break;
                            case 1: unit += ['m', 'n'].includes(declensionGender) ? 'ного' : 'ой'; break;
                            case 2: unit += 'ух'; break;
                            case 3: unit += 'ёх'; break;
                            case 4: unit += 'ырёх'; break;
                            case 8: unit += 'ьми'; break;
                            default: unit += 'и'; break;

                        };

                    }; break;
                    case 'д': {

                        switch (index) {

                            case 0: unit += 'лю'; break;
                            case 1: unit += ['m', 'n'].includes(declensionGender) ? 'ному' : 'ой'; break;
                            case 2: unit += 'ум'; break;
                            case 3: unit += 'ём'; break;
                            case 4: unit += 'ыём'; break;
                            case 8: unit += 'ьми'; break;
                            default: unit += 'и'; break;

                        };

                    }; break;
                    case 'т': {

                        switch (index) {

                            case 0: unit += 'ём'; break;
                            case 1: unit += ['m', 'n'].includes(declensionGender) ? 'ним' : 'ной'; break;
                            case 2: unit += 'умя'; break;
                            case 3: unit += 'емя'; break;
                            case 4: unit += 'ырьмя'; break;
                            case 8: unit += 'емью'; break;
                            default: unit += 'ью'; break;

                        };

                    }; break;
                    case 'п': {

                        switch (index) {

                            case 0: unit += 'е'; break;
                            case 1: unit += ['m', 'n'].includes(declensionGender) ? 'ном' : 'ной'; break;
                            case 2: unit += 'ух'; break;
                            case 3: unit += 'ёх'; break;
                            case 4: unit += 'ырёх'; break;
                            case 8: unit += 'ьми'; break;
                            default: unit += 'и'; break;

                        };

                    }; break;

                };

            };

            result += [hundred, unit].filter(elem => elem).join(' ');

        };

    };

    return result;

};

/**
 * ### stringToWordsFromNumberRu
 * 
 * ***
 * 
 * Функция преобразования числа в прописную форму русского языка с указанным склонением.
 * 
 * ***
 * @arg {boolean} declensionMany `Множественность`
 * @arg {stringTTCase} declensionCase `Падеж`
 * @arg {number|string} number `Число`
 * @arg {stringTTGender} declensionGender `Род`
*/
export function stringToWordsFromNumberRu(number = 501, declensionCase = 'д', declensionGender = 'm', declensionMany = false) {

    return toWordsFromNumberDeceit({ local: 'ru', number, declensionGender, declensionCase, declensionMany, });

};

//#endregion

//#region setRow 0.0.0

/** ### stringTFSetRow
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `setRow`.
 *
 * @typedef {stringTFUSetRow&stringT} stringTFSetRow
 *
*/
/** ### stringTFUSetRow
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `setRow`.
 *
 * @typedef stringTFUSetRow
 * @prop {string} row
 * @prop {number} index
*/

/** @arg {stringTFSetRow} t */
function setRowDeceit(t) {

    try {

        return setRowVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFSetRow} t */
function setRowVerify(t) {

    const {



    } = t;

    return setRowHandle(t);

};
/** @arg {stringTFSetRow} t */
function setRowHandle(t) {

    const {



    } = t;

    return setRowComply(t);

};
/** @arg {stringTFSetRow} t */
function setRowComply(t) {

    const {

        row,
        index,
        string,

    } = t;

    const result = string.split('\n');

    if (result[index] || result[index] === '') {

        result[index] = row;

    };

    return result.join('\n');

};

/**
 * ### stringSetRow
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция замены линии в указанной строке.
 *
 * ***
 * @arg {string} row `Линия`
 * @arg {string} string `Строка`
 * @arg {number} index `Индекс`
*/
export function stringSetRow(string, row, index = 0) {

    return setRowDeceit({ string, index, row, });

};

//#endregion

//#region get 0.0.0

/** ### stringTFGet
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `get`.
 *
 * @typedef {stringTFUGet&stringT&stringTPosition} stringTFGet
 *
*/
/** ### stringTFUGet
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `get`.
 *
 * @typedef stringTFUGet
 * @prop {any} _
*/

/** @arg {stringTFGet} t */
function getDeceit(t) {

    try {

        return getVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFGet} t */
function getVerify(t) {

    const {



    } = t;

    return getHandle(t);

};
/** @arg {stringTFGet} t */
function getHandle(t) {

    const {



    } = t;

    if (!t.x) {

        [t.x, t.y] = [t.y, null];

    };

    return getComply(t);

};
/** @arg {stringTFGet} t */
function getComply(t) {

    const {

        y,
        x,
        string,

    } = t;

    const rows = string.split('\n');

    if (condIsNumberLimit(y)) {

        return rows[y][x];

    } else {

        return rows[0][x];

    };

};

/**
 * ### stringGet
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Метод получения символа указанной строки в указанной позиции.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {number} y `Линия`
 *
 * Если указывается без `столбца`, то будет предена как столбец.
 * @arg {number} x `Столбец`
*/
export function stringGet(string, y, x) {

    return getDeceit({ string, y, x });

};

//#endregion
//#region getRow 0.0.0

/** ### stringTFGetRow
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `getRow`.
 *
 * @typedef {stringTFUGetRow&stringT&stringTRow} stringTFGetRow
 *
*/
/** ### stringTFUGetRow
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `getRow`.
 *
 * @typedef stringTFUGetRow
 * @prop {any} _
*/

/** @arg {stringTFGetRow} t */
function getRowDeceit(t) {

    try {

        return getRowVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFGetRow} t */
function getRowVerify(t) {

    const {



    } = t;

    return getRowHandle(t);

};
/** @arg {stringTFGetRow} t */
function getRowHandle(t) {

    const {



    } = t;

    return getRowComply(t);

};
/** @arg {stringTFGetRow} t */
function getRowComply(t) {

    const {

        y,
        string,

    } = t;

    const result = string.split('\n')[y];

    if (result || result === '') {

        return result;

    } else {

        return undefined;

    };

};

/**
 * ### stringgetRow
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция получения указанной линии из указанной строки.
 *
 * ***
 * @arg {number} y `Линия`
 * @arg {string} string `Строка`
*/
export function stringGetRow(string, y) {

    return getRowDeceit({ string, y });

};

//#endregion
//#region getRows 0.0.0

/** ### stringTFGetRows
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `getRows`.
 *
 * @typedef {stringTFUGetRows&stringT} stringTFGetRows
 *
*/
/** ### stringTFUGetRows
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `getRows`.
 *
 * @typedef stringTFUGetRows
 * @prop {any} _
*/

/** @arg {stringTFGetRows} t */
function getRowsDeceit(t) {

    try {

        return getRowsVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFGetRows} t */
function getRowsVerify(t) {

    const {



    } = t;

    return getRowsHandle(t);

};
/** @arg {stringTFGetRows} t */
function getRowsHandle(t) {

    const {



    } = t;

    return getRowsComply(t);

};
/** @arg {stringTFGetRows} t */
function getRowsComply(t) {

    const {

        string,

    } = t;

    return string.split('\n');

};

/**
 * ### stringGetRows
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция получения всех линий строки в виде массива.
 *
 * ***
 * @arg {string} string `Строка`
*/
export function stringGetRows(string) {

    return getRowsDeceit({ string, });

};

//#endregion
//#region getIndex 1.0.0

/** ### stringTFGetIndex
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `getIndex`.
 * 
 * @typedef {stringTFUGetIndex&stringT} stringTFGetIndex
 * 
*/
/** ### stringTFUGetIndex
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `getIndex`.
 * 
 * @typedef stringTFUGetIndex
 * @prop {number} row
 * @prop {number} col
*/

/** @arg {stringTFGetIndex} t */
function getIndexDeceit(t) {

    try {

        return getIndexVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFGetIndex} t */
function getIndexVerify(t) {

    const {



    } = t;

    return getIndexHandle(t);

};
/** @arg {stringTFGetIndex} t */
function getIndexHandle(t) {

    const {



    } = t;

    return getIndexComply(t);

};
/** @arg {stringTFGetIndex} t */
function getIndexComply(t) {

    const {

        row,
        col,
        string,

    } = t;

    let result = 0;
    let y = 0;

    const dimension = stringGetDimension(string);

    for (; y < row; y++) result += dimension[y] + 1;

    if (col < dimension[y]) {

        result += col;

    } else {

        result += dimension[y];

    };

    return result;

};

/**
 * ### stringGetIndex
 * 
 * ***
 * 
 * Функция получения индекса в строке по позиции.
 * 
 * ***
 * @arg {number} row `Строка`
 * @arg {number} col `Столбец`
 * @arg {string} string `Строка`
 * @since `1.0.0`
 * @function
*/
export function stringGetIndex(string, row, col) {

    return getIndexDeceit({ string, row, col, });

};

//#endregion
//#region getMatrix 0.0.0

/** ### stringTFGetMatrix
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `getMatrix`.
 *
 * @typedef {stringTFUGetMatrix&stringT} stringTFGetMatrix
 *
*/
/** ### stringTFUGetMatrix
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `getMatrix`.
 *
 * @typedef stringTFUGetMatrix
 * @prop {any} _
*/

/** @arg {stringTFGetMatrix} t */
function getMatrixDeceit(t) {

    try {

        return getMatrixVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFGetMatrix} t */
function getMatrixVerify(t) {

    const {



    } = t;

    return getMatrixHandle(t);

};
/** @arg {stringTFGetMatrix} t */
function getMatrixHandle(t) {

    const {



    } = t;

    return getMatrixComply(t);

};
/** @arg {stringTFGetMatrix} t */
function getMatrixComply(t) {

    const {

        string,

    } = t;

    return string.split('\n').map(y => y.split(''));

};

/**
 * ### stringGetMatrix
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция получения матрицы символов.
 *
 * ***
 * @arg {string} string `Строка`
*/
export function stringGetMatrix(string) {

    return getMatrixDeceit({ string, });

};

//#endregion
//#region getSymbol

/** ### stringTFGetSymbol
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `getSymbol`.
 * 
 * @typedef {stringTFUGetSymbol&stringT} stringTFGetSymbol
 * 
*/
/** ### stringTFUGetSymbol
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `getSymbol`.
 * 
 * @typedef stringTFUGetSymbol
 * @prop {stringTTSymbol} symbol
*/

/** @arg {stringTFGetSymbol} t */
function getSymbolDeceit(t) {

    try {

        return getSymbolVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFGetSymbol} t */
function getSymbolVerify(t) {

    const {



    } = t;

    return getSymbolHandle(t);

};
/** @arg {stringTFGetSymbol} t */
function getSymbolHandle(t) {

    const {



    } = t;

    return getSymbolComply(t);

};
/** @arg {stringTFGetSymbol} t */
function getSymbolComply(t) {

    const {

        symbol,

    } = t;

    return yGetProperty(config.value.symbols, symbol);

};

/**
 * ### stringGetSymbol
 * 
 * ***
 * 
 * Функция получения символа по его названию.
 * 
 * ***
 * @arg {stringTTSymbol} symbol `Символ`
*/
export function stringGetSymbol(symbol) {

    return getSymbolDeceit({ symbol, });

};

//#endregion
//#region getDimension 1.0.0

/** ### stringTFGetDimension
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `getDimension`.
 * 
 * @typedef {stringTFUGetDimension&stringT} stringTFGetDimension
 * 
*/
/** ### stringTFUGetDimension
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `getDimension`.
 * 
 * @typedef stringTFUGetDimension
 * @prop {any} _
*/

/** @arg {stringTFGetDimension} t */
function getDimensionDeceit(t) {

    try {

        return getDimensionVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFGetDimension} t */
function getDimensionVerify(t) {

    const {



    } = t;

    return getDimensionHandle(t);

};
/** @arg {stringTFGetDimension} t */
function getDimensionHandle(t) {

    const {



    } = t;

    return getDimensionComply(t);

};
/** @arg {stringTFGetDimension} t */
function getDimensionComply(t) {

    const {

        string,

    } = t;

    return string.split('\n').map(row => row.length);

};

/**
 * ### stringGetDimension
 * 
 * ***
 * 
 * Функция получения измерений строки.
 * 
 * ***
 * @arg {string} string `Строка`
 * @since `1.0.0`
 * @function
*/
export function stringGetDimension(string) {

    return getDimensionDeceit({ string, });

};

//#endregion

//#region pad 1.0.0

/** ### stringTFPad
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `pad`.
 *
 * @typedef {stringTFUPad&stringT&stringTIndex&stringTLimit} stringTFPad
 *
*/
/** ### stringTFUPad
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `pad`.
 *
 * @typedef stringTFUPad
 * @prop {string} pad
 * @prop {boolean} modeCut
*/

/** @arg {stringTFPad} t */
function padDeceit(t) {

    try {

        return padVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFPad} t */
function padVerify(t) {

    const {



    } = t;

    return padHandle(t);

};
/** @arg {stringTFPad} t */
function padHandle(t) {

    const {



    } = t;

    return padComply(t);

};
/** @arg {stringTFPad} t */
function padComply(t) {

    const {

        pad,
        limit,
        index,
        string,
        modeCut,

    } = t;

    let result = string;

    if (string.length <= limit && limit && pad) {

        const count = Math.floor((limit - string.length) / pad.length);
        // const overflow = t.limit - (count * pad.length + string.length);

        result += pad.repeat(count);

    };

    return result;

};

/**
 * ### stringPad
 * - Версия `1.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция доведения указанной `строки` до указанного `лимита` символов `строкой доведения`.
 *
 * В отличии от обычной функции `pad` позволяет доводить строку до указанного лимита с указанной позиции.
 *
 * ***
 * @arg {string} pad `Строка доведения`
 * @arg {number} limit `Лимит`
 * @arg {number} index `Позиция`
 * @arg {string} string `Строка`
 * @arg {boolean} modeCut `Режим отсечения`
 * @since `1.0.0`
 * @function
 *
 * Режим отсечения позволяет обрезать ту часть дополнения, что превзошла указанный лимит.
 *
 * - Дефолт `true`
*/
export function stringPad(string, pad, limit, index = string?.length ?? 0, modeCut = true) {

    return padDeceit({ string, limit, index, pad, modeCut });

};

//#endregion
//#region padRow 0.0.0

/** ### stringTFPadRow
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `padColumn`.
 *
 * @typedef {stringTFUPadRow&stringT&stringTFPad} stringTFPadRow
 *
*/
/** ### stringTFUPadRow
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `padColumn`.
 *
 * @typedef stringTFUPadRow
 * @prop {} _
*/

/** @arg {stringTFPadRow} t */
function padRowDeceit(t) {

    try {

        return padRowVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFPadRow} t */
function padRowVerify(t) {

    const {

        limit,
        string,

    } = t;

    if (!limit || limit <= stringGetRows(string).length) {

        return t.string;

    };

    return padRowHandle(t);

};
/** @arg {stringTFPadRow} t */
function padRowHandle(t) {

    const {



    } = t;

    return padRowComply(t);

};
/** @arg {stringTFPadRow} t */
function padRowComply(t) {

    const {

        pad,
        limit,
        string,

    } = t;

    return string + pad.repeat(limit - string.split('\n').length, pad);

};

/**
 * ### stringPadColumn
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция приведения указанной строки к указанному количеству строк.
 *
 * ***
 * @arg {string} pad `Дополнитель`
 *
 * - Дефолт `\n`
 * @arg {string} string `Строка`
 * @arg {number} limit `Лимит`
*/
export function stringPadRow(string, limit, pad = config.value.rowEnd) {

    return padRowDeceit({ string, limit, pad, });

};

//#endregion
//#region padColumn 0.0.0

/** ### stringTFPadColumn
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `padColumn`.
 *
 * @typedef {stringTFUPadColumn&stringT&stringTFPad} stringTFPadColumn
 *
*/
/** ### stringTFUPadColumn
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `padColumn`.
 *
 * @typedef stringTFUPadColumn
 * @prop {any} _
*/

/** @arg {stringTFPadColumn} t */
function padColumnDeceit(t) {

    try {

        return padColumnVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFPadColumn} t */
function padColumnVerify(t) {

    const {



    } = t;

    return padColumnHandle(t);

};
/** @arg {stringTFPadColumn} t */
function padColumnHandle(t) {

    const {



    } = t;

    return padColumnComply(t);

};
/** @arg {stringTFPadColumn} t */
function padColumnComply(t) {

    const {

        pad,
        limit,
        string,

    } = t;

    return string.split('\n').map(y => {

        const r = stringPad(y, pad, limit);

        return r;

    }).join('\n');

};

/**
 * ### stringPadColumn
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция приведения каждой линии указанной строки к указанному кол-ву столбцов.
 *
 * ***
 * @arg {string} pad `Дополнитель`
 *
 * - Дефолт ` `
 * @arg {string} string `Строка`
 * @arg {number} limit `Лимит`
*/
export function stringPadColumn(string, limit, pad = ' ') {

    return padColumnDeceit({ string, limit, pad, });

};

//#endregion
//#region padToPosition 0.0.0

/** ### stringTFPadToPosition
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `padToPosition`.
 *
 * @typedef {stringTFUPadToPosition&stringT&stringTPosition} stringTFPadToPosition
 *
*/
/** ### stringTFUPadToPosition
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `padToPosition`.
 *
 * @typedef stringTFUPadToPosition
 * @prop {number} row
 * @prop {number} column
 * @prop {string} space
 * @prop {string} rowEnd
*/

/** @arg {stringTFPadToPosition} t */
function padToPositionDeceit(t) {

    try {

        return padToPositionVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFPadToPosition} t */
function padToPositionVerify(t) {

    const {



    } = t;

    return padToPositionHandle(t);

};
/** @arg {stringTFPadToPosition} t */
function padToPositionHandle(t) {

    const {



    } = t;

    return padToPositionComply(t);

};
/** @arg {stringTFPadToPosition} t */
function padToPositionComply(t) {

    let {

        row,

    } = t;

    const {

        col,
        space,
        string,
        rowEnd,

    } = t;

    let result = string;

    result = stringPadRow(result, row + 1, rowEnd).split('\n');
    result[row] = stringPad(result[row], space, col);
    result = result.join(rowEnd);

    return result;

};

/**
 * ### stringPadToPosition
 * - Версия `1.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция приведения указанной строки до указанной позиции.
 *
 * ***
 * @arg {string} string `Текст`
 * @arg {number} row `Строка`
 * @arg {number} col `Столбец`
 * @arg {string?} space `Заполнитель`
 * @arg {string?} rowEnd `Конец линии`
 * @since `1.0.0`
 * @function
*/
export function stringPadToPosition(string, row, col, space = config.value.space, rowEnd = config.value.rowEnd) {

    return padToPositionDeceit({ string, row, col, space, rowEnd, });

};

//#endregion

//#region skip 0.0.0

/** ### stringTFSkip
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `skip`.
 *
 * @typedef {stringTFUSkip&stringT} stringTFSkip
 *
*/
/** ### stringTFUSkip
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `skip`.
 *
 * @typedef stringTFUSkip
 * @prop {string} layer
 * @prop {string} symbol
*/

/** @arg {stringTFSkip} t */
function skipDeceit(t) {

    try {

        return skipVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFSkip} t */
function skipVerify(t) {

    const {



    } = t;

    return skipHandle(t);

};
/** @arg {stringTFSkip} t */
function skipHandle(t) {

    const {



    } = t;

    return skipComply(t);

};
/** @arg {stringTFSkip} t */
function skipComply(t) {

    const {

        layer,
        string,
        symbol,

    } = t;

    let result = stringPaste(string, layer, 0, layer.length);

    Array.from(layer.matchAll(symbol)).forEach(match => result = stringPaste(result, string[match.index] ?? symbol, match.index, true));

    return result;

};

/**
 * ### stringSkip
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция пропускания слоя через строку.
 *
 * Возвращает в качестве результата исходную строку, в которой:
 * - Часть заменена на слой.
 * - Слой оставляет символы исходной строки, которые он не покрыл или те, которые были указаны в нём как пропускные.
 *
 * Пропускной символ - указатель слоя, который говорит функции, что она должна оставить на данном месте символ исходной строки.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {string} layer `Слой`
 *
 * Слой, эта строка, которая встанет на ту часть исходной строки, которую сможет покрыть от начала и до конца своей длины.
 * @arg {string} symbol `Символ`
*/
export function stringSkip(string, layer, symbol) {

    return skipDeceit({ string, layer, symbol, });

};

//#endregion

//#region trim 0.2.0

/** ### stringTFTrim
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `trim`.
 *
 * @typedef {stringTFUTrim&stringT} stringTFTrim
 *
*/
/** ### stringTFUTrim
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `trim`.
 *
 * @typedef stringTFUTrim
 * @prop {boolean} end
 * @prop {boolean} start
*/

/** @arg {stringTFTrim} t */
function trimDeceit(t) {

    try {

        return trimVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFTrim} t */
function trimVerify(t) {

    const {



    } = t;

    return trimHandle(t);

};
/** @arg {stringTFTrim} t */
function trimHandle(t) {

    const {



    } = t;

    return trimComply(t);

};
/** @arg {stringTFTrim} t */
function trimComply(t) {

    const {

        end,
        start,
        string,

    } = t;

    let result = string;

    if (end && start) {

        result = result.trim();

    } else if (end) {

        result = result.trimEnd();

    } else if (start) {

        result = result.trimStart();

    };

    return result;

};

/**
 * ### stringTrim
 * - Версия `0.2.0`
 * - Цепочка `DVHCa`
 * - Пространство `string`
 *
 * Функция обрезки каждой линии строки и самой строки от свободных линий.
 * ***
 * @arg {string} string `Строка`
 * @arg {boolean} end `Обрезка конца строки`
 * - По умолчанию `true`
 * @arg {boolean} start `Обрезка начала строки`
 * - По умолчанию `false`
*/
export function stringTrim(string, end = true, start = false) {

    return trimDeceit({ string, start, end, });

};

//#endregion
//#region trimRow 0.0.0

/** ### stringTFTrimRow
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `trimRow`.
 *
 * @typedef {stringTFUTrimRow&stringT&stringTFTrim} stringTFTrimRow
 *
*/
/** ### stringTFUTrimRow
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `trimRow`.
 *
 * @typedef stringTFUTrimRow
 * @prop {any} _
*/

/** @arg {stringTFTrimRow} t */
function trimRowDeceit(t) {

    try {

        return trimRowVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFTrimRow} t */
function trimRowVerify(t) {

    const {



    } = t;

    return trimRowHandle(t);

};
/** @arg {stringTFTrimRow} t */
function trimRowHandle(t) {

    const {



    } = t;

    return trimRowComply(t);

};
/** @arg {stringTFTrimRow} t */
function trimRowComply(t) {

    const {

        end,
        start,
        string,

    } = t;

    return string.split('\n').map(y => {

        if (end) {

            y = y.trimEnd();

        };
        if (start) {

            y = y.trimStart();

        };

        return y;

    }).join('\n');

};

/**
 * ### stringTrimRow
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция построчного усечения.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {boolean} end `Конец`
 * @arg {boolean} start `Начало`
*/
export function stringTrimRow(string, start, end = true) {

    return trimRowDeceit({ string, start, end, });

};

//#endregion

//#region markInsert

/** ### stringTFMarkInsert
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `markInsert`.
 * 
 * @typedef {stringTFUMarkInsert&stringT} stringTFMarkInsert
 * 
*/
/** ### stringTFUMarkInsert
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `markInsert`.
 * 
 * @typedef stringTFUMarkInsert
 * @prop {[string][]} marks
*/

/** @arg {stringTFMarkInsert} t */
function markInsertDeceit(t) {

    try {

        return markInsertVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFMarkInsert} t */
function markInsertVerify(t) {

    const {



    } = t;

    return markInsertHandle(t);

};
/** @arg {stringTFMarkInsert} t */
function markInsertHandle(t) {

    const {



    } = t;

    return markInsertComply(t);

};
/** @arg {stringTFMarkInsert} t */
function markInsertComply(t) {

    const {

        marks,
        string,

    } = t;

    const labels = [];
    const fragments = [];

    for (const mark of marks) {

        if (!mark || !mark.length || !mark[0]) continue;

        labels.push(mark.slice(1));
        fragments.push(mark[0]);

    };

    const matches = string.matchAll(new RegExp(fragments.join('|'), 'gmsu'));

    for (let match = matches.next(); !match.done; match = matches.next()) {

        console.log(match, fragments);

    };

    return this;

};

/**
 * ### stringMarkInsert
 * 
 * ***
 * 
 * Функция маркировки вставок.
 * 
 * ***
 * @arg {string} string `Строка`
 * @arg {...[string, string]} marks `Значения`
*/
export function stringMarkInsert(string, ...marks) {

    return markInsertDeceit({ string, marks, });

};

//#endregion

//#region split 0.0.0

/** ### stringTFSplit
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `split`.
 *
 * @typedef {stringTFUSplit&stringT} stringTFSplit
 *
*/
/** ### stringTFUSplit
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `split`.
 *
 * @typedef stringTFUSplit
 * @prop {number} count
 * @prop {string} separator
*/

/** @arg {stringTFSplit} t */
function splitDeceit(t) {

    try {

        return splitVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFSplit} t */
function splitVerify(t) {

    const {



    } = t;

    return splitHandle(t);

};
/** @arg {stringTFSplit} t */
function splitHandle(t) {

    const {



    } = t;

    return splitComply(t);

};
/** @arg {stringTFSplit} t */
function splitComply(t) {

    const {

        count,
        string,
        separator,

    } = t;

    let result = string.split(separator);

    if (count) {

        return [...result.slice(0, count), result.slice(count).join(separator)];

    } else {

        return result;

    };

};

/**
 * ### stringSplit
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция разбивки указанной строки на подстроки по указанному разделителю.
 *
 * С помощью `счётчика` можно задать кол-во разбиений.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {string} separator `Разделитель`
 * @arg {number} count `Счётчик`
*/
export function stringSplit(string, separator, count) {

    return splitDeceit({ string, separator, count, });

};

//#endregion
//#region splitByCount 0.0.0

/** ### stringTFSplitByCount
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `splitByCount`.
 *
 * @typedef {stringTFUSplitByCount&stringT} stringTFSplitByCount
 *
*/
/** ### stringTFUSplitByCount
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `splitByCount`.
 *
 * @typedef stringTFUSplitByCount
 * @prop {number} count
*/

/** @arg {stringTFSplitByCount} t */
function splitByCountDeceit(t) {

    try {

        return splitByCountVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFSplitByCount} t */
function splitByCountVerify(t) {

    const {



    } = t;

    return splitByCountHandle(t);

};
/** @arg {stringTFSplitByCount} t */
function splitByCountHandle(t) {

    const {



    } = t;

    return splitByCountComply(t);

};
/** @arg {stringTFSplitByCount} t */
function splitByCountComply(t) {

    const {

        count,
        string,

    } = t;

    return arrayGetDevideByCount(string, count);

};

/**
 * ### stringSplitByCount
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция разбиения указанной строки на подстроки указанной длины.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {number} count `Счётчик`
*/
export function stringSplitByCount(string, count) {

    return splitByCountDeceit({ string, count, });

};

//#endregion

//#region unify 0.0.1

/** ### stringTFUnify
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `unify`.
 *
 * @typedef {stringTFUUnify&stringT} stringTFUnify
 *
*/
/** ### stringTFUUnify
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `unify`.
 *
 * @typedef stringTFUUnify
 * @prop {string} symbols
*/

/** @arg {stringTFUnify} t */
function unifyDeceit(t) {

    try {

        return unifyVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFUnify} t */
function unifyVerify(t) {

    const {



    } = t;

    return unifyHandle(t);

};
/** @arg {stringTFUnify} t */
function unifyHandle(t) {

    const {



    } = t;

    return unifyComply(t);

};
/** @arg {stringTFUnify} t */
function unifyComply(t) {

    let {

        string,

    } = t;

    const {

        symbols,

    } = t;

    for (let i = 0; i < string.length; i++) {

        if (string[i + 1] && string[i] === string[i + 1] && (!symbols || (symbols && symbols.includes(string[i])))) {

            string = stringRemove(string, i, 1);

            i--;

        };

    };

    return string;

};

/**
 * ### stringUnify
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция унифицирования содержимого строки.
 *
 * Унификация исключает дублирование символов идущих подряд, удаляя дубли.
 *
 * ***
 * @arg {string} string `Строка`
*/
export function stringUnify(string) {

    return unifyDeceit({ string, });

};
/**
 * ### stringUnifyBySymbol
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция {@link stringUnify|унифицирования} по указанным символам.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {string} symbols `Символы`
*/
export function stringUnifyBySymbol(string, symbols) {

    return unifyDeceit({ string, symbols, });

};

//#endregion

//#region paste 1.0.0

/** ### stringTFPaste
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `paste`.
 *
 * @typedef {stringTFUPaste&stringTIndex&stringTLength&stringT} stringTFPaste
 *
*/
/** ### stringTFUPaste
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `paste`.
 *
 * @typedef stringTFUPaste
 * @prop {string} paste
 * @prop {boolean} modeSkip
 * @prop {stringTPosition} position
*/

/** @arg {stringTFPaste} t */
function pasteDeceit(t) {

    try {

        return pasteVerify(t);

    } catch (e) {

        if (config.value.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFPaste} t */
function pasteVerify(t) {

    const {



    } = t;

    return pasteHandle(t);

};
/** @arg {stringTFPaste} t */
function pasteHandle(t) {

    const {



    } = t;

    const args = yClassifyProp(t);

    if (args.arrayNumber.length) {

        t.string = stringPadToPosition(t.string, ...args.arrayNumber[0]);
        t.index = stringGetIndex(t.string, ...args.arrayNumber[0]);

    };

    if (t.modeSkip) {

        t.paste = stringSkip(t.string.slice(t.index, (t.length + t.index) ?? undefined), t.paste, config.value.skipValue).slice(0, t.length ?? t.paste.length);

    };

    return pasteComply(t);

};
/** @arg {stringTFPaste} t */
function pasteComply(t) {

    let {

        index,
        string,

    } = t;

    const {

        paste,
        length,

    } = t;

    if (length) {

        string = stringRemove(string, index, length);

    };

    if (length < -1) {

        const d = index + length;

        if (d < 0) {

            index += length - d;

        } else {

            index += length + 1;

        };

    };

    return stringAppend(string, index, paste);

};

/**
 * ### stringPaste
 * - Версия `1.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция вставки с замещением указанной индексом и размером области в строку.
 *
 * ***
 * @arg {number} length `Размер`
 * @arg {number} index `Индекс`
 *
 * - Дефолт `string.length ?? 0`
 * @arg {string} paste `Вставка`
 * @arg {string} string `Строка`
 * 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringPaste(string, paste, index = string.length ?? 0, length = 0, modeSkip = config.value.modeSkip) {

    return pasteDeceit({ string, paste, index, length, modeSkip, });

};

//#endregion
//#region pasteWrap 1.0.0

/** ### stringTFPasteWrap
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `pasteWrap`.
 *
 * @typedef {stringTFUPasteWrap&stringT&stringTPosition} stringTFPasteWrap
 *
*/
/** ### stringTFUPasteWrap
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `pasteWrap`.
 *
 * @typedef stringTFUPasteWrap
 * @prop {string} wrap
 * @prop {boolean} modeSkip
*/

/** @arg {stringTFPasteWrap} t */
function pasteWrapDeceit(t) {

    try {

        return pasteWrapVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFPasteWrap} t */
function pasteWrapVerify(t) {

    const {



    } = t;

    return pasteWrapHandle(t);

};
/** @arg {stringTFPasteWrap} t */
function pasteWrapHandle(t) {

    const {



    } = t;

    return pasteWrapComply(t);

};
/** @arg {stringTFPasteWrap} t */
function pasteWrapComply(t) {

    const {

        y,
        wrap,
        x,
        string,
        modeSkip,

    } = t;

    let result = string;

    wrap.split('\n').forEach((rowWrap, i) => {

        result = stringPadToPosition(result, y + i, x);

        let row = stringGetRow(result, y + i);

        row = stringPaste(row, rowWrap, x, rowWrap.length, modeSkip);

        result = stringSetRow(result, row, y + i);

    });

    return result;

};

/**
 * ### stringPasteWrap
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция вставки в указанную строку указанную вставку с переносом.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {string} wrap `Вставка`
 * @arg {number} y `Строка`
 * @arg {number} x `Столбец`
 * @arg {boolean} modeSkip `Режим пропуска`
*/
export function stringPasteWrap(string, wrap = '', y, x, modeSkip) {

    return pasteWrapDeceit({ string, wrap, y, x, modeSkip, });

};

//#endregion
//#region pasteSymbol

/** ### stringTFPasteSymbol
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `pasteSymbol`.
 * 
 * @typedef {stringTFUPasteSymbol&stringT} stringTFPasteSymbol
 * 
*/
/** ### stringTFUPasteSymbol
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `pasteSymbol`.
 * 
 * @typedef stringTFUPasteSymbol
 * @prop {number} index
 * @prop {string} symbol
*/

/** @arg {stringTFPasteSymbol} t */
function pasteSymbolDeceit(t) {

    try {

        return pasteSymbolVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFPasteSymbol} t */
function pasteSymbolVerify(t) {

    const {



    } = t;

    return pasteSymbolHandle(t);

};
/** @arg {stringTFPasteSymbol} t */
function pasteSymbolHandle(t) {

    const {



    } = t;

    return pasteSymbolComply(t);

};
/** @arg {stringTFPasteSymbol} t */
function pasteSymbolComply(t) {

    const {

        index,
        string,

    } = t;

    const symbol = config.value.getProperty(t.symbol);

    if (symbol) {

        return stringPaste(string, symbol, index);

    };

    return string;

};

/**
 * ### stringPasteSymbol
 * 
 * ***
 * 
 * Функция вставки символа в строку по индексу.
 * 
 * ***
 * @arg {number} index `Индекс`
 * @arg {string} string `Строка`
 * @arg {stringTTSymbol} symbol `Символ`
*/
export function stringPasteSymbol(string, symbol, index) {

    return pasteSymbolDeceit({ string, symbol, index, });

};

//#endregion
//#region pasteByPosition 1.0.0

/** ### stringTFPasteByPosition
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `pasteByPosition`.
 *
 * @typedef {stringTFUPasteByPosition&stringT} stringTFPasteByPosition
 *
*/
/** ### stringTFUPasteByPosition
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `pasteByPosition`.
 *
 * @typedef stringTFUPasteByPosition
 * @prop {any} _
*/

/** @arg {stringTFPasteByPosition} t */
function pasteByPositionDeceit(t) {

    try {

        return pasteByPositionVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFPasteByPosition} t */
function pasteByPositionVerify(t) {

    const {



    } = t;

    return pasteByPositionHandle(t);

};
/** @arg {stringTFPasteByPosition} t */
function pasteByPositionHandle(t) {

    const {



    } = t;

    return pasteByPositionComply(t);

};
/** @arg {stringTFPasteByPosition} t */
function pasteByPositionComply(t) {

    const {



    } = t;



};

/**
 * ### stringPasteByPosition
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 *
 *
 * ***
 *
*/
export function stringPasteByPosition() {

    return pasteByPositionDeceit({});

};

//#endregion

//#region append 1.0.0

/** ### stringTFAppend
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `append`.
 *
 * @typedef {stringTFUAppend&stringT} stringTFAppend
 *
*/
/** ### stringTFUAppend
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `append`.
 *
 * @typedef stringTFUAppend
 * @prop {number} index
 * @prop {string[]} appends
*/

/** @arg {stringTFAppend} t */
function appendDeceit(t) {

    try {

        return appendVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFAppend} t */
function appendVerify(t) {

    const {



    } = t;

    return appendHandle(t);

};
/** @arg {stringTFAppend} t */
function appendHandle(t) {

    const {



    } = t;

    const args = yClassifyProp(t);

    if (args.arrayNumber.length) {

        t.string = stringPadToPosition(t.string, ...args.arrayNumber[0]);
        t.index = stringGetIndex(t.string, ...args.arrayNumber[0]);
    };

    return appendComply(t);

};
/** @arg {stringTFAppend} t */
function appendComply(t) {

    const {

        index,
        string,
        appends,

    } = t;

    let result = string;

    if (condIsNumberLimit(index) && index >= 0) {

        return result.slice(0, index) + appends.join('') + result.slice(index);

    };

    return result;

};

/**
 * ### stringAppend
 * - Версия `1.0.0`
 * - Модуль `string`
 * - Цепочка `DVHCa`
 * ***
 *
 * Функция добавления подстрок к строке по указанной позиции.
 *
 * ***
 * @arg {number} index `Индекс`
 * @arg {string} string `Строка`
 * @arg {...string} appends `Добавления`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringAppend(string, index, ...appends) {

    return appendDeceit({ string, index, appends, });

};

//#endregion

//#region recode 0.0.0

/** ### stringTFRecode
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `recode`.
 * 
 * @typedef {stringTFURecode&stringT} stringTFRecode
 * 
*/
/** ### stringTFURecode
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `recode`.
 * 
 * @typedef stringTFURecode
 * @prop {string} localNew
 * @prop {string} localNow
*/

/** @arg {stringTFRecode} t */
function recodeDeceit(t) {

    try {

        return recodeVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFRecode} t */
function recodeVerify(t) {

    const {



    } = t;

    return recodeHandle(t);

};
/** @arg {stringTFRecode} t */
function recodeHandle(t) {

    const {



    } = t;

    return recodeComply(t);

};
/** @arg {stringTFRecode} t */
function recodeComply(t) {

    const {

        string,
        localNow,
        localNew,

    } = t;

    let result = string;

    switch (localNow + '-' + localNew) {

        case 'en-ru': {

            const replaces = [

                ['q', 'й'], ['w', 'ц'], ['e', 'у'], ['r', 'к'], ['t', 'е'], ['y', 'н'], ['u', 'г'], ['i', 'ш'], ['o', 'щ'],
                ['p', 'з'], ['[', 'х'], [']', 'ъ'], ['a', 'ф'], ['s', 'ы'], ['d', 'в'], ['f', 'а'], ['g', 'п'], ['h', 'р'],
                ['j', 'о'], ['k', 'л'], ['l', 'д'], [';', 'ж'], ['\'', 'э'], ['z', 'я'], ['x', 'ч'], ['c', 'с'], ['v', 'м'],
                ['b', 'и'], ['n', 'т'], ['m', 'ь'], [',', 'б'], ['.', 'ю'],

            ];

            for (const replace of replaces) {

                result = stringReplaceMany(result, replace, [replace[0].toUpperCase(), replace[1].toUpperCase()]);

            };

        }; break;

    };

    return result;

};

/**
 * ### stringRecode
 * 
 * ***
 * 
 * Функция конвертации кода символов в символы указанной раскладки.
 * 
 * ***
 * @arg {string} string `Строка`
 * @arg {string} localNew `Новая локаль`
 * @arg {string} localNow `Текущая локаль`
*/
export function stringRecode(string, localNow = 'en', localNew = 'ru') {

    return recodeDeceit({ string, localNow, localNew, });

};

//#endregion
//#region remove 1.0.0

/** ### stringTFRemove
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `remove`.
 *
 * @typedef {stringTFURemove&stringT} stringTFRemove
 *
*/
/** ### stringTFURemove
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `remove`.
 *
 * @typedef stringTFURemove
 * @prop {number} index
 * @prop {number} length
*/

/** @arg {stringTFRemove} t */
function removeDeceit(t) {

    try {

        return removeVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFRemove} t */
function removeVerify(t) {

    const {



    } = t;

    return removeHandle(t);

};
/** @arg {stringTFRemove} t */
function removeHandle(t) {

    const {



    } = t;

    const args = yClassifyProp(t);

    if (args.arrayNumber.length) {

        t.index = stringGetIndex(t.string, ...args.arrayNumber[0]);

    };

    if (t.index < 0) {

        t.index = 0;

    } else if (t.index >= t.string.length) {

        t.index = t.string.length;

    };

    if (t.length < 0 && t.length + t.index < 0) {

        [t.index, t.length] = [null, t.index + 1];

    } else if (t.length > 0 && t.length + t.index >= t.string.length) {

        [t.index, t.length] = [t.index, null];

    } else if (t.length > 0) {

        [t.index, t.length] = [t.index, t.index + t.length];

    } else {

        [t.index, t.length] = [t.index + t.length + 1, t.index + 1];

    };

    return removeComply(t);

};
/** @arg {stringTFRemove} t */
function removeComply(t) {

    const {

        index,
        length,
        string,

    } = t;

    if (!index && index !== 0) {

        return string.slice(length);

    } else if (!length && length !== 0) {

        return string.slice(0, index);

    } else {

        return string.slice(0, index) + string.slice(length);

    };

};

/**
 * ### stringRemove
 * - Модуль `string`
 * - Версия `1.0.0`
 * - Цепочка `DVHCa`
 * ***
 *
 * Функция удаления подстроки из строки, начиная с указанного индекса.
 *
 * ***
 * @arg {number} index `Индекс`
 * @arg {number} length `Длина`
 * @arg {string} string `Строка`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringRemove(string, index, length) {

    return removeDeceit({ string, index, length });

};
/**
 * ### stringRemoveEnd
 * - Версия `1.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция для удаления фрагмента строки начиная с конца строки.
 *
 * ***
 * @arg {number} length `Длина`
 * @arg {string} string `Строка`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringRemoveEnd(string, length) {

    return removeDeceit({ string, index: string.length - length, length });

};
/**
 * ### stringRemoveStart
 * - Версия `1.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция для удаления фрагмента строки начиная с начала строки.
 *
 * ***
 * @arg {number} length `Длина`
 * @arg {string} string `Строка`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringRemoveStart(string, length) {

    return removeDeceit({ string, index: 0, length, });

};

//#endregion
//#region filter 0.0.0

/** ### stringTFFilter
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `filter`.
 *
 * @typedef {stringTFUFilter&stringT} stringTFFilter
 *
*/
/** ### stringTFUFilter
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `filter`.
 *
 * @typedef stringTFUFilter
 * @prop {(string|RegExp)[]} filters
*/

/** @arg {stringTFFilter} t */
function filterDeceit(t) {

    try {

        return filterVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFFilter} t */
function filterVerify(t) {

    const {



    } = t;

    return filterHandle(t);

};
/** @arg {stringTFFilter} t */
function filterHandle(t) {

    const {



    } = t;

    t.filters.forEach((e, i, a) => {

        if (e instanceof RegExp && !e.flags.includes('g')) {

            a[i] = new RegExp(e, 'g');

        };

    });

    return filterComply(t);

};
/** @arg {stringTFFilter} t */
function filterComply(t) {

    const {

        string,
        filters,

    } = t;

    let result = string;

    filters.forEach(filter => {

        result = result.replaceAll(filter, '');

    });

    return result;

};

/**
 * ### stringFilter
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция фильтрации указанной строки указанными фильтрами.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {...(string|RegExp)} filters `Фильтры`
*/
export function stringFilter(string, ...filters) {

    return filterDeceit({ string, filters, });

};

//#endregion
//#region shield 0.1.0

/** ### stringTFShield
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `shield`.
 *
 * @typedef {stringTFUShield&stringT} stringTFShield
 *
*/
/** ### stringTFUShield
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `shield`.
 *
 * @typedef stringTFUShield
 * @prop {any} _
*/

/** @arg {stringTFShield} t */
function shieldDeceit(t) {

    try {

        return shieldVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFShield} t */
function shieldVerify(t) {

    const {



    } = t;

    return shieldHandle(t);

};
/** @arg {stringTFShield} t */
function shieldHandle(t) {

    const {



    } = t;

    return shieldComply(t);

};
/** @arg {stringTFShield} t */
function shieldComply(t) {

    const {

        string,

    } = t;

    let result = string;

    const replaces = [

        '\r',
        '\n',
        '\b',
        '\x1b',
        '\\',
        '/',
        '?',
        '!',
        '*',
        '.',
        '[',
        ']',
        '(',
        ')',
        '&',
        '^',
        '%',
        '$',
        '#',
        '@',
        '~',
        ',',
        '{',
        '}',
        '"',
        '\'',
        '+',
        '-',
        '_',
        '=',
        '`',
        '|',
        '>',
        '<',
        ':',
        ';',

    ].map(replace => {

        switch (replace) {

            case '\n': return [replace, '\\n'];
            case '\r': return [replace, '\\r'];
            case '\b': return [replace, '\\b'];
            case '\x1b': return [replace, '\\x1b'];

        };

        return [replace, '\\' + replace];

    }).forEach(replace => {

        result = result.replaceAll(...replace);

    });

    return result;

};

/**
 * ### stringShield
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция экранирования символов строки.
 *
 * ***
 * @arg {string} string `Строка`
*/
export function stringShield(string) {

    return shieldDeceit({ string, });

};

//#endregion

//#region replaceMany

/** ### stringTFReplaceMany
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `replaceMany`.
 * 
 * @typedef {stringTFUReplaceMany&stringT} stringTFReplaceMany
 * 
*/
/** ### stringTFUReplaceMany
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `replaceMany`.
 * 
 * @typedef stringTFUReplaceMany
 * @prop {[string[], string][]} replaces
*/

/** @arg {stringTFReplaceMany} t */
function replaceManyDeceit(t) {

    try {

        return replaceManyVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFReplaceMany} t */
function replaceManyVerify(t) {

    const {



    } = t;

    return replaceManyHandle(t);

};
/** @arg {stringTFReplaceMany} t */
function replaceManyHandle(t) {

    const {



    } = t;

    return replaceManyComply(t);

};
/** @arg {stringTFReplaceMany} t */
function replaceManyComply(t) {

    const {

        string,
        replaces,

    } = t;

    let result = string;

    for (const replace of replaces) {

        if (!(replace[0] instanceof Array)) {

            replace[0] = [replace[0]];

        };

        for (const alias of replace[0]) {

            result = result.replaceAll(alias, replace[1]);

        };

    };

    return result;

};

/**
 * ### stringReplaceMany
 * 
 * ***
 * 
 * Функция замены символов.
 * 
 * ***
 * @arg {string} string `Строка`
 * @arg {...[string[], string]} replaces `Замены`
*/
export function stringReplaceMany(string, ...replaces) {

    return replaceManyDeceit({ string, replaces });

};

//#endregion

//#region insert 0.0.0

/** ### stringTFInsert
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `insert`.
 *
 * @typedef {stringTFUInsert&stringT} stringTFInsert
 *
*/
/** ### stringTFUInsert
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `insert`.
 *
 * @typedef stringTFUInsert
 * @prop {stringTTInserts} inserts
*/

/** @arg {stringTFInsert} t */
function insertDeceit(t) {

    try {

        return insertVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFInsert} t */
function insertVerify(t) {

    const {



    } = t;

    return insertHandle(t);

};
/** @arg {stringTFInsert} t */
function insertHandle(t) {

    const {



    } = t;

    t.inserts.forEach((e, i, a) => {

        if (condIsString(e)) {

            a[i] = stringSplit(e, config.value.insertSpliter, 1);

        };

        return e;

    });

    return insertComply(t);

};
/** @arg {stringTFInsert} t */
function insertComply(t) {

    const {

        string,
        inserts,

    } = t;

    let result = string;

    for (const insert of inserts) {

        result = result.replaceAll(insert[0], insert[1]);

    };

    return result;

};

/**
 * ### stringInsert
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция вставки укзанного значения за место указанного соответсвия во всех местах указанной строки.
 *
 * ***
 * @arg {string} find `Поиск`
 * @arg {string} value `Значение`
 * @arg {string} string `Строка`
*/
export function stringInsert(string, find, value) {

    return insertDeceit({ string, inserts: [[find, value]], });

};
/**
 * ### stringInsertMany
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция множественной вставки указанных значений в указанные строки.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {...(string|[string, string])} inserts `Вставки`
 *
 * Могут быть указаны двумя вариантами:
 * - Через строки с разделителем `-`, где первая часть - `поиск`, а вторая - `вставка`.
 * - Через массивы с двумя строковыми значениями, где первое значение - `поиск`, а второе - `вставка`.
 *
 * Оба варианта могут использоваться в перемешку друг с другом, но рекомендуется соблюдать единство параметров.
*/
export function stringInsertMany(string, ...inserts) {

    return insertDeceit({ string, inserts, });

};

//#endregion
//#region insertBypass 0.0.0

/** ### stringTFinsertBypass
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `insertBypass`.
 *
 * @typedef {stringTFUinsertBypass&stringT} stringTFinsertBypass
 *
*/
/** ### stringTFUinsertBypass
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `insertBypass`.
 *
 * @typedef stringTFUinsertBypass
 * @prop {string} find
 * @prop {string[]} values
*/

/** @arg {stringTFinsertBypass} t */
function insertBypassDeceit(t) {

    try {

        return insertBypassVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFinsertBypass} t */
function insertBypassVerify(t) {

    const {



    } = t;

    return insertBypassHandle(t);

};
/** @arg {stringTFinsertBypass} t */
function insertBypassHandle(t) {

    const {



    } = t;

    return insertBypassComply(t);

};
/** @arg {stringTFinsertBypass} t */
function insertBypassComply(t) {

    const {

        find,
        string,
        values,

    } = t;

    let result = string;

    for (const value of values) {

        const change = result.replace(find, value);

        if (result === change) {

            break;

        } else {

            result = change;

        };

    };

    return result;

};

/**
 * ### stringinsertBypass
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция вставки в указанную строку поочередно указанных значений за место указанного значения поиска.
 *
 * ***
 * @arg {string} find `Поиск`
 * @arg {string} string `Строка`
 * @arg {...string} values `Значения`
*/
export function stringInsertBypass(string, find, ...values) {

    return insertBypassDeceit({ string, values, find, });

};

//#endregion

//#region match

/** ### stringTFMatch
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `match`.
 * 
 * @typedef {stringTFUMatch&stringT} stringTFMatch
 * 
*/
/** ### stringTFUMatch
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `match`.
 * 
 * @typedef stringTFUMatch
 * @prop {(string|RegExp)[]} fragments `Фрагменты`
*/

/** @arg {stringTFMatch} t */
function matchDeceit(t) {

    try {

        return matchVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFMatch} t */
function matchVerify(t) {

    const {



    } = t;

    return matchHandle(t);

};
/** @arg {stringTFMatch} t */
function matchHandle(t) {

    const {



    } = t;

    return matchComply(t);

};
/** @arg {stringTFMatch} t */
function matchComply(t) {

    const {

        string,
        fragments,

    } = t;

    const result = string.match(new RegExp(fragments.join('|'), 'msu'));

    return result;

};

/**
 * ### stringMatch
 * 
 * ***
 * 
 * Функция поиска совпадения.
 * 
 * ***
 * @arg {string} string `Строка`
 * @arg {...(RegExp|string)} fragments `Фрагменты`
*/
export function stringMatch(string, ...fragments) {

    return matchDeceit({ string, fragments });

};

//#endregion
//#region matchMany

/** ### stringTFMatchMany
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `matchMany`.
 * 
 * @typedef {stringTFUMatchMany&stringT} stringTFMatchMany
 * 
*/
/** ### stringTFUMatchMany
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `matchMany`.
 * 
 * @typedef stringTFUMatchMany
 * @prop {number} count
 * @prop {(RegExp|string)[]} fragments
*/

/** @arg {stringTFMatchMany} t */
function matchManyDeceit(t) {

    try {

        return matchManyVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFMatchMany} t */
function matchManyVerify(t) {

    const {



    } = t;

    return matchManyHandle(t);

};
/** @arg {stringTFMatchMany} t */
function matchManyHandle(t) {

    const {



    } = t;

    return matchManyComply(t);

};
/** @arg {stringTFMatchMany} t */
function matchManyComply(t) {

    const {

        count,
        string,
        fragments,

    } = t;

    const result = [];
    const matches = string.matchAll(new RegExp(fragments.join("|"), "gmsu"));

    for (let index = 0, match = matches.next(); count || count === 0 ? count === index : !match.done; index++, match = matches.next()) {

        result.push(match.value);

    };

    return result;

};

/**
 * ### stringMatchMany
 * 
 * ***
 * 
 * Функция множественного поиска совпадений в строке.
 * 
 * ***
 * @arg {string} string `Строка`
 * @arg {...(RegExp|string)} fragments `Фрагменты`
*/
export function stringMatchMany(string, ...fragments) {

    return matchManyDeceit({ string, fragments });

};
/**
 * ### stringMatchManyLimit
 * 
 * ***
 * 
 * Функция поиска указанного количества совпадений в строке.
 * 
 * ***
 * @arg {string} string `Строка`
 * @arg {number} count `Количество`
 * @arg {...(string|RegExp)} fragments `Фрагменты`
*/
export function stringMatchManyLimit(string, count, ...fragments) {

    return matchManyDeceit({ string, fragments, count, });

};

//#endregion
//#region matchCount

/** ### stringTFMatchCount
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `matchCount`.
 * 
 * @typedef {stringTFUMatchCount&stringT} stringTFMatchCount
 * 
*/
/** ### stringTFUMatchCount
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `matchCount`.
 * 
 * @typedef stringTFUMatchCount
 * @prop {(string|RegExp)[]} fragments
*/

/** @arg {stringTFMatchCount} t */
function matchCountDeceit(t) {

    try {

        return matchCountVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFMatchCount} t */
function matchCountVerify(t) {

    const {



    } = t;

    return matchCountHandle(t);

};
/** @arg {stringTFMatchCount} t */
function matchCountHandle(t) {

    const {



    } = t;

    return matchCountComply(t);

};
/** @arg {stringTFMatchCount} t */
function matchCountComply(t) {

    const {

        string,
        fragments,

    } = t;

    return Array.from(string.matchAll(new RegExp(fragments.join("|"), "gmsu"))).length;

};

/**
 * ### stringMatchCount
 * 
 * ***
 * 
 * Функция подсчёта всех совпадений в строке.
 * 
 * ***
 * @arg {string} string `Строка`
 * @arg {...(RegExp|string)} fragments `Фрагменты`
*/
export function stringMatchCount(string, ...fragments) {

    return matchCountDeceit({ string, fragments });

};

//#endregion
//#region matchCountEquals 

/** ### stringTFMatchCountEquals
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `matchCountEquals`.
 * 
 * @typedef {stringTFUMatchCountEquals&stringT} stringTFMatchCountEquals
 * 
*/
/** ### stringTFUMatchCountEquals
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `matchCountEquals`.
 * 
 * @typedef stringTFUMatchCountEquals
 * @prop {number} count
 * @prop {(RegExp|string)[]} fragments
*/

/** @arg {stringTFMatchCountEquals} t */
function matchCountEqualsDeceit(t) {

    try {

        return matchCountEqualsVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFMatchCountEquals} t */
function matchCountEqualsVerify(t) {

    const {



    } = t;

    return matchCountEqualsHandle(t);

};
/** @arg {stringTFMatchCountEquals} t */
function matchCountEqualsHandle(t) {

    const {



    } = t;

    return matchCountEqualsComply(t);

};
/** @arg {stringTFMatchCountEquals} t */
function matchCountEqualsComply(t) {

    const {

        count,
        string,
        fragments,

    } = t;

    const matches = string.matchAll(new RegExp(fragments.join('|'), 'gmsu'));

    let index = 0;
    let match = matches.next();

    while (index === count || !match.done) {

        match = matches.next();

        if (index++ === count) {

            return true;

        };

    };

    return false;

};

/**
 * ### stringMatchCountEquals
 * 
 * ***
 * 
 * Функция подсчёта совпадений в строке.
 * 
 * ***
 * @arg {string} string `Строка`
 * @arg {number} count `Счётчик`
 * @arg {...(RegExp|string)} fragments `Фрагменты`
*/
export function stringMatchCountEquals(string, count, ...fragments) {

    return matchCountEqualsDeceit({ string, count, fragments, });

};

//#endregion

//#region formatUrl

/** ### stringTFFormatUrl
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `formatUrl`.
 * 
 * @typedef {stringTFUFormatUrl&stringT} stringTFFormatUrl
 * 
*/
/** ### stringTFUFormatUrl
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `formatUrl`.
 * 
 * @typedef stringTFUFormatUrl
 * @prop {any} _
*/

/** @arg {stringTFFormatUrl} t */
function formatUrlDeceit(t) {

    try {

        return formatUrlVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFFormatUrl} t */
function formatUrlVerify(t) {

    const {



    } = t;

    return formatUrlHandle(t);

};
/** @arg {stringTFFormatUrl} t */
function formatUrlHandle(t) {

    const {



    } = t;

    return formatUrlComply(t);

};
/** @arg {stringTFFormatUrl} t */
function formatUrlComply(t) {

    const {



    } = t;



};

/**
 * ### stringFormatUrl
 * 
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export function stringFormatUrl() {

    return formatUrlDeceit({});

};

//#endregion
//#region formatDate 0.0.0

/** ### stringTFFormatDate
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 * 
 * Результирующие параметры функции `formatDate`.
 * 
 * @typedef {stringTFUFormatDate&stringT&stringTLocal} stringTFFormatDate
 * 
*/
/** ### stringTFUFormatDate
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 * 
 * Уникальные параметры функции `formatDate`.
 * 
 * @typedef stringTFUFormatDate
 * @prop {Date} date
 * @prop {number[]} mesuares
*/

/** @arg {stringTFFormatDate} t */
function formatDateDeceit(t) {

    try {

        return formatDateVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFFormatDate} t */
function formatDateVerify(t) {

    const {



    } = t;

    return formatDateHandle(t);

};
/** @arg {stringTFFormatDate} t */
function formatDateHandle(t) {

    const {



    } = t;

    return formatDateComply(t);

};
/** @arg {stringTFFormatDate} t */
function formatDateComply(t) {

    const {

        date,
        local,

    } = t;

    const mesuares = t.mesuares ?? dateGetMesuares(date);

    mesuares.forEach((mesuare, index) => mesuares[index] = mesuare.toString().padStart(2, 0));

    mesuares[mesuares.length - 1] = mesuares.at(-1).padStart(4, 0);

    let result = funcBypass(config.value.templatesDate[local ?? 'ru'],

        [stringInsert, 'ss', mesuares[5]],
        [stringInsert, 'mm', mesuares[4]],
        [stringInsert, 'hh', mesuares[3]],
        [stringInsert, 'd', mesuares[2]],
        [stringInsert, 'm', mesuares[1]],
        [stringInsert, 'y', mesuares[0]],

    );

    return result;

};

/**
 * ### stringFormatDate
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 * 
 * Функция форматирования даты в строку.
 * 
 * ***
 * @arg {Date} date `Дата`
*/
export function stringFormatDate(date = new Date(), local = 'ru') {

    return formatDateDeceit({ date, local, });

};
/**
 * ### stringFormatDateByMesuares
 * 
 * ***
 * 
 * Функция получения формата даты, указанной в виде последовательности.
 * 
 * ***
 * @arg {string} local `Локаль`
 * @arg {...number} mesuares `Измерения`
*/
export function stringFormatDateByMesuares(local = 'ru', ...mesuares) {

    return formatDateDeceit({ local, mesuares, });

};

//#endregion
//#region formatPhone 0.0.0

/** ### stringTFFormatPhone
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 * 
 * Результирующие параметры функции `formatPhone`.
 * 
 * @typedef {stringTFUFormatPhone&stringT&stringTLocal} stringTFFormatPhone
 * 
*/
/** ### stringTFUFormatPhone
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 * 
 * Уникальные параметры функции `formatPhone`.
 * 
 * @typedef stringTFUFormatPhone
 * @prop {any} _
*/

/** @arg {stringTFFormatPhone} t */
function formatPhoneDeceit(t) {

    try {

        return formatPhoneVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFFormatPhone} t */
function formatPhoneVerify(t) {

    const {



    } = t;

    return formatPhoneHandle(t);

};
/** @arg {stringTFFormatPhone} t */
function formatPhoneHandle(t) {

    const {



    } = t;

    t.string = stringPad(t.string, '0', config.value.templatesPhone[t.local ?? 'ru'].length);

    return formatPhoneComply(t);

};
/** @arg {stringTFFormatPhone} t */
function formatPhoneComply(t) {

    const {

        local,
        string,

    } = t;

    let result = stringInsertBypass(config.value.templatesPhone[local ?? 'ru'], '.', ...string.split('').filter(symbol => symbol.match(/\d/)));

    return result;

};

/**
 * ### stringFormatPhone
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 * 
 * Функция форматирования строки в номер телефона.
 * 
 * ***
 * @arg {string} local `Локаль`
 * @arg {string} string `Строка`
*/
export function stringFormatPhone(string, local) {

    return formatPhoneDeceit({ string, local, });

};

//#endregion
//#region formatNumber 0.0.0

/** ### stringTFFormatNumber
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 * 
 * Результирующие параметры функции `formatNumber`.
 * 
 * @typedef {stringTFUFormatNumber&stringT} stringTFFormatNumber
 * 
*/
/** ### stringTFUFormatNumber
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 * 
 * Уникальные параметры функции `formatNumber`.
 * 
 * @typedef stringTFUFormatNumber
 * @prop {string} spliterPart
 * @prop {string} spliterDischarge
 * @prop {number|string} number
*/

/** @arg {stringTFFormatNumber} t */
function formatNumberDeceit(t) {

    try {

        return formatNumberVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFFormatNumber} t */
function formatNumberVerify(t) {

    const {



    } = t;

    return formatNumberHandle(t);

};
/** @arg {stringTFFormatNumber} t */
function formatNumberHandle(t) {

    const {



    } = t;

    return formatNumberComply(t);

};
/** @arg {stringTFFormatNumber} t */
function formatNumberComply(t) {

    const {

        number,
        spliterPart,
        spliterDischarge,

    } = t;

    let parts = number.toString().split('.');

    if (spliterDischarge) {

        parts = parts.map(part => funcBypass(part,

            [stringReverse],
            [stringSplitByCount, 3],
            [arrayJoin, spliterDischarge === true ? config.value.spliterDischarge : spliterDischarge],
            [stringReverse]

        ));

    };
    if (spliterPart) {

        parts = parts.join(spliterPart === true ? config.value.spliterPart : spliterPart);

    };

    return parts;

};

/**
 * ### stringFormatNumber
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 * 
 * Функция форматирования числа в строку.
 * В итоговой строке числа будут размещены знаки разделения разрядов и частей.
 * 
 * Если разделители не определены, то они не будут использоваться.
 * В противном случае, если разделитель `true` то он будет применен со значением конфигуратора.
 * При необходимости, можно указать свой разделитель - достаточно лишь указать его в качестве значения.
 * 
 * ***
 * @arg {number|string} number `Число`
 * @arg {boolean|string} spliterPart `Разделитель частей`
 * @arg {boolean|string} spliterDischarge `Разделитель велечин`
*/
export function stringFormatNumber(number, spliterPart = config.value.spliterPart, spliterDischarge = config.value.spliterDischarge) {

    return formatNumberDeceit({ number, spliterPart, spliterDischarge, });

};

//#endregion
//#region formatSample 0.0.0

/** ### stringTFFormatSample
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 * 
 * Результирующие параметры функции `formatSample`.
 * 
 * @typedef {stringTFUFormatSample&stringT} stringTFFormatSample
 * 
*/
/** ### stringTFUFormatSample
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 * 
 * Уникальные параметры функции `formatSample`.
 * 
 * @typedef stringTFUFormatSample
 * @prop {any} _
*/

/** @arg {stringTFFormatSample} t */
function formatSampleDeceit(t) {

    try {

        return formatSampleVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFFormatSample} t */
function formatSampleVerify(t) {

    const {



    } = t;

    return formatSampleHandle(t);

};
/** @arg {stringTFFormatSample} t */
function formatSampleHandle(t) {

    const {



    } = t;

    return formatSampleComply(t);

};
/** @arg {stringTFFormatSample} t */
function formatSampleComply(t) {

    const {

        string,

    } = t;

    let result = stringShield(string);

    return result;

};

/**
 * ### stringFormatSample
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 * 
 * Функция форматирования строки в простую форму.
 * 
 * Простая форма позволяет экранировать все специальные симолы и вставки ansi команд.
 * 
 * ***
 * @arg {string} string `Строка`
*/
export function stringFormatSample(string) {

    return formatSampleDeceit({ string, });

};

//#endregion
//#region formatReport 0.0.0

/** ### stringTFFormatReport
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 * 
 * Результирующие параметры функции `formatReport`.
 * 
 * @typedef {stringTFUFormatReport&stringT} stringTFFormatReport
 * 
*/
/** ### stringTFUFormatReport
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 * 
 * Уникальные параметры функции `formatReport`.
 * 
 * @typedef stringTFUFormatReport
 * @prop {any} _
*/

/** @arg {stringTFFormatReport} t */
function formatReportDeceit(t) {

    try {

        return formatReportVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFFormatReport} t */
function formatReportVerify(t) {

    const {



    } = t;

    return formatReportHandle(t);

};
/** @arg {stringTFFormatReport} t */
function formatReportHandle(t) {

    const {



    } = t;

    return formatReportComply(t);

};
/** @arg {stringTFFormatReport} t */
function formatReportComply(t) {

    const {

        string,

    } = t;

    let result = funcBypass(string,

        [stringInsertMany, 'Infinity/∞', 'true/+', 'false/-']

    );

    return result;

};

/**
 * ### stringFormatReport
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 * 
 * Функция форматирования строки в строку отчета.
 * 
 * Функция:
 * - Заменяет некоторые значения при отображении отчетов на более ёмкие и понятные символы
 * - Выделяет информацию цветом
 * 
 * ***
 * @arg {string} string `Строка`
*/
export function stringFormatReport(string) {

    return formatReportDeceit({ string });

};

//#endregion

//#region reverse 0.0.1

/** ### stringTFReverse
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `reverse`.
 *
 * @typedef {stringTFUReverse&stringT} stringTFReverse
 *
*/
/** ### stringTFUReverse
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `reverse`.
 *
 * @typedef stringTFUReverse
 * @prop {any} _
*/

/** @arg {stringTFReverse} t */
function reverseDeceit(t) {

    try {

        return reverseVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFReverse} t */
function reverseVerify(t) {

    const {



    } = t;

    return reverseHandle(t);

};
/** @arg {stringTFReverse} t */
function reverseHandle(t) {

    const {



    } = t;

    return reverseComply(t);

};
/** @arg {stringTFReverse} t */
function reverseComply(t) {

    const {

        string,

    } = t;

    let result = '';

    for (let i = string.length - 1; i >= 0; i--) {

        result += string[i];

    };

    return result;

};

/**
 * ### stringReverse
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция переворота строки.
 *
 * ***
 * @arg {string} string `Строка`
*/
export function stringReverse(string) {

    return reverseDeceit({ string, });

};

//#endregion
//#region reflect 0.0.0

/** ### stringTFReflect
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `reflect`.
 *
 * @typedef {stringTFUReflect&stringT} stringTFReflect
 *
*/
/** ### stringTFUReflect
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `reflect`.
 *
 * @typedef stringTFUReflect
 * @prop {(string|[string, string])} mirrors
*/

/** @arg {stringTFReflect} t */
function reflectDeceit(t) {

    try {

        return reflectVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFReflect} t */
function reflectVerify(t) {

    const {



    } = t;

    return reflectHandle(t);

};
/** @arg {stringTFReflect} t */
function reflectHandle(t) {

    const {



    } = t;

    return reflectComply(t);

};
/** @arg {stringTFReflect} t */
function reflectComply(t) {

    const {

        string,
        mirrors,

    } = t;

    const result = string.split('\n');

    for (const i in result) {

        result[i] += funcBypass(result[i],

            [stringInsertMany, mirrors],
            [stringReverse]

        );

    };

    return result.join('\n');

};

/**
 * ### stringReflect
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция дополнения строки её зеркальным отражением.
 *
 * Зеркальное отражение представлено реверсивной копией исходной строки, где также присутствуют отличные от исходных символов отражения.
 *
 * Данные отличия называются зеркалами. Зеркала представлены вставками, которые замещают собой исходные символы.
 *
 * Также отражение не затрагивает символы переноса строки.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {...(string|[string, string])} mirrors `Зеркала`
*/
export function stringReflect(string, ...mirrors) {

    return reflectDeceit({ string, mirrors, });

};

//#endregion
//#region mesuare 0.0.0

/** ### stringTFMesuare
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `mesuare`.
 *
 * @typedef {stringTFUMesuare&stringT} stringTFMesuare
 *
*/
/** ### stringTFUMesuare
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 *
 * Уникальные параметры функции `mesuare`.
 *
 * @typedef stringTFUMesuare
 * @prop {number} step
 * @prop {string[]} mesuares
*/

/** @arg {stringTFMesuare} t */
function mesuareDeceit(t) {

    try {

        return mesuareVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFMesuare} t */
function mesuareVerify(t) {

    const {



    } = t;

    return mesuareHandle(t);

};
/** @arg {stringTFMesuare} t */
function mesuareHandle(t) {

    const {



    } = t;

    return mesuareComply(t);

};
/** @arg {stringTFMesuare} t */
function mesuareComply(t) {

    const {

        step,
        string,
        substrings,

    } = t;

    let result = string;

    for (let i = 0, c = 0, p = 0; i < result.length; i++) {

        if ((i - p) % step === 0 && i !== 0) {

            result = stringPaste(result, substrings[c], i);

            i += substrings[c].length;
            p += substrings[c].length;

        };

    };

    return result;

};

/**
 * ### stringMesuare
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция добавления указанных подстрок в указанную строку через каждое указанное кол-во символов.
 *
 * ***
 * @arg {string} string `Строка`
 * @arg {number} step `Шаг`
 * @arg {...string} mesuares `Зарубки`
*/
export function stringMesuare(string, step, ...mesuares) {

    return mesuareDeceit({ string, step, mesuares, });

};

//#endregion

//#region truncate 0.0.0

/** ### stringTFTruncate
 * - Тип `TF`
 * - Версия `0.0.0`
 * ***
 * 
 * Результирующие параметры функции `truncate`.
 * 
 * @typedef {stringTFUTruncate&stringT} stringTFTruncate
 * 
*/
/** ### stringTFUTruncate
 * - Тип `TFU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры функции `truncate`.
 * 
 * @typedef stringTFUTruncate
 * @prop {number} cutoffTop 
 * @prop {number} cutoffLeft
 * @prop {number} cutoffRight
 * @prop {number} cutoffBottom
 * @prop {[number, number]} position
 * @prop {[number, number]} positionEnd
 * @prop {[number, number]} positionStart
*/

/** @arg {stringTFTruncate} t */
function truncateDeceit(t) {

    try {

        return truncateVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFTruncate} t */
function truncateVerify(t) {

    const {



    } = t;

    return truncateHandle(t);

};
/** @arg {stringTFTruncate} t */
function truncateHandle(t) {

    const {



    } = t;

    if (t.cutoffTop) {

        t.cutoffBottom += t.cutoffTop;

    };
    if (t.cutoffLeft) {

        t.cutoffRight += t.cutoffLeft;

    };

    return truncateComply(t);

};
/** @arg {stringTFTruncate} t */
function truncateComply(t) {

    const {

        string,
        cutoffTop,
        cutoffLeft,
        cutoffRight,
        cutoffBottom,

    } = t;

    let result = string;

    result = stringGetRows(result).slice(cutoffTop, cutoffBottom).map(row => {

        return row.slice(cutoffLeft, cutoffRight);

    }).join('\n');

    result = stringTrim(result);

    return result;

};

/**
 * ### stringTruncate
 * - Версия `0.0.0`
 * ***
 * 
 * Функция усечения указанного текста по указанным длине и ширине.
 * 
 * ***
 * @arg {string} string `Текст`
 * @arg {number} cutoffTop `Отсечка сверху`
 * @arg {number} cutoffLeft `Отсечка слева`
 * @arg {number} cutoffRight `Отсечка справа`
 * @arg {number} cutoffBottom `Отсечка снизу`
*/
export function stringTruncate(string, cutoffRight, cutoffBottom, cutoffLeft = 0, cutoffTop = 0) {

    return truncateDeceit({ string, cutoffRight, cutoffBottom, cutoffTop, cutoffLeft, });

};
/**
 * ### stringTruncateByArea
 * - Версия `0.0.0`
 * ***
 * 
 * Функция усечения указанного текста по его позиции в указанной области.
 * 
 * ***
 * @arg {string} string `Текст`
 * @arg {[number, number]} position `Позиция текста в пространстве`
 * @arg {[number, number]} positionEnd `Конечная точка области`
 * @arg {[number, number]} positionStart `Начальная точка области`
*/
export function stringTruncateByArea(string, position = [0, 0], positionStart = [0, 0], positionEnd) {

    return truncateDeceit({ string, position, positionStart, positionEnd });

};

//#endregion
//#region correlate 1.0.0

/** ### stringTFCorrelate
 * - Тип `TF`
 * ***
 * 
 * Результирующие параметры функции `correlate`.
 * 
 * @typedef {stringTFUCorrelate&stringT} stringTFCorrelate
 * 
*/
/** ### stringTFUCorrelate
 * - Тип `TFU`
 * 
 * Уникальные параметры функции `correlate`.
 * 
 * @typedef stringTFUCorrelate
 * @prop {any} _
*/

/** @arg {stringTFCorrelate} t */
function correlateDeceit(t) {

    try {

        return correlateVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFCorrelate} t */
function correlateVerify(t) {

    const {



    } = t;

    return correlateHandle(t);

};
/** @arg {stringTFCorrelate} t */
function correlateHandle(t) {

    const {



    } = t;

    return correlateComply(t);

};
/** @arg {stringTFCorrelate} t */
function correlateComply(t) {

    const {

        string

    } = t;

    let result = string;

    for (const match of Array.from(result.matchAll(/_(\p{L}+)/gmsu))) {

        let value = yGetProperty(config.value.symbols, match[1]);

        if (value) {

            result = result.replace(match[0], value);

        } else {

            for (const section of Object.values(config.value.symbols)) {

                for (const key of Object.keys(section)) {

                    if (match[1].includes(key)) {

                        result = result.replaceAll(new RegExp(`_${key}`, 'gmsu'), section[key]);

                    };

                };

            };

        };

    };

    return result;

};

/**
 * ### stringCorrelate
 * - Версия `1.0.0`
 * - Цепочка `DVHC`
 * ***
 * 
 * Функция определения символов по их специальным названиям.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function stringCorrelate(string) {

    return correlateDeceit({ string, });

};

//#endregion
//#region substring 0.0.0

/** ### stringTFSubstring
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 *
 * Результирующие параметры функции `substring`.
 *
 * @typedef {stringTFUSubstring&stringT&stringTLength&stringTIndex} stringTFSubstring
 *
*/
/** ### stringTFUSubstring
 * - Тип `TFU`
 * - Версия `0.0.1`
 * - Модуль `string`
 *
 * Уникальные параметры функции `substring`.
 *
 * @typedef stringTFUSubstring
 * @prop {boolean} back
*/

/** @arg {stringTFSubstring} t */
function substringDeceit(t) {

    try {

        return substringVerify(t);

    } catch (e) {

        if (config.value.strict) throw e;

        return undefined;

    };

};
/** @arg {stringTFSubstring} t */
function substringVerify(t) {

    const {



    } = t;

    return substringHandle(t);

};
/** @arg {stringTFSubstring} t */
function substringHandle(t) {

    const {



    } = t;

    if (!t.index || t.index < 0) {

        t.index = 0;

    } else if (t.index > t.string?.length) {

        t.index = t.string.length - 1;

    };

    if (!t.length && t.length !== 0) {

        t.length = t.string.length - t.index;

    } else if (t.length < 0) {

        t.back = true;
        t.length *= -1;

    };

    if ((t.y || t.y === 0) && (t.x || t.x === 0)) {

        t.index = stringGetPositionRowStartByIndex(t.string, t.y) + t.x;

    };

    return substringComply(t);

};
/** @arg {stringTFSubstring} t */
function substringComply(t) {

    const {

        back,
        index,
        string,
        length,

    } = t;

    if ((index === 0 && !length) || ((t.index === 0 || (t.index === t.string.length - 1 && back)) && t.string.length === length)) {

        return string;

    } else if (length === 0) {

        return '';

    };

    if (back) {

        return string.slice(0, index + 1).slice(-length);

    } else {

        return string.slice(index, index + length);

    };

};

/**
 * ### stringSubstring
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция извлечения подстроки из указанной строки начиная с указанного индекса и до указанной длины.
 *
 * ***
 * @arg {boolean} back `Обратный режим`
 *
 * При активации берет символы начиная с указанного индекса, до указанной длины по направлению к началу строке.
 *
 * Если не определен, то работает в стандартном режиме.
 *
 * @arg {string} string `Строка`
 * @arg {number?} length `Длина`
 *
 * Длина определяет кол-во символов начиная с указанного индекса, которое необходимо взять в подстроку.
 *
 * Если не определена, то будут взяты все символы начиная с указанного индекса и до конца строки.
 * @arg {number} index `Индекс`
*/
export function stringSubstring(string, index, length, back) {

    return substringDeceit({ string, index, length, back });

};
/**
 * ### stringSubstringByPosition
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 *
 * Функция {@link stringSubstring|извлечения подстроки} из указанной строки начиная с указанной позиции и до указанной длины.
 *
 * ***
 * @arg {number} y `Линия`
 * @arg {number} x `Позиция`
 * @arg {number} length `Длина`
 * @arg {string} string `Строка`
 * @arg {boolean} back `Обратный режим`
*/
export function stringSubstringByPosition(string, length, y, x, back) {

    return substringDeceit({ string, length, y, x, back, });

};

//#endregion
//#region capitalize 0.0.0

/** ### stringTFCapitalize
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `string`
 * ***
 * 
 * Результирующие параметры функции `capitalize`.
 * 
 * @typedef {stringTFUCapitalize&stringT} stringTFCapitalize
 * 
*/
/** ### stringTFUCapitalize
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `string`
 * 
 * Уникальные параметры функции `capitalize`.
 * 
 * @typedef stringTFUCapitalize
 * @prop {any} _
*/

/** @arg {stringTFCapitalize} t */
function capitalizeDeceit(t) {

    try {

        return capitalizeVerify(t);

    } catch (e) {

        if (config.value?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {stringTFCapitalize} t */
function capitalizeVerify(t) {

    const {



    } = t;

    return capitalizeHandle(t);

};
/** @arg {stringTFCapitalize} t */
function capitalizeHandle(t) {

    const {



    } = t;

    return capitalizeComply(t);

};
/** @arg {stringTFCapitalize} t */
function capitalizeComply(t) {

    const {

        string,

    } = t;

    return string[0].toUpperCase() + string.slice(1);

};

/**
 * ### stringCapitalize
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `string`
 * ***
 * 
 * Функция для изменения первой буквы в слове на заглавную.
 * 
 * ***
 * @arg {string} string `Строка`
*/
export function stringCapitalize(string) {

    return capitalizeDeceit({ string, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/