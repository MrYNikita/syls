//#region YI

import { YArg } from "@syls/y/arg";
import { spawn } from "child_process";
import { YProcess } from "../../../-module/class.mjs";
import { yIsInstance } from "@syls/y";
import { condIsString } from "@syls/y/cond";
import { funcLoopRangeIn } from "@syls/func";
import { configProcessCode as config } from "./config.mjs";

//#endregion
//#region YT

/** ### processCodeTC
 * @typedef processCodeTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').processCodeT&processCodeTC} processCodeT */

//#endregion

/**
 * ### YProcessCode
 * 
 * Класс процессов ориентированный на запуск процессов указанным кодом.
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YProcessCode extends YProcess {

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
     * @type {YProcessCode[]}
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
     * @arg {...YProcessCode} args `Аргументы`
     * @returns {YProcessCode[]}
    */
    static create(...args) {

        return super.create(...args);

    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YProcessCode)?}
     * @template {YProcessCode} Y1
     * @override
    */
    static setClass(value) {

        return super.setClass(value);

    };

    //#endregion
    //#region field

    /**
     * ### args
     * 
     * Аргументы.
     * 
     * *** 
     * @since `1.0.0`
     * @type {any[]}
     * @field
     * @public
    */
    args;
    /**
     * ### code
     * 
     * Код.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string|(...args)=>void}
     * @field
     * @public
    */
    code;

    //#endregion
    //#region method

    /**
     * ### on
     * 
     * Метод активации процесса.
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
    on() {
        
        this.process = spawn('node', ['-e', this.code], {
                
            stdio: 'inherit',
        
        });

        return this;
        
    };
    /**
     * ### off
     * 
     * Метод отключения процесса.
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
    off() {
        
        return this;
        
    };
    /**
     * @method
     * @public
     * @override
    */
    getClass() {

        return YProcessCode;

    };

    //#endregion

    /**
     * ### YProcessCodeConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {processCodeTC} args `Аргументы`
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

            /** @type {YArg<YProcessScript&processScriptTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);

            super(yarg);

            yarg.set(

                ['code', 'string'],
                ['code', 'func'],
                ['args', 'array'],

            );

            //#endregion
            //#region verify



            //#endregion
            //#region handle

            funcLoopRangeIn(yarg.used.args, (arg, index, array) => condIsString(arg) && (array[index] = `'${arg}'`));

            if (yIsInstance(yarg.used.code, Function)) {

                yarg.used.code = `(${yarg.used.code.toString()})(${yarg.used?.args?.length ? yarg.used.args.join(', ') : ''});`;

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
 * @file processCode/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/