//#region YI

import { Y, argClassify, } from "@syls/y";
import { YJect } from "@syls/ject";

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

/** ### YConfigT
 * - Тип `T`
 * 
 * Основной параметр модуля `YConfig`.
 * 
 * ***
 * 
 * @typedef {YConfigTE&YConfigTU} YConfigT
*/
/** ### YConfigTE
 * - Тип `TE`
 * 
 * Параметр наследования `YConfig`.
 * 
 * @typedef {Omit<DConfig, keyof SConfig>} YConfigTE
*/
/** ### YConfigTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YConfig`.
 * 
 * @typedef YConfigTU
 * @prop {} _
*/
/** ### YConfigTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YConfig`.
 * 
 * @typedef YConfigTUG
 * @prop {null} _
*/

//#endregion

/**
 * @extends YJect<Y1>
 * @template Y1
*/
class SConfig extends YJect {
    
    
    
};
/**
 * @extends SConfig<Y1>
 * @template Y1
*/
class DConfig extends SConfig {
    
    
    
};
/**
 * @extends DConfig<Y1>
 * @template Y1
*/
class IConfig extends DConfig {
    
    
    
};
/**
 * @extends IConfig<Y1>
 * @template Y1
*/
class MConfig extends IConfig {
    
    
    
};
/**
 * @extends MConfig<Y1>
 * @template Y1
*/
class FConfig extends MConfig {
    
    /**
     * ### YConfig.constructor
     * 
     * 
     * 
     * ***
     * @arg {YConfigT&G} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FConfig.#before(t), {}));
        
        FConfig.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YConfigT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YConfig].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            const arg = argClassify(t);
            
            
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YConfigT} t @this {YConfig} */
    static #deceit(t) {
        
        try {
            
            FConfig.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YConfigT} t @this {YConfig} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FConfig.#handle.apply(this, [t]);
        
    };
    /** @arg {YConfigT} t @this {YConfig} */
    static #handle(t) {
        
        
        
        FConfig.#create.apply(this, [t]);
        
    };
    /** @arg {YConfigT} t @this {YConfig} */
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
 * ### YConfig
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * @extends FConfig<Y1&YConfigTUG>
 * @template Y1
*/
export class YConfig extends FConfig {
    
    /** @arg {Y1} t */
    constructor(t) { super(t); };
    
};