import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** ### configNumber
 * 
 * Конфигуратор модуля `number`.
 * 
 * ***
 * @public
*/
export const configNumber = new YConfig({
    
    /**
     * ### defaultValue
     *
     * Дефолт значение.
     *
     * ***
     * @type {NaN?}
     * @public
    */
    defaultValue: NaN,
    /**
     * ### defaultHistory
     *
     * Дефолт история.
     *
     * ***
     * @type {number[]}
     * @public
    */
    defaultHistory: [],
    /**
     * ### defaultModeConstant
     *
     * Дефолт режим коснтанты.
     *
     * ***
     * @type {boolean}
     * @public
    */
    defaultModeConstant: false,
    
}, configY);

export default configNumber;

/**
 * @file number/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/