//#region YI

import { Y } from '@syls/y';
import { YArg } from "@syls/y/arg";
import { YMany } from '../../../-module/class.mjs';
import { condIsArray, condIsString } from "../../../../cond/-module/module.mjs";
import { configCursor as config } from "./config.mjs";

//#endregion
//#region YT

/** ### cursorTC
 * @typedef cursorTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').cursorT&cursorTC} cursorT */

//#endregion

/**
 * ### YCursor
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YCursor extends Y {

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

        return super.create(...args);

    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YCursor)?}
     * @template {YCursor} Y1
     * @override
    */
    static setClass(value) {

        return super.setClass(value);

    };

    //#endregion
    //#region field

    /**
     * ### many
     * 
     * Множество.
     * 
     * *** 
     * @since `1.0.0`
     * @type {any[]}
     * @field
     * @public
    */
    many;
    /**
     * ### history
     * 
     * История.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number[][]}
     * @field
     * @public
    */
    history;
    /**
     * ### fixMode
     * 
     * Режим фиксации.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    fixMode;
    /**
     * ### position
     * 
     * Позиция.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number[]}
     * @field
     * @public
    */
    position;
    /**
     * ### limitMode
     * 
     * Режим пределов.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    limitMode;
    /**
     * ### transitiveMode
     * 
     * Режим переходов.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @field
     * @public
    */
    transitiveMode;

    //#endregion
    //#region method

    /**
     * @method
     * @public
     * @override
    */
    getClass() {

        return YCursor;

    };
    /**
     * ### setMany
     * 
     * Метод установки множества.
     * 
     * ***
     * @arg {any} many `Множество`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
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
     * Метод установки позиции.
     * 
     * ***
     * @arg {number[]?} limits `Пределы`
     * @arg {number[]} position `Позиция`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setPosition(position) {
        
        this.position = position;

        return this;
        
    };
    /**
     * ### move
     * 
     * Метод сдвига.
     * 
     * ***
     * @arg {number[]} biases `Смещения`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    move(biases) {

        if (this.fixMode) {

            return this;

        };

        // const arg = argClassify(arguments);

        // if (arg.array.length) {

        //     if (arg.array.length === 1) {

        //         biases = arg.array[0];

        //     } else {

        //         biases = arg.array.slice(0, -1);
        //         limits = arg.array.slice(-1);

        //     };

        // } else {

        //     biases = arg.number;

        // };

        // biases = biases.slice(0, this.position.length);

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
     * Метод обратного сдвига.
     * 
     * ***
     * @arg {number[]} biases `Смещения`
     * @arg {number[]} limits `Пределы`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
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
     * 
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
    correct() {
        
        
        
    };

    //#endregion

    /**
     * ### YCursorConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...cursorTC&YCursor} args `Аргументы`
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

            /** @type {YArg<YCursor&cursorTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);

            yarg.setFirst(

                ['position', 'arrayNumber'],
                ['many', 'array', 'ject'],
                ['fixMode', 'bool'],
                ['limitMode', 'bool'],
                ['transitiveMode', 'bool'],

            );

            super(yarg);



            //#endregion
            //#region verify



            //#endregion
            //#region handle

            if (!yarg.used.position) {

                if (condIsString(yarg.used.many)) {

                    yarg.used.many = [0, 0];

                } else if (condIsArray(yarg.used.array)) {



                };

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
 * @file cursor/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/