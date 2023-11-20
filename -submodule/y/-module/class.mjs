//#region YI

import { configY as config } from "./config.mjs";
import { yAdopt, yAdoptDefault, yClone, yCorrelate, yEqual, yFill, yForDeep, yGetPropByKeys, ySetClass, ySetProp, ySetPropByKeys, yStat, yTurn } from "./module.mjs";

//#endregion
//#region YT

/** ### yTC
 * @typedef yTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').yT&yTC} yT */

//#endregion


/**
 * ### Y
 * 
 * Базовый класс `SYLS`.
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
     * Метод выполнения кода в контексте данного класса.
     * 
     * ***
     * 
     * @arg {...((self: typeof Y, ...args) => void)} codes `Коды`
     * 
     * ***
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
     * ### create
     * 
     * Статический метод создания множества экземпляров на основе указанных массивов данных.
     * 
     * ***
     * @arg {...Y} args `Аргументы`
     * @returns {Y[]}
     * ***
     * @static
     * @method
     * @public
     * @since `1.0.0`
     * @version `1.0.0`
    */
    static create(...args) {
        
        const result = [];

        for (const index in args) result[index] = new this(args[index]);

        return result;
        
    };
    /**
     * ### setClass
     * 
     * Метод установки текущего класса, как класс указнного объекта.
     * 
     * ***
     * @arg {Y1} target `Значение`
     * @template Y1
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @static
     * @method
     * @public
    */
    static setClass(target) {
        
        return ySetClass(target, this);
        
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
    
    //#endregion
    //#region field
    
    
    
    //#endregion
    //#region method
    
    /**
     * ### do
     * 
     * Метод выполнения кода в контексте данного экземпляра.
     * 
     * ***
     * 
     * @arg {...((self: this, ...args) => void)} codes `Коды`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
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
     * ### getStat
     * 
     * Метод получения статистики по текущему объекту.
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
    getStat() {
        
        return yStat(this);   
        
    };
    /**
     * ### getClass
     * 
     * Метод получения класса текущего экземпляра.
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
    getClass() {
        
        return Y;
        
    };
    /**
     * ### getPropByKeys
     * 
     * Метод получения значения по указанному ключу.
     * 
     * ***
     * @arg {...yT['key']} key `Ключ`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getPropByKeys(...keys) {

        return yGetPropByKeys(this, ...keys);
        
    };
    /**
     * ### setProp
     * 
     * Метод установки значения.
     * 
     * ***
     * @arg {any} value `Значение`
     * @arg {keyof this} key `Ключ`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setProp(key, value) {
        
        ySetProp(this, key, value);

        return this;
        
    };
    /**
     * ### setPropByKeys
     * 
     * Метод установки указанного значения свойству текущего объекта по указанным ключам.
     * 
     * ***
     * @arg {yT['params']} value `Значение`
     * @arg {...yT['key']} keys `Ключи`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setPropByKeys(value, ...keys) {
        
        ySetPropByKeys(this, keys, value);

        return this;
        
    };
    /**
     * ### forDeep
     * 
     * Метод получения генератора для перебора свойств текущего объекта.
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
    forDeep() {
        
        return yForDeep(this);
        
    };
    /**
     * ### mode
     * 
     * Метод переключения режимов объекта.
     * 
     * ***
     * 
     * @arg {...yT['mode']} modes `Режимы`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    mode(...modes) {
        
        yMode(this, ...modes);

        return this;
        
    };
    /**
     * ### fill
     * 
     * Метод заполнения свойств текущего объекта, совпадающими свойствами `image`.
     * 
     * ***
     * 
     * @arg {yT['image']} image `Образ`
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    fill(image) {
        
        yFill(this, image);

        return this;
        
    };
    /**
     * ### turn
     * 
     * Метод перехода с текущего объекта на `ject` с возможностью возврата.
     * 
     * ***
     * @arg {Y1} ject `Объект`
     * @template Y1
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    turn(ject) {
        
        return yTurn(this, ject);
        
    };
    /**
     * ### print
     * 
     * Метод отображения состояния текущего объекта.
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
    print() {
        
        console.log(this);

        return this;
        
    };
    /**
     * ### printExec
     * 
     * Метод отображения результата кодовых операций в контексте текущего объекта.
     * 
     * ***
     * @arg {...(self:this)=>any} codes `Коды`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
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
     * ### clone
     * 
     * Метод клонирования текущего объекта.
     * 
     * ***
     * @returns {Y1}
     * @template {this} Y1
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    clone() {
        
        const clone = yClone(this);

        if (!clone) throw new Error();
        
        return clone;
        
    };
    /**
     * ### equal
     * 
     * Метод сравнения `this` с `jects`.
     * 
     * ***
     * @arg {...yT['ject']} jects `Объекты`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    equal(...jects) {
        
        return yEqual(this, ...jects);
        
    };
    /**
     * ### adopt
     * 
     * Метод дополнения текущего объекта свойствами из `image` и `conf`.
     * 
     * ***
     * @arg {yT['conf']} conf `Конфигуратор`
     * @arg {yT['image']} image `Образ`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    adopt(image, conf) {
        
        yAdopt(this, image, conf);

        return this;
        
    };
    /**
     * ### adoptDefault
     * 
     * Метод дополнения текущего объекта дефолт-свойствами из указанного `conf`.
     * 
     * ***
     * @arg {yT['conf']} conf `Конфигуратор`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    adoptDefault(conf) {
        
        yAdoptDefault(this, conf);

        return this;
        
    };
    /**
     * ### correlate
     * 
     * Метод корреляции.
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
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
    
    //#endregion
    
    /**
     * ### YConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {yTC} args `Аргументы`
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
            
            
            
        } catch (err) {
            
            if (config.params.strictMode) {
                
                throw err;
                
            };
            
        } finally {
            
            
            
        };
        
    };
    
};















// //#region YI

// import { configY as config } from './config.mjs';
// import { yAdopt, yAdoptDefault, yClone, yCorrelate, yEqual, yGetProp, yGetPropByPath, yMode, } from "./module.mjs";

//#endregion

// /**
//  * ### Y
//  * - Тип `S`
//  * - Версия `1.0.0`
//  * ***
//  * 
//  * 
//  * 
//  * ***
//  * 
//  * 
//  * 
//  * ***
//  * @class
//  * @since `1.0.0`
//  * @version `1.0.0`
//  * 
// */
// export class Y {
    
//     //#region static
    
//     static {
        
        
        
//     };
    
//     /**
//      * ### stock
//      * 
//      * ***
//      * 
//      * 
//      * 
//      * ***
//      * @type {Y[]}
//      * @field
//      * @static
//      * @public
//     */
//     static stock = [];
//     /**
//      * ### config
//      * 
//      * 
//      * 
//      * ***
//      * @field
//      * @static
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

//             if (!(value instanceof Function && value.prototype instanceof Y)) continue;

//             Y.modules.push(value);

//         };

//         return this;
        
//     };
//     /**
//      * ### setClass
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
//     static setClass(value) {
        
//         if (!(value instanceof Object)) return null;

//         Object.setPrototypeOf(value, this);

//         if (typeof value === 'function' && 'prototype' in value) {

//             Object.setPrototypeOf(value['prototype'], this.prototype);

//         };

//         return value;
        
//     };
    
//     //#endregion
    
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

//     /**
//      * ### YConstructor
//      * 
//      * 
//      * 
//      * ***
//      * @arg {YT} args `Аргументы`
//      * 
//      * Представлены единым объектом носителем аргументов.
//      * 
//      * ***
//      * @constructor
//     */
//     constructor(...args) {
        
//         try {
            
//             //#region verify
            

            
//             //#endregion
//             //#region handle
            
            
            
//             //#endregion
//             //#region comply
            
            
            
//             //#endregion
            
//             return this

//                 .correlate()
            
            
//         } catch (err) {
            
//             if (config.strictMode) {
                
//                 throw err;
                
//             };
            
//         } finally {
            
            
            
//         };
        
//     };

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
//     // /**
//     //  * ### mode
//     //  * 
//     //  * ***
//     //  * 
//     //  * Метод установки режимов.
//     //  * 
//     //  * ***
//     //  * @arg {any} value `Значение`
//     //  * @arg {string} mode `Режим`
//     //  * @method
//     //  * @public
//     // */
//     // mode(mode, value) {

//     //     const args = yClassifyProp(arguments);

//     //     const options = [...args.array, ...args.string.map(string => [string])];

//     //     for (const option of options) {

//     //         [mode, value] = option;

//     //         if (!(mode in this)) {

//     //             if (!((mode += 'Mode') in this)) {

//     //                 continue;

//     //             };

//     //         };

//     //         this[mode] = value === undefined ? this[mode] ? false : true : !!value;

//     //     };

//     //     return this;

//     // };
    
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

//             this[prop] = (config.params[prop + 'Default'] ?? config.params.default);

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
//      * Метод {@link yGetProp|получения} указанного свойства.
//      *
//      * ***
//      * @arg {string} property `Свойство`
//      * @public
//     */
//     getProperty(property) {

//         return yGetProp(this, property);

//     };
//     /**
//      * ### getPropertyByPath
//      * - Версия `0.0.0`
//      * ***
//      *
//      * Метод {@link yGetPropByPath|получения свойства по указанному пути}.
//      *
//      * ***
//      * @arg {string} path `Путь`
//      * @public
//     */
//     getPropertyByPath(path) {

//         return yGetPropByPath(this, path);

//     };
    
// };

//#region YE

// Y

//     .appendModule(Y)
//     .do(self => self.setClass(config))

//#endregion

/**
 * @file y/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/