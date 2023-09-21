import { YConfig } from "@syls/y/config";
import { configEntity } from "@syls/y/entity";

/** @type {configEntity} */
const config = {
    
    
    
};

/** ### configNumber
 * 
 * Конфигуратор модуля `number`.
 * 
 * ***
 * @public
*/
export const configNumber = new YConfig(Object.assign(config, {
    
    /**
     * ### valueDefault
     * 
     * ***
     * 
     * Дефолт значение.
     * 
     * *** 
     * @type {number}
     * @public
     * @property
    */
    valueDefault: 0,
    /**
     * ### historyDefault
     * 
     * ***
     * 
     * Дефолт история.
     * 
     * *** 
     * @type {number[]}
     * @public
     * @property
    */
    historyDefault: [],
    
}), configEntity);

export default configNumber;

/**
 * @file number/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/