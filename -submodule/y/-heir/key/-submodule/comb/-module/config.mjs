import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** ### configComb
 * 
 * Конфигуратор модуля `comb`.
 * 
 * ***
 * @public
*/
export const configComb = new YConfig({
    
    /**
     * ### labelDefault
     * 
     * Дефолт метка.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    labelDefault: null,
    /**
     * ### interruptDefault
     * 
     * Дефолт прерывание.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    interruptDefault: false,
    
}, configY);

export default configComb;

/**
 * @file comb/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/