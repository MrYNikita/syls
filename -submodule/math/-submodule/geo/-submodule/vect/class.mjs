//#region YI

import { Y, argClassify, } from "../../y/-module/type.js";

/** @type {import('./config.mjs')['default']['params']?} */
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

/** ### YVectT
 * - Тип `T`
 * 
 * Основной параметр модуля `YVect`.
 * 
 * ***
 * 
 * @typedef {YVectTE&YVectTU} YVectT
*/
/** ### YVectTE
 * - Тип `TE`
 * 
 * Параметр наследования `YVect`.
 * 
 * @typedef {Omit<DVect, keyof SVect>} YVectTE
*/
/** ### YVectTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YVect`.
 * 
 * @typedef YVectTU
 * @prop {} _
*/
/** ### YVectTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YVect`.
 * 
 * @typedef YVectTUG
 * @prop {null} _
*/

//#endregion

/**
 * @template Y1
*/
class SVect extends Y {
    
    
    
};
/**
 * @extends SVect<Y1>
 * @template Y1
*/
class DVect extends SVect {
    
    /**
     * ### coords
     * 
     * Координаты.
     * 
     * *** 
     * @type {Y1} 
     * @public
    */
    coords;
    
};
/**
 * @extends DVect<Y1>
 * @template Y1
*/
class IVect extends DVect {
    
    
    
};
/**
 * @extends IVect<Y1>
 * @template Y1
*/
class MVect extends IVect {
    
    
    
};
/**
 * @extends MVect<Y1>
 * @template Y1
*/
class FVect extends MVect {
    
    /**
     * ### YVect.constructor
     * 
     * 
     * 
     * ***
     * @arg {YVectT&G} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FVect.#before(t), {}));
        
        FVect.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YVectT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YVect].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            const arg = argClassify(t);
            
            r.coords = arg.array[0];
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YVectT} t @this {YVect} */
    static #deceit(t) {
        
        try {
            
            FVect.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YVectT} t @this {YVect} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FVect.#handle.apply(this, [t]);
        
    };
    /** @arg {YVectT} t @this {YVect} */
    static #handle(t) {
        
        
        
        FVect.#create.apply(this, [t]);
        
    };
    /** @arg {YVectT} t @this {YVect} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this.adopt(t);
        
        if (config) {
            
            this.adoptDefault(this.constructor.config ?? config);
            
        };
        
    };
    
};

/**
 * ### YVect
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс векторов.
 * 
 * ***
 * @class
 * @extends FVect<YVectTUG&Y1>
 * @template Y1
*/
export class YVect extends FVect {
    
    /** @arg {Y1} t */
    constructor(t) { super(t); };
    
};