//#region YI

import { Y, yClassifyProp } from '@syls/y';
import { configCond as config } from './config.mjs';

//#endregion
//#region YT

/** ### YCondT
 * - Тип `T`
 * 
 * Основной параметр модуля `YCond`.
 * 
 * @typedef {YCondTE&YCondTU&Y} YCondT
 * 
*/
/** ### YCondTE
 * - Тип `TE`
 * 
 * Параметр наследования `YCond`.
 * 
 * @typedef {Omit<DCond, keyof SCond>} YCondTE
 * 
*/
/** ### YCondTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YCond`.
 * 
 * @typedef YCondTU
 * @prop {any} _
 * 
*/

//#endregion

class SCond extends Y {

    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YCond[]}
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
     * @arg {...YCond} args `Аргументы`
     * @returns {YCond[]}
    */
    static create(...args) {

        return Object.getPrototypeOf(SCond).create.apply(this, [...args]);

    };

    /**
     * ### isBool
     * - Версия `0.0.1`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод проверки значений на принадлежность к логическим значениям.
     *
     * ***
     * @arg {...any} values `Значения`
     * @public
    */
    static isBool(...values) {

        return condIsBool(...values);

    };
    /**
     * ### isFloat
     * - Версия `0.0.1`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод проверки значений на принадлежность к дробным числам.
     *
     * ***
     * @arg {...any} values `Значения`
     * @public
    */
    static isFloat(...values) {

        return condIsFloat(...values);

    };
    /**
     * ### isNumber
     * - Версия `0.0.1`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод проверки значений на принадлежнсоть к числу.
     *
     * ***
     * @arg {...any} values `Значения`
     * @public
    */
    static isNumber(...values) {

        return condIsNumber(...values);

    };
    /**
     * ### isString
     * - Версия `0.0.1`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод проверки значений на принадлежность к строкам.
     *
     * ***
     * @arg {...any} values `Значения`
     * @public
    */
    static isString(...values) {

        return condIsString(...values);

    };

};
class DCond extends SCond {



};
class ICond extends DCond {



};
class MCond extends ICond {



};
class FCond extends MCond {

    /**
     * ### YCond.constructor
     * 
     * 
     * 
     * ***
     * @arg {YCondT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FCond.#before(t), {}));

        FCond.#deceit.apply(this, [t]);

        return this.correlate();

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YCondT} */
        let r = {};

        if (t?.length === 1 && [Object, YCond].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

            return r;

        } else if (!t.length) {

            return r;

        };

        if (t[0]?._ytp) {

            t = [...t[0]._ytp];

        };

        const arg = yClassifyProp(t);



        if (!Object.values(r).length) {

            r = { _ytp: t, };

        };

        return r;

    };
    /** @arg {YCondT} t @this {YCond} */
    static #deceit(t) {

        try {

            FCond.#verify.apply(this, [t = { ...t }]);

        } catch (e) {

            if (config?.strictMode) {

                throw e;

            };

            return new YCond();

        } finally {



        };

    };
    /** @arg {YCondT} t @this {YCond} */
    static #verify(t) {

        const {



        } = t;

        FCond.#handle.apply(this, [t]);

    };
    /** @arg {YCondT} t @this {YCond} */
    static #handle(t) {



        FCond.#create.apply(this, [t]);

    };
    /** @arg {YCondT} t @this {YCond} */
    static #create(t) {

        const {



        } = t;

        this
            .adopt(t)
            .adoptDefault(this.constructor.config ?? config);

    };

};

/**
 * ### YCond
 * - Тип `SDIMFY`
 * - Версия `1.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YCond`.
 * 
 * ***
 * @class
 * 
*/
export class YCond extends FCond {

    /**
     * ### check
     * - Версия `0.0.0`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод выполнения проверки для указанных аргументов.
     *
     * ***
     * @arg {...any} transmits `Аргументы`
     * @public
    */
    check(...transmits) {

        if (this.condition(...transmits) && this.conds.every(cond => cond.check(...transmits))) {

            this.funcSucs && this.funcSucs() && this.conds.forEach(cond => cond.funcSucs());

            if (this.sucs) {

                return this.sucs;

            } else {

                return true;

            };

        } else {

            this.funcsFail && this.funcFail() && this.conds.forEach(cond => cond.funcFail());

            if (this.fail !== undefined) {

                return this.fail;

            } else {

                return false;

            };

        };

    };
    /**
     * ### combine
     * - Версия `0.0.0`
     * - Модуль `bool\cond`
     * ***
     *
     * Метод комбинирования условий.
     *
     * ***
     * @arg {...YCond} conds Условия.
     * @public
    */
    combine(...conds) {

        this.conds.push(...conds.filter(cond => !this.conds.includes(cond)));

        return this;

    };

};

/**
 * @file cond/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/