//#region YI

import { Y, argClassify } from '../../../y/_module/type.js';
import { YInsert } from '../insert/class.mjs';


//#endregion
//#region YT

/** ### YLineT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YLine`.
 * 
 * @typedef {YLineTE&YLineTU} YLineT
 * 
*/
/** ### YLineTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YLine`.
 * 
 * @typedef {{[p in Exclude<keyof DLine,keyof SLine>|Exclude<keyof SLine,keyof DLine>]:(DLine[p]&SLine[p])}} YLineTE
 * 
*/
/** ### YLineTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YLine`.
 * 
 * @typedef YLineTU
 * @prop {any} _
 * 
*/

//#endregion

class SLine extends Y {
    
    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DLine extends SLine {
    
    /**
     * ### index
     * 
     * Индекс.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    index;
    
};
class ILine extends DLine {
    
    /**
     * ### inserts
     * 
     * Вставки.
     * 
     * *** 
     * @type {YInsert[]}
     * @public
    */
    inserts = [];
    
};
class MLine extends ILine {
    
    
    
};
class FLine extends MLine {
    
    /**
     * ### YLine.constructor
     * 
     * 
     * 
     * ***
     * @arg {YLineT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FLine.#before(t), {}));
        
        FLine.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YLineT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YLine].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: 
                case 1: r.index = t[0];
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YLineT} t @this {YLine} */
    static #deceit(t) {
        
        try {
            
            FLine.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YLineT} t @this {YLine} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FLine.#handle.apply(this, [t]);
        
    };
    /** @arg {YLineT} t @this {YLine} */
    static #handle(t) {
        
        
        
        FLine.#create.apply(this, [t]);
        
    };
    /** @arg {YLineT} t @this {YLine} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(config);
            
        };
        
    };
    
};

/**
 * ### YLine
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YLine extends FLine {
    
    /**
     * ### appendInserts
     * - Версия `0.0.0`
     * ***
     * 
     * Метод добавления вставок.
     * 
     * ***
     * @arg {...YInsert} inserts `Вставки`
     * @public
    */
    appendInserts(...inserts) {
        
        for (let insert of inserts) {

            if (insert instanceof Array) {

                insert = new YInsert(...insert);

            };

            if (!this.inserts.find(insertThis => insertThis.index === insert.index)) {

                this.inserts.push(insert instanceof YInsert ? insert : new YInsert(...insert));

            };

        };

        this.inserts = this.inserts.sort((p, c) => p.index - c.index);

        return this;
        
    };
    
};