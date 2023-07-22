import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** ### configLog
 * 
 * Конфигуратор модуля `log`.
 * 
 * ***
 * @public
*/
export const configLog = new YConfig({
    
    /**
     * ### sizeDefault
     * 
     * Дефолт размер.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    sizeDefault: null,

    /**
     * ### tagsRequired
     * 
     * Постоянные теги.
     * 
     * *** 
     * @type {string[]} 
     * @public
    */
    tagsRequired: ['info/*', 'warning/!', 'error/×/10'],

    /**
     * ### limit
     * 
     * Общий лимит.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    limit: 3,
    /**
     * ### defaultLimit
     * 
     * Дефолт лимит.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    limitDefault: null,
    
}, configY);

export default configLog;

/**
 * @file log/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/