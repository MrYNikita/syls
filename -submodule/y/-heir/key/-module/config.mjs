import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** ### configKey
 * 
 * Конфигуратор модуля `key`.
 * 
 * ***
 * @public
*/
export const configKey = new YConfig({

    /**
     * ### nameDefault
     * 
     * Дефолт наименование.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    nameDefault: '',
    /**
     * ### codeDefault
     * 
     * Дефолт код.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    codeDefault: '',

}, configY);

export default configKey;

/**
 * @file key/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/