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
     * ### fixModeDefault
     * 
     * ***
     * 
     * Дефолт режим фиксации.
     * 
     * *** 
     * @type {null}
     * @public
    */
    fixModeDefault: null,
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
    historyMode: true,
    /**
     * ### historyDefault
     * 
     * ***
     * 
     * Дефолт история перемещений.
     * 
     * *** 
     * @type {null}
     * @public
    */
    historyDefault: null,
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