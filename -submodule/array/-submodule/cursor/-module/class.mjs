//#region YI

import { Y, yClassifyProp } from '@syls/y';

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

/** ### YCursorT
 * - Тип `T`
 * 
 * Основной параметр модуля `YCursor`.
 * 
 * @typedef {YCursorTE&YCursorTU} YCursorT
 * 
*/
/** ### YCursorTE
 * - Тип `TE`
 * 
 * Параметр наследования `YCursor`.
 * 
 * @typedef {Omit<DCursor, keyof SCursor>} YCursorTE
 * 
*/
/** ### YCursorTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YCursor`.
 * 
 * @typedef YCursorTU
 * @prop {boolean} historyMode
 * 
*/

//#endregion

class SCursor extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YCursor[]}
     * @field
     * @static
     * @public
    */
    static stock = [];
    /**
     * ### config
     * 
     * 
     * 
     * ***
     * @field
     * @static
     * @public
    */
    static config = config;
    
    /**
     * @arg {...YCursor} args `Аргументы`
     * @returns {YCursor[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SCursor).create.apply(this, [...args]);
        
    };
    
};
class DCursor extends SCursor {
    
    /**
     * ### position
     * 
     * Позиция.
     * 
     * *** 
     * @type {number[]}
     * @field
     * @public
    */
    position;
    
};
class ICursor extends DCursor {
    
    /**
     * ### history
     * 
     * История позиций.
     * 
     * *** 
     * @type {number[][]}
     * @field
     * @protected
    */
    history;
    /**
     * ### fixMode
     * 
     * Режим фиксации.
     * 
     * *** 
     * @type {boolean}
     * @field
     * @protected
    */
    fixMode;
    
};
class MCursor extends ICursor {
    
    
    
};
class FCursor extends MCursor {
    
    /**
     * ### YCursor.constructor
     * 
     * 
     * 
     * ***
     * @arg {YCursorT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FCursor.#before(t), {}));
        
        FCursor.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YCursorT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YCursor].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (!t.length) {
            
            return r;
            
        };
        
        if (t[0]?._ytp) {
        
            t = [...t[0]._ytp];
        
        };
        
        const arg = yClassifyProp(t);
        
        r.position = arg.number;
        r.historyMode = arg.bool[0];
        
        if (!Object.values(r).length) {
            
            r = { _ytp: t, };
            
        };
        
        return r;
        
    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #deceit(t) {
        
        try {
            
            FCursor.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FCursor.#handle.apply(this, [t]);
        
    };
    /** @arg {YCursorT} t @this {YCursor} */
    static #handle(t) {
        
        if (t.historyMode || (t.historyMode === undefined && config.historyMode)) {

            t.history = [];

        };
        
        FCursor.#create.apply(this, [t]);
        
    };
    /** @arg {YCursorT} t @this {YCursor} */
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
 * ### YCursor
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YCursor` используется индексируемми множествами для определения последней задействованной позиции
 * и параллельного применения.
 * 
 * ***
 * @class
 * 
*/
export class YCursor extends FCursor {
    
    /**
     * ### mode
     * 
     * ***
     * 
     * Метод управления режимами курсора.
     * 
     * ***
     * @arg {boolean?} value `Значение`
     * @arg {'history'} mode `Режим`
     * @method
     * @public
    */
    mode(mode, value) {
        
        switch (mode) {

            case 'history': this.history = (value ?? !this.history) ? [] : config.historyDefault; break;

        };

        return this;
        
    };
    /**
     * ### move
     * 
     * ***
     * 
     * Метод сдвига курсора с учётом пределов.
     * 
     * ***
     * @arg {number[]?} limits `Пределы`
     * 
     * Многомерный массив с `N` измерениями, где `N` число измерений, заданное аргументом.
     * 
     * @arg {number[]} biases `Смещения`
     * 
     * Одномерный массив чисел, обозначающих смещение в каждом измерении.
     * 
     * @method
     * @public
    */
    move(biases, limits) {
        


        return this;
        
    };
    /**
     * ### setPosition
     * 
     * ***
     * 
     * Метод установки позиции.
     * 
     * ***
     * @arg {number[]?} limits `Пределы`
     * @arg {number[]} position `Позиция`
     * @method
     * @public
    */
    setPosition(position, limits) {
        


        return this;
        
    };
    
};

/**
 * @file cursor/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/