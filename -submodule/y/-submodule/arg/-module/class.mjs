//#region YI

import { Y, yClassifyProp } from '@syls/y';
import { configArg as config } from './config.mjs';
import { argClassify } from './module.mjs';
import { condIsNumber } from '../../cond/-module/module.mjs';

//#endregion
//#region YT

/** ### YArgT
 * - Тип `T`
 * 
 * Основной параметр модуля `YArg`.
 * 
 * @typedef {YArgTE&YArgTU&Y} YArgT
 * 
*/
/** ### YArgTE
 * - Тип `TE`
 * 
 * Параметр наследования `YArg`.
 * 
 * @typedef {Omit<DArg, keyof SArg>} YArgTE
 * 
*/
/** ### YArgTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YArg`.
 * 
 * @typedef YArgTU
 * @prop {any} _
 * 
*/

//#endregion

class SArg extends Y {

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

        return Object.getPrototypeOf(SArg).create.apply(this, [...args]);

    };

};
class DArg extends SArg {

    /**
     * ### values
     * 
     * Значения.
     * 
     * *** 
     * @type {any[][]}
     * @field
     * @public
    */
    values;

};
class IArg extends DArg {



};
class MArg extends IArg {



};
class FArg extends MArg {

    /**
     * ### YArg.constructor
     * 
     * 
     * 
     * ***
     * @arg {YArgT} args
    */
    constructor(args) {

        super(args = FArg.#before(args = arguments));

        FArg.#deceit.apply(this, [args]);

        return this.correlate();

    };

    /** @arg {DArg} args */
    static #before(args) {

        const order = argClassify(...args);

        return args = {

            values: order,

        };

    };
    /** @arg {YArgT} args @this {YArg} */
    static #deceit(args) {

        try {

            FArg.#verify.apply(this, [args = { ...args }]);

        } catch (e) {

            if (config?.strictMode) {

                throw e;

            };

            return new YArg();

        } finally {



        };

    };
    /** @arg {YArgT} args @this {YArg} */
    static #verify(args) {

        FArg.#handle.apply(this, arguments);

    };
    /** @arg {YArgT} args @this {YArg} */
    static #handle(args) {



        FArg.#create.apply(this, arguments);

    };
    /** @arg {YArgT} args @this {YArg} */
    static #create(args) {

        const {



        } = args;

        this

            .adopt(args, config);

    };

};

/**
 * ### YArg
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YArg`.
 * 
 * ***
 * @class
 * 
*/
export class YArg extends FArg {

    /**
     * ### extract
     * 
     * ***
     * 
     * Метод извлечения свойства из аргументов.
     * 
     * Извлечение подразумевает получение аргумента из пула с удалением.
     * 
     * ***
     * @arg {Y1} section `Секция`
     * @arg {number} index `Индекс`
     * @method
     * @public
     * @returns { import('@syls/y').yTPropClassify[section][0] }
     * @template { keyof import('@syls/y').yTPropClassify } Y1
    */
    extract(section, index) {

        if (this.values[section]?.length) {

            return this.values[section].splice(index, 1)[0][1];

        };

        return undefined;

    };
    /**
     * ### extractMany
     * 
     * ***
     * 
     * Метод множественного извлечения аргументов.
     * 
     * ***
     * @arg {Y1} section `Секция`
     * @arg {...number} indexs `Индексы`
     * @method
     * @public
     * @returns { import('@syls/y').yTPropClassify[section][0][] }
     * @template { keyof import('@syls/y').yTPropClassify } Y1
    */
    extractMany(section, ...indexs) {
        
        const result = [];

        for (const index of indexs
            
            .filter(index => condIsNumber(index) && index < this.values[section].length)
            .sort((p, c) => p - c).reverse()
            .reverse()
            
        ) {

            result.push(this.extract(section, index));

        };

        return result;
        
    };
    /**
     * ### extractByProperty
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @arg {Y1} section `Секция`
     * @arg {string} property `Свойство`
     * @method
     * @public
     * @returns { import('@syls/y').yTPropClassify[section][0] }
     * @template { keyof import('@syls/y').yTPropClassify } Y1
    */
    extractByProperty(section, property) {
        
        if (this.values[section]?.length) {

            return this.values[section].find(arg => arg[0] === property)[1] ?? undefined;

        };

        return undefined;
        
    };
    /**
     * ### uncover
     * 
     * ***
     * 
     * Метод раскрытия объекта-носителя аргументов.
     * 
     * Раскрытие позволяет вынести свойства единственно переданного в аргумент объекта на верхний уровень и произвести повторную сортировку.
     * Метод срабатывает исключительно при условии, что в аргументе был передан только единственный объект.
     * 
     * ***
     * @method
     * @public
    */
    uncover() {

        if (this.isJectTransmit()) {

            this.values = argClassify(this.values.ject[0][1]);

        };

        return this;

    };
    /**
     * ### isJectTransmit
     * 
     * ***
     * 
     * Метод проверки аргумента на `объект-носитель`.
     * 
     * `Объект-носитель` - это объект, переносящий аргументы. Его свойства испотльзуются как неупорядоченные аргументы, размеченные названиями, по которым
     * удаётся определить его предназначение и истинный порядок.
     * 
     * ***
     * @method
     * @public
    */
    isJectTransmit() {

        let result = true;

        for (const key in this.values) {

            if ((key === 'ject' && this.values[key].length !== 1) || (key !== 'ject' && this.values[key].length)) {

                result = false;
                break;

            };

        };

        return result;

    };

};