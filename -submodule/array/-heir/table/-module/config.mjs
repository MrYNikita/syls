import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** @type {configY['params']} */
const config = {
    
    
    
};

/** ### configTable
 * 
 * Конфигуратор модуля `table`.
 * 
 * ***
 * @public
*/
export const configTable = new YConfig({
    
    ...config,
    
    /**
     * ### titlesDefault
     * 
     * Дефолт заголовки.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string[]}
     * @public
     * @property
    */
    titlesDefault: [],
    /**
     * ### dataDefault
     * 
     * Дефолт данные.
     * 
     * *** 
     * @since `1.0.0`
     * @type {any[]}
     * @public
     * @property
    */
    dataDefault: [],
    /**
     * ### valueDefault
     * 
     * Дефолт значение.
     * 
     * *** 
     * @since `1.0.0`
     * @type {any[]}
     * @public
     * @property
    */
    valueDefault: [],
    
}, configY);

export default configTable;

/**
 * @file table/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/