//#region YI

import { YArg } from '@syls/y/arg';
import { configStat as config } from './config.mjs';
import { Y } from '@syls/y';

//#endregion
//#region YT

/** ### YStatT
 * - Тип `T`
 * 
 * Основной параметр модуля `YStat`.
 * 
 * @typedef {YStatTE&YStatTU&Y} YStatT
 * 
*/
/** ### YStatTE
 * - Тип `TE`
 * 
 * Параметр наследования `YStat`.
 * 
 * @typedef {Omit<DStat, keyof SStat>} YStatTE
 * 
*/
/** ### YStatTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YStat`.
 * 
 * @typedef YStatTU
 * @prop {any} _
 * 
*/

//#endregion

class SStat extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YStat[]}
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
     * @arg {...YStat} args `Аргументы`
     * @returns {YStat[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SStat).create.apply(this, args);
        
    };
    
};
class DStat extends SStat {
    
    
    
};
class IStat extends DStat {
    
    /**
     * ### string
     * 
     * Строка.
     * 
     * *** 
     * @type {string}
     * @field
     * @protected
    */
    string;
    /**
     * ### frequencyWords
     * 
     * Частота слов.
     * 
     * *** 
     * @type {[string, number][]}
     * @field
     * @public
    */
    frequencyWords;
    /**
     * ### frequency
     * 
     * Частота.
     * 
     * *** 
     * @type {[string, number][]}
     * @field
     * @protected
    */
    frequencySymbols;
    
};
class MStat extends IStat {
    
    
    
};
class FStat extends MStat {
    
    /**
     * ### YStat.constructor
     * 
     * 
     * 
     * ***
     * @arg {YStatT} args
    */
    constructor(args) {
        
        super(args = FStat.#before(args = arguments));
        
        FStat.#deceit.apply(this, [args]);
        
        return this.correlate();
        
    };
    
    /** @arg {DStat} args */
    static #before(args) {
        
        /** @type {YArg<IStat>} */
        const yarg = args instanceof YArg ? args : new YArg(args);
        
        yarg.dataUsed.string = yarg.extract('string');
        
        return yarg;
        
    };
    /** @arg {YArg<IStat>} args @this {YStat} */
    static #deceit(args) {
        
        try {
            
            FStat.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YStat();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<IStat>} args @this {YStat} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FStat.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<IStat>} args @this {YStat} */
    static #handle(args) {
        
        
        
        FStat.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<IStat>} args @this {YStat} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YStat
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YStat`.
 * 
 * ***
 * @class
 * 
*/
export class YStat extends FStat {
    
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
     * @returns {typeof YStat}
    */
    getClass() {
        
        return YStat;
        
    };
    /**
     * ### getFrequencyWord
     * 
     * ***
     * 
     * Метод получения частоты употребления слов.
     * 
     * ***
     * 
     * @method
     * @public
    */
    getFrequencyWords() {
        
        let result = [];

        const matches = this.string.match(/\p{L}+ | \p{L}+/uimsg);

        if (matches) for (const word of matches.map(word => word.toLowerCase().trim())) {

            let index = result.findIndex(pair => pair[0] === word);
            let pair = result[index];

            if (!pair) {

                result.push(pair = [word, 0]);

            };

            pair[1]++;

            for (let count = index - 1; count >= 0; count--) {

                if (result[count][1] < pair[1]) {

                    [result[count], result[count + 1]] = [result[count + 1], result[count]];

                } else break;

            };

        };

        this.frequencyWords = result;

        return result;
        
    };
    /**
     * ### getFrequencySymbols
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @method
     * @public
    */
    getFrequencySymbols() {
        
        let result = [];

        for (const char of this.string) {

            let index = result.findIndex(pair => pair[0] === char);
            let pair = result[index];

            if (!pair) {

                result.push(pair = [char, 0]);

            };

            pair[1]++;

            for (let count = index - 1; count >= 0; count--) {

                if (result[count][1] < pair[1]) {

                    [result[count], result[count + 1]] = [result[count + 1], result[count]];

                } else break;

            };

        };

        this.frequencySymbols = result;

        return result;
        
    };
    
};

/**
 * @file stat/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/