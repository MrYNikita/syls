//#region YI

import { YCursor } from "@syls/many/cursor";
import { Y, yClassifyProp, } from "@syls/y";

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

/** ### YManyT
 * - Тип `T`
 * 
 * Основной параметр модуля `YMany`.
 * 
 * ***
 * 
 * @typedef {YManyTE&YManyTU} YManyT
*/
/** ### YManyTE
 * - Тип `TE`
 * 
 * Параметр наследования `YMany`.
 * 
 * @typedef {Omit<DMany, keyof SMany>} YManyTE
*/
/** ### YManyTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YMany`.
 * 
 * @typedef YManyTU
 * @prop {} _
*/
/** ### YManyTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YMany`.
 * 
 * @typedef YManyTUG
 * @prop {null} _
*/

//#endregion

/**
 * @template Y1
*/
class SMany extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YMany[]}
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
     * @arg {...YMany} args `Аргументы`
     * @returns {YMany[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SMany).create.apply(this, [...args]);
        
    };
    
};
/**
 * @extends SMany<Y1>
 * @template Y1
*/
class DMany extends SMany {
    
    /**
     * ### values
     * 
     * Значения.
     * 
     * *** 
     * @type {Y1}
     * @field
     * @protected
    */
    values;
    
};
/**
 * @extends DMany<Y1>
 * @template Y1
*/
class IMany extends DMany {
    
    /**
     * ### cursors
     * 
     * Курсоры.
     * 
     * *** 
     * @type {YCursor[]}
     * @field
     * @protected
    */
    cursors;
    
};
/**
 * @extends IMany<Y1>
 * @template Y1
*/
class MMany extends IMany {
    
    
    
};
/**
 * @extends MMany<Y1>
 * @template Y1
*/
class FMany extends MMany {
    
    /**
     * ### YMany.constructor
     * 
     * 
     * 
     * ***
     * @arg {YManyT&G} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FMany.#before(t), {}));
        
        FMany.#deceit.apply(this, [t]);
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YManyT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YMany].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (!t.length) {
            
            return r;
            
        };
        
        if (t[0]?._ytp) {
        
            t = [...t[0]._ytp];
        
        };
        
        const arg = yClassifyProp(t);
        
        r.values = arg.array[0];
        
        if (!Object.values(r).length) {
            
            r = { _ytp: t, };
            
        };
        
        return r;
        
    };
    /** @arg {YManyT} t @this {YMany} */
    static #deceit(t) {
        
        try {
            
            FMany.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YManyT} t @this {YMany} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FMany.#handle.apply(this, [t]);
        
    };
    /** @arg {YManyT} t @this {YMany} */
    static #handle(t) {
        
        
        
        FMany.#create.apply(this, [t]);
        
    };
    /** @arg {YManyT} t @this {YMany} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this
        
            .adopt(t)
            .adoptDefault(this.constructor.config ?? config);

        this.cursors[0] = new YCursor(this.values);
        
    };
    
};

/**
 * ### YMany
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YMany` предназначен для работы со множествами.
 * 
 * ***
 * @class
 * @template Y1
 * @extends FMany<YManyTUG&Y1>
 * 
*/
export class YMany extends FMany {
    
    /** @arg {Y1} t */
    constructor(t) { super(t); };

    /**
     * ### moveCursors
     * 
     * ***
     *
     * Метод смещения курсоров.
     *
     * ***
     * @arg {...number} bias `Смещения`
     * @method
     * @public
    */
    moveCursors(...bias) {

        this.cursors.forEach(c => {

            c.move(...bias);

            c.indexs = positionCorrect(this.values, ...c.indexs);

        });

        return this;

    };
    /**
     * ### setCursorTo
     * 
     * ***
     *
     * Метод установки координат для основного курсора.
     *
     * Данный метод также удаляет все второстепенные курсоры.
     *
     * ***
     * @arg {...number} coords `Координаты`
     * @method
     * @public
    */
    setCursorTo(...coords) {

        this.cursors.splice(1);
        this.cursor.setIndexs(...coords);

        return this;

    };
    /**
     * ### getByCursors
     * 
     * ***
     *
     * Метод получения всех значений в областях курсоров.
     *
     * ***
     * @method
     * @public
    */
    getByCursors() {

        return this.cursors.map(c => {

            let result = null;

            for (const index of c.indexs) {

                if (result[index]) {

                    result = result[index];

                } else {

                    result = null;
                    break;

                };

            };

            return result;

        });

    };
    /**
     * ### appendCursors
     * 
     * ***
     *
     * Метод добавления курсоров.
     *
     * ***
     * @arg {...(number[])} indexs `Индексы`
     * @method
     * @public
    */
    appendCursors(...indexs) {

        this.cursors.push(...indexs.map(indexs => new YCursor(...indexs)));

        if (!this.cursor) {

            this.cursor = this.cursors[0];

        };

        return this;

    };
    
};

/**
 * @file many/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/