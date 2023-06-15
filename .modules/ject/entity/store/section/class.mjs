//#region YI

import { YEntity } from '@syls/entity';

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

/** ### YSectionT
 * - Тип `T`
 * 
 * Основной параметр модуля `YSection`.
 * 
 * ***
 * 
 * @typedef {YSectionTE&YSectionTU} YSectionT
*/
/** ### YSectionTE
 * - Тип `TE`
 * 
 * Параметр наследования `YSection`.
 * 
 * @typedef {{[p in Exclude<keyof DSection,keyof SSection>|Exclude<keyof SSection,keyof DSection>]:(DSection[p]&SSection[p])}} YSectionTE
*/
/** ### YSectionTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YSection`.
 * 
 * @typedef YSectionTU
 * @prop {} _
*/
/** ### YSectionTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YSection`.
 * 
 * @typedef YSectionTUG
 * @prop {null=} _
*/

//#endregion

/**
 * @template {YSectionTUG} G
*/
class SSection extends YEntity {
    
    
    
};
/**
 * @extends {SSection<G>}
 * @template {YSectionTUG} G
*/
class DSection extends SSection {
    
    
    
};
/**
 * @extends {DSection<G>}
 * @template {YSectionTUG} G
*/
class ISection extends DSection {
    
    /**
     * ### values
     * 
     * 
     * 
     * *** 
     * @type {G[]} 
     * @public
    */
    values = [];
    
};
/**
 * @extends {ISection<G>}
 * @template {YSectionTUG} G
*/
class MSection extends ISection {
    
    
    
};
/**
 * @extends {MSection<G>}
 * @template {YSectionTUG} G
*/
class FSection extends MSection {
    
    /**
     * ### YSection.constructor
     * 
     * 
     * 
     * ***
     * @arg {YSectionT&G} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FSection.#before(t), {}));
        
        FSection.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YSectionT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YSection].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
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
    /** @arg {YSectionT} t @this {YSection} */
    static #deceit(t) {
        
        try {
            
            FSection.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YSectionT} t @this {YSection} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FSection.#handle.apply(this, [t]);
        
    };
    /** @arg {YSectionT} t @this {YSection} */
    static #handle(t) {
        
        
        
        FSection.#create.apply(this, [t]);
        
    };
    /** @arg {YSectionT} t @this {YSection} */
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
 * ### YSection
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * @extends {FSection<G>}
 * @template {YSectionTUG} G
*/
export class YSection extends FSection {
    
    
    
};


/** @type {YSection<number|string>} */
const t = new YSection().values[0]