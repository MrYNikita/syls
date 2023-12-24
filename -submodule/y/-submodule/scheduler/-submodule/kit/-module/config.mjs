import { YConfig } from "../../../../config/-module/class.mjs";
import configYE from "../../e/-module/config.mjs";

/** @type {configEvent['params']} */
const config = {
    
    
    
};

/** ### configKit
 * 
 * Конфигуратор модуля `kit`.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @public
*/
export const configKit = new YConfig({
    
    ...config,
    
    /**
     * ### casesDefault
     * 
     * Дефолт случаи.
     * 
     * *** 
     * @since `1.0.0`
     * @type {any[]}
     * @public
     * @property
    */
    casesDefault: [],
    
}, configYE);

export default configKit;

/**
 * @file kit/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/