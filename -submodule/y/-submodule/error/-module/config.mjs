import { YConfig } from "@syls/y/config";
import configY from "../../../-module/config.mjs";

/** @type {configY} */
const config = {
    
    moduleId: 1,
    
};

/** ### configError
 * 
 * Конфигуратор модуля `error`.
 * 
 * ***
 * @public
*/
export const configError = new YConfig(Object.assign(config, {
    
    /**
     * ### typeDefault
     * 
     * ***
     * 
     * Дефолт тип.
     * 
     * *** 
     * @type {string}
     * @public
    */
    typeDefault: 'x',
    
}), configY);

export default configError;

/**
 * @file error/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/