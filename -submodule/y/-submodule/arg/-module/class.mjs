//#region YI

import { Y } from "../../../-module/class.mjs";
import { configArg as config } from "./config.mjs";
import { condIsArray, condIsBigInt, condIsBool, condIsInstance, condIsJect, condIsNumber, condIsSigSoft, condIsSimilar, condIsString } from "../../cond/-module/module.mjs";

//#endregion
//#region YT

/** ### argTC
 * @typedef argTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').argT&argTC} argT */

//#endregion

/**
 * ### YArg
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * @template Y1
 * 
*/
export class YArg extends Y {

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
     * @type {YArg[]}
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
     * @arg {...YArg} args `Аргументы`
     * @returns {YArg[]}
    */
    static create(...args) {

        return super.create(...args);

    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YArg)?}
     * @template {YArg} Y1
     * @override
    */
    static setClass(value) {

        return super.setClass(value);

    };

    //#endregion
    //#region field

    /**
     * ### used
     * 
     * Используемые данные.
     * 
     * *** 
     * @type {Y1}
     * @since `1.0.0`
     * @field
     * @public
    */
    used = {};
    /**
     * ### free
     * 
     * Свободные данные.
     * 
     * *** 
     * @since `1.0.0`
     * @type {argT['free']}
     * @field
     * @public
    */
    free;

    //#endregion
    //#region method

    /**
     * ### getData
     * 
     * Метод получения данных.
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getData() {
        
        return this.used;
        
    };
    /**
     * @method
     * @public
     * @returns {YArg}
     * @override
    */
    getClass() {

        return YArg;

    };
    
    /**
     * ### set
     * 
     * Метод установки значения по указанному индексу, как используемых.
     * 
     * ***
     * @arg {...[keyof Y1, number, ...argT['prop'][]]} values `Значения`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    set(...values) {

        for (const value of values) {
            
            if (!condIsArray(value)) continue;

            for (const section of value.slice(2)) {

                if (!this.free?.[section]?.length) continue;

                this.used[value[0]] = this.extract(section, value[1]);

                break;

            };

            if (!this.used[value[0]]) this.used[value[0]] = null;

        };

        return this;

    };
    /**
     * ### setAll
     * 
     * Метод установки всех значений 
     * 
     * ***
     * @arg {...[keyof Y1, ...argT['prop'][]]} values `Значения`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setAll(...values) {
        
        for (const value of values) {

            if (!condIsArray(value)) continue;

            if (!this.used[value[0]]) {

                this.used[value[0]] = [];

            } else if (!condIsArray(this.used[value[0]])) {

                this.used[value[0]] = [this.used[value[0]]];

            };

            for (const section of value.slice(1)) this.used[value[0]].push(...this.extractAll(section));
            
        };

        return this;
        
    };
    /**
     * ### setLast
     * 
     * Метод установки значениий, как используемых, среди последних элементов секций.
     * 
     * ***
     * @arg {...[keyof Y1, ...argT['prop'][]]} values `Значения`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setLast(...values) {

        this.set(...values.filter(value => {

            if (!condIsArray(value)) return false;

            value.splice(1, 0, 0);

            return true;

        }));

        return this;

    };
    /**
     * ### setFirst
     * 
     * Метод установки значениий, как используемых, среди первых элементов секций.
     * 
     * ***
     * @arg {...[keyof Y1, ...argT['prop'][]]} values `Значения`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setFirst(...values) {

        this.set(...values.filter(value => {

            if (!condIsArray(value)) return false;

            value.splice(1, 0, -1);

            return true;

        }));

        return this;

    };
    /**
     * ### setValue
     * 
     * Метод установки точного значения в используемый пул.
     * 
     * ***
     * @arg {...[keyof Y1, any]} values `Значения`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setValue(...values) {
        
        for (const value of values) {

            if (!condIsArray(value)) continue;

            this.used[value[0]] = value[1];

        };

        return this;
        
    };
    /**
     * ### clear
     * 
     * Метод очитски пулов свободных и используемых данных.
     * 
     * ***
     * @arg {boolean} freeClear `Очистка свободных данных`
     * @arg {boolean} usedClear `Очистка используемых данных`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    clear(freeClear = true, usedClear) {
        
        if (usedClear) this.used = {};
        if (freeClear) this.free = {};

        return this;
        
    };
    /**
     * ### append
     * 
     * Метод добавления данных в пул свободных значений.
     * 
     * Алгоритм добавления игнорирует значения `null` и `undefined`, так как `null` в библиотеке предустанавливается по дефолту, а `undefined` исключено.
     * 
     * ***
     * @arg {...any} args `Данные`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    append(...args) {

        args = args.reverse();

        for (let arg of args) {

            let type = '', flagArray = condIsArray(arg);

            if (arg === null || arg === undefined) {

                continue;

            } else if (flagArray && !condIsSimilar(...arg)) {

                type = 'array';

                flagArray = false;

            } else if (condIsBool(arg) || (flagArray && condIsBool(...arg))) {

                type = 'bool';

            } else if (condIsNumber(arg) || (flagArray && condIsNumber(...arg))) {

                type = 'number';

            } else if (condIsString(arg) || (flagArray && condIsString(...arg))) {

                type = 'string';

            } else if (condIsBigInt(arg) || (flagArray && condIsBigInt(...arg))) {

                type = 'bigint';

            } else if (condIsInstance(Date, arg) || (flagArray && condIsInstance(Date, ...arg))) {

                type = 'date';

            } else if (condIsInstance(RegExp, arg) || (flagArray && condIsInstance(RegExp, ...arg))) {

                type = 'regexp';

            } else if (condIsInstance(Map, arg) || (flagArray && condIsInstance(Map, ...arg))) {

                type = 'map';

            } else if (condIsInstance(Set, arg) || (flagArray && condIsInstance(Set, ...arg))) {

                type = 'set';

            } else if (condIsJect(arg) || (flagArray && condIsJect(...arg))) {

                type = 'ject';

            };

            if (flagArray) type = 'array' + type[0].toUpperCase() + type.slice(1);

            if (!(type in this.free) || !this.free[type]) this.free[type] = [];

            this.free[type].push(arg);

        };

        return this;

    };
    /**
     * ### uncover
     * 
     * Метод развёртки.
     * 
     * Берёт единственный аргумент в пуле свободных данных и проверяет его на принадлежность к объектам.
     * Свойства такого объекта будут перемещены в пул свободных данных.
     * 
     * Если же данных в свободном пуле будет больше, то в таком случае разложение произойдет только при нахождении помеченного как `uncover` объекта.
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    uncover() {

        const index = this.free?.ject?.findIndex?.(ject => ject.isArgs === true);

        if (!condIsSigSoft(index) || index === -1) return this;

        const ject = this.free.ject.splice(index, 1)[0];

        ject.isArgs = null;

        const values = Object.values(ject);

        if (!this.free.ject.length) this.free.ject = null;

        this.append(...values);

        return this;

    };
    /**
     * ### extract
     * 
     * Метод извлечения значения из пула свободных значений указанной секции по заданному индексу.
     * 
     * ***
     * @arg {Y1} section `Секция`
     * @arg {argT['index']} index `Индекс`
     * @returns {this['free'][section][0]}
     * @template {argT['prop']} Y1
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    extract(section, index) {

        if (!this.free?.[section]?.length) return null;

        const result = this.free[section].splice(index, 1)[0];

        if (!this.free[section].length) this.free[section] = null;

        return result;

    };
    /**
     * ### extractAll
     * 
     * Метод извлечения всех значений из пула свободных значений указанной секции.
     * 
     * ***
     * @arg {Y1} section `Секция`
     * @returns {argT['free'][section]}
     * @template {argT['prop']} Y1
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    extractAll(section) {

        const result = this.free?.[section]?.splice?.(0) ?? [];

        if (this.free?.[section]) this.free[section] = null;

        return result;

    };
    /**
     * ### extractLast
     * 
     * Метод извлечения последнего значения из пула свободных значений указанной секции.
     * 
     * ***
     * @arg {Y1} section `Секция`
     * @template {argT['prop']} Y1
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    extractLast(section) {

        return this.extract(section, -1)

    };
    /**
     * ### extractFirst
     * 
     * Метод извлечения первого значения из пула свободных значений указанной секции.
     * 
     * ***
     * @arg {Y1} section `Секция`
     * @template {argT['prop']} Y1
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    extractFirst(section) {

        return this.extract(section, 0);

    };

    //#endregion

    /**
     * ### YArgConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {argTC&Y1} args `Аргументы`
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

            super();

            //#endregion
            //#region verify



            //#endregion
            //#region handle



            //#endregion
            //#region comply



            //#endregion

            return this

                .adopt()
                .append(...args)
                .uncover()

        } catch (err) {

            if (config.params.strictMode) {

                throw err;

            };

        } finally {



        };

    };

};

/**
 * @file arg/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/