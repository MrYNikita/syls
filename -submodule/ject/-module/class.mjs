//#region YI

import { Y, argClassify, yClone, } from "@syls/y";

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

/** ### YJectT
 * - Тип `T`
 * 
 * Основной параметр модуля `YJect`.
 * 
 * ***
 * 
 * @typedef {YJectTE&YJectTU} YJectT
*/
/** ### YJectTE
 * - Тип `TE`
 * 
 * Параметр наследования `YJect`.
 * 
 * @typedef {Omit<DJect, keyof SJect>} YJectTE
*/
/** ### YJectTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YJect`.
 * 
 * @typedef YJectTU
 * @prop {} _
*/
/** ### YJectTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YJect`.
 * 
 * @typedef YJectTUG
 * @prop {null=} _
*/

//#endregion

/**
 * @template {YJectTUG} Y1
*/
class SJect extends Y {
    
    
    
};
/**
 * @extends SJect<Y1>
 * @template Y1
*/
class DJect extends SJect {
    
    
    
};
/**
 * @extends DJect<Y1>
 * @template Y1
*/
class IJect extends DJect {
    
    /**
     * ### value
     * 
     * 
     * 
     * *** 
     * @type {Y1} 
     * @protected
    */
    value;
    
};
/**
 * @extends IJect<Y1>
 * @template Y1
*/
class MJect extends IJect {
    
    
    
};
/**
 * @extends MJect<Y1>
 * @template Y1
*/
class FJect extends MJect {
    
    /**
     * ### YJect.constructor
     * 
     * 
     * 
     * ***
     * @arg {YJectT&G} t
    */
    constructor(t) {

        t = [...arguments];
        
        super(Object.assign(t = FJect.#before(t), {}));
        
        FJect.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YJectT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YJect].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r.value = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            const arg = argClassify(t);
            
            r.value = arg.ject[0];
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YJectT} t @this {YJect} */
    static #deceit(t) {
        
        try {
            
            FJect.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YJectT} t @this {YJect} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FJect.#handle.apply(this, [t]);
        
    };
    /** @arg {YJectT} t @this {YJect} */
    static #handle(t) {
        
        
        
        FJect.#create.apply(this, [t]);
        
    };
    /** @arg {YJectT} t @this {YJect} */
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
 * ### YJect
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * @extends FJect<Y1&YJectTUG>
 * @template Y1
*/
export class YJect extends FJect {
    
    /** @arg {Y1} ject */
    constructor(ject) { super(ject); };

    /**
     * ### get
     * 
     * ***
     * 
     * Метод получения значения.
     * 
     * ***
     * @public
    */
    get() {
        
        return this.value;
        
    };
    /**
     * ### getPrototype
     * 
     * ***
     * 
     * Метод получения прототипа значения.
     * 
     * ***
     * @public
    */
    getPrototype() {
        
        return Object.getPrototypeOf(this.value);
        
    };

    /**
     * ### seal
     * 
     * ***
     * 
     * Метод запечатывания текущего значения.
     * 
     * Запечатанное значение нельзя дополнить новыми свойствами или удалить имеющиеся.
     * Однако, данный подход позволяет изменять текущие свойства.
     * 
     * ***
     * @arg {boolean} mode `Режим`
     * @public
    */
    seal(mode = this.isSeal()) {
        
        if (mode) {

            Object.seal(this.value);

        } else {

            this.value = yClone(this.value);

        };

        return this;
        
    };
    /**
     * ### isSeal
     * 
     * ***
     * 
     * Метод проверки значения на запечатанность.
     * 
     * ***
     * @public
    */
    isSeal() {
        
        return Object.isSealed(this.value);
        
    };
    /**
     * ### freeze
     * 
     * ***
     * 
     * Метод заморозки объекта.
     * 
     * Запечатанное значение нельзя дополнить новыми свойствами, удалить или изменить имеющиеся.
     * 
     * ***
     * @arg {boolean} mode `Режим`
     * @public
    */
    freeze(mode = this.isFreeze()) {

        if (mode) {
            
            Object.freeze(this.value);

        } else {

            this.value = yClone(this.value);

        };

        return this;
        
    };
    /**
     * ### isFreeze
     * 
     * ***
     * 
     * Метод проверки значения на заморозку.
     * 
     * ***
     * @public
    */
    isFreeze() {
        
        return Object.isFrozen(this.value);
        
    };

    /**
     * ### setPrototype
     * 
     * ***
     * 
     * Метод установки прототипа.
     * 
     * ***
     * @arg {Y1} prototype `Прототип`
     * @public
     * @template {Y1}
    */
    setPrototype(prototype) {
        
        Object.setPrototypeOf(this.value, prototype);

        return this;
        
    };
    
};