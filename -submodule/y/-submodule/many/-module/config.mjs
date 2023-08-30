import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** @type {configY} */
const config = {
    
    aliases: [

        ['length', 'values', 'length']

    ],
    
};

/** ### configMany
 * 
 * Конфигуратор модуля `many`.
 * 
 * ***
 * @public
*/
export const configMany = new YConfig(Object.assign(config, {
    
    /**
     * ### valuesDefault
     *
     * Дефолт значения.
     *
     * ***
     * @type {any[]}
     * @public
    */
    valuesDefault: [],
    /**
     * ### cursorsDefault
     * 
     * ***
     * 
     * Дефолт курсоры.
     * 
     * *** 
     * @type {any[]}
     * @public
    */
    cursorsDefault: [],
    
}), configY);

export default configMany;

/**
 * @file many/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/