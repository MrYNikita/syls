//#region YI

import { Y, yGetProp } from "@syls/y";
import { YArg } from "@syls/y/arg";
import { configTable as config } from "./config.mjs";
import { stringFormatNumber, stringGetSymbol, stringPad } from "@syls/string";
import { ansiCreate, ansiGetParamColor } from "@syls/string/ansi";
import { YCond } from "@syls/y/cond";

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
     * ### data
     * 
     * Данные.
     * 
     * *** 
     * @since `1.0.0`
     * @type {Y1[]}
     * @field
     * @protected
    */
    data;
    /**
     * ### titles
     * 
     * Заголовки таблицы.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string[]}
     * @field
     * @public
    */
    titles;

    //#endregion
    //#region method

    /**
     * ### getByIndex
     * 
     * Метод получения объекта по индексу.
     * 
     * ***
     * @arg {number} index `Индекс`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getByIndex(index) {
        
        const result = this.data[index];

        if (!result) {



        };

        return this.data[index]
        
    };
    /**
     * ### getColumnByTitle
     * 
     * ***
     * 
     * Метод получения столбца по имени.
     * 
     * ***
     * @arg {tableT['name']} title `Заголовк`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getColumnByTitle(title) {

        let result;

        for (const column of this.value) {

            if (column[0] === title) {

                result = column;

            };

        };

        return result;

    };
    /**
     * ### setTitles
     * 
     * Метод установки заголовков.
     * 
     * ***
     * @arg {...string} titles `Заголовки`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setTitles(...titles) {

        this.titles = titles;

        return this;

    };
    /**
     * ### sortByTitle
     * 
     * Метод сортировки таблицы по названию столбца.
     * 
     * ***
     * @arg {string} title `Заголовок`
     * @arg {boolean} order `Порядок`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    sortByTitle(title, order) {

        this.data = this.data.sort((p, c) => order ? c[title] - p[title] : p[title] - c[title]);

        return this;

    };
    /**
     * ### split
     * 
     * Метод разбивки объекта на заголовки.
     * 
     * ***
     * @arg {Y1} ject `Объект`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @protected
    */
    split(ject) {
        
        if (!YCond.isJect(ject)) return this;

        this.titles.push(...Object.keys(ject));

        return this;
        
    };
    /**
     * ### append
     * 
     * Метод добавления элементов в таблицу.
     * 
     * ***
     * @arg {...any[]} jects
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    append(...jects) {

        this.data.push(...jects);

        return this;

    };
    /**
     * ### appendTitles
     * 
     * Метод добавления заголовков.
     * 
     * ***
     * @arg {...string} titles `Заголовки`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    appendTitles(...titles) {

        this.titles.push(...titles);

        return this;

    };
    /**
     * ### removeTitles
     * 
     * Метод удаления заголовков.
     * 
     * ***
     * @arg {...string} titles `Заголовки`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    removeTitles(...titles) {
        
        for (const title of titles) {

            const index = this.titles.indexOf(title);

            if (index === -1) continue;

            this.titles.splice(index, 1);

        };

        return this;
        
    };
    /**
     * ### display
     * 
     * Метод отображения таблицы.
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

        let result = '';

        const rowNum = this.data.length;
        const columnLengths = [];
        const rowCountLength = rowNum.toString().length;
        const countSize = rowCountLength + 2;

        // вычисление длин столбцов по заголовкам
        for (const title of this.titles) columnLengths.push(title.length);
        // корректировка длин столбцов по значениям
        for (const elem of this.data) {

            for (const index in this.titles) {

                const title = this.titles[index];

                let value = yGetProp(elem, title);
                
                value = YCond.isNumber(elem[title]) ? stringFormatNumber(elem[title]) : elem[title];

                if (value?.length > columnLengths[index]) columnLengths[index] = value.length;

            };

        };
        // корректировка длин столбцов по центрированию заголовков
        for (const index in this.titles) {

            const title = this.titles[index];
            const titleParity = title.length % 2;
            const columnLengthParity = columnLengths[index] % 2;

            if ((titleParity === 0 && columnLengthParity !== 0) || (titleParity !== 0 && columnLengthParity === 0)) columnLengths[index]++;

            if (title.length === columnLengths[index]) columnLengths[index] += 2;

        };

        // верхняя рамка таблицы
        result += this.getStructureBorderUp(columnLengths, countSize);
        // заголовки таблицы
        result += this.getStructureTitles(columnLengths, countSize);
        // тело таблицы
        result += this.getStructureBody(columnLengths, countSize);
        // дно таблицы
        result += this.getStructureBorderDown(columnLengths, countSize);
        
        console.log(result);

        return this;

    };

    /**
     * ### getStructureBorderUp
     * 
     * Метод получения верхней границы таблицы.
     * 
     * ***
     * @arg {number} countSize `Длина счётчика`
     * @arg {number[]} columnLengths `Длины столбцов`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @protected
    */
    getStructureBorderUp(columnLengths, countSize) {

        let result = ' '.repeat(countSize + 1) + stringGetSymbol('thinCorUR');
        const columns = [];

        for (const length of columnLengths) columns.push(stringGetSymbol('thinHor').repeat(length));

        result += columns.join(stringGetSymbol('thinHorJD')) + stringGetSymbol('thinCorUL') + '\n';

        return result;

    };
    /**
     * ### getStructureTitles
     * 
     * Метод получения заголовков таблицы.
     * 
     * ***
     * @arg {number} countSize `Длина счётчика`
     * @arg {number[]} columnLengths `Длины столбцов`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @protected
    */
    getStructureTitles(columnLengths, countSize) {

        let result = stringGetSymbol('thinCorUR') + stringGetSymbol('thinHor').repeat(countSize) + stringGetSymbol('thinCro');

        const titles = [];

        for (const index in this.titles) {

            const title = ` ${this.titles[index]} `;

            titles.push(stringPad(title, columnLengths[index], stringGetSymbol('thinHor'), 0));

        };
        // for (const columnIndex in this.value) {

        //     const column = this.value[columnIndex];

        //     const title = ` ${column[0]} `;

        //     titles.push(stringPad(title, columnLengths[columnIndex], stringGetSymbol('thinHor'), 0));

        // };

        result += titles.join(stringGetSymbol('thinCro')) + stringGetSymbol('thinVerJL') + '\n';

        return result;

    };
    /**
     * ### getStructureBody
     * 
     * Метод получения тела таблицы.
     * 
     * ***
     * @arg {number} countSize `Длина счётчика`
     * @arg {number[]} columnLengths `Длины столбцов`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @protected
    */
    getStructureBody(columnLengths, countSize) {

        let result = '';
        let flag = true;

        const thinVer = stringGetSymbol('thinVer');
        const rowCountLength = countSize - 2;

        for (const index in this.data) {

            const elem = this.data[index];

            result += thinVer;

            const row = [ansiCreate(ansiGetParamColor(flag ? 'gray' : -1, -1)) + stringPad((+index + 1).toString().padStart(rowCountLength, 0), countSize, ' ', 0) + ansiCreate(ansiGetParamColor(-1, -1))];

            for (const columnIndex in this.titles) {

                const title = this.titles[columnIndex];

                let value = yGetProp(elem, title) ?? 'N';

                let flagNum = false;
                let flagSym = false;

                if (YCond.isNumber(value)) {

                    flagNum = true;

                    value = stringFormatNumber(value, '.', '\'');

                } else if (/^[^\p{L}]$|^N$/u.test(value)) {

                    flagSym = true;

                };

                value = YCond.isNumber(value) ? stringFormatNumber(value, '.', '\'') : value;

                row.push(ansiCreate(ansiGetParamColor(flag ? 'gray' : -1, -1)) + stringPad(value, columnLengths[columnIndex], ' ', flagSym ? 0 : 1) + ansiCreate(ansiGetParamColor(-1, -1)));

            };

            result += row.join(thinVer) + thinVer + '\n';

            flag = !flag;

        };

        return result;

    };
    /**
     * ### getStructureBorderDown
     * 
     * Метод получения дна таблицы.
     * 
     * ***
     * @arg {number} countSize `Длина счётчика`
     * @arg {number[]} columnLengths `Длины столбцов`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @protected
    */
    getStructureBorderDown(columnLengths, countSize) {

        let result = '';

        const thinHor = stringGetSymbol('thinHor');

        const columns = [stringGetSymbol('thinCorDR') + thinHor.repeat(countSize)];

        for (const columnIndex in this.titles) columns.push(thinHor.repeat(columnLengths[columnIndex]));

        result += columns.join(stringGetSymbol('thinHorJU')) + stringGetSymbol('thinCorDL');

        return result;

    };

    //#endregion

    /**
     * ### YTableConstructor
     * 
     * 
     * 
     * ***
     * @arg {...Y1} args `Аргументы`
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
                .do(self => {

                    if (yarg.free.ject.length) {

                        for (const ject of yarg.free.ject) this.data.push(ject[1]);

                    };

                    if (!self.titles.length && self.data.length) {

                        self.split(this.data[0]);

                    };

                })


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