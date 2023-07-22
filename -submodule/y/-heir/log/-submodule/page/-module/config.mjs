import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** ### configPage
 * 
 * Конфигуратор модуля `page`.
 * 
 * ***
 * @public
*/
export const configPage = new YConfig({
    
    /**
     * ### size
     * 
     * Общий размер страниц.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    size: 20,

    /**
     * ### defaultSize
     * 
     * Дефолт размер страниц.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    sizeDefault: null,
    
}, configY);

export default configPage;

/**
 * @file page/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/