import { configProcess } from "@syls/process";
import { YConfig } from "@syls/y/config";

/** @type {configProcess['params']} */
const config = {
    
    
    
};

/** ### configServer
 * 
 * Конфигуратор модуля `server`.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @public
*/
export const configServer = new YConfig({
    
    ...config,
    
    /**
     * ### socketsDefault
     * 
     * Дефолт сокеты.
     * 
     * *** 
     * @since `1.0.0`
     * @type {any[]}
     * @public
     * @property
    */
    socketsDefault: [],
    
    
}, configProcess);

export default configServer;

/**
 * @file server/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/