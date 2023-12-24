//#region YI

import { Y } from '@syls/y';
import { YCursor } from '../../cursor/-module/class.mjs';
import { YMany } from '../../../-module/class.mjs';
import { configCursorContoller as config } from './config.mjs';

//#endregion
//#region YT

/** ### YCursorContollerT
 * - Тип `T`
 * 
 * Основной параметр модуля `YCursorContoller`.
 * 
 * @typedef {YCursorContollerTE&YCursorContollerTU&Y} YCursorContollerT
 * 
*/
/** ### YCursorContollerTE
 * - Тип `TE`
 * 
 * Параметр наследования `YCursorContoller`.
 * 
 * @typedef {Omit<DCursorContoller, keyof SCursorContoller>} YCursorContollerTE
 * 
*/
/** ### YCursorContollerTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YCursorContoller`.
 * 
 * @typedef YCursorContollerTU
 * @prop {any} _
 * 
*/

//#endregion

class SCursorContoller extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YCursorContoller[]}
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
     * @arg {...YCursorContoller} args `Аргументы`
     * @returns {YCursorContoller[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SCursorContoller).create.apply(this, [...args]);
        
    };
    
};
class DCursorContoller extends SCursorContoller {
    
    /**
     * ### cursors
     * 
     * Курсоры.
     * 
     * *** 
     * @type {YCursor[]}
     * @field
     * @public
    */
    cursors;
    
};
class ICursorContoller extends DCursorContoller {
    
    /**
     * ### many
     * 
     * Множество.
     * 
     * *** 
     * @type {YMany}
     * @field
     * @protected
    */
    many;
    
};
class MCursorContoller extends ICursorContoller {
    
    
    
};
class FCursorContoller extends MCursorContoller {
    
    /**
     * ### YCursorContoller.constructor
     * 
     * 
     * 
     * ***
     * @arg {YCursorContollerT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FCursorContoller.#before(t), {}));
        
        FCursorContoller.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YCursorContollerT} */
        let r = {};
        
        if (t?.length === 1 && t[0] instanceof Object && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

            return r;
            
        } else if (t.length) {
            
            return r;
            
        };
        
        if (t[0]?._ytp) {
        
            t = [...t[0]._ytp];
        
        };
        
        if (!Object.values(r).length) {
            
            r = { _ytp: t, };
            
        };
        
        return r;
        
    };
    /** @arg {YCursorContollerT} t @this {YCursorContoller} */
    static #deceit(t) {
        
        try {
            
            FCursorContoller.#verify.apply(this, [t = { ...t }]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YCursorContollerT} t @this {YCursorContoller} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FCursorContoller.#handle.apply(this, [t]);
        
    };
    /** @arg {YCursorContollerT} t @this {YCursorContoller} */
    static #handle(t) {
        
        t.many = t;
        
        FCursorContoller.#create.apply(this, [t]);
        
    };
    /** @arg {YCursorContollerT} t @this {YCursorContoller} */
    static #create(t) {
        
        const {
            
            
            
        } = t;
        
        this
            .adopt(t)
            .adoptDefault(this.constructor.config ?? config);
        
    };
    
};

/**
 * ### YCursorContoller
 * - Тип `SDIMFY`
 * - Версия `1.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YCursorContoller`.
 * 
 * ***
 * @since `1.0.0`
 * @class
*/
export class YCursorContoller extends FCursorContoller {
    
    /**
     * ### toEnd
     * 
     * ***
     * 
     * Метод перемещения основного курсора в конец множества.
     * 
     * При использовании остальные курсоры удаляются.
     * 
     * ***
     * @since `1.0.0`
     * @method
     * @public
    */
    toEnd() {
        
        const cursor = this.get();
        
        this.many.cursors.splice(1);

        if (typeof this.many.values === 'string') {

            const rows = this.many.values.split('\n');

            cursor.setPosition([rows.length - 1, rows[rows.length - 1].length]);

        } else if (this.many.values instanceof Array) {

            

        };

        return this;
        
    };
    /**
     * ### toStart
     * 
     * ***
     * 
     * Метод перемещения основного курсора в начало множества.
     * 
     * При использовании остальные курсоры удаляются.
     * 
     * ***
     * @since `1.0.0`
     * @method
     * @public
    */
    toStart() {
        
        const cursor = this.get();
        
        this.many.cursors.splice(1);

        if (typeof this.many.values === 'string') {

            cursor.setPosition([0, 0]);

        } else if (this.many.values instanceof Array) {



        };

        return this;
        
    };

    /**
     * ### get
     * 
     * ***
     * 
     * Метод получения курсора по индексу.
     * 
     * ***
     * @arg {number} index `Индекс`
     * @since `1.0.0`
     * @method
     * @public
    */
    get(index = 0) {

        return this.cursors[index];
        
    };
    /**
     * ### getMany
     * 
     * ***
     * 
     * Метод получения множества курсоров по их индексам.
     * 
     * ***
     * @arg {...number} indexs `Индексы`
     * @since `1.0.0`
     * @method
     * @public
    */
    getMany(...indexs) {
        
        return this.cursors.filter((cursor, index) => indexs.includes(index));
        
    };

    mode() {

        for (const cursor of this.cursors) {

            cursor.mode(...arguments);

        };

        return this;

    };

    /**
     * ### move
     * 
     * ***
     * 
     * Метод перемещения курсоров.
     * 
     * ***
     * @arg {any[][]} many `Множества`
     * @arg {number[][]} biases `Смещения`
     * @since `1.0.0`
     * @method
     * @public
    */
    move(biases, many) {
        
        for (const cursor of this.cursors) {

            cursor.move(biases, many);

        };

        return this;
        
    };
    /**
     * ### moveReverse
     * 
     * ***
     * 
     * Метод {@link YCursorContoller.move|перемещения} курсоров с обратным изменением позиций.
     * 
     * ***
     * @arg {any[][]} many `Множества`
     * @arg {number[][]} biases `Смещения`
     * @since `1.0.0`
     * @method
     * @public
    */
    moveReverse(biases, many) {

        for (const cursor of this.cursors) {

            cursor.moveReverse(biases, many);

        };

        return this;
        
    };

    /**
     * ### append
     * 
     * ***
     * 
     * Метод добавления курсоров.
     * 
     * ***
     * @arg {...YCursor} `Курсоры`
     * @since `1.0.0`
     * @method
     * @public
    */
    append(...cursors) {

        this.many.cursors.push(...cursors.map(cursor => new YCursor(cursor)));

        return this;
        
    };

    // /**
    //  * ### selectByIndex
    //  * 
    //  * ***
    //  * 
    //  * Метод отбора курсоров по индексам.
    //  * 
    //  * ***
    //  * @arg {number} index `Индекс`
    //  * @since `1.0.0`
    //  * @method
    //  * @public
    // */
    // selectByIndex(index = 0) {

    //     const args = argClassify(arguments);
    //     const result = [];

    //     let count = 0;

    //     for (const index of args.number.filter((element, index) => index < this.cursors.length)) result[count++] = this.cursors[index];

    //     this.cursors = result;

    //     return this;
        
    // };
    
};