//#region YI

import { Y, yClassifyProp } from '../../../-module/export.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default?.value ? i.default.value : i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YShellT
 * - Тип `T`
 * 
 * Основной параметр модуля `YShell`.
 * 
 * ***
 * 
 * @typedef {YShellTE&YShellTU} YShellT
*/
/** ### YShellTE
 * - Тип `TE`
 * 
 * Параметр наследования `YShell`.
 * 
 * @typedef {Omit<DShell, keyof SShell>} YShellTE
*/
/** ### YShellTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YShell`.
 * 
 * @typedef YShellTU
 * @prop {} _
*/
/** ### YShellTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YShell`.
 * 
 * @typedef YShellTUG
 * @prop {null} _
*/

//#endregion

/**
 * @template Y1
*/
class SShell extends Y {
    
    
    
};
/**
 * @extends SShell<Y1>
 * @template Y1
*/
class DShell extends SShell {
    
    /**
     * ### prev
     * 
     * Предыдущее значение.
     * 
     * *** 
     * @type {Y1} 
     * @public
    */
    prev;
    
};
/**
 * @extends DShell<Y1>
 * @template Y1
*/
class IShell extends DShell {
    
    
    
};
/**
 * @extends IShell<Y1>
 * @template Y1
*/
class MShell extends IShell {
    
    
    
};
/**
 * @extends MShell<Y1>
 * @template Y1
*/
class FShell extends MShell {
    
    /**
     * ### YShell.constructor
     * 
     * 
     * 
     * ***
     * @arg {YShellT&G} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FShell.#before(t), {}));
        
        FShell.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YShellT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YShell].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            const arg = yClassifyProp(t);
            
            
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YShellT} t @this {YShell} */
    static #deceit(t) {
        
        try {
            
            FShell.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YShellT} t @this {YShell} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FShell.#handle.apply(this, [t]);
        
    };
    /** @arg {YShellT} t @this {YShell} */
    static #handle(t) {
        
        
        
        FShell.#create.apply(this, [t]);
        
    };
    /** @arg {YShellT} t @this {YShell} */
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
 * ### YShell
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * @extends FShell<YShellTUG&Y1>
 * @template Y1
*/
export class YShell extends FShell {
    
    /** @arg {Y1} t */
    constructor(t) { super(t); };
    
};

string