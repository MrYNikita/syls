//#region YI

import { YTag } from '@syls/tag';


//#endregion
//#region YT

/** ### YTagStoreT
 * - Тип `T`
 * 
 * Основной параметр модуля `YTagStore`.
 * 
 * @typedef {YTagStoreTE&YTagStoreTU} YTagStoreT
 * 
*/
/** ### YTagStoreTE
 * - Тип `TE`
 * 
 * Параметр наследования `YTagStore`.
 * 
 * @typedef {{[p in Exclude<keyof DTagStore,keyof STagStore>|Exclude<keyof STagStore,keyof DTagStore>]:(DTagStore[p]&STagStore[p])}} YTagStoreTE
 * 
*/
/** ### YTagStoreTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YTagStore`.
 * 
 * @typedef YTagStoreTU
 * @prop {any} _
 * 
*/

//#endregion

class STagStore extends YTag {
    
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
class DTagStore extends STagStore {
    
    /**
     * ### hide
     * 
     * Сокрытие.
     * 
     * Используется фильтрами для сокрытия элементов из общего пула поиска.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    hide;
    /**
     * ### count
     * 
     * Количество.
     * 
     * Используется хранилищами для подсчёта использований.
     * 
     * *** 
     * @type {number?} 
     * @public
    */
    count;
    /**
     * ### delete
     * 
     * Удаление.
     * 
     * Помечает тег, как необходимый к удалению. В хранилищах используется для удаления элементов помеченных данным тегом.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    delete;
    /**
     * ### priority
     * 
     * Приоритет.
     * 
     * Отображает важность ключевого слова.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    priority;
    
};
class ITagStore extends DTagStore {
    
    
    
};
class MTagStore extends ITagStore {
    
    
    
};
class FTagStore extends MTagStore {
    
    /**
     * ### YTagStore.constructor
     * 
     * 
     * 
     * ***
     * @arg {YTagStoreT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FTagStore.#before(t), {}));
        
        FTagStore.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YTagStoreT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YTagStore].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YTagStoreT} t @this {YTagStore} */
    static #deceit(t) {
        
        try {
            
            FTagStore.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YTagStoreT} t @this {YTagStore} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FTagStore.#handle.apply(this, [t]);
        
    };
    /** @arg {YTagStoreT} t @this {YTagStore} */
    static #handle(t) {
        
        
        
        FTagStore.#create.apply(this, [t]);
        
    };
    /** @arg {YTagStoreT} t @this {YTagStore} */
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
 * ### YTagStore
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YTagStore extends FTagStore {
    
    
    
};