import { YConfig } from "@syls/y/config";
import configKit from "../../../-module/config.mjs";

/** @type {configKit['params']} */
const config = {
    
    
    
};

/** ### configLoop
 * 
 * Конфигуратор модуля `loop`.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @public
*/
export const configLoop = new YConfig({
    
    ...config,
    
    /**
     * ### indexDefault
     * 
     * Дефолт индекс.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @public
     * @property
    */
    indexDefault: 0,
    
}, configKit);

export default configLoop;

/**
 * @file loop/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/