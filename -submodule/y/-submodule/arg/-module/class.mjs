//#region YI

import { Y } from "../../../-module/class.mjs";
import { configArg as config } from "./config.mjs";
import { condIsArray } from "../../cond/-module/module.mjs";
import { argDefine } from "./export.mjs";

//#endregion
//#region YT

/** ### argTC
 * @typedef argTC
 * @prop {boolean} ySets
 * @prop {boolean} yArgs
 * @prop {boolean} yKeys
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
    /**
     * ### keys
     * 
     * Ключи.
     * 
     * *** 
     * @since `1.0.0`
     * @type {Map<string, any>}
     * @field
     * @public
    */
    keys = new Map();

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

        return [this.used, this.free];

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
     * @arg {...[keyof Y1, number, ...argT['prop'][]]} types `Типы`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    set(...types) {

        for (const type of types) {

            if (!condIsArray(type)) continue;

            for (const section of type.slice(2)) {

                if (!this.free?.[section]?.length) continue;

                this.used[type[0]] = this.extract(section, type[1]);

                break;

            };

            if (!this.used[type[0]]) this.used[type[0]] = null;

        };

        return this;

    };
    /**
     * ### setByKey
     * 
     * Установить значения по ключам.
     * 
     * ***
     * @arg {...(keyof Y1)} keys `Ключи`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setByKey(...keys) {

        for (const key of keys) {

            this.used[key] = this.keys.get(key);

            this.keys.delete(key);

        };

        return this;

    };
    /**
     * ### setAll
     * 
     * Метод установки всех значений из указанных типов.
     * Установленное значение будет массивом.
     * 
     * ***
     * @arg {...[keyof Y1, ...argT['prop'][]]} types `Значения`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setAll(...types) {

        for (const type of types) {

            if (!condIsArray(type)) continue;

            if (!this.used[type[0]]) {

                this.used[type[0]] = [];

            } else if (!condIsArray(this.used[type[0]])) {

                this.used[type[0]] = [this.used[type[0]]];

            };

            for (const section of type.slice(1)) this.used[type[0]].push(...this.extractAll(section));

        };

        return this;

    };
    /**
     * ### setAllArray
     * 
     * Метод установки всех значений массивов.
     * 
     * ***
     * @arg {keyof Y1} key `Ключ`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setAllArray(key) {

        if (!condIsArray(this.used[key])) this.used[key] = [];

        for (const section in this.free) {

            if (!section.startsWith('array')) continue;

            this.used[key].push(...this.extractAll(section));

        };

        return this;

    };
    /**
     * ### setLast
     * 
     * Метод установки значениий, как используемых, среди последних элементов секций.
     * 
     * ***
     * @arg {...[keyof Y1, ...argT['prop'][]]} types `Значения`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setLast(...types) {

        this.set(...types.filter(type => {

            if (!condIsArray(type)) return false;

            type.splice(1, 0, 0);

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
     * @arg {...[keyof Y1, ...argT['prop'][]]} types `Значения`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setFirst(...types) {

        this.set(...types.filter(type => {

            if (!condIsArray(type)) return false;

            type.splice(1, 0, -1);

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

            this.used[value[0]] = (value[1] ?? null);

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
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    append(...args) {

        args = args.reverse();

        for (let arg of args) {

            if (arg === null || arg === undefined) continue;

            const type = argDefine(arg);

            if (!(type in this.free) || !this.free[type]) this.free[type] = [];

            this.free[type].push(arg);

        };

        return this;

    };
    /**
     * ### appendByProp
     * 
     * Метод добавления данных в пул свободных значений по указанному свойству.
     * 
     * Алгоритм добавления игнорирует значения `null` и `undefined`, так как `null` в библиотеке предустанавливается по дефолту, а `undefined` исключено.
     * 
     * ***
     * @arg {...[string, any]} args `Данные`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    appendByProp(...args) {

        for (const arg of args) if (arg[0] !== 'isArgs') this.keys.set(...arg);

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

        for (let index = 0; index < this?.free?.ject?.length; index++) {

            const ject = this.free.ject[index];

            if (!ject.yArgs && !ject.ySets && !ject.yKeys) {

                continue;

            } else if (ject.yArgs && !ject.ySets && !ject.ykeys) {

                ject.yArgs = null;

                const args = Object.values(ject);

                this.append(...args);

            } else if (ject.yKeys && !ject.ySets) {

                const args = Object.entries(ject);

                this.appendByProp(...args);

            } else if (ject.ySets) {

                for (const arg of Object.entries(ject)) if (!['yArgs', 'ySets'].includes(arg[0])) this.setValue(arg);

            };

            this.free.ject.splice(index--, 1);

        };

        if (!this?.free?.ject?.length) this.free.ject = null;

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
     * @arg {...argTC&Y1} args `Аргументы`
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