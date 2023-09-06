//#region YI

import { configY as config } from './config.mjs';
import { yAdopt, yAdoptDefault, yClone, yCorrelate, yEqual, yGetProperty, yGetPropertyByPath, ySupplement, yClassifyProp, } from "./module.mjs";

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
     * ### modules
     * 
     * ***
     * 
     * Модули.
     * 
     * *** 
     * @type {any[]}
     * @field
     * @static
     * @private
    */
    static modules = [];

    /**
     * ### getY
     * 
     * ***
     * 
     * Метод получения базового класса.
     * 
     * ***
     * @static
     * @method
     * @public
    */
    static getY() {

        return Y;
        
    };
    /**
     * @arg {...Y} args `Аргументы`
     * @returns {Y[]}
    */
    static create(...args) {

        const result = [];

        for (const index in args) result[index] = new this(args[index]);y

        return result;

    };

};
class DY extends SY {



};
class IY extends DY {

    

};
class MY extends IY {

    /**
     * ### correlate
     * 
     * ***
     * 
     * Метод корреляции.
     * 
     * ***
     * @method
     * @protected
    */
    correlate() {

        const aliases = this.constructor?.config?.aliases;

        if (aliases) {

            return yCorrelate(this, ...aliases);

        };

        return this;

    };

};
class FY extends MY {

    /**
     * ### Y.constructor
     * 
     * 
     * 
     * ***
     * @arg {YT} args
    */
    constructor(args) {

        super();

        FY.#deceit.apply(this, arguments);

        return this.correlate();

    };

    /** @arg {YT} args @this {Y} */
    static #deceit(args) {

        try {

            FY.#verify.apply(this, arguments);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YT} args @this {Y} */
    static #verify(args) {

        FY.#handle.apply(this, arguments);

    };
    /** @arg {YT} args @this {Y} */
    static #handle(args) {



        FY.#create.apply(this, arguments);

    };
    /** @arg {YT} args @this {Y} */
    static #create(args) {

        

    };

};

/**
 * ### Y
 * - Тип `SDIMFY`
 * - Версия `1.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `Y`.
 * 
 * Базовый класс любого `SYLS` класса.
 * 
 * ***
 * @class
*/
export class Y extends FY {

    /**
     * ### do
     * 
     * ***
     * 
     * Метод выполнения кода в контексте данного экземпляра.
     * 
     * ***
     * @arg {...((self: this, ...args) => void)} codes `Коды`
     * @since `1.0.0`
     * @method
     * @public
    */
    do(...codes) {

        try {

            for (const code of codes) {

                if (typeof code !== 'function') continue;
    
                code(this);
    
            };

        } catch (error) {

            console.error(error);

        };

        return this;

    };
    /**
     * ### cond
     * 
     * ***
     * 
     * Метод условной проверки.
     * 
     * ***
     * @arg {...any} args `Аргументы`
     * @arg {((self: this, ...args) => void)?} t `Истина`
     * @arg {((self: this, ...args) => void)?} f `Ложь`
     * @arg {(self: this, ...args) => boolean} cond `Условие`
     * @method
     * @public
    */
    cond(cond, t, f, ...args) {

        if (typeof cond !== "function") {

            return this;

        };

        if (cond(this, ...args)) {

            if (typeof t === 'function') t(this, ...args);

        } else {

            if (typeof f === "function") f(this, ...args);

        };

        return this;

    };
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

        const options = [...args.array, ...args.string.map(string => [string])];

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
     * ### wrap
     * 
     * ***
     * 
     * Метод выполнения нового контекста.
     * 
     * ***
     * @arg {Y1} target `Цель`
     * @arg {(self: Y1) => void} wrapper `Обёртка`
     * @arg {...any} args `Аргументы`
     * @method
     * @public
     * @template Y1
    */
    wrap(wrapper, target, ...args) {

        if (typeof wrapper !== 'function') {

            return this;

        };

        wrapper(target, ...args);

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
     * ### turn
     * 
     * ***
     * 
     * Метод переопределения метододологического холста.
     * 
     * ***
     * @arg {Y1} y
     * @method
     * @public
     * @returns {Y1&{getPrev()=>Y2}}
     * @template Y1
     * @template {this} Y2
    */
    turn(y) {
        
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
     * ### clone
     * 
     * ***
     * 
     * Метод клонирования объекта.
     * 
     * ***
     * @arg {boolean?} link `Связь`
     * @public
    */
    clone(link = true) {

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
     * ### default
     * 
     * ***
     * 
     * Метод замещения указанных значений объекта на дефолтные.
     * 
     * Если не указать ни одного свойства, то заменены будут все свойства.
     * 
     * ***
     * @arg {...(keyof this)} props `Значения`
     * @method
     * @public
    */
    default(...props) {
    
        if (!props.length) {

            props = Object.keys(this);

        } else {

            props = props.filter(prop => prop in this);

        };

        const config = this.constructor.config;

        for (const prop of props) {

            this[prop] = (config[prop + 'Default'] ?? config.default);

        };

        return this;
        
    };

    /**
     * ### adopt
     * - Версия `1.0.0`
     * - Модуль `ject`
     * ***
     *
     * Метод {@link yAdopt|перенятия} свойств обладателя.
     *
     * ***
     * @arg {Y1} owner `Обладатель`
     * @arg {Y2} config `Конфигуратор`
     * @since `1.0.0`
     * @public
     * @method
     * @version `1.0.0`
     * @template Y1,Y2
    */
    adopt(owner, config) {

        return yAdopt(this, owner, config);

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
     * Метод отображения объекта.
     * 
     * ***
     * @public
    */
    print() {

        console.log(this);

        return this;

    };
    /**
     * ### printProp
     * 
     * ***
     * 
     * Метод отображения свойства объекта.
     * 
     * ***
     * @arg {...(keyof this)} props `Свойство`
     * @method
     * @public
    */
    printProp(...props) {

        if (!props.every(elem => elem instanceof Array)) {

            props = [props];

        };

        for (const prop of props) {

            let focus = this;

            for (const part of prop) {

                if (part in focus) {

                    focus = focus[part]

                } else {

                    break;

                };

            };

            console.log(focus);

        };

        return this;
        
    };
    /**
     * ### printExec
     * 
     * ***
     * 
     * Метод отображения результата кодовых операций в контексте текущего объекта.
     * 
     * ***
     * @arg {...(self:this)=>any} codes `Коды`
     * @method
     * @public
    */
    printExec(...codes) {
        
        for (const code of codes) {

            console.log(code(this));

        };

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
     * @method
    */
    supplement(supplementer) {

        return ySupplement(this, supplementer);

    };

    /**
     * ### getClass
     * 
     * ***
     * 
     * Метод получения класса экземпляра.
     * 
     * ***
     * @method
     * @public
     * @returns {typeof Y}
    */
    getClass() {

        return Y;
        
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

//#region YE

Y.getY()['modules'].push(Y);

//#endregion YE

/**
 * @file y/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/