import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";
import { YCursor } from "../-submodule/cursor/-module/class.mjs";

/** @type {configY} */
const config = {
    
    aliases: [

        ['length', 'values', 'length']

    ],
    
};

/** ### configArray
 * 
 * Конфигуратор модуля `array`.
 * 
 * ***
 * @public
*/
export const configArray = new YConfig(Object.assign(config, {
    
    /**
     * ### valuesDefault
     * 
     * ***
     * 
     * Дефолт значение.
     * 
     * *** 
     * @type {any[]}
     * @public
    */
    valuesDefault: [],
    /**
     * ### cursorsDefault
     * 
     * ***
     * 
     * Дефолт курсоры.
     * 
     * *** 
     * @type {any[]}
     * @public
    */
    cursorsDefault: [new YCursor()],
    
}), configY);

export default configArray;

/**
 * @file array/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/