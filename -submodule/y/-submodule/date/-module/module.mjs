//#region YI

import { YArg } from '@syls/y/arg';
import { YCond } from '@syls/y/cond';
import { configDate as config } from './config.mjs';

//#endregion
//#region YT

/** ### dateT
 * 
 * Типы модуля `date`.
 * 
 * @typedef dateT
 * @prop {Date} date
 * @prop {number} day
 * @prop {number} year
 * @prop {number} hour
 * @prop {number} month
 * @prop {number} second
 * @prop {number} minute
 * @prop {number} milisecond
 * 
*/

//#endregion
//#region YV



//#endregion

//#region get

/**
 * ### get
 * 
 * 
 * 
 * ***
 * @typedef getT
 * @prop {} _
 * ***
 * @arg {dateT&getT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function get(args) {

    let result;

    try {

        let {

            day = 1,
            hour = 0,
            year = config.params.yearDefault,
            month = 0,
            minute = 0,
            second = 0,
            milisecond = 0,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (year < 0) year *= -1;

        if (month >= 13) month = 12;
        else if (month < 1) month = 1;

        month--;

        const dayMax = new Date(year, month, 0).getDate();

        if (day >= dayMax + 1) day = dayMax;
        else if (day < 1) day = 1;

        if (hour >= 24) hour = 23;
        else if (hour < 0) hour = 0;

        if (second >= 60) second = 59;
        else if (second < 0) second = 0;

        if (minute >= 60) minute = 59;
        else if (minute < 0) minute = 0;

        if (milisecond >= 1000) milisecond = 999;
        else if (milisecond < 0) milisecond = 0;

        //#endregion
        //#region comply

        result = new Date(year, month, day, hour, minute, second, milisecond);

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### dateGet
 * 
 * Функция получения даты на основе указанных аргументов.
 * 
 * ***
 * @arg {dateT['day']} day `День`
 * @arg {dateT['hour']} hour `Час`
 * @arg {dateT['year']} year `Год`
 * @arg {dateT['month']} month `Месяц`
 * @arg {dateT['minute']} minute `Минута`
 * @arg {dateT['second']} second `Секунда`
 * @arg {dateT['milisecond']} milisecond `Милисукунда`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function dateGet(year, month, day, hour, minute, second, milisecond) {

    return get({ year, month, day, hour, minute, second, milisecond, });

};

//#endregion
//#region getMesuares

/**
 * ### getMesuares
 * 
 * 
 * 
 * ***
 * @typedef getMesuaresT
 * @prop {} _
 * ***
 * @arg {dateT&getMesuaresT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getMesuares(args) {

    let result;

    try {

        let {

            date,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = [

            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds(),

        ];

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### dateGetMesuares
 * 
 * Функция получения массива данных указанного момента времени.
 * 
 * ***
 * @arg {dateT['date']} date `Дата`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function dateGetMesuares(date = new Date()) {

    return getMesuares({ date, });

};

//#endregion
//#region drop

/**
 * ### drop
 * 
 * 
 * 
 * ***
 * @typedef dropT
 * @prop {} _
 * ***
 * @arg {dateT&dropT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function drop(args) {

    let result;

    try {

        let {

            day,
            hour,
            year,
            date,
            month,
            minute,
            second,
            milisecond,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const mesuares = dateGetMesuares(date);

        if (day) mesuares[2] = 1;
        if (hour) mesuares[3] = 0;
        if (year) mesuares[0] = config.params.yearDefault + 1;
        if (month) mesuares[1] = 0;
        if (minute) mesuares[4] = 0;
        if (second) mesuares[5] = 0;
        if (milisecond) mesuares[6] = 0;
        
        return new Date(...mesuares);

        //#endregion

    } catch (err) {

        if (config.params.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### dateDrop
 * 
 * Функция сброса указанных параметров приведенной даты.
 * 
 * ***
 * @arg {dateT['day']} day `День`
 * @arg {dateT['date']} date `Дата`
 * @arg {dateT['year']} year `Год`
 * @arg {dateT['hour']} hour `Час`
 * @arg {dateT['month']} month `Месяц`
 * @arg {dateT['second']} second `Секунда`
 * @arg {dateT['minute']} minute `Минута`
 * @arg {dateT['milisecond']} milisecond `Милисекунда`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function dateDrop(date, year, month, day, hour, minute, second, milisecond) {

    return drop({ date, year, month, day, hour, minute, second, milisecond, });

};

//#endregion
//#region flow

/**
 * ### flow
 * 
 * 
 * 
 * ***
 * @typedef flowT
 * @prop {} _
 * ***
 * @arg {dateT&flowT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function flow(args) {
    
    let result;
    
    try {
        
        let {
            
            day,
            hour,
            year,
            date,
            month,
            minute,
            second,
            milisecond,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        const mesuares = dateGetMesuares(date);

        if (day) mesuares[2] += day;
        if (year) mesuares[0] += year;
        if (hour) mesuares[3] += hour;
        if (month) mesuares[1] += month;
        if (minute) mesuares[4] += minute;
        if (second) mesuares[5] += second;
        if (milisecond) mesuares[6] += milisecond;

        result = new Date(...mesuares);
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### dateFlow
 * 
 * Функция течения времени.
 * Позволяет менять указанную дату на указанное отклонение в будущее или прошлое.
 * 
 * ***
 * @arg {dateT['day']} day `День`
 * @arg {dateT['date']} date `Дата`
 * @arg {dateT['year']} year `Год`
 * @arg {dateT['hour']} hour `Час`
 * @arg {dateT['month']} month `Месяц`
 * @arg {dateT['second']} second `Секунда`
 * @arg {dateT['minute']} minute `Минута`
 * @arg {dateT['milisecond']} milisecond `Милисекунда`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function dateFlow(date, year, month, day, hour, minute, second, milisecond) {

    return flow({ date, year, month, day, hour, minute, second, milisecond, });

};

//#endregion

/**
 * @file date/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/