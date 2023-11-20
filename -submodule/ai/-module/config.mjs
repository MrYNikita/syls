import { YConfig } from "@syls/y/config";
import { configEntity } from "@syls/y/entity";

/** @type {configEntity['params']} */
const config = {
    
    
    
};

/** ### configAi
 * 
 * Конфигуратор модуля `ai`.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @public
*/
export const configAi = new YConfig({
    
    ...config,
    
    /**
     * ### layersDefault
     * 
     * Дефолт слои.
     * 
     * *** 
     * @since `1.0.0`
     * @type {any}
     * @public
     * @property
    */
    layersDefault: [],
    
}, configEntity);

export default configAi;

/**
 * @file ai/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/