import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** @type {configY} */
const config = {
    
    
    
};

/** ### configCursor
 * 
 * Конфигуратор модуля `cursor`.
 * 
 * ***
 * @public
*/
export const configCursor = new YConfig(Object.assign(config, {
    
    /**
     * ### fixMode
     * 
     * ***
     * 
     * Общий режим фиксации.
     * 
     * *** 
     * @type {boolean}
     * @public
    */
    fixMode: false,
    /**
     * ### transitiveMode
     * 
     * ***
     * 
     * Режим переходов.
     * 
     * *** 
     * @type {boolean}
     * @public
    */
    transitiveMode: true,
    /**
     * ### limitMode
     * 
     * ***
     * 
     * Общий режим лимитирования.
     * 
     * *** 
     * @type {boolean}
     * @public
    */
    limitMode: true,
    /**
     * ### historyMode
     * 
     * ***
     * 
     * Режим истории перемещений.
     * 
     * *** 
     * @type {boolean}
     * @public
    */
    historyMode: false,
    /**
     * ### positionDefault
     * 
     * ***
     * 
     * Дефолт позиция.
     * 
     * *** 
     * @type {number[]}
     * @public
    */
    positionDefault: [],
    
}), configY);

export default configCursor;

/**
 * @file cursor/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/