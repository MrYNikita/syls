import { YConfig } from "@syls/y/config";
import { configEntity } from "@syls/entity";

/** @type {configEntity} */
const config = {
    
    
    
};

/** ### configProcess
 * 
 * Конфигуратор модуля `process`.
 * 
 * ***
 * @public
*/
export const configProcess = new YConfig(Object.assign(config, {
    
    /**
     * ### pathDefault
     * 
     * ***
     * 
     * Дефолт путь.
     * 
     * *** 
     * @type {null}
     * @public
    */
    pathDefault: null,
    /**
     * ### labelDefault
     * 
     * ***
     * 
     * Дефолт метка.
     * 
     * *** 
     * @type {null}
     * @public
    */
    labelDefault: null,
    /**
     * ### processDefault
     * 
     * ***
     * 
     * Дефолт процесс.
     * 
     * *** 
     * @type {null}
     * @public
    */
    processDefault: null,
    
}), configEntity);

export default configProcess;

/**
 * @file process/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/