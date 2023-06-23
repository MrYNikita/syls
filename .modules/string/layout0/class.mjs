//#region YI

import { condIsNumber } from '@syls/cond';
import { Y, argClassify } from '@syls/Y';
import { YInsert } from './insert/class.mjs';
import { YLine } from './line/class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YLayoutT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YLayout`.
 * 
 * @typedef {YLayoutTE&YLayoutTU} YLayoutT
 * 
*/
/** ### YLayoutTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YLayout`.
 * 
 * @typedef {{[p in Exclude<keyof DLayout,keyof SLayout>|Exclude<keyof SLayout,keyof DLayout>]:(DLayout[p]&SLayout[p])}} YLayoutTE
 * 
*/
/** ### YLayoutTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YLayout`.
 * 
 * @typedef YLayoutTU
 * @prop {any} _
 * 
*/

//#endregion

class SLayout extends Y {
    
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
class DLayout extends SLayout {
    
    
    
};
class ILayout extends DLayout {
    
    /**
     * ### lines
     * 
     * Линии.
     * 
     * *** 
     * @type {YLine[]} 
     * @public
    */
    lines = [];
    
};
class MLayout extends ILayout {
    
    
    
};
class FLayout extends MLayout {
    
    /**
     * ### YLayout.constructor
     * 
     * 
     * 
     * ***
     * @arg {YLayoutT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FLayout.#before(t), {}));
        
        FLayout.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YLayoutT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YLayout].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                case 3: 
                case 2: 
                case 1: 
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YLayoutT} t @this {YLayout} */
    static #deceit(t) {
        
        try {
            
            FLayout.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YLayoutT} t @this {YLayout} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FLayout.#handle.apply(this, [t]);
        
    };
    /** @arg {YLayoutT} t @this {YLayout} */
    static #handle(t) {
        
        FLayout.#create.apply(this, [t]);
        
    };
    /** @arg {YLayoutT} t @this {YLayout} */
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
 * ### YLayout
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
export class YLayout extends FLayout {
    
    /**
     * ### getLine
     * - Версия `0.0.0`
     * ***
     * 
     * Метод получения линии по указанному индексу.
     * 
     * ***
     * @arg {number} index `Индекс`
     * @public
     * @returns {YLine?}
    */
    getLine(index = 0) {
        
        return this.lines.find(line => line.index === index) ?? null;
        
    };

    /**
     * ### appendLine
     * - Версия `0.0.0`
     * ***
     * 
     * Метод добавления новой линии на указанную позицию.
     * 
     * ***
     * @arg {number} index `Индекс`
     * @public
    */
    appendLine(index = 0) {
        
        if (condIsNumber(index) && !this.lines.find(line => line.index === index)) {

            this.lines.push(new YLine(index));

        };

        return this;
        
    };
    /**
     * ### appendInserts
     * - Версия `0.0.0`
     * ***
     * 
     * Метод добавления вставок в разметку.
     * 
     * ***
     * @arg {...([number, YInsert[]]|[number, [number, string, string, boolean][]])} inserts
     * @public
    */
    appendInserts(...inserts) {
        
        for (let insert of inserts) {

            this.appendLine(insert[0]).getLine(insert[0]).appendInserts(...insert.slice(1));

        };

        return this;
        
    };

    /**
     * ### apply
     * - Версия `0.0.0`
     * ***
     * 
     * Метод применения разметки.
     * 
     * ***
     * @arg {string} string `Строка`
     * @public
    */
    apply(string) {
        
        

        return this;
        
    };
    /**
     * ### merge
     * - Версия `0.0.0`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    merge() {
        
        return this;
        
    };
    /**
     * ### overlay
     * - Версия `0.0.0`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    overlay() {
        
        return this;
        
    };
    /**
     * ### regulate
     * - Версия `0.0.0`
     * ***
     * 
     * Метод регулирования разметки.
     * 
     * Данный метод позволяет:
     * - Удалить пустые линии и вставки.
     * - Упорядочить порядок элементов в линиях и сами линии.
     * - Минимизировать линии, удалив неиспользуемые объекты и свойства вставок.
     * 
     * С его помощью разметка гарантирует минималистичность и целостность своей структуры.
     * 
     * ***
     * @public
    */
    regulate() {
        
        this.lines = this.lines.filter(line => line instanceof YLine && line.inserts.length).map(line => {

            line.inserts = line.inserts.filter(insert => insert instanceof YInsert).sort((p, c) => p.index - c.index);

            return line;

        }).sort((p, c) => p.index - c.index);

        return this;
        
    };
    
};