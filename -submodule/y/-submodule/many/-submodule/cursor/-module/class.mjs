//#region YI

import { Y, yClassifyProp } from '@syls/y';
import { YMany } from '../../../-module/class.mjs';
import { condIsString } from '../../../../cond/-module/module.mjs';

/** @type {import('./config.mjs')['default']['value']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default?.value ? c.default.value : c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(e => error = e.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YCursorT
 * - Тип `T`
 * 
 * Основной параметр модуля `YCursor`.
 * 
 * @typedef {YCursorTE&YCursorTU} YCursorT
 * 
*/
/** ### YCursorTE
 * - Тип `TE`
 * 
 * Параметр наследования `YCursor`.
 * 
 * @typedef {Omit<DCursor, keyof SCursor>} YCursorTE
 * 
*/
/** ### YCursorTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YCursor`.
 * 
 * @typedef YCursorTU
 * @prop {any[]} mesuares
 * @prop {boolean} historyMode
 * 
*/

//#endregion

class SCursor extends Y {

    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YCursor[]}
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
     * @arg {...YCursor} args `Аргументы`
     * @returns {YCursor[]}
    */
    static create(...args) {

        return Object.getPrototypeOf(SCursor).create.apply(this, [...args]);

    };

};
class DCursor extends SCursor {

    /**
     * ### position
     * 
     * Позиция.
     * 
     * *** 
     * @type {number[]}
     * @field
     * @public
    */
    position;

};
class ICursor extends DCursor {

    /**
     * ### many
     * 
     * Множество.
     * 
     * *** 
     * @type {any[]}
     * @field
     * @protected
    */
    many;
    /**
     * ### history
     * 
     * История позиций.
     * 
     * *** 
     * @type {number[][]}
     * @field
     * @protected
    */
    history;
    /**
     * ### fixMode
     * 
     * Режим фиксации.
     * 
     * *** 
     * @type {boolean}
     * @field
     * @protected
    */
    fixMode;
    /**
     * ### limitMode
     * 
     * Лимитированный режим.
     * 
     * *** 
     * @type {boolean}
     * @field
     * @protected
    */
    limitMode;
    /**
     * ### transitiveMode
     * 
     * Переходный режим.
     * 
     * *** 
     * @type {boolean?}
     * @field
     * @protected
    */
    transitiveMode;

};
class MCursor extends ICursor {



};
class FCursor extends MCursor {

    /**
     * ### YCursor.constructor
     * 
     * 
     * 
     * ***
     * @arg {YCursorT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FCursor.#before(t), {}));

        FCursor.#deceit.apply(this, [t]);

        return this.correlate();

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YCursorT} */
        let r = {};

        if (t?.length === 1 && [Object, YCursor].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

            return r;

        } else if (!t.length) {

            return r;

        };

        if (t[0]?._ytp) {

            t = [...t[0]._ytp];

        };

        const arg = yClassifyProp(t);

        r.many = arg.array[0] ?? arg.string[0];
        r.position = arg.number;
        r.historyMode = arg.bool[0];

        if (!Object.values(r).length) {

            r = { _ytp: t, };

        };

        return r;

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #deceit(t) {

        try {

            FCursor.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #verify(t) {

        const {



        } = t;

        FCursor.#handle.apply(this, [t]);

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #handle(t) {

        if (t.many) {

            if (typeof t.many.values === 'string') {

                t.position = [0, 0];

            } else if (t.many.values instanceof Array) {

                t.position = [];
                let position = t.many.values;

                while (position?.length) {

                    t.position.push(0);
                    position = position[0];

                };

            };

        };

        if (t.historyMode || (t.historyMode === undefined && config.historyMode)) {

            t.history = [];

        };

        FCursor.#create.apply(this, [t]);

    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #create(t) {

        const {



        } = t;

        this

            .adopt(t)
            .adoptDefault(this.constructor.config ?? config);

    };

};

/**
 * ### YCursor
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YCursor` используется индексируемми множествами для определения последней задействованной позиции
 * и параллельного применения.
 * 
 * ***
 * @class
 * 
*/
export class YCursor extends FCursor {

    /**
     * ### move
     * 
     * ***
     * 
     * Метод сдвига курсора с учётом пределов.
     * 
     * ***
     * @arg {number[]?} limits `Пределы`
     * 
     * Многомерный массив с `N` измерениями, где `N` число измерений, заданное аргументом.
     * 
     * @arg {number[]} biases `Смещения`
     * 
     * Одномерный массив чисел, обозначающих смещение в каждом измерении.
     * 
     * @method
     * @public
    */
    move(biases, limits) {

        if (this.fixMode) {

            return this;

        };

        const arg = yClassifyProp(arguments);

        if (arg.array.length) {

            if (arg.array.length === 1) {

                biases = arg.array[0];

            } else {

                biases = arg.array.slice(0, -1);
                limits = arg.array.slice(-1);

            };

        } else {

            biases = arg.number;

        };

        biases = biases.slice(0, this.position.length);

        switch (typeof this.many.values) {

            case 'string': {

                let [y, x] = this.position;

                if (!this.limitMode) {

                    x += biases[1];
                    y += biases[0];

                    if (x < 0) x = 0;
                    if (y < 0) y = 0;

                } else {

                    const sizes = this.many.values.split('\n').map(row => row.length);
                    const length = sizes.reduce((p, c) => p + c, 0);

                    x += biases[1] % length;
                    y += biases[0] % sizes.length;

                    while (x > sizes[y]) {

                        x -= sizes[y];

                        if (++y >= sizes.length) y = 0;

                    };

                    while (x < 0) {

                        x += sizes[y === 0 ? sizes.length - 1 : y - 1];

                        if (--y < 0) y = sizes.length;

                    };

                };

                this.position = [y || y === 0 ? y : 0, x || x === 0 ? x : 0];

            }; break;
            default: {

                for (const index in biases) {

                    const bias = biases[index];

                    this.position[index] += bias;

                };

            }; break;

        };

        return this;

    };
    /**
     * ### moveReverse
     * 
     * ***
     * 
     * Метод обратного сдвига позиции.
     * 
     * ***
     * @arg {number[]} biases `Смещения`
     * @arg {number[]} limits `Пределы`
     * @method
     * @public
    */
    moveReverse(biases, limits) {

        if (this.fixMode) {

            return this;

        };

        this.move(new Array(biases.length >= this.position.length ? 0 : this.position.length - biases.length).fill(0).concat(...biases), limits);

        return this;

    };

    /**
     * ### correct
     * 
     * ***
     * 
     * Метод корректировки позиции относительно указанных пределов.
     * 
     * ***
     * @arg {number[]?} limits `Пределы`
     * 
     * Многомерный массив с `N` измерениями, где `N` число измерений, заданное аргументом.
     * 
     * @method
     * @public
    */
    correct(limits) {



        return this;

    };
    /**
     * ### setMany
     * 
     * ***
     * 
     * Метод установки множества.
     * 
     * ***
     * @arg {any} many `Множество`
     * @method
     * @public
    */
    setMany(many) {

        if (condIsString(many) || [YMany, Array, String].find(constructor => many instanceof constructor)) {

            this.many = many;

        };

        return this;

    };
    /**
     * ### setPosition
     * 
     * ***
     * 
     * Метод установки позиции.
     * 
     * ***
     * @arg {number[]?} limits `Пределы`
     * @arg {number[]} position `Позиция`
     * @method
     * @public
    */
    setPosition(position, limits) {

        this.position = position;

        return this;

    };

};

/**
 * @file cursor/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/