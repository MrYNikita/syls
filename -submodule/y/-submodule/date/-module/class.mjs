//#region YI

import { Y } from "../../../-module/class.mjs";
import { YArg } from "../../arg/-module/export.mjs";
import { configDate as config } from "./config.mjs";
import { dateDrop, dateFlow, dateGet, dateGetMesuares } from "./module.mjs";

//#endregion
//#region YT

/** ### dateTC
 * @typedef dateTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').dateT&dateTC} dateT */

//#endregion

/**
 * ### YDate
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YDate extends Y {

    //#region static

    static {

        this

            .appendModule(this)

    };

    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YDate[]}
     * @field
     * @static
     * @public
    */
    static stock = [];
    /**
     * ### config
     * 
     * 
     * 
     * ***
     * @field
     * @static
     * @public
    */
    static config = config;

    /**
     * @arg {...YDate} args `Аргументы`
     * @returns {YDate[]}
    */
    static create(...args) {

        return super.create(...args);

    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YDate)?}
     * @template {YDate} Y1
    */
    static setClass(value) {

        return super.setClass(value);

    };

    //#endregion
    //#region field

    /**
     * ### value
     * 
     * Значение.
     * 
     * *** 
     * @since `1.0.0`
     * @type {Date}
     * @field
     * @protected
    */
    value;
    /**
     * ### valueDrop
     * 
     * Значение сброса.
     * 
     * *** 
     * @since `1.0.0`
     * @type {Date}
     * @field
     * @protected
    */
    valueDrop;

    //#endregion
    //#region method

    /**
     * @method
     * @public
     * @override
    */
    getClass() {

        return YDate;

    };

    /**
     * ### get
     * 
     * Метод получения текущего значения даты.
     * 
     * ***
     * 
     * 
     * @returns {Date|null}
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    get() {
        
        return this.value ?? null;
        
    };
    /**
     * ### getDay
     * 
     * Метод получения дня.
     * 
     * ***
     * 
     * 
     * @returns {number|null}
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getDay() {
        
        return this.value?.getDate?.() ?? null;
        
    };
    /**
     * ### getHour
     * 
     * Метод получения часа.
     * 
     * ***
     * 
     * 
     * @returns {number|null}
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getHour() {
        
        return this.value?.getHours?.() ?? null;
        
    };
    /**
     * ### getYear
     * 
     * Метод получения года.
     * 
     * ***
     * 
     * 
     * @returns {number|null}
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getYear() {
        
        return this.value?.getFullYear?.() ?? null;
        
    };
    /**
     * ### getMonth
     * 
     * Метод получения месяца.
     * 
     * ***
     * 
     * 
     * @returns {number|null}
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getMonth() {
        
        return (this.value?.getMonth?.() + 1) ?? null;
        
    };
    /**
     * ### getMinute
     * 
     * Метод получения минуты.
     * 
     * ***
     * 
     * 
     * @returns {number|null}
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getMinute() {
        
        return this.value?.getMinutes?.() ?? null;
        
    };
    /**
     * ### getSecond
     * 
     * Метод получения секунды.
     * 
     * ***
     * 
     * 
     * @returns {number|null}
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getSecond() {
        
        return this.value?.getSeconds?.() ?? null;
        
    };
    /**
     * ### getMilisecond
     * 
     * Метод получения милисекунды.
     * 
     * ***
     * 
     * 
     * @returns {number|null}
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getMilisecond() {
        
        return this.value?.getMilliseconds?.() ?? null;
        
    };
    /**
     * ### getMesuares
     * 
     * Метод получения велечин текущей даты от большей к меньшей.
     * 
     * ***
     * 
     * 
     * @returns {number[]|null}
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getMesuares() {
        
        return dateGetMesuares(this.value) ?? null;
        
    };
    /**
     * ### set
     * 
     * Метод установки значения даты.
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
     * @method
     * @public
    */
    set(year, month, day, hour, minute, second, milisecond) {
        
        this.value = dateGet(year, month, day, hour, minute, second, milisecond);

        return this;
        
    };
    /**
     * ### setDay
     * 
     * Метод установки дня.
     * 
     * ***
     * @arg {dateT['day']} day `День`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setDay(day) {
        
        const mesuares = dateGetMesuares(this.value);

        mesuares[2] = day;

        this.value = dateGet(...mesuares);

        return this;
        
    };
    /**
     * ### setHour
     * 
     * Метод установки часа.
     * 
     * ***
     * @arg {dateT['hour']} hour `Час`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setHour(hour) {
        
        const mesuares = dateGetMesuares(this.value);

        mesuares[3] = hour;

        this.value = dateGet(...mesuares);

        return this;
        
    };
    /**
     * ### setYear
     * 
     * Метод установки года.
     * 
     * ***
     * @arg {dateT['year']} year `Год`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setYear(year) {
        
        const mesuares = dateGetMesuares(this.value);

        mesuares[0] = year;

        this.value = dateGet(...mesuares);

        return this;
        
    };
    /**
     * ### setMonth
     * 
     * Метод установки месяца.
     * 
     * ***
     * @arg {dateT['month']} month `Месяц`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setMonth(month) {
        
        const mesuares = dateGetMesuares(this.value);

        mesuares[1] = month;

        this.value = dateGet(...mesuares);

        return this;
        
    };
    /**
     * ### setMinute
     * 
     * Метод установки минуты.
     * 
     * ***
     * @arg {dateT['minute']} minute `Минута`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setMinute(minute) {
        
        const mesuares = dateGetMesuares(this.value);

        mesuares[4] = minute;

        this.value = dateGet(...mesuares);

        return this;
        
    };
    /**
     * ### setSecond
     * 
     * Метод установки секунды.
     * 
     * ***
     * @arg {dateT['second']} second `Секунда`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setSecond(second) {
        
        const mesuares = dateGetMesuares(this.value);

        mesuares[5] = second;

        this.value = dateGet(...mesuares);

        return this;
        
    };
    /**
     * ### setMilisecond
     * 
     * Метод установки милисекунд.
     * 
     * ***
     * @arg {dateT['milisecond']} milisecond `Милисекунды`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setMilisecond(milisecond) {
        
        const mesuares = dateGetMesuares(this.value);

        mesuares[6] = milisecond;

        this.value = dateGet(...mesuares);

        return this;
        
    };
    /**
     * ### drop
     * 
     * Метод сброса указанных параметров даты.
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
     * @method
     * @public
    */
    drop(year, month, day, hour, minute, second, milisecond) {

        return dateDrop(this.value, year, month, day, hour, minute, second, milisecond);

    };
    /**
     * ### flow
     * 
     * Метод течения времени.
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
     * @method
     * @public
    */
    flow(year, month, day, hour, minute, second, milisecond) {
        
        this.value = dateFlow(this.value, year, month, day, hour, minute, second, milisecond);

        return this;
        
    };
    /**
     * ### flowDay
     * 
     * Метод течения времени по дням.
     * 
     * ***
     * @arg {dateT['day']} day `День`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    flowDay(day) {
        
        const mesuares = new Array(7).fill(0);

        mesuares[2] += day;

        this.value = dateFlow(this.value, ...mesuares);

        return this;
        
    };
    /**
     * ### flowHour
     * 
     * Метод течения времени по часам.
     * 
     * ***
     * @arg {dateT['hour']} hour `Час`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    flowHour(hour) {
        
        const mesuares = new Array(7).fill(0);

        mesuares[3] += hour;

        this.value = dateFlow(this.value, ...mesuares);

        return this;
        
    };
    /**
     * ### flowYear
     * 
     * Метод течения времени по годам.
     * 
     * ***
     * @arg {dateT['year']} year `Год`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    flowYear(year) {
        
        const mesuares = new Array(7).fill(0);

        mesuares[0] += year;

        this.value = dateFlow(this.value, ...mesuares);

        return this;
        
    };
    /**
     * ### flowMonth
     * 
     * Метод течения времени по месяцам.
     * 
     * ***
     * @arg {dateT['month']} month `Месяц`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    flowMonth(month) {
        
        const mesuares = new Array(7).fill(0);

        mesuares[1] += month;

        this.value = dateFlow(this.value, ...mesuares);

        return this;
        
    };
    /**
     * ### flowMinute
     * 
     * Метод течения времени по минутам.
     * 
     * ***
     * @arg {dateT['minute']} minute `Минуты`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    flowMinute(minute) {
        
        const mesuares = new Array(7).fill(0);

        mesuares[4] += minute;

        this.value = dateFlow(this.value, ...mesuares);

        return this;
        
    };
    /**
     * ### flowSecond
     * 
     * Метод течения времени по секундам.
     * 
     * ***
     * @arg {dateT['second']} second `Секунды`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    flowSecond(second) {
        
        const mesuares = new Array(7).fill(0);

        mesuares[5] += second;

        this.value = dateFlow(this.value, ...mesuares);

        return this;
        
    };
    /**
     * ### flowMilisecond
     * 
     * Метод течения времени по секундам.
     * 
     * ***
     * @arg {dateT['milisecond']} milisecond `Милисекунды`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    flowMilisecond(milisecond) {
        
        const mesuares = new Array(7).fill(0);

        mesuares[6] += milisecond;

        this.value = dateFlow(this.value, ...mesuares);

        return this;
        
    };

    //#endregion

    /**
     * ### YDateConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {dateTC} args `Аргументы`
     * 
     * Представлены единым объектом носителем аргументов.
     * 
     * ***
     * @since `1.0.0`
     * @public
     * @version `1.0.0`
     * @constructor
    */
    constructor(...args) {

        try {

            //#region before

            /** @type {YArg<YDate>} */
            const yarg = args instanceof YArg ? args : new YArg(args);

            yarg.set(

                ['value', 'date'],
                ['valueDrop', 'date'],

            )

            super(yarg);

            //#endregion
            //#region verify



            //#endregion
            //#region handle

            if (!yarg.used.value) {

                yarg.used.value = new Date();

            };
            if (!yarg.used.valueDrop) {

                yarg.used.valueDrop = yarg.used.value;

            };

            //#endregion
            //#region comply



            //#endregion

            return this

                .adopt(yarg.used)


        } catch (err) {

            if (config.params.strictMode) {

                throw err;

            };

        } finally {



        };

    };

};

/**
 * @file date/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/