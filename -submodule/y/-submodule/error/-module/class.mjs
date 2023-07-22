//#region YI

import { Y, yClassifyProp } from '../../../-module/export.mjs';

/** @type {import('./config.mjs')['default']['value']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default?.value ? c.default.value : c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(e => error = e.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YErrorT
 * - Тип `T`
 * 
 * Основной параметр модуля `YError`.
 * 
 * @typedef {YErrorTE&YErrorTU} YErrorT
 * 
*/
/** ### YErrorTE
 * - Тип `TE`
 * 
 * Параметр наследования `YError`.
 * 
 * @typedef {Omit<DError, keyof SError>} YErrorTE
 * 
*/
/** ### YErrorTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YError`.
 * 
 * @typedef YErrorTU
 * @prop {any} _
 * 
*/

//#endregion

class SError extends Y {
    
    /** ### stock
     * @type {YError[]}
     * @public
    */
    static stock = [];
    /** ### config
     * 
     * ***
     * @public
    */
    static config = config;
    
    /**
     * @arg {...YError} args `Аргументы`
     * @returns {YError[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SError).create.apply(this, [...args]);
        
    };
    
};
class DError extends SError {
    
    /**
     * ### type
     * 
     * Тип ошибки.
     * 
     * ***
     * 
     * #### Разновидности
     * - `x` - `неопределенная`
     * - `0` - `модуля`
     * - `1` - `конфигуратора`
     * - `2` - `экспорта`
     * - `3` - `тестирования`
     * - `4` - `отлова`
     * - `5` - `функции`
     * - `6` - `значения`
     * 
     * *** 
     * @type {'x'|0|1|2|3|4|5|6}
     * @public
    */
    type;
    /**
     * ### moduleId
     * 
     * Идентификатор модуля.
     * 
     * *** 
     * @type {string}
     * @public
    */
    moduleId;
    
};
class IError extends DError {
    
    
    
};
class MError extends IError {
    
    
    
};
class FError extends MError {
    
    /**
     * ### YError.constructor
     * 
     * 
     * 
     * ***
     * @arg {YErrorT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FError.#before(t), {}));
        
        FError.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YErrorT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YError].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (!t.length) {
            
            return r;
            
        };

        if (t[0]?._ytp) {
            
            t = [...t[0]._ytp];
        
        };
        
        const arg = yClassifyProp(t);
        
        r.moduleId = arg.number[0];

        if (arg.string.includes('x')) {

            r.type = 'x';
            arg.string.filter(e => e === 'x');

        } else {

            r.type = arg.number[1];

        };
        
        if (!Object.values(r).length) {
            
            r = { _ytp: t, };
            
        };
        
        return r;
        
    };
    /** @arg {YErrorT} t @this {YError} */
    static #deceit(t) {
        
        try {
            
            FError.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YErrorT} t @this {YError} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FError.#handle.apply(this, [t]);
        
    };
    /** @arg {YErrorT} t @this {YError} */
    static #handle(t) {
        
        
        
        FError.#create.apply(this, [t]);
        
    };
    /** @arg {YErrorT} t @this {YError} */
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
 * ### YError
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс YError.
 * 
 * ***
 * @class
 * 
*/
export class YError extends FError {
    
    /**
     * ### display
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @public
    */
    display() {

        let result = [this.moduleId.toString().padStart(3, 0), this.type].join('.');

        console.log(result);

        return this;
        
    };
    
};