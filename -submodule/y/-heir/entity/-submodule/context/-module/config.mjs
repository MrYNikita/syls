import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** ### configContext
 * 
 * Конфигуратор модуля `context`.
 * 
 * ***
 * @public
*/
export const configContext = new YConfig({
    
    /**
     * ### id
     * 
     * Идентификатор.
     * 
     * *** 
     * @type {null} 
     * @public
    */
    idDefault: null,
    /**
     * ### handlersDefault
     * 
     * Обработчики.
     * 
     * *** 
     * @type {import('../handler/class.mjs').YHandler[]} 
     * @public
    */
    handlersDefault: [],
    
}, configY);

export default configContext;

/**
 * @file context/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/