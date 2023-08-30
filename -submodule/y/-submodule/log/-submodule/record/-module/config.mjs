import { configY } from '@syls/y';
import { YConfig } from "@syls/y/config";

/** ### configRecord
 * 
 * Конфигуратор модуля `record`.
 * 
 * ***
 * @public
*/
export const configRecord = new YConfig({
    
    /**
     * ### dateMode
     * 
     * Общий режим датирования.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    dateMode: true,
    /**
     * ### defaultDate
     * 
     * Дефолт дата.
     * 
     * *** 
     * @type {Date?} 
     * @public
    */
    dateDefault: null,

    /**
     * ### defaultTags
     * 
     * Дефолт теги.
     * 
     * *** 
     * @type {string[]} 
     * @public
    */
    defaultTags: [],
    
}, configY);

export default configRecord;

/**
 * @file record/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/