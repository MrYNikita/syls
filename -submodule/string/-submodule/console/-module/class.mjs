//#region YI

import { YArg } from "@syls/y/arg";
import { configConsole as config } from "./config.mjs";
import { ansiCreate, ansiGetParamCursorTo } from "../../ansi/-module/module.mjs";
import { Y } from "@syls/y";
import { YScheduler } from "@syls/y/scheduler";
import { stringGetColumns, stringGetRows } from "../../../-module/module.mjs";

//#endregion
//#region YT

/** ### consoleTC
 * @typedef consoleTC
 * @prop {number} y
 * @prop {number} x
*/

/** @typedef {import('./module.mjs').consoleT&consoleTC} consoleT */

//#endregion

/**
 * ### YConsole
 * 
 * Класс консолей `SYLS` выступает самостоятельным представлением консолей.
 * Каждый экземпляр класса хранит уникальные для него ввод и вывод, отображаемые данные.
 * При необходимости, можно переключаться между разными консолями.
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YConsole extends Y {

    //#region static

    static {

        this

            .appendModule(this)

    };

    /**
     * ### cursorPosition
     * 
     * Позиция курсора.
     * 
     * *** 
     * @since `1.0.0`
     * @type {[number, number]}
     * @field
     * @static
     * @public
    */
    static cursorPosition = [0, 0];
    /**
     * ### sizes
     * 
     * Размеры консоли.
     * 
     * *** 
     * @since `1.0.0`
     * @type {[number, number]}
     * @field
     * @static
     * @public
    */
    static sizes = process.stdout.getWindowSize();
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YConsole[]}
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
     * @arg {...YConsole} args `Аргументы`
     * @returns {YConsole[]}
    */
    static create(...args) {

        return super.create(...args);

    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YConsole)?}
     * @template {YConsole} Y1
     * @override
    */
    static setClass(value) {

        return super.setClass(value);

    };
    /**
     * ### clear
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
     * @static
     * @method
     * @public
    */
    static clear() {



    };
    /**
     * ### write
     * 
     * Метод вписывания текста.
     * 
     * ***
     * @arg {...string} strings `Текста`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static write(...strings) {

        for (const string of strings) {

            const yBias = string.match(/\n/g)?.length ?? 0;
            
            this.cursorPosition[0] += yBias;
            
            process.stdout.write(string);
            
            this.cursorPosition[1] += (string.length - yBias) ?? 0;

        };

        return this;

    };
    /**
     * ### writeLine
     * 
     * Метод отображения строк с переносом.
     * 
     * ***
     * @arg {boolean} reset `Сброс`
     * @arg {...string} strings `Текста`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static writeLine(reset, ...strings) {

        const x = this.cursorPosition[1];

        for (const string of strings) {

            for (const row of stringGetRows(string)) {

                this.write(row);

                this.setCursorPosition(++this.cursorPosition[0], reset ? 0 : x);

            };

        };

        return this;

    };
    /**
     * ### writeDuration
     * 
     * Метод отображения ифномарции с задержкой в `ms`.
     * 
     * ***
     * @arg {number} duration `Задержка`
     * @arg {...string} strings `Строки`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @async
     * @method
     * @static
     * @public
    */
    static async writeDuration(duration, ...strings) {

        await new Promise((resolve) => {

            for (let string of strings) {

                const inter = setInterval(() => {

                    if (string.length) {

                        const char = string[0];

                        string = string.slice(1);

                        YConsole.write(char);

                    } else {

                        clearInterval(inter);

                        resolve();

                    };

                }, duration);

            };

        });

        return this;

    };
    /**
     * ### writeDurationRow
     * 
     * Метод построчного отображения ифномарции с задержкой в `ms`.
     * 
     * ***
     * @arg {number} duration `Задержка`
     * @arg {...string} strings `Строки`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @async
     * @method
     * @static
     * @public
    */
    static async writeDurationRow(duration, ...strings) {

        this.setCursorPosition(0, 0);

        await new Promise((resolve) => {

            for (let string of strings) {

                const rows = stringGetRows(string);

                const inter = setInterval(() => {

                    if (rows.length) {

                        YConsole.write(rows.shift());

                    } else {

                        clearInterval(inter);

                        resolve();

                    };

                }, duration);

            };

        });

        return this;

    };
    /**
     * ### writeDurationColumn
     * 
     * Метод постолбцового отображения ифномарции с задержкой в `ms`.
     * 
     * ***
     * @arg {number} duration `Задержка`
     * @arg {...string} strings `Строки`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @async
     * @method
     * @static
     * @public
    */
    static async writeDurationColumn(duration, ...strings) {

        await new Promise((resolve) => {

            let x = this.cursorPosition[1];

            for (let string of strings) {

                const columns = stringGetColumns(string);

                const inter = setInterval(() => {

                    if (columns.length) {

                        const column = columns.shift();

                        for (const char of column) YConsole.writeLine(false, char);

                        this.setCursorPosition(0, ++x);

                    } else {

                        clearInterval(inter);

                        resolve();

                    };

                }, duration);

            };

        });

        return this;

    };
    /**
     * ### setCursorPosition
     * 
     * Метод установки курсора.
     * 
     * ***
     * @arg {number} y `Y`
     * @arg {number} x `X`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static setCursorPosition(y, x) {

        [this.cursorPosition[0], this.cursorPosition[1]] = [y, x];

        process.stdout.write(ansiCreate(

            ansiGetParamCursorTo(y, x),

        ));

        return this;

    };

    //#endregion
    //#region field

    /**
     * ### text
     * 
     * Текст.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @field
     * @public
    */
    text;
    /**
     * ### cursorPosition
     * 
     * Позиция курсора.
     * 
     * *** 
     * @since `1.0.0`
     * @type {[number, number]}
     * @field
     * @public
    */
    cursorPosition;

    //#endregion
    //#region method

    /**
     * @method
     * @public
     * @override
    */
    getClass() {

        return YConsole;

    };
    /**
     * ### display
     * 
     * Метод отображения текущей консоли.
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
    display() {



        return this;

    };

    //#endregion

    /**
     * ### YConsoleConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {consoleTC} args `Аргументы`
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

            /** @type {YArg<YConsole&consoleTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);



            super(yarg);

            //#endregion
            //#region verify



            //#endregion
            //#region handle



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
 * @file console/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/