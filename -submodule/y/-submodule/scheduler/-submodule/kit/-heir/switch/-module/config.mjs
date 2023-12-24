import { YConfig } from "@syls/y/config";
import configY from "../../../../../-module/config.mjs";

/** @type {configY['params']} */
const config = {
    
    
    
};

/** ### configSwitch
 * 
 * Конфигуратор модуля `switch`.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @public
*/
export const configSwitch = new YConfig({
    
    ...config,
    
    /**
     * ### casesActivatePostDefault
     * 
     * Дефолт случаи пост-активации.
     * 
     * *** 
     * @since `1.0.0`
     * @type {any[]}
     * @public
     * @property
    */
    casesActivatePostDefault: [],
    /**
     * ### casesDeactivatePostDefault
     * 
     * Дефолт случаи пост-деактивации.
     * 
     * *** 
     * @since `1.0.0`
     * @type {any[]}
     * @field
     * @public
    */
    casesDeactivatePostDefault: [],
    
}, configY);

export default configSwitch;

/**
 * @file switch/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/