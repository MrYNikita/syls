//#region YI

import { Y } from "@syls/y";
import { YArg } from "@syls/y/arg";
import { configTable as config } from "./config.mjs";
import { stringFormatNumber, stringGetSymbol, stringPad } from "@syls/string";

//#endregion
//#region YT

/**
 * @typedef tableTC
 * @prop {string} name 
 * @prop {number} index 
 * @prop {} 
 * 
 * @typedef {import('./module.mjs').tableT&tableTC} tableT
*/

//#endregion

/**
 * ### YTable
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
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
export class YTable extends Y {

    //#region static

    static {



    };

    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YTable[]}
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
     * @arg {...YTable} args `Аргументы`
     * @returns {YTable[]}
    */
    static create(...args) {

        return super.create(...args);

    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&Y1)?}
     * @template {YTable} Y1
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
     * @type {Y1}
     * @field
     * @protected
    */
    value;

    //#endregion
    //#region method

    /**
     * ### getJect
     * 
     * ***
     * 
     * Позволяет получить сущность по её индексу.
     * 
     * ***
     * @arg {tableT['index']} index `Индекс`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * ***
     * @method
     * @public
    */
    getJect(index) {

        index++;

        const result = {};

        for (const column of this.value) {

            result[column[0]] = column[index];

        };

        const table = this;

        return new Proxy(result, {

            set(t, p, v) {

                if (t[p] !== undefined && v !== undefined) {

                    t[p] = v;

                    table.getColumnByName(p)[index] = v;

                    return true;

                };

                return false;

            },

        });

    };
    /**
     * ### getColumnByName
     * 
     * ***
     * 
     * Метод получения столбца по имени.
     * 
     * ***
     * @arg {tableT['name']} name `Имя`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getColumnByName(name) {

        let result;

        for (const column of this.value) {

            if (column[0] === name) {

                result = column;

            };

        };

        return result;

    };
    /**
     * ### display
     * 
     * ***
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
    display() {

        const lengths = new Array(this.value.length).fill(0);

        for (const columnIndex in this.value) {

            const column = this.value[columnIndex];

            for (const rowIndex in column) {

                const row = parseInt(column[rowIndex]) ? stringFormatNumber(column[rowIndex]) : column[rowIndex] + '';

                if (row.length > lengths[columnIndex]) lengths[columnIndex] = row.length;

            };

            if (lengths[columnIndex] > this.value[columnIndex][0].length) lengths[columnIndex]++;

        };

        let result = stringGetSymbol('thinCorUR');

        for (const index in this.value) result += stringGetSymbol('thinHor').repeat(2 + lengths[+index]) + (index == this.value.length - 1 ? stringGetSymbol('thinCorUL') + '\n' : stringGetSymbol('thinHorJD'));

        result += stringGetSymbol('thinVerJR');

        for (const columnIndex in this.value) result += ` ${stringPad(this.value[+columnIndex][0], lengths[columnIndex], null, 0)} ` + stringGetSymbol(columnIndex == this.value.length - 1 ? `thinVerJL` : `thinCro`);

        result += '\n';

        for (let rowIndex = 1; rowIndex < this.value[0].length; rowIndex++) {

            for (const columnIndex in this.value) {

                const value = this.value[columnIndex][rowIndex] + '';

                result += `${stringGetSymbol('thinVer')} ${(parseInt(value) ? stringFormatNumber(value, '.', '_') : value).padStart(lengths[columnIndex])} `

            };

            result += stringGetSymbol('thinVer') + '\n';

        };

        result += stringGetSymbol('thinCorDR');

        for (const index in this.value) result += stringGetSymbol('thinHor').repeat(2 + lengths[+index]) + (index == this.value.length - 1 ? stringGetSymbol('thinCorDL') + '\n' : stringGetSymbol('thinHorJU'));
        
        console.log(result);

        return this;

    };

    //#endregion

    /**
     * ### YTableConstructor
     * 
     * 
     * 
     * ***
     * @arg {tableTC&Y1} args `Аргументы`
     * 
     * Представлены единым объектом носителем аргументов.
     * 
     * ***
     * @constructor
    */
    constructor(...args) {

        try {

            //#region before

            /** @type {YArg<YTable>} */
            const yarg = args instanceof YArg ? args : new YArg(args);

            yarg.set(

                ['value', 'array'],

            );

            super(yarg);

            //#endregion
            //#region verify



            //#endregion
            //#region handle



            //#endregion
            //#region comply



            //#endregion

            return this

                .adopt(yarg.getData())


        } catch (err) {

            if (config.params.strictMode) {

                throw err;

            };

        } finally {



        };

    };

};

/**
 * @file table/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/