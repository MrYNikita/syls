import { YConfig } from "@syls/y/config";
import configEntity from "../../../-submodule/entity/-module/config.mjs";

/** @type {configEntity['params']} */
const config = {
    
    
    
};

/** ### configListener
 * 
 * Конфигуратор модуля `listener`.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @public
*/
export const configListener = new YConfig({
    
    ...config,
    
    /**
     * ### keysDefault
     * 
     * Дефолт клавиши.
     * 
     * *** 
     * @since `1.0.0`
     * @type {[]}
     * @public
     * @property
    */
    keysDefault: [],
    /**
     * ### combsDefault
     * 
     * Дефолт комбинации.
     * 
     * *** 
     * @since `1.0.0`
     * @type {[]}
     * @public
     * @property
    */
    combsDefault: [],
    
}, configEntity);

export default configListener;

/**
 * @file listener/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/