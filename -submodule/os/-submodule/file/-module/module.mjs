//#region YI

import { YArg } from '@syls/y/arg';
import { YCond } from '@syls/y/cond';
import { configFile as config } from './config.mjs';
import { readFileSync, writeFileSync } from 'fs';
import { pathExist, pathGet } from '../../path/-module/module.mjs';
import { URL } from 'url';

//#endregion
//#region YT

/** ### fileT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `file`.
 * 
 * @typedef fileT
 * @prop {any} data
 * @prop {string} delimiter
 * @prop {any[][]} array
 * @prop {boolean} formatMode
 * @prop {string|RegExp|URL} fragment
 * @prop {BufferEncoding|null} encoding
*/

//#endregion
//#region YV



//#endregion

//#region read

/**
 * ### read
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef readT
 * @prop {} _
 * ***
 * @arg {fileT&readT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function read(args) {
    
    let result;
    
    try {
        
        let {
            
            fragment,
            encoding,    
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        fragment = pathGet(fragment);

        if (!encoding) encoding = 'utf8';
        
        //#endregion
        //#region comply
    
        result = fragment ? readFileSync(fragment, encoding) : null; 
        
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
 * ### fileRead
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция считывания содержимого файла полученного по указанному фрагменту пути.
 * 
 * ***
 * @arg {fileT['fragment']} fragment `Фрагмент`
 * @arg {fileT['encoding']} encoding `Кодировка`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function fileRead(fragment, encoding) {

    return read({ fragment, encoding, });

};

//#endregion
//#region readCsv

/**
 * ### readCsv
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef readCsvT
 * @prop {} _
 * ***
 * @arg {fileT&readCsvT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function readCsv(args) {
    
    let result;
    
    try {
        
        let {
            
            fragment,
            encoding,
            delimiter,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        if (!delimiter) delimiter = ' '; 
        
        //#endregion
        //#region comply

        const rows = fileRead(fragment, encoding).split('\n');

        result = new Array(rows[0].split(delimiter).length).fill(0).map(_ => []);

        for (let row of rows) {

            const columns = row.split(delimiter);

            for (const index in columns) {

                let column = columns[index].trim();

                result[index].push(parseInt(column) ? +column : column.match(/\p{L}+/u)[0]);

            };

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
 * ### fileReadCsv
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция считывания содержимого файла полученного по указанному фрагменту пути.
 * 
 * ***
 * @arg {fileT['fragment']} fragment `Фрагмент`
 * @arg {fileT['encoding']} encoding `Кодировка`
 * @arg {fileT['delimiter']} delimiter `Разделитель`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function fileReadCsv(fragment, encoding, delimiter) {

    return readCsv({ fragment, encoding, delimiter, });

};

//#endregion
//#region readJson

/**
 * ### readJson
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef readJsonT
 * @prop {} _
 * ***
 * @arg {fileT&readJsonT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function readJson(args) {
    
    let result;
    
    try {
        
        let {
            
            fragment,
            encoding,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle

        fragment = pathGet(fragment);
        
        if (!encoding) encoding = config.params.encodingDefault; 

        //#endregion
        //#region comply
        
        result = JSON.parse(fileRead(fragment, encoding));
        
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
 * ### fileReadJson
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция считывания содержимого файла полученного по указанному фрагменту пути.
 * 
 * Полученный результат будет представлен js объектом.
 * 
 * ***
 * @arg {fileT['fragment']} fragment `Фрагмент`
 * @arg {fileT['encoding']} encoding `Кодировка`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function fileReadJson(fragment, encoding) {

    return readJson({ fragment, encoding, });

};

//#endregion

//#region write

/**
 * ### write
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef writeT
 * @prop {} _
 * ***
 * @arg {fileT&writeT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function write(args) {
    
    let result;
    
    try {
        
        let {
            
            data,
            fragment,
            encoding,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        fragment = pathGet(fragment);
        
        //#endregion
        //#region comply
        
        writeFileSync(fragment, data, {

            encoding,

        });

        return fragment;
        
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
 * ### fileWrite
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция записи в файл текстом.
 * 
 * ***
 * @arg {fileT['data']} data `Данные`
 * @arg {fileT['fragment']} fragment `Фрагмент`
 * @arg {fileT['encoding']} encoding `Кодировка`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function fileWrite(fragment, data, encoding) {

    return write({ fragment, data, encoding, });

};

//#endregion
//#region writeCsv

/**
 * ### writeCsv
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef writeCsvT
 * @prop {} _
 * ***
 * @arg {fileT&writeCsvT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function writeCsv(args) {
    
    let result;
    
    try {
        
        let {
            
            array,
            fragment,
            encoding,
            delimiter,
            formatMode,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        result = '';

        // if (!delimiter) delimiter = config.params.delimiter;
        
        //#endregion
        //#region comply
        
        if (formatMode) {

            const metrics = new Array(array.length).fill(0);

            for (const columnIndex in array) {

                const column = array[columnIndex];

                for (const rowIndex in column) {

                    const row = column[rowIndex] + '';

                    if (row.length > metrics[columnIndex]) metrics[columnIndex] = row.length;

                };

            };

            for (const rowIndex in array[0]) {

                for (const columnIndex in array) {

                    const column = array[columnIndex];
                    const string = column[rowIndex] + '';

                    result += string.padEnd(metrics[columnIndex] + 1, ' ');

                    if (columnIndex != array.length - 1) result += delimiter + ' ';

                };

                result += '\n';

            };

        } else {

            result = array.map(row => row.join(delimiter)).join('\n');

        };

        result = result.trim();

        result = fileWrite(fragment, result, encoding);
        
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
 * ### fileWriteCsv
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция записи в файл данных в csv формате.
 * 
 * ***
 * @arg {fileT['array']} array `Массив`
 * @arg {fileT['fragment']} fragment `Фрагмент`
 * @arg {fileT['encoding']} encoding `Кодировка`
 * @arg {fileT['delimiter']} delimiter `Разделитель`
 * @arg {fileT['formatMode']} formatMode `Форматирование`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function fileWriteCsv(fragment, array, delimiter, formatMode, encoding) {

    return writeCsv({ fragment, array, delimiter, encoding, formatMode, });

};

//#endregion
//#region writeJson

/**
 * ### writeJson
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef writeJsonT
 * @prop {} _
 * ***
 * @arg {fileT&writeJsonT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function writeJson(args) {
    
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
 * ### fileWriteJson
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
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
export function fileWriteJson() {

    return writeJson({});

};

//#endregion

/**
 * @file file/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/

// //#region writeJson 0.0.0

// /** ### fileTFWriteJson
//  * - Тип `TF`
//  * - Версия `0.0.0`
//  * - Модуль `os\file`
//  * ***
//  * 
//  * Результирующие параметры функции `writeJson`.
//  * 
//  * @typedef {fileTFUWriteJson&fileT&fileTFRead} fileTFWriteJson
//  * 
// */
// /** ### fileTFUWriteJson
//  * - Тип `TFU`
//  * - Версия `0.0.0`
//  * - Модуль `os\file`
//  * 
//  * Уникальные параметры функции `writeJson`.
//  * 
//  * @typedef fileTFUWriteJson
//  * @prop {G} data
//  * @template G
// */

// /** @arg {fileTFWriteJson} t */
// function writeJsonDeceit(t) {
    
//     try {
        
//         return writeJsonVerify(t);
        
//     } catch (e) {
        
//         if (config?.strictMode) {
            
//             throw e;
            
//         };
        
//         return undefined;
        
//     } finally {
        
        
        
//     };
    
// };
// /** @arg {fileTFWriteJson} t */
// function writeJsonVerify(t) {
    
//     const {
    
    
    
//     } = t;
    
//     return writeJsonHandle(t);
   
// };
// /** @arg {fileTFWriteJson} t */
// function writeJsonHandle(t) {
   
//     const {
    
    
    
//     } = t;

//     t.fragment = pathGet(t.fragment);
   
//     return writeJsonComply(t);
   
// };
// /** @arg {fileTFWriteJson} t */
// function writeJsonComply(t) {
   
//     const {
        
//         data,
//         fragment,
    
//     } = t;

//     writeFileSync(fragment, JSON.stringify(data, null, 4));

//     return fragment;
    
// };

// /**
//  * ### fileWriteJson
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * - Модуль `os\file`
//  * ***
//  * 
//  * Функция перезаписывания файла, полученного по указанному фрагменту указанными данными.
//  * 
//  * ***
//  * @arg {G} data `Данные`
//  * @arg {fileTTFragment} fragment `Фрагмент`
//  * @returns {G}
//  * @template G
//  * 
//  * - Дефолт `utf8`
// */
// export function fileWriteJson(fragment, data) {

//     return writeJsonDeceit({ fragment, data, });

// };

// //#endregion

