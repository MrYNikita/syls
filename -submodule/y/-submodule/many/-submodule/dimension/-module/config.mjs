import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** @type {configY} */
const config = {
    
    
    
};

/** ### configDimension
 * 
 * Конфигуратор модуля `dimension`.
 * 
 * ***
 * @public
*/
export const configDimension = new YConfig(Object.assign(config, {
    
    /**
     * ### sizeDefault
     * 
     * ***
     * 
     * Дефолт размер.
     * 
     * *** 
     * @type {number}
     * @public
     * @property
    */
    sizeDefault: null,
    /**
     * ### prevDefault
     * 
     * ***
     * 
     * Дефолт предыдущее значение. 
     * 
     * *** 
     * @type {any}
     * @public
     * @property
    */
    prevDefault: null,
    
}), configY);

export default configDimension;

/**
 * @file dimension/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/