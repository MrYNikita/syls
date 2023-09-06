//#region YI

import { YArg } from '@syls/y/arg';
import { YMany } from '@syls/y/many';
import { YCond, condIsStringValid } from '@syls/y/cond';
import { configString as config } from './config.mjs';
import { YStat } from '../-submodule/stat/-module/class.mjs';
import { YLayout } from '../-submodule/layout/-module/class.mjs';
import { stringCorrelate, stringGetRows, stringPaste, stringSetRow, stringTrim } from './module.mjs';
import { YCorrecter } from '../-submodule/correcter/-module/class.mjs';

//#endregion
//#region YT

/** ### YStringT
 * - Тип `T`
 * 
 * Основной параметр модуля `YString`.
 * 
 * @typedef {YStringTE&YStringTU&Y} YStringT
 * 
*/
/** ### YStringTE
 * - Тип `TE`
 * 
 * Параметр наследования `YString`.
 * 
 * @typedef {Omit<DString, keyof SString>} YStringTE
 * 
*/
/** ### YStringTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YString`.
 * 
 * @typedef YStringTU
 * @prop {any} _
 * 
*/

//#endregion

/** @extends {YMany<string>} */
class SString extends YMany {

    /** ### stock
     * @type {YString[]}
     * @public
    */
    static stock = [];
    /** ### config
     * 
     * ***
     * @public
    */
    static config = config;

    /**
     * @arg {...YString} args `Аргументы`
     * @returns {YString[]}
    */
    static create(...args) {

        return Object.getPrototypeOf(SString).create.apply(this, [...args]);

    };

};
class DString extends SString {

    

};
class IString extends DString {

    /**
     * ### layout
     * 
     * Разметка.
     * 
     * *** 
     * @type {YLayout}
     * @field
     * @public
    */
    layout;
    /**
     * ### prefix
     * 
     * Префикс.
     * 
     * *** 
     * @type {()=>string}
     * @field
     * @protected
    */
    prefix;
    /**
     * ### postfix
     * 
     * Постфикс.
     * 
     * *** 
     * @type {()=>string}
     * @field
     * @protected
    */
    postfix;

};
class MString extends IString {



};
class FString extends MString {

    /**
     * ### YString.constructor
     * 
     * 
     * 
     * ***
     * @arg {YStringT} args
    */
    constructor(args) {

        super(args = FString.#before(arguments));

        FString.#deceit.apply(this, [args]);

        return this.correlate();

    };

    /** @arg {DString} args */
    static #before(args) {

        /** @type {YArg<IString>} */
        const yarg = args instanceof YArg ? args : new YArg(args);

        return yarg;

    };
    /** @arg {YStringT} argst @this {YString} */
    static #deceit(args) {

        try {

            FString.#verify.apply(this, arguments);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YStringT} args @this {YString} */
    static #verify(args) {

        const {



        } = args;

        FString.#handle.apply(this, arguments);

    };
    /** @arg {YStringT} args @this {YString} */
    static #handle(args) {



        FString.#create.apply(this, arguments);

    };
    /** @arg {YStringT} args @this {YString} */
    static #create(args) {

        const {



        } = args;

        this

            .adopt(args.getData())
            .do(self => self.getCursorController()
            
                .cond(

                    self => self.get(),
                    self => self

                        .get()
                        .move(0, this.values.length)

                )
            
            )

    };

};

/**
 * ### YString
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс YString.
 * 
 * ***
 * @class
 * 
*/
export class YString extends FString {

    /**
     * ### get
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод получения строки.
     *
     * ***
     * @arg {boolean} style `Стиль`
     *
     * - Дефолт `true`
     * @public
    */
    get(style = true) {

        let result = this.values;

        if (style) {

            result = this.layout.apply(result);

        };

        return result;

    };
    /**
     * ### getVis
     * - Версия `1.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод получения видимой области.
     *
     * ***
     * @since `1.0.0`
     * @public
     * @method
     * @version `1.0.0`
    */
    getVis() {

        return this;

    };
    /**
     * ### getRow
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод получения указанной линии.
     *
     * ***
     * @arg {number} index `Индекс`
     * @public
    */
    getRow(index) {

        return this.getRows()[index];

    };
    /**
     * ### getStat
     * 
     * ***
     * 
     * Метод получения статистики.
     * 
     * ***
     * @since `1.0.0`
     * @method
     * @public
     * @version `1.0.0`
    */
    getStat() {
        
        return new YStat(this.get(false));
        
    };
    /**
     * ### getRows
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод получения массива всех линий.
     *
     * ***
     * @public
    */
    getRows() {

        return stringGetRows(this.values);

    };
    /**
     * ### getClass
     * 
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @method
     * @public
     * @returns {typeof YString}
    */
    getClass() {
        
        return YString;
        
    };
    /**
     * ### getLayout
     * 
     * ***
     * 
     * Метод получения стилевой разметки.
     * 
     * ***
     * 
     * @method
     * @public
    */
    getLayout() {
        
        return this.layout;
        
    };
    /**
     * ### getMatrix
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод получения матрицы символов.
     *
     * ***
     * @public
     * @method
    */
    getMatrix() {

        return stringGetMatrix(this.values);

    };

    /**
     * ### set
     * - Версия `1.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод установки значения.
     *
     * ***
     * @arg {string} string `Строка`
     * @public
     * @method
    */
    set(string) {

        const copy = this.values;

        try {

            if (typeof string !== 'string') {

                string = string.toString();
    
            };

            this.values = string;

        } catch (err) {

            this.values = copy;

        };

        return this;

    };
    /**
     * ### setRow
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод установления линии.
     *
     * ***
     * @arg {string} row `Линия`
     * @arg {number} index `Индекс`
     * @public
    */
    setRow(row, index) {

        this.values = stringSetRow(this.values, row, index);

        return this;

    };
    /**
     * ### setPrefix
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод установки префикса.
     *
     * ***
     * @arg {string|function():string} prefix `Префикс`
     * @public
    */
    setPrefix(prefix = '') {

        if (condIsStringValid(prefix)) {

            this.prefix = () => prefix;

        } else if (prefix?.constructor === Function) {

            this.prefix = prefix;

        } else {

            this.prefix = () => '';

        };

        return this;

    };
    /**
     * ### setPostfix
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод установки постфикса.
     *
     * ***
     * @arg {(string|function():string)} postfix `Постфикс`
     * @public
    */
    setPostfix(postfix = '') {

        if (condIsStringValid(postfix)) {

            this.postfix = () => postfix;

        } else if (postfix?.constructor === Function) {

            this.postfix = postfix;

        } else {

            this.postfix = () => '';

        };

        return this;

    };
    /**
     * ### setPrePostfix
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод утсановки префикса и постфикса.
     * 
     * ***
     * @arg {(string|function():string)} prefix `Префикс`
     * @arg {(string|function():string)} postfix `Постфикс`
     * @public
    */
    setPrePostfix(prefix, postfix) {

        this.setPrefix(prefix);
        this.setPostfix(postfix);

        return this;

    };

    /**
     * ### useCorrecter
     * 
     * ***
     * 
     * Метод использования корректировщиков.
     * 
     * ***
     * @arg {...((self:YCorrecter) => void)} corrects `Коррекции`
     * @method
     * @public
    */
    useCorrecter(...corrects) {
        
        for (const correct of corrects) {

            if (!YCond.isFunc(correct)) continue;

            correct(new YCorrecter(this));

        };

        return this;
        
    };

    /**
     * ### pad
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод приведения строки к указанному пределу указанным дополнитель.
     *
     * ***
     * @arg {string} pad `Дополнитель`
     * @arg {number} limit `Предел`
     * @arg {number} index `Индекс`
     * @arg {boolean} modeCut `Режим усечения`
     * @public
    */
    pad(pad, limit, index, modeCut) {

        this.values = stringPad(this.values, pad, limit, index, modeCut);

        return this;

    };
    /**
     * ### padRow
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод приведения строки к указанному количеству строк.
     *
     * ***
     * @arg {number} limit `Предел`
     * @arg {string?} pad `Дополнитель`
     * @public
    */
    padRow(limit, pad = this.rowEnd ?? config.rowEnd) {

        if (condIsNumberLimit(limit)) {

            if (limit > this.rowIndexLast) {

                this.rowIndexLast = limit - 1;

            };

            this.values = stringPadRow(this.values, limit, pad);

        };

        return this;

    };
    /**
     * ### padColumn
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод приведения линий строки к указанному количеству символов.
     *
     * ***
     * @arg {number} limit `Предел`
     * @arg {string?} pad `Дополнитель`
     * @public
    */
    padColumn(limit = this.rowLength, pad = this.space ?? config.space) {

        if (condIsNumberLimit(limit)) {

            this.values = stringPadColumn(this.values, limit, pad);

        };

        return this;

    };

    /**
     * ### trim
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод отсечения избыточных частей строки.
     *
     * ***
     * @arg {boolean} end `Конец`
     * @arg {boolean} start `Начало`
     * @public
    */
    trim(end, start) {

        this.values = stringTrim(this.values, end, start);

        return this;

    };

    /**
     * ### paint
     * 
     * 
     * ***
     * 
     * Метод перекраски строки.
     * 
     * ***
     * @arg {number} row
     * @arg {number} index
     * @arg {number} length
     * @arg {boolean} flow
     * @arg {stringTTColor} foreground
     * @arg {stringTTColor} background
     * @public
     * @method
    */
    paint(row, index, foreground, background, flow) {

        

        return this;

    };

    /**
     * ### paste
     * - Модуль `string`
     * ***
     *
     * Метод вставки значений.
     *
     * ***
     * @arg {...string} strings `Вставки`
     * @since `1.0.0`
     * @public
     * @method
     * @version `1.0.0`
    */
    paste(...strings) {

        const cursorController = this.getCursorController();

        for (const index in strings) {

            let string = strings[index].toString();

            if (this.prefix) {

                string = this.prefix() + string;

            };
            if (this.postfix) {
                
                string += this.postfix();

            };
            
            string = stringCorrelate(string);

            for (const cursor of cursorController.cursors.slice().reverse()) {

                this.values = stringPaste(this.values, string, cursor.position);

                const linebreaks = string.match(/\n/g)?.length;

                if (linebreaks) {

                    cursor.position[1] = 0;
                    cursor.move(linebreaks, 0);

                } else {

                    cursor.move(0, string.length);

                };

            };

        };

        return this;

    };
    /**
     * ### pasteWrap
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод вставки значения с переносом в указанную позицию.
     *
     * ***
     * @arg {number} y `Линия`
     * @arg {number} x `Столбец`
     * @arg {string} wrap `Вставка`
     * @arg {boolean} modeSkip `Режим пропуска`
     * @public
    */
    pasteWrap(wrap, modeSkip) {

        this.values = stringPasteWrap(this.values, wrap, ...this.cursor.indexs, modeSkip);

        return this;

    };
    /**
     * ### pasteSymbol
     * 
     * ***
     * 
     * Метод вставки символов.
     * 
     * ***
     * @arg {number} index `Индекс`
     * @arg {stringTTSymbol} symbol `Символ`
     * @public
    */
    pasteSymbol(symbol, index) {

        this.values = stringPasteSymbol(this.values, symbol, index);

        return this;

    };
    /**
     * ### pasteTemplate
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод применения шаблонов.
     * 
     * ***
     * @arg {string} label `Метка`
     * @arg {...[...string]} inserts `Вставки` 
     * @public
    */
    pasteTemplate(label, ...inserts) {

        const template = arrayUnite(this.templates, config.templates).find(template => template.label === label);

        if (template) {

            this.paste(template.apply(...inserts));

        };

        return this;

    };

    /**
     * ### remove
     * - Версия `0.2.0`
     * ***
     * 
     * Метод обрезания строки.
     * 
     * ***
     * @arg {number} length `Длина`
     * @arg {boolean} left `Сторона`
     * @public
    */
    remove(length = -1, left) {

        if (left) {

            this.values = stringRemoveStart(this.values, this.cursors[0].indexs[1], length);

        } else {

            this.values = stringRemove(this.values, this.values.length - 1, length);

        };

        return this;

    };

    /**
     * ### filter
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод фильтрации.
     * 
     * ***
     * @arg {...(string|RegExp)} filters `Фильтры`
     * @public
    */
    filter(...filters) {

        this.values = stringFilter(this.values, ...filters);

        return this;

    };

    /**
     * ### reflect
     * - Версия `0.0.0`
     * ***
     * 
     * Метод зекркального отражения.
     * 
     * ***
     * @arg {...[string|[string, string]]} mirrors `Отражения`
     * @public
    */
    reflect(...mirrors) {

        this.values = stringReflect(this.values, ...mirrors);

        return this;

    };

    /**
     * ### display
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод отображения строки.
     *
     * ***
     * @arg {boolean} modeStyle `Режим стиля`
     * @arg {boolean?} modeShield `Режим экранирования`
     * @public
    */
    display(modeStyle = true, modeShield) {

        console.log(this.get(modeStyle, modeShield));

        return this;

    };

    /**
     * ### formatReport
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод форматирования строки в строку отчета.
     * 
     * ***
     * @public
    */
    formatReport() {

        this.values = stringFormatReport(this.values);

        return this;

    };

    /**
     * ### moveCursors
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     *
     * Метод смещения курсоров.
     *
     * ***
     * @arg {...number} bias `Смещения`
     * @public
    */
    moveCursors(...bias) {

        this.cursors.forEach(cursor => {

            cursor.move(...bias);

            cursor.indexs = positionCorrect(this.getMatrix(), ...cursor.indexs);

        });

        return this;

    };

    /**
     * ### clearColors
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод очистки цветов.
     * 
     * ***
     * @public
    */
    clearColors() {

        this.layout.clearColors();

        return this;

    };
    /**
     * ### clearTemplates
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод очистки шаблонов.
     * 
     * ***
     * @public
    */
    clearTemplates() {

        this.templates = [];

        return this;

    };

    /**
     * ### appendColors
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод добавления цветов.
     * 
     * ***
     * @arg {[import('./ansi/module.mjs').ansiColorTMColors, import('./ansi/module.mjs').ansiColorTMColors, number, number][]} colors `Цвета`
     * @public
     * @deprecated
    */
    appendColors(...colors) {

        colors = colors.map(color => {

            if (!color[2]) {

                color[2] = this.cursor.indexs[0];

            };
            if (!color[3]) {

                color[3] = this.cursor.indexs[1];

            };

            return color;

        });

        this.layout.appendColors(...colors);

        return this;

    };
    /**
     * ### appendTemplates
     * - Версия `0.0.0`
     * - Модуль `string`
     * ***
     * 
     * Метод добавления шаблонов.
     * 
     * ***
     * @arg {...[string, string]} templates `Шаблоны`
     * @public
    */
    appendTemplates(...templates) {

        templates.forEach(template => {

            if (template.constructor === Array) {

                template = new YTemplate(...template);

            };

            this.templates.push(template);

        });

        return this;

    };

    /**
     * ### toString
     * 
     * ***
     * 
     * Метод получения строкового представления.
     * 
     * ***
     * @public
    */
    toString() {

        return this.get();

    };

};

/**
 * @file string/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/