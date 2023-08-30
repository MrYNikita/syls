import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** @type {configY} */
const config = {
    
    
    
};

/** ### configStat
 * 
 * Конфигуратор модуля `stat`.
 * 
 * ***
 * @public
*/
export const configStat = new YConfig(Object.assign(config, {
    
    /**
     * ### frequencyDefault
     * 
     * ***
     * 
     * Дефолт частота.
     * 
     * *** 
     * @type {[]}
     * @public
     * @property
    */
    frequencyDefault: [],
    
}), configY);

export default configStat;

/**
 * @file stat/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/