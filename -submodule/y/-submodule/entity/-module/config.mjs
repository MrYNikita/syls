import { YConfig } from "../../config/-module/class.mjs";
import { configY } from "../../../-module/config.mjs";
import { YContext } from "../-submodule/context/-module/class.mjs";

/** @type {configY} */
const config = {
    
    
    
};

/** ### configEntity
 * 
 * Конфигуратор модуля `entity`.
 * 
 * ***
 * @public
*/
export const configEntity = new YConfig(Object.assign(config, {
    
    /**
     * ### _yDefault
     * 
     * ***
     * 
     * 
     * 
     * *** 
     * @type {any}
     * @public
     * @property
    */
    _yDefault: new YContext(),
    
}), configY);

export default configEntity;

/**
 * @file entity/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/