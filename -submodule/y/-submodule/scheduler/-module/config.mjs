import { YConfig } from "../../config/-module/class.mjs";
import configEntity from "../../entity/-module/config.mjs";

/** @type {configEntity} */
const config = {
    
    
    
};

/** ### configScheduler
 * 
 * Конфигуратор модуля `scheduler`.
 * 
 * ***
 * @public
*/
export const configScheduler = new YConfig(Object.assign(config, {
    
    /**
     * ### eventsDefault
     * 
     * ***
     * 
     * Дефолт события.
     * 
     * *** 
     * @type {any[]}
     * @public
     * @property
    */
    eventsDefault: [],
    /**
     * ### eventsDisabledDefault
     * 
     * Дефолт отключенные события.
     * 
     * *** 
     * @since `1.0.0`
     * @type {any[]}
     * @public
     * @property
    */
    eventsDisabledDefault: [],
    /**
     * ### frequencyDefault
     * 
     * ***
     * 
     * Дефолт частота.
     * 
     * *** 
     * @type {number}
     * @public
     * @property
    */
    frequencyDefault: 41,
    
}), configEntity);

export default configScheduler;

/**
 * @file scheduler/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/