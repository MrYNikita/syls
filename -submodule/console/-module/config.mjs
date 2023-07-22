import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** @type {configY} */
const config = {
    
    
    
};

/** ### configConsole
 * 
 * Конфигуратор модуля `console`.
 * 
 * ***
 * @public
*/
export const configConsole = new YConfig(Object.assign(config, {
    
    /**
     * ### foreground
     * 
     * Цвет переднего плана.
     * 
     * *** 
     * @type {import("./class.mjs").consoleTTColor} 
     * @public
    */
    foreground: 'cyan',
    /**
     * ### background
     * 
     * Цвет заднего плана.
     * 
     * *** 
     * @type {import("./class.mjs").consoleTTColor} 
     * @public
    */
    background: 'blueDark',
    
}), configY);

export default configConsole;

/**
 * @file console/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/