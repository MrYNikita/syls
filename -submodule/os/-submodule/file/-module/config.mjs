import { YConfig } from "@syls/y/config";
import { configOsject } from "../../osject/-module/config.mjs";

/** @type {configOsject['params']} */
const config = {
    
    
    
};

/** ### configFile
 * 
 * Конфигуратор модуля `file`.
 * 
 * ***
 * @public
*/
export const configFile = new YConfig(Object.assign(config, {
    
    /**
     * ### encodingDefault
     * 
     * ***
     * 
     * Дефолт кодировка.
     * 
     * *** 
     * @type {BufferEncoding?}
     * @public
     * @property
    */
    encodingDefault: 'utf8',
    
}), configOsject);

export default configFile;

/**
 * @file file/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/