//#region YI

import { Y, yClassifyProp } from "../../../-module/export.mjs";

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
 * @prop {any} prototype
*/
/** ### YConfigTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YConfig`.
 * 
 * @typedef YConfigTUG
 * @prop {} _
*/

//#endregion

class SConfig extends Y {
    
    
    
};
/**
 * @template Y1,Y2
*/
class DConfig extends SConfig {
    
    /**
     * ### value
     * 
     * Значение.
     * 
     * *** 
     * @type {Y1&Y2} 
     * @public
    */
    value;
    
};
/**
 * @extends DConfig<Y1,Y2>
 * @template Y1,Y2
*/
class IConfig extends DConfig {
    
    
    
};
/**
 * @extends IConfig<Y1,Y2>
 * @template Y1,Y2
*/
class MConfig extends IConfig {
    
    
    
};
/**
 * @extends MConfig<Y1,Y2>
 * @template Y1,Y2
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
            
            const arg = yClassifyProp(t);
            
            r.value = arg.ject[0];
            r.prototype = arg.ject[1];
            
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

        if (this.value) {

            Object.setPrototypeOf(this.value, t.prototype instanceof YConfig ? t.prototype.value : t.prototype);

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
 * @extends FConfig<YConfigTUG&Y1,Y2>
 * @template Y1,Y2
*/
export class YConfig extends FConfig {
    
    /**
     * @arg {Y1} config
     * @arg {Y2} prototype
    */
    constructor(config, prototype) { super(config, prototype); };
    
};