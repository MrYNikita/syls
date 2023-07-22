import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** ### configCond
 * 
 * Конфигуратор модуля `cond`.
 * 
 * ***
 * @public
*/
export const configCond = new YConfig({
    
    /**
     * ### defaultSucs
     *
     * Дефолт значение успеха.
     *
     * ***
     * @type {boolean}
     * @public
    */
    defaultSucs: true,
    /**
     * ### defaultFail
     *
     * Дефолт значение провала.
     *
     * ***
     * @type {boolean}
     * @public
    */
    defaultFail: false,
    /**
     * ### defaultConditions
     *
     * Дефолт условия.
     *
     * ***
     * @type {function(...):boolean}
     * @public
    */
    defaultCondition: _ => false,
    
}, configY);

export default configCond;

/**
 * @file cond/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/