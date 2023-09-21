// //#region YT

// /** ### YT
//  * - Тип `T`
//  * 
//  * Основной параметр модуля `Y`.
//  * 
//  * @typedef {YTE&YTU&YJect} YT
//  * 
// */
// /** ### YTE
//  * - Тип `TE`
//  * 
//  * Параметр наследования `Y`.
//  * 
//  * @typedef {Omit<DY, keyof SY>} YTE
//  * 
// */
// /** ### YTU
//  * - Тип `TU`
//  * 
//  * Уникальные параметры `Y`.
//  * 
//  * @typedef YTU
//  * @prop {any} _
//  * 
// */

// //#endregion

// class SY {

//     /**
//      * ### stock
//      * 
//      * Набор.
//      * 
//      * *** 
//      * @type {Y[]}
//      * @public
//     */
//     static stock = [];
//     /**
//      * ### config
//      * 
//      * Конфигуратор.
//      * 
//      * ***
//      * @public
//     */
//     static config = config;
//     /**
//      * ### modules
//      * 
//      * ***
//      * 
//      * Модули.
//      * 
//      * *** 
//      * @type {any[]}
//      * @field
//      * @static
//      * @private
//     */
//     static modules = [];

//     /**
//      * ### do
//      * 
//      * ***
//      * 
//      * Метод выполнения кода в контексте данного класса.
//      * 
//      * ***
//      * @arg {...((self: typeof Y, ...args) => void)} codes `Коды`
//      * @static
//      * @method
//      * @public
//     */
//     static do(...codes) {
        
//         Y.prototype.do.apply(this, codes);

//         return this;
        
//     };
//     /**
//      * ### getY
//      * 
//      * ***
//      * 
//      * Метод получения базового класса.
//      * 
//      * ***
//      * @static
//      * @method
//      * @public
//     */
//     static getY() {

//         return Y;
        
//     };
//     /**
//      * @arg {...Y} args `Аргументы`
//      * @returns {Y[]}
//     */
//     static create(...args) {

//         const result = [];

//         for (const index in args) result[index] = new this(args[index]);y

//         return result;

//     };
//     /**
//      * ### appendModule
//      * 
//      * ***
//      * 
//      * Метод добавления модулей.
//      * 
//      * ***
//      * @arg {...Y1} values `Значения`
//      * @static
//      * @method
//      * @public
//      * @template {typeof Y} Y1
//     */
//     static appendModule(...values) {

//         for (const value of values) {

//             if (!(value instanceof Function && value.prototype instanceof SY)) continue;

//             Y.modules.push(value);

//         };

//         return this;
        
//     };
//     /**
//      * ### becomePrototype
//      * 
//      * ***
//      * 
//      * Метод установки текущего класса, как прототипа указанному объекту.
//      * 
//      * ***
//      * @arg {Y1} value `Значение`
//      * @static
//      * @method
//      * @public
//      * @returns {(Y1&Y)?}
//      * @template Y1
//     */
//     static becomePrototype(value) {
        
//         if (!(value instanceof Object)) return null;

//         Object.setPrototypeOf(value, this);

//         if (typeof value === 'function' && 'prototype' in value) {

//             Object.setPrototypeOf(value['prototype'], this.prototype);

//         };

//         return value;
        
//     };

// };
// class DY extends SY {



// };
// class IY extends DY {

    

// };
// class MY extends IY {

//     /**
//      * ### correlate
//      * 
//      * ***
//      * 
//      * Метод корреляции.
//      * 
//      * ***
//      * @method
//      * @protected
//     */
//     correlate() {

//         const aliases = this.constructor?.config?.value?.aliases;

//         if (aliases) {

//             return yCorrelate(this, ...aliases);

//         };

//         return this;

//     };

// };
// class FY extends MY {

//     /**
//      * ### Y.constructor
//      * 
//      * 
//      * 
//      * ***
//      * @arg {YT} args
//     */
//     constructor(args) {

//         super();

//         FY.#deceit.apply(this, arguments);

//         return this.correlate();

//     };

//     /** @arg {YT} args @this {Y} */
//     static #deceit(args) {

//         try {

//             FY.#verify.apply(this, arguments);

//         } catch (e) {

//             throw e;

//         } finally {



//         };

//     };
//     /** @arg {YT} args @this {Y} */
//     static #verify(args) {

//         FY.#handle.apply(this, arguments);

//     };
//     /** @arg {YT} args @this {Y} */
//     static #handle(args) {



//         FY.#create.apply(this, arguments);

//     };
//     /** @arg {YT} args @this {Y} */
//     static #create(args) {

//         const yc = this.getClass();

//         if (yc.config?.value?.stockMode ?? yc.config?.stockMode) {

//             yc.stock.push(this);

//         };

//     };

// };

// /**
//  * ### Y
//  * - Тип `SDIMFY`
//  * - Версия `1.0.0`
//  * - Цепочка `BDVHC`
//  * ***
//  * 
//  * Класс `Y`.
//  * 
//  * Базовый класс любого `SYLS` класса.
//  * 
//  * ***
//  * @class
// */
// export class Y extends FY {

//     /**
//      * ### do
//      * 
//      * ***
//      * 
//      * Метод выполнения кода в контексте данного экземпляра.
//      * 
//      * ***
//      * @arg {...((self: this, ...args) => void)} codes `Коды`
//      * @since `1.0.0`
//      * @method
//      * @public
//     */
//     do(...codes) {

//         try {

//             for (const code of codes) {

//                 if (typeof code !== 'function') continue;
    
//                 code(this);
    
//             };

//         } catch (error) {

//             console.error(error);

//         };

//         return this;

//     };
//     /**
//      * ### gong
//      * 
//      * ***
//      * 
//      * Метод заглушка.
//      * 
//      * Метод без логики для объявления начала методллогического полотна. Используется при форматировании.
//      * 
//      * ***
//      * @method
//      * @public
//     */
//     gong() {
        
//         return this;
        
//     };
//     /**
//      * ### cond
//      * 
//      * ***
//      * 
//      * Метод условной проверки.
//      * 
//      * ***
//      * @arg {...any} args `Аргументы`
//      * @arg {((self: this, ...args) => void)?} t `Истина`
//      * @arg {((self: this, ...args) => void)?} f `Ложь`
//      * @arg {(self: this, ...args) => boolean} cond `Условие`
//      * @method
//      * @public
//     */
//     cond(cond, t, f, ...args) {

//         if (typeof cond !== "function") {

//             return this;

//         };

//         if (cond(this, ...args)) {

//             if (typeof t === 'function') t(this, ...args);

//         } else {

//             if (typeof f === "function") f(this, ...args);

//         };

//         return this;

//     };
//     /**
//      * ### mode
//      * 
//      * ***
//      * 
//      * Метод установки режимов.
//      * 
//      * ***
//      * @arg {any} value `Значение`
//      * @arg {string} mode `Режим`
//      * @method
//      * @public
//     */
//     mode(mode, value) {

//         const args = yClassifyProp(arguments);

//         const options = [...args.array, ...args.string.map(string => [string])];

//         for (const option of options) {

//             [mode, value] = option;

//             if (!(mode in this)) {

//                 if (!((mode += 'Mode') in this)) {

//                     continue;

//                 };

//             };

//             this[mode] = value === undefined ? this[mode] ? false : true : !!value;

//         };

//         return this;

//     };
//     /**
//      * ### wrap
//      * 
//      * ***
//      * 
//      * Метод выполнения нового контекста.
//      * 
//      * ***
//      * @arg {Y1} target `Цель`
//      * @arg {(self: Y1) => void} wrapper `Обёртка`
//      * @arg {...any} args `Аргументы`
//      * @method
//      * @public
//      * @template Y1
//     */
//     wrap(wrapper, target, ...args) {

//         if (typeof wrapper !== 'function') {

//             return this;

//         };

//         wrapper(target, ...args);

//         return this;

//     };
//     /**
//      * ### fill
//      * 
//      * ***
//      * 
//      * 
//      * 
//      * ***
//      * 
//      * @public
//     */
//     fill() {



//     };
//     /**
//      * ### turn
//      * 
//      * ***
//      * 
//      * Метод переопределения метододологического холста.
//      * 
//      * ***
//      * @arg {Y1} y
//      * @method
//      * @public
//      * @returns {Y1&{getPrev()=>Y2}}
//      * @template Y1
//      * @template {this} Y2
//     */
//     turn(y) {
        
//         const prev = this;

//         const shell = new Proxy({

//             getPrev() {

//                 return prev;

//             },

//         }, {

//             get(t, p) {

//                 if (y[p]) {

//                     return y[p];

//                 } else {

//                     return t[p];

//                 };

//             },
//             set(t, p, v) {

//                 y[p] = v;

//                 return true;

//             },

//         });

//         Object.setPrototypeOf(shell, y);

//         return shell;
        
//     };
//     /**
//      * ### clone
//      * 
//      * ***
//      * 
//      * Метод клонирования объекта.
//      * 
//      * ***
//      * @arg {boolean?} link `Связь`
//      * @public
//     */
//     clone(link = true) {

//         return yClone(this, link);

//     };
//     /**
//      * ### equal
//      * 
//      * ***
//      * 
//      * Метод проверки на эквивалентность.
//      * 
//      * ***
//      * @arg {Y1} ject `Объект`
//      * @public
//      * @template Y1
//     */
//     equal(ject) {

//         return yEqual(this, ject);

//     };
//     /**
//      * ### default
//      * 
//      * ***
//      * 
//      * Метод замещения указанных значений объекта на дефолтные.
//      * 
//      * Если не указать ни одного свойства, то заменены будут все свойства.
//      * 
//      * ***
//      * @arg {...(keyof this)} props `Значения`
//      * @method
//      * @public
//     */
//     default(...props) {
    
//         if (!props.length) {

//             props = Object.keys(this);

//         } else {

//             props = props.filter(prop => prop in this);

//         };

//         const config = this.constructor.config;

//         for (const prop of props) {

//             this[prop] = (config.value[prop + 'Default'] ?? config.value.default);

//         };

//         return this;
        
//     };
//     /**
//      * ### unstock
//      * 
//      * ***
//      * 
//      * Метод удаления объекта из учёта.
//      * 
//      * Данный метод удаляет объект оптимальным и полным образом.
//      * Если объект представлен в единственном экземпляре, то будет удалён только один экземпляр без перебора.
//      * Если же объектов несколько, то будут удалены все его экземпляры.
//      * 
//      * ***
//      * @method
//      * @public
//     */
//     unstock() {
        
//         const image = this.getClass();

//         let index = image.stock.indexOf(this);

//         if (index !== -1) {

//             image.stock.splice(index, 1);

//         };

//         index = image.stock.indexOf(this);

//         if (index !== -1) {

//             image.stock = image.stock.filter(item => item !== this)

//         };

//         return this;
        
//     };

//     /**
//      * ### adopt
//      * - Версия `1.0.0`
//      * - Модуль `ject`
//      * ***
//      *
//      * Метод {@link yAdopt|перенятия} свойств обладателя.
//      *
//      * ***
//      * @arg {Y1} owner `Обладатель`
//      * @arg {Y2} config `Конфигуратор`
//      * @since `1.0.0`
//      * @public
//      * @method
//      * @version `1.0.0`
//      * @template Y1,Y2
//     */
//     adopt(owner, config) {

//         return yAdopt(this, owner, config);

//     };
//     /**
//      * ### adoptDefault
//      * - Версия `0.0.0`
//      * - Модуль `ject`
//      * ***
//      *
//      * Метод {@link yAdoptDefault|перенятия} дефолт свойств обладателя.
//      *
//      * ***
//      * @arg {{}} owner `Обладатель`
//      * @public
//     */
//     adoptDefault(owner) {

//         return yAdoptDefault(this, owner);

//     };

//     /**
//      * ### print
//      * 
//      * ***
//      * 
//      * Метод отображения объекта.
//      * 
//      * ***
//      * @public
//     */
//     print() {

//         console.log(this);

//         return this;

//     };
//     /**
//      * ### printProp
//      * 
//      * ***
//      * 
//      * Метод отображения свойства объекта.
//      * 
//      * ***
//      * @arg {...(keyof this)} props `Свойство`
//      * @method
//      * @public
//     */
//     printProp(...props) {

//         if (!props.every(elem => elem instanceof Array)) {

//             props = [props];

//         };

//         for (const prop of props) {

//             let focus = this;

//             for (const part of prop) {

//                 if (part in focus) {

//                     focus = focus[part]

//                 } else {

//                     break;

//                 };

//             };

//             console.log(focus);

//         };

//         return this;
        
//     };
//     /**
//      * ### printExec
//      * 
//      * ***
//      * 
//      * Метод отображения результата кодовых операций в контексте текущего объекта.
//      * 
//      * ***
//      * @arg {...(self:this)=>any} codes `Коды`
//      * @method
//      * @public
//     */
//     printExec(...codes) {
        
//         for (const code of codes) {

//             console.log(code(this));

//         };

//         return this;
        
//     };
//     /**
//      * ### printTable
//      * 
//      * ***
//      * 
//      * Метод отображения данных в табличном виде.
//      * 
//      * ***
//      * @arg {...this} jects `Объекты`
//      * @since `1.0.0`
//      * @method
//      * @public
//     */
//     printTable(...jects) {

//         console.table([this, ...jects]);

//         return this;

//     };

//     /**
//      * ### supplement
//      * - Версия `0.0.0`
//      * - Модуль `ject`
//      * ***
//      *
//      * Метод {@link ySupplement|дополнения} свойствами указанного дополнителя.
//      *
//      * ***
//      * @arg {{}} supplementer `Дополнитель`
//      * @public
//      * @method
//     */
//     supplement(supplementer) {

//         return ySupplement(this, supplementer);

//     };

//     /**
//      * ### getClass
//      * 
//      * ***
//      * 
//      * Метод получения класса экземпляра.
//      * 
//      * ***
//      * @method
//      * @public
//      * @returns {typeof Y}
//     */
//     getClass() {

//         return Y;
        
//     };
//     /**
//      * ### getProperty
//      * - Версия `0.0.0`
//      * ***
//      *
//      * Метод {@link yGetProperty|получения} указанного свойства.
//      *
//      * ***
//      * @arg {string} property `Свойство`
//      * @public
//     */
//     getProperty(property) {

//         return yGetProperty(this, property);

//     };
//     /**
//      * ### getPropertyByPath
//      * - Версия `0.0.0`
//      * ***
//      *
//      * Метод {@link yGetPropertyByPath|получения свойства по указанному пути}.
//      *
//      * ***
//      * @arg {string} path `Путь`
//      * @public
//     */
//     getPropertyByPath(path) {

//         return yGetPropertyByPath(this, path);

//     };

// };

//#region YI

import { configY as config } from './config.mjs';
import { yAdopt, yAdoptDefault, yClone, yCorrelate, yEqual, yGetProperty, yGetPropertyByPath, ySupplement, yClassifyProp, } from "./module.mjs";

//#endregion

/**
 * ### Y
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class Y {
    
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
     * @type {Y[]}
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
     * ### do
     * 
     * ***
     * 
     * Метод выполнения кода в контексте данного класса.
     * 
     * ***
     * @arg {...((self: typeof Y, ...args) => void)} codes `Коды`
     * @static
     * @method
     * @public
    */
    static do(...codes) {
        
        Y.prototype.do.apply(this, codes);

        return this;
        
    };
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
    /**
     * ### appendModule
     * 
     * ***
     * 
     * Метод добавления модулей.
     * 
     * ***
     * @arg {...Y1} values `Значения`
     * @static
     * @method
     * @public
     * @template {typeof Y} Y1
    */
    static appendModule(...values) {

        for (const value of values) {

            if (!(value instanceof Function && value.prototype instanceof Y)) continue;

            Y.modules.push(value);

        };

        return this;
        
    };
    /**
     * ### becomePrototype
     * 
     * ***
     * 
     * Метод установки текущего класса, как прототипа указанному объекту.
     * 
     * ***
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&Y)?}
     * @template Y1
    */
    static becomePrototype(value) {
        
        if (!(value instanceof Object)) return null;

        Object.setPrototypeOf(value, this);

        if (typeof value === 'function' && 'prototype' in value) {

            Object.setPrototypeOf(value['prototype'], this.prototype);

        };

        return value;
        
    };
    
    //#endregion
    
    /**
     * ### YConstructor
     * 
     * 
     * 
     * ***
     * @arg {YT} args `Аргументы`
     * 
     * Представлены единым объектом носителем аргументов.
     * 
     * ***
     * @constructor
    */
    constructor(...args) {
        
        try {
            
            //#region verify
            

            
            //#endregion
            //#region handle
            
            
            
            //#endregion
            //#region comply
            
            
            
            //#endregion
            
            return this

                .correlate()
            
            
        } catch (err) {
            
            if (config.strictMode) {
                
                throw err;
                
            };
            
        } finally {
            
            
            
        };
        
    };
    
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

        const aliases = this.constructor?.config?.value?.aliases;

        if (aliases) {

            return yCorrelate(this, ...aliases);

        };

        return this;

    };

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
     * ### gong
     * 
     * ***
     * 
     * Метод заглушка.
     * 
     * Метод без логики для объявления начала методллогического полотна. Используется при форматировании.
     * 
     * ***
     * @method
     * @public
    */
    gong() {
        
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

            this[prop] = (config.value[prop + 'Default'] ?? config.value.default);

        };

        return this;
        
    };
    /**
     * ### unstock
     * 
     * ***
     * 
     * Метод удаления объекта из учёта.
     * 
     * Данный метод удаляет объект оптимальным и полным образом.
     * Если объект представлен в единственном экземпляре, то будет удалён только один экземпляр без перебора.
     * Если же объектов несколько, то будут удалены все его экземпляры.
     * 
     * ***
     * @method
     * @public
    */
    unstock() {
        
        const image = this.getClass();

        let index = image.stock.indexOf(this);

        if (index !== -1) {

            image.stock.splice(index, 1);

        };

        index = image.stock.indexOf(this);

        if (index !== -1) {

            image.stock = image.stock.filter(item => item !== this)

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

Y

    .appendModule(Y)
    .do(self => self.becomePrototype(config))

//#endregion

/**
 * @file y/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/