//#region YI

import { Y } from "../../../-module/class.mjs";
import { argClassify } from "./module.mjs";
import { configArg as config } from "./config.mjs";
import { yIsInstance } from "../../../-module/module.mjs";

//#endregion
//#region YT

/** ### argTC
 * @typedef argTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').argT&argTC} argT */

//#endregion

/**
 * ### YArg
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
export class YArg extends Y {
    
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
     * @type {YArg[]}
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
     * @arg {...YArg} args `Аргументы`
     * @returns {YArg[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YArg)?}
     * @template {YArg} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### dataUsed
     * 
     * Используемые данные.
     * 
     * *** 
     * @type {Y1}
     * @since `1.0.0`
     * @field
     * @public
    */
    dataUsed = {};
    /**
     * ### dataFree
     * 
     * Свободные данные.
     * 
     * *** 
     * @since `1.0.0`
     * @type {import("./module.mjs").argTArgs}
     * @field
     * @public
    */
    dataFree;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @returns {YArg}
     * @override
    */
    
    getClass() {
        
        return YArg;
        
    };

    /**
     * ### isJectTransmit
     * 
     * Метод проверки аргумента на `объект-носитель`.
     * 
     * `Объект-носитель` - это объект, переносящий аргументы. Его свойства испотльзуются как неупорядоченные аргументы, размеченные названиями, по которым
     * удаётся определить его предназначение и истинный порядок.
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
    isJectTransmit() {
        
        if (!this.dataFree.ject.length) return false;

        for (const key in this.dataFree) {

            if (this.dataFree[key].length > 0 && key !== 'ject') {

                return false;

            };

        };

        return true;
        
    };
    /**
     * ### set
     * 
     * Метод установки значений.
     * 
     * ***
     * @arg {...[keyof Y1, ...(keyof import("./module.mjs").argTArgs)[]]} values `Значения`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    set(...values) {
        
        for (const value of values) {

            const key = value[0];
            const types = value.slice(1);

            if (!types.length) continue;

            if (types.length === 1) {

                if (!(types[0] in this.dataFree && this.dataFree[types[0]].length)) continue;

                this.dataUsed[key] = this.extract(types[0]);

            } else {

                this.dataUsed[key] = [];

                for (const type of types) {

                    if (!(type in this.dataFree && this.dataFree[type].length)) continue;
    
                    const ext = this.extract(type);

                    if (yIsInstance(ext, Array)) this.dataUsed[key].push(...ext);
                    else this.dataUsed[key].push(ext);
    
                };

            };

        };

        return this;
        
    };
    /**
     * ### setAll
     * 
     * Метод установки всех значений из пула свободных значений для указанного ключа.
     * 
     * ***
     * @arg {...[keyof Y1, ...(keyof import("./module.mjs").argTArgs)[]]} values `Значения`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    setAll(...values) {
        
        for (const value of values) {

            const key = value[0];
            const types = value.slice(1);

            if (!types.length) continue;

            if (types.length === 1) {

                if (!(types[0] in this.dataFree && this.dataFree[types[0]].length)) continue;

                this.dataUsed[key] = this.extractAll(types[0]);

            } else {

                this.dataUsed[key] = [];

                for (const type of types) {

                    if (!(type in this.dataFree && this.dataFree[type].length)) continue;

                    this.dataUsed[key].push(...this.extractAll(type));
    
                };

            };

        };

        return this;
        
    };

    /**
     * ### getData
     * 
     * ***
     * 
     * Метод получения используемых данных.
     * 
     * ***
     * @method
     * @public
    */
    getData() {
        
        return this.dataUsed;
        
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
     * @returns {typeof YArg}
    */
    getClass() {
        
        return YArg;
        
    };
    /**
     * ### extract
     * 
     * ***
     * 
     * Метод извлечения свойства из аргументов.
     * 
     * Извлечение подразумевает получение аргумента из пула с удалением.
     * 
     * ***
     * @arg {Y1} section `Секция`
     * @arg {number} index `Индекс`
     * @method
     * @public
     * @returns { argTIArgs[section][0] }
     * @template { argTIArgs } Y1
    */
    extract(section, index = 0) {

        if (this.dataFree[section]?.length) {

            return this.dataFree[section].splice(index, 1)[0][1];

        };

        return undefined;

    };
    /**
     * ### extractAll
     * 
     * Метод извлечения всех значений из типа.
     * 
     * ***
     * @arg {Y1} section `Секция`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    extractAll(section) {
        
        if (this.dataFree[section]?.length) {

            return this.dataFree[section].splice(0);

        };

        return null;
        
    };
    /**
     * ### extractMany
     * 
     * ***
     * 
     * Метод множественного извлечения аргументов.
     * 
     * ***
     * @arg {Y1} section `Секция`
     * @arg {...number} indexs `Индексы`
     * @method
     * @public
     * @returns { argTIArgs[section][0][] }
     * @template { keyof argTIArgs } Y1
    */
    extractMany(section, ...indexs) {
        
        const result = [];

        for (const index of indexs
            
            .filter(index => condIsNumber(index) && index < this.values[section].length)
            .sort((p, c) => p - c).reverse()
            .reverse()
            
        ) {

            result.push(this.extract(section, index));

        };

        return result;
        
    };
    /**
     * ### extractByProperty
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @arg {Y1} section `Секция`
     * @arg {string} property `Свойство`
     * @method
     * @public
     * @returns { argTIArgs[section][0] }
     * @template { keyof argTIArgs } Y1
    */
    extractByProperty(section, property) {
        
        if (this.values[section]?.length) {

            return this.values[section].find(arg => arg[0] === property)[1] ?? undefined;

        };

        return undefined;
        
    };
    /**
     * ### uncover
     * 
     * ***
     * 
     * Метод раскрытия объекта-носителя аргументов.
     * 
     * Раскрытие позволяет вынести свойства единственно переданного в аргумент объекта на верхний уровень и произвести повторную сортировку.
     * Метод срабатывает исключительно при условии, что в аргументе был передан только единственный объект.
     * 
     * ***
     * @method
     * @public
    */
    uncover() {

        if (this.isJectTransmit()) {

            this.dataFree = argClassify(this.dataFree.ject[0][1]);

        };

        return this;

    };
    
    //#endregion
    
    /**
     * ### YArgConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {argTC&Y1} args `Аргументы`
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
            
            super();
            
            //#endregion
            //#region verify
            
            
            
            //#endregion
            //#region handle
            
            
            
            //#endregion
            //#region comply
            
            
            
            //#endregion
            
            return this
            
                .adopt({ dataFree: argClassify(...args) })
            
            
        } catch (err) {
            
            if (config.params.strictMode) {
                
                throw err;
                
            };
            
        } finally {
            
            
            
        };
        
    };
    
};

/**
 * @file arg/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/