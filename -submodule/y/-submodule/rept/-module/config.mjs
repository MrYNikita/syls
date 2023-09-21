import { YConfig } from "../../config/-module/export.mjs";
import configY from "../../../-module/config.mjs";

/** @type {configY} */
const config = {
    
    
    
};

/** ### configRept
 * 
 * Конфигуратор модуля `rept`.
 * 
 * ***
 * @public
*/
export const configRept = new YConfig(Object.assign(config, {
    
    /**
     * ### blocksDefault
     * 
     * ***
     * 
     * Дефолт блоки.
     * 
     * *** 
     * @type {any[]}
     * @public
     * @property
    */
    blocksDefault: [],
    /**
     * ### iterateDefault
     * 
     * ***
     * 
     * Дефолт итерация.
     * 
     * *** 
     * @type {number}
     * @public
     * @property
    */
    iterateDefault: 0,
    
}), configY);

export default configRept;

/**
 * @file rept/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/