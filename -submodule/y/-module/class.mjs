//#region YI

import { yAdopt, yAdoptDefault, yClone, yCorrelate, yEqual, yGetProperty, yGetPropertyByPath, ySupplement, yClassifyProp } from './module.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YT
 * - Тип `T`
 * 
 * Основной параметр модуля `Y`.
 * 
 * @typedef {YTE&YTU&YJect} YT
 * 
*/
/** ### YTE
 * - Тип `TE`
 * 
 * Параметр наследования `Y`.
 * 
 * @typedef {Omit<DY, keyof SY>} YTE
 * 
*/
/** ### YTU
 * - Тип `TU`
 * 
 * Уникальные параметры `Y`.
 * 
 * @typedef YTU
 * @prop {any} _
 * 
*/

//#endregion

class SY {

    /**
     * ### stock
     * 
     * Набор.
     * 
     * *** 
     * @type {Y[]}
     * @public
    */
    static stock = [];
    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;

    /**
     * @arg {...Y} args `Аргументы`
     * @returns {Y[]}
    */
    static create(...args) {

        const result = [];

        for (const index in args) result[index] = new this(args[index]);

        return result;

    };

};
class DY extends SY {



};
class IY extends DY {

    

};
class MY extends IY {



};
class FY extends MY {

    /**
     * ### Y.constructor
     * 
     * 
     * 
     * ***
     * @arg {YT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FY.#before(t), {}));

        FY.#deceit.apply(this, [t]);

        return this.correlate();

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YT} */
        let r = {};

        if (t?.length === 1 && [Object, Y].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                default: {

                    const arg = yClassifyProp(t);



                };

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YT} t @this {Y} */
    static #deceit(t) {

        try {

            FY.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YT} t @this {Y} */
    static #verify(t) {

        const {



        } = t;

        FY.#handle.apply(this, [t]);

    };
    /** @arg {YT} t @this {Y} */
    static #handle(t) {



        FY.#create.apply(this, [t]);

    };
    /** @arg {YT} t @this {Y} */
    static #create(t) {

        const {



        } = t;

    };

};

/**
 * ### Y
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class Y extends FY {

    /**
     * ### mode
     * 
     * ***
     * 
     * Метод установки режимов.
     * 
     * ***
     * @arg {any} value `Значение`
     * @arg {string} mode `Режим`
     * @method
     * @public
    */
    mode(mode, value) {
        
        const args = yClassifyProp(arguments);

        const options = [];

        if (args.string.length > 1) {

            options.push(...args.string.map(string => [string]));

        } else if (!args.array.length) {

            options.push([mode, value]);

        } else {

            options.push(...args.array);

        };

        for (const option of options) {

            [mode, value] = option;

            if (!(mode in this)) {

                if (!((mode += 'Mode') in this)) {

                    continue;

                };

            };

            this[mode] = value === undefined ? this[mode] ? false : true : !!value;

        };

        return this;
        
    };

    /**
     * ### fill
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    fill() {



    };
    /**
     * ### clone
     * 
     * ***
     * 
     * Метод клонирования объекта.
     * 
     * ***
     * @arg {boolean} link `Связь`
     * @public
    */
    clone(link) {

        return yClone(this, link);

    };
    /**
     * ### equal
     * 
     * ***
     * 
     * Метод проверки на эквивалентность.
     * 
     * ***
     * @arg {Y1} ject `Объект`
     * @public
     * @template Y1
    */
    equal(ject) {

        return yEqual(this, ject);

    };

    /**
     * ### adopt
     * - Версия `0.0.0`
     * - Модуль `ject`
     * ***
     *
     * Метод {@link yAdopt|перенятия} свойств обладателя.
     *
     * ***
     * @arg {{}} owner `Обладатель`
     * @public
    */
    adopt(owner) {

        return yAdopt(this, owner);

    };
    /**
     * ### adoptDefault
     * - Версия `0.0.0`
     * - Модуль `ject`
     * ***
     *
     * Метод {@link yAdoptDefault|перенятия} дефолт свойств обладателя.
     *
     * ***
     * @arg {{}} owner `Обладатель`
     * @public
    */
    adoptDefault(owner) {

        return yAdoptDefault(this, owner);

    };

    /**
     * ### print
     * 
     * ***
     * 
     * Метод отображения данных.
     * 
     * ***
     * @public
    */
    print() {
        
        console.log(this);

        return this;
        
    };
    /**
     * ### printTable
     * 
     * ***
     * 
     * Метод отображения данных в табличном виде.
     * 
     * ***
     * @arg {...this} jects `Объекты`
     * @since `1.0.0`
     * @method
     * @public
    */
    printTable(...jects) {
        
        console.table([this, ...jects]);

        return this;
        
    };

    /**
     * ### correlate
     * 
     * ***
     * 
     * Метод корреляции.
     * 
     * ***
     * @public
    */
    correlate() {

        const aliases = this.constructor?.config?.aliases;

        if (aliases) {

            return yCorrelate(this, ...aliases);

        };

        return this;

    };
    /**
     * ### supplement
     * - Версия `0.0.0`
     * - Модуль `ject`
     * ***
     *
     * Метод {@link ySupplement|дополнения} свойствами указанного дополнителя.
     *
     * ***
     * @arg {{}} supplementer `Дополнитель`
     * @public
    */
    supplement(supplementer) {

        return ySupplement(this, supplementer);

    };

    /**
     * ### getShell
     * 
     * ***
     * 
     * Метод возвращающий оболочку.
     * 
     * Оболочка - это объект, прототипом которого является указанный в рагменте объект и иммет метод getOver для вовзрата к контексту родителя.
     * 
     * ***
     * @arg {Y1} y `Объект`
     * @public
     * @returns {Y1&{getPrev()=>Y2}}
     * @template Y1
     * @template {this} Y2
    */
    getShell(y) {

        const prev = this;

        const shell = new Proxy({

            getPrev() {

                return prev;

            },

        }, {

            get(t, p) {

                if (y[p]) {

                    return y[p];

                } else {

                    return t[p];

                };

            },
            set(t, p, v) {

                y[p] = v;

                return true;

            },

        });

        Object.setPrototypeOf(shell, y);

        return shell;

    };
    /**
     * ### getProperty
     * - Версия `0.0.0`
     * ***
     *
     * Метод {@link yGetProperty|получения} указанного свойства.
     *
     * ***
     * @arg {string} property `Свойство`
     * @public
    */
    getProperty(property) {

        return yGetProperty(this, property);

    };
    /**
     * ### getPropertyByPath
     * - Версия `0.0.0`
     * ***
     *
     * Метод {@link yGetPropertyByPath|получения свойства по указанному пути}.
     *
     * ***
     * @arg {string} path `Путь`
     * @public
    */
    getPropertyByPath(path) {

        return yGetPropertyByPath(this, path);

    };

};