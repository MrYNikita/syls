//#region YI

import { YArg } from '@syls/y/arg';
import { configCorrecter as config } from './config.mjs';
import { Y } from '@syls/y';
import { YString } from '../../../-module/class.mjs';
import { YCond } from '@syls/y/cond';
import { stringPaste } from '../../../-module/module0.mjs';

//#endregion
//#region YT

/** ### YCorrecterT
 * - Тип `T`
 * 
 * Основной параметр модуля `YCorrecter`.
 * 
 * @typedef {YCorrecterTE&YCorrecterTU&Y} YCorrecterT
 * 
*/
/** ### YCorrecterTE
 * - Тип `TE`
 * 
 * Параметр наследования `YCorrecter`.
 * 
 * @typedef {Omit<DCorrecter, keyof SCorrecter>} YCorrecterTE
 * 
*/
/** ### YCorrecterTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YCorrecter`.
 * 
 * @typedef YCorrecterTU
 * @prop {any} _
 * 
*/

//#endregion

class SCorrecter extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YCorrecter[]}
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
     * @arg {...YCorrecter} args `Аргументы`
     * @returns {YCorrecter[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SCorrecter).create.apply(this, args);
        
    };
    
};
class DCorrecter extends SCorrecter {
    
    /**
     * ### string
     * 
     * Строка.
     * 
     * *** 
     * @type {YString}
     * @field
     * @public
    */
    string;
    
};
class ICorrecter extends DCorrecter {
    
    
    
};
class MCorrecter extends ICorrecter {
    
    
    
};
class FCorrecter extends MCorrecter {
    
    /**
     * ### YCorrecter.constructor
     * 
     * 
     * 
     * ***
     * @arg {YCorrecterT} args
    */
    constructor(args) {
        
        super(args = FCorrecter.#before(args = arguments));
        
        FCorrecter.#deceit.apply(this, [args]);
        
        return this.correlate();
        
    };
    
    /** @arg {DCorrecter} args */
    static #before(args) {
        
        /** @type {YArg<ICorrecter>} */
        const yarg = args instanceof YArg ? args : new YArg(args);
        
        yarg.dataUsed.string = yarg.extract('ject');
        
        return yarg;
        
    };
    /** @arg {YArg<ICorrecter>} args @this {YCorrecter} */
    static #deceit(args) {
        
        try {
            
            FCorrecter.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YCorrecter();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<ICorrecter>} args @this {YCorrecter} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FCorrecter.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<ICorrecter>} args @this {YCorrecter} */
    static #handle(args) {
        
        
        
        FCorrecter.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<ICorrecter>} args @this {YCorrecter} */
    static #create(args) {
        
        const {
            
            
            
        } = args;

        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YCorrecter
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YCorrecter`.
 * 
 * ***
 * @class
 * 
*/
export class YCorrecter extends FCorrecter {
    
    /**
     * ### replace
     * 
     * ***
     * 
     * Метод замены совпадения.
     * 
     * ***
     * @arg {string} value `Значения`
     * @arg {string} replace `Замена`
     * @method
     * @public
    */
    replace(value, replace) {
        
        const pairs = [];

        if (YCond.isArray(arguments[0])) {

            pairs.push(...Array.from(arguments).filter(value => YCond.isString(value) && value !== ''));

        } else {

            pairs.push([value, replace]);

        };

        for (const pair of pairs) {

            [value, replace] = pair;

            value = value.split('\n');
            replace = replace.split('\n');

            const rows = this.string.getRows();

            for (let y in rows) {

                y = +y;

                for (let x in rows[y]) {

                    x = +x;

                    if (rows[y][x] === value[0] && value.slice(1).every((valueRow, index) => valueRow === rows?.[y + index + 1]?.[x])) {

                        for (let countY = y; countY < y + value.length; countY++) {

                            rows[countY] = stringPaste(rows[countY], replace[countY], x, replace[countY]?.length);

                        };

                        this.string.set(rows.join('\n'));

                    };

                };

            };

        };

        return this;
        
    };
    /**
     * ### getClass
     * 
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @method
     * @public
     * @returns {typeof YCorrecter}
    */
    getClass() {
        
        return YCorrecter;
        
    };
    
};