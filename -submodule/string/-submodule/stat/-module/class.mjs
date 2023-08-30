//#region YI

import { Y, yClassifyProp } from '@syls/y';

let config = null;

await import('./config.mjs')

    .then(c => config = c.default?.value ? c.default.value : c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(e => error = e.default)
    .catch(e => e);

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
 * @prop {YString} string
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
        
        return Object.getPrototypeOf(SStat).create.apply(this, [...args]);
        
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
     * ### frequency
     * 
     * Частота.
     * 
     * *** 
     * @type {[string, number][]}
     * @field
     * @protected
    */
    frequency;
    
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
     * @arg {YStatT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FStat.#before(t), {}));
        
        FStat.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YStatT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YStat].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
            return r;
            
        } else if (!t.length) {
            
            return r;
            
        };
        
        if (t[0]?._ytp) {
        
            t = [...t[0]._ytp];
        
        };

        const arg = yClassifyProp(t);
        
        r.string = arg.string[0];
        
        if (!Object.values(r).length) {
            
            r = { _ytp: t, };
            
        };
        
        return r;
        
    };
    /** @arg {YStatT} t @this {YStat} */
    static #deceit(t) {
        
        try {
            
            FStat.#verify.apply(this, [t = { ...t }]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YStatT} t @this {YStat} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FStat.#handle.apply(this, [t]);
        
    };
    /** @arg {YStatT} t @this {YStat} */
    static #handle(t) {
        
        
        
        FStat.#create.apply(this, [t]);
        
    };
    /** @arg {YStatT} t @this {YStat} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this
            .adopt(t)
            .adoptDefault(this.constructor.config ?? config);
        
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
     * ### getFrequency
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
    getFrequency() {
        
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

        this.frequency = result;

        return result;
        
    };
    
};