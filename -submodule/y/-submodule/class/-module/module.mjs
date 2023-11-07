//#region YI

import { Y } from '../../../-module/class.mjs';
import { YCond } from '../../cond/-module/class.mjs';
import { YConfig } from '../../config/-module/class.mjs';
import { configClass as config } from './config.mjs';

//#endregion
//#region YT

/** ### classT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `class`.
 * 
 * @typedef classT
 * @prop {any} _
 * 
*/

//#endregion
//#region YV



//#endregion

/**
 * ### cast
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция приведения класса к Y.
 * 
 * ***
 * @typedef castT
 * @prop {{}} conf
 * @prop {typeof Y} to
 * @prop {typeof Object} cl
 * ***
 * @arg {castT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function cast(args) {
    
    let result;

    try {
       
        let {

            cl,
            to,
            conf,
    
        } = args;

        if (!cl) throw new Error();
        else if (!YCond.isFunc(cl)) throw new Error();
        
        if (!to) to = Y;
        if (!conf) conf = {};

        result = [to.setClass(cl), new YConfig(to.config, conf)];

        result[0].config = result[1];

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };
        
    } finally {
        
        
        
    };

    return result;
    
};

/**
 * ### classCast
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция приведения класса к Y.
 * 
 * ***
 * @arg {Y1} cl `Класс`
 * @arg {Y3} to `Приведение`
 * @arg {Y2} conf `Конфигуратор`
 * @returns {[Y3&Y1,YConfig<Y3['config'],Y2>]}
 * @function
 * @template Y1
 * @template Y2
 * @template {typeof Y} Y3
*/
export function classCast(cl, to = Y, conf) {

    return cast({ cl, to, conf, });

};

/**
 * @file class/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/