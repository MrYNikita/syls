import { YConfig } from "../../../../config/-module/export.mjs";
import configY from "../../../../../-module/config.mjs";

/** @type {configY['params']} */
const config = {
    
    
    
};

/** ### configE
 * 
 * Конфигуратор модуля `e`.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @public
*/
export const configE = new YConfig({
    
    ...config,
    
    /**
     * ### tactDefault
     * 
     * Дефолт тактовая частота.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @public
     * @property
    */
    tactDefault: 1,
    /**
     * ### hoarderDefault
     * 
     * Дефолт накопитель.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @public
     * @property
    */
    hoarderDefault: 0,
    
}, configY);

export default configE;

/**
 * @file e/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/