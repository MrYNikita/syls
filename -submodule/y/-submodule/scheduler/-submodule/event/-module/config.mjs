import { YConfig } from "@syls/y/config";
import configY from "../../../../../-module/config.mjs";

/** @type {configY} */
const config = {
    
    
    
};

/** ### configEvent
 * 
 * Конфигуратор модуля `event`.
 * 
 * ***
 * @public
*/
export const configEvent = new YConfig(Object.assign(config, {
    
    /**
     * ### tactDefault
     * 
     * ***
     * 
     * Дефолт тактовая частота.
     * 
     * *** 
     * @type {number}
     * @public
     * @property
    */
    tactDefault: 1,
    /**
     * ### hoarderDefault
     * 
     * ***
     * 
     * Дефолт накопитель.
     * 
     * *** 
     * @type {number}
     * @public
     * @property
    */
    hoarderDefault: 0,
    
}), configY);

export default configEvent;

/**
 * @file event/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/