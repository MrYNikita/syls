import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** ### configTag
 * 
 * Конфигуратор модуля `tag`.
 * 
 * ***
 * @public
*/
export const configTag = new YConfig({
    
    /**
     * ### nameDefault
     * 
     * Дефолт наименование.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    nameDefault: '',

    /**
     * ### limit
     * 
     * Общий предел записей.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    limit: Infinity,
    /**
     * ### limitDefault
     * 
     * Дефолт предел записей.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    limitDefault: null,

    /**
     * ### symbolDefault
     * 
     * Дефолт символ.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    symbolDefault: '',
    
}, configY);

export default configTag;

/**
 * @file tag/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/