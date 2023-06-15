//#region YI

import { YEntity } from '@syls/entity';
import { YTagStore } from './tag/class.mjs';

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

/** ### YStoreT
 * - Тип `T`
 * 
 * Основной параметр модуля `YStore`.
 * 
 * @typedef {YStoreTE&YStoreTU} YStoreT
 * 
*/
/** ### YStoreTE
 * - Тип `TE`
 * 
 * Параметр наследования `YStore`.
 * 
 * @typedef {{[p in Exclude<keyof DStore,keyof SStore>|Exclude<keyof SStore,keyof DStore>]:(DStore[p]&SStore[p])}} YStoreTE
 * 
*/
/** ### YStoreTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YStore`.
 * 
 * @typedef YStoreTU
 * @prop {any} _
 * 
*/

//#endregion

class SStore extends YEntity {
    
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
class DStore extends SStore {
    
    
    
};
class IStore extends DStore {
    
    /**
     * ### tags
     * 
     * Теги.
     * 
     * *** 
     * @type {YTagStore[]} 
     * @protected
    */
    tags = [];
    /**
     * ### count
     * 
     * Счётчик.
     * 
     * *** 
     * @type {number} 
     * @protected
    */
    count = 0;
    /**
     * ### hashes
     * 
     * Хэши.
     * 
     * *** 
     * @type {[string, any][]} 
     * @protected
    */
    hashes = [];
    /**
     * ### sections
     * 
     * Секции.
     * 
     * *** 
     * @type {any[]}
     * @protected
    */
    sections = [];
    
};
class MStore extends IStore {
    
    
    
};
class FStore extends MStore {
    
    /**
     * ### YStore.constructor
     * 
     * 
     * 
     * ***
     * @arg {YStoreT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FStore.#before(t), {}));
        
        FStore.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YStoreT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YStore].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                default:
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
    /** @arg {YStoreT} t @this {YStore} */
    static #deceit(t) {
        
        try {
            
            FStore.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YStoreT} t @this {YStore} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FStore.#handle.apply(this, [t]);
        
    };
    /** @arg {YStoreT} t @this {YStore} */
    static #handle(t) {
        
        
        
        FStore.#create.apply(this, [t]);
        
    };
    /** @arg {YStoreT} t @this {YStore} */
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
 * ### YStore
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YStore extends FStore {
    
    /**
     * ### getFrequent
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    getFrequent() {
        
        
        
    };
    /**
     * ### getFrequents
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    getFrequents() {
        
        
        
    };

    /**
     * ### getByTag
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    getByTag() {
        
        
        
    };
    /**
     * ### getByTagMany
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    getByTagMany() {
        
        
        
    };

    /**
     * ### getByLabel
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    getByLabel() {
        
        
        
    };
    /**
     * ### getByIndex
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    getByIndex() {
        
        
        
    };

    
};