import { configEntity } from "../../entity/-module/export.mjs";
import { YConfig } from "../../config/-module/export.mjs";

/** @type {configEntity} */
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
    
}), configEntity);

export default configMany;

/**
 * @file many/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/