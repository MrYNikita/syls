import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** ### configRegexp
 * 
 * Конфигуратор модуля `regexp`.
 * 
 * ***
 * @public
*/
export const configRegexp = new YConfig({
    
    /**
     * ### flags
     * 
     * Флаги.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    flags: 'gimsuy',
    
}, configY);

export default configRegexp;

/**
 * @file regexp/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/