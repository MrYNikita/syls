//#region YI

import { YArg } from '@syls/y/arg';
import { YCond } from '@syls/y/cond';
import { configFile as config } from './config.mjs';
import { readFileSync, writeFileSync } from 'fs';
import { pathExist, pathGet } from '../../path/-module/module.mjs';

//#endregion
//#region YT

/** ### fileT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `file`.
 * 
 * @typedef fileT
 * @prop {string} fragment
 * @prop {string} delimiter
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
        
        if (config.value.strictMode) {
            
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

                const column = columns[index];

                result[index].push(parseInt(column) ? +column : column.match(/\w+/)[0]);

            };

        };
        
        //#endregion
        
    } catch (err) {
        
        if (config.value.strictMode) {
            
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
 * 
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
        
        if (!encoding) encoding = config.value.encodingDefault; 

        //#endregion
        //#region comply
        
        result = JSON.parse(fileRead(fragment, encoding));
        
        //#endregion
        
    } catch (err) {
        
        if (config.value.strictMode) {
            
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

/**
 * @file file/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/

//#region write 0.0.0

/** ### fileTFWrite
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * ***
 * 
 * Результирующие параметры функции `write`.
 * 
 * @typedef {fileTFUWrite&fileT&fileTFRead} fileTFWrite
 * 
*/
/** ### fileTFUWrite
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * Уникальные параметры функции `write`.
 * 
 * @typedef fileTFUWrite
 * @prop {string} data
*/

/** @arg {fileTFWrite} t */
function writeDeceit(t) {
    
    try {
        
        return writeVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {fileTFWrite} t */
function writeVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return writeHandle(t);
   
};
/** @arg {fileTFWrite} t */
function writeHandle(t) {
   
    const {
    
    
    
    } = t;

    t.fragment = pathGet(t.fragment);
   
    return writeComply(t);
   
};
/** @arg {fileTFWrite} t */
function writeComply(t) {
   
    const {
    
        data,
        fragment,
        encoding,
    
    } = t;
    
    writeFileSync(fragment, data, encoding);

    return fragment;
    
};

/**
 * ### fileWrite
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\file`
 * ***
 * 
 * Функция перезаписывания файла, полученного по указанному фрагменту указанными данными.
 * 
 * ***
 * @arg {string} data `Данные`
 * @arg {fileTTFragment} fragment `Фрагмент`
 * @arg {fileTTEncoding} encoding `Кодировка`
 * 
 * - Дефолт `utf8`
*/
export function fileWrite(fragment, data, encoding = 'utf8') {

    return writeDeceit({ data, fragment, encoding, });

};

//#endregion
//#region writeCsv 0.0.0

/** ### fileTFWriteCsv
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * ***
 * 
 * Результирующие параметры функции `writeCsv`.
 * 
 * @typedef {fileTFUWriteCsv&fileT&fileTFWrite} fileTFWriteCsv
 * 
*/
/** ### fileTFUWriteCsv
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * Уникальные параметры функции `writeCsv`.
 * 
 * @typedef fileTFUWriteCsv
 * @prop {string} delimiter
*/

/** @arg {fileTFWriteCsv} t */
function writeCsvDeceit(t) {
    
    try {
        
        return writeCsvVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {fileTFWriteCsv} t */
function writeCsvVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return writeCsvHandle(t);
   
};
/** @arg {fileTFWriteCsv} t */
function writeCsvHandle(t) {
   
    const {
    
    
    
    } = t;

    t.fragment = pathGet(t.fragment);
   
    return writeCsvComply(t);
   
};
/** @arg {fileTFWriteCsv} t */
function writeCsvComply(t) {
   
    const {
    
        data,
        fragment,
        delimiter,
    
    } = t;

    fileWrite(fragment, data.map(row => row.join(delimiter)).join('\n'));

    return fragment;
    
};

/**
 * ### fileWriteCsv
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\file`
 * ***
 * 
 * Функция записи в файл по указанному фрагменту с указанным массив.
 * 
 * ***
 * @arg {string} delimiter `Разделитель`
 * @arg {any[][]} data `Массив`
 * @arg {fileTTFragment} fragment `Фрагмент`
*/
export function fileWriteCsv(fragment, data, delimiter = ' ') {

    return writeCsvDeceit({ fragment, data, delimiter, });

};

//#endregion
//#region writeJson 0.0.0

/** ### fileTFWriteJson
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * ***
 * 
 * Результирующие параметры функции `writeJson`.
 * 
 * @typedef {fileTFUWriteJson&fileT&fileTFRead} fileTFWriteJson
 * 
*/
/** ### fileTFUWriteJson
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\file`
 * 
 * Уникальные параметры функции `writeJson`.
 * 
 * @typedef fileTFUWriteJson
 * @prop {G} data
 * @template G
*/

/** @arg {fileTFWriteJson} t */
function writeJsonDeceit(t) {
    
    try {
        
        return writeJsonVerify(t);
        
    } catch (e) {
        
        if (config?.strictMode) {
            
            throw e;
            
        };
        
        return undefined;
        
    } finally {
        
        
        
    };
    
};
/** @arg {fileTFWriteJson} t */
function writeJsonVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return writeJsonHandle(t);
   
};
/** @arg {fileTFWriteJson} t */
function writeJsonHandle(t) {
   
    const {
    
    
    
    } = t;

    t.fragment = pathGet(t.fragment);
   
    return writeJsonComply(t);
   
};
/** @arg {fileTFWriteJson} t */
function writeJsonComply(t) {
   
    const {
        
        data,
        fragment,
    
    } = t;

    writeFileSync(fragment, JSON.stringify(data, null, 4));

    return fragment;
    
};

/**
 * ### fileWriteJson
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\file`
 * ***
 * 
 * Функция перезаписывания файла, полученного по указанному фрагменту указанными данными.
 * 
 * ***
 * @arg {G} data `Данные`
 * @arg {fileTTFragment} fragment `Фрагмент`
 * @returns {G}
 * @template G
 * 
 * - Дефолт `utf8`
*/
export function fileWriteJson(fragment, data) {

    return writeJsonDeceit({ fragment, data, });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/