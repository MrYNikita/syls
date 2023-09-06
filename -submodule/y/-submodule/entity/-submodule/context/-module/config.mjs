import { YConfig } from "@syls/y/config";
import configY from "../../../../../-module/config.mjs";

/** @type {configY} */
const config = {
    
    
    
};

/** ### configContext
 * 
 * Конфигуратор модуля `context`.
 * 
 * ***
 * @public
*/
export const configContext = new YConfig(Object.assign(config, {
    
    /**
     * ### handlersDefault
     * 
     * ***
     * 
     * Дефолт обработчики.
     * 
     * *** 
     * @type {any[]}
     * @public
     * @property
    */
    handlersDefault: [],
    
}), configY);

export default configContext;

/**
 * @file context/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/