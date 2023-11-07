import { YConfig } from "@syls/y/config";
import configOS from "../../../-module/config.mjs";

/** @type {configOS['params']} */
const config = {
    
    
    
};

/** ### configNet
 * 
 * Конфигуратор модуля `net`.
 * 
 * ***
 * @public
*/
export const configNet = new YConfig(Object.assign(config, {
    
    /**
     * ### wireless network
     * 
     * Имена беспроводных сетей.
     * 
     * *** 
     * @public
    */
    wirelessNames: {

        ru: 'Беспроводная сеть',

    },
        
}), configOS);

export default configNet;

/**
 * @file net/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/