import { YConfig } from "@syls/y/config";
import configOS from "../../../-module/config.mjs";

/** @type {configOS['value']} */
const config = {
    
    
    
};

/** ### configPath
 * 
 * Конфигуратор модуля `path`.
 * 
 * ***
 * @public
*/
export const configPath = new YConfig(Object.assign(config, {
    
    /**
     * ### cacheMode
     * 
     * Общий режим кэширования.
     * 
     * В активном состоянии кэширует результаты, после чего переиспользует их для ускорения отклика программы.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    cacheMode: true,
    /**
     * ### defaultValue
     * 
     * Дефолт значение.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    valueDefault: '',
    /**
     * ### expandDefault
     * 
     * ***
     * 
     * Дефолт расширение.
     * 
     * *** 
     * @type {import("./module.mjs").pathT['expand']}
     * @public
     * @property
    */
    expandDefault: 'txt',
    
}), configOS);

export default configPath;

/**
 * @file path/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/