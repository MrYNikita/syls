import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** @type {configY['params']} */
const config = {
    
    
    
};

/** ### configTest
 * 
 * Конфигуратор модуля `test`.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @public
*/
export const configTest = new YConfig({

    ...config,

    /**
     * ### nameDefault
     * 
     * Дефолт имя.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @public
     * @property
    */
    nameDefault: 'Mopa',

}, configY);

export default configTest;

/**
 * @file test/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/