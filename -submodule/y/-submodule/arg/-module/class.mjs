//#region YI

import { Y } from "../../../-module/export.mjs";
import { configArg as config } from './config.mjs';
import { argClassify } from "./module.mjs";

//#endregion
//#region YT

/** ### YArgT
 * - Тип `T`
 * 
 * Основной параметр модуля `YArg`.
 * 
 * ***
 * 
 * @typedef {YArgTE&YArgTU} YArgT
*/
/** ### YArgTE
 * - Тип `TE`
 * 
 * Параметр наследования `YArg`.
 * 
 * @typedef {Omit<DArg, keyof SArg>} YArgTE
*/
/** ### YArgTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YArg`.
 * 
 * @typedef YArgTU
 * @prop {} _
*/
/** ### YArgTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YArg`.
 * 
 * @typedef YArgTUG
 * @prop {null} _
*/

/** ### argTIArgs
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * 
 * @typedef {import("./module.mjs").argTArgs} argTIArgs
 * 
*/

//#endregion

/**
 * @template Y1
*/
class SArg extends Y {
    
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
        
        return Object.getPrototypeOf(SArg).create.apply(this, [...args]);
        
    };
    
};
/**
 * @extends SArg<Y1>
 * @template Y1
*/
class DArg extends SArg {
    
    /**
     * ### used
     * 
     * Используемые аргументы.
     * 
     * *** 
     * @type {Y1}
     * @field
     * @public
    */
    dataUsed = {};
    /**
     * ### free
     * 
     * Свободные аргументы.
     * 
     * *** 
     * @type {import("../../../-module/module.mjs").yTArgs}
     * @field
     * @public
    */
    dataFree;
    
};
/**
 * @extends DArg<Y1>
 * @template Y1
*/
class IArg extends DArg {
    

    
};
/**
 * @extends IArg<Y1>
 * @template Y1
*/
class MArg extends IArg {
    
    
    
};
/**
 * @extends MArg<Y1>
 * @template Y1
*/
class FArg extends MArg {
    
    /**
     * ### YArg.constructor
     * 
     * 
     * 
     * ***
     * @arg {YArgT&G} args
    */
    constructor(args) {
        
        super(args = FArg.#before(args = arguments));
        
        FArg.#deceit.apply(this, [args]);
        
    };
    
    /** @arg {DArg} args */
    static #before(args) {
        
        return {

            dataFree: argClassify(...args),

        };
        
    };
    /** @arg {YArgT} args @this {YArg} */
    static #deceit(args) {
        
        try {
            
            FArg.#verify.apply(this, [args = { ...args }]);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YArg();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArgT} args @this {YArg} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FArg.#handle.apply(this, arguments);
        
    };
    /** @arg {YArgT} args @this {YArg} */
    static #handle(args) {
        
        
        
        FArg.#create.apply(this, arguments);
        
    };
    /** @arg {YArgT} args @this {YArg} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args);
        
    };
    
};

/**
 * ### YArg
 * - Тип `SDIMFY`
 * - Версия `1.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YArg`.
 * 
 * ***
 * @class
 * @template Y1
 * @extends FArg<YArgTUG&Y1>
 * 
*/
export class YArg extends FArg {
    
    /** @arg {Y1} args */
    constructor(args) { super(...arguments); };
    
    /**
     * ### set
     * 
     * ***
     * 
     * Метод утсановки значений.
     * 
     * ***
     * @arg {...[keyof Y1, keyof argTIArgs]} values `Значения`
     * @method
     * @public
    */
    set(...values) {
        
        for (const value of values) {

            for (const type of value.slice(1)) {

                if (!(type in this.dataFree && this.dataFree[type].length)) continue;

                this.dataUsed[value[0]] = this.extract(type);
                break;

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

            this.values = argClassify(this.values.ject[0][1]);

        };

        return this;

    };
    /**
     * ### isJectTransmit
     * 
     * ***
     * 
     * Метод проверки аргумента на `объект-носитель`.
     * 
     * `Объект-носитель` - это объект, переносящий аргументы. Его свойства испотльзуются как неупорядоченные аргументы, размеченные названиями, по которым
     * удаётся определить его предназначение и истинный порядок.
     * 
     * ***
     * @method
     * @public
    */
    isJectTransmit() {

        let result = true;

        for (const key in this.values) {

            if ((key === 'ject' && this.values[key].length !== 1) || (key !== 'ject' && this.values[key].length)) {

                result = false;
                break;

            };

        };

        return result;

    };
    
};

//#region YE

YArg.getY().appendModule(YArg);

//#endregion YE

/**
 * @file arg/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/