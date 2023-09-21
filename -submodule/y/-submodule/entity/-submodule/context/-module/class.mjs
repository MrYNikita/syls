//#region YI

import { Y } from '../../../../../-module/export.mjs';
import { YArg } from '../../../../arg/-module/export.mjs';
import { YLog } from '../../../../log/-module/export.mjs';
import { YDate } from '../../../../date/-module/export.mjs';
import { YHandler } from '../../handler/-module/class.mjs';
import { configContext as config } from './config.mjs';

//#endregion
//#region YT

/** ### YContextT
 * - Тип `T`
 * 
 * Основной параметр модуля `YContext`.
 * 
 * ***
 * 
 * @typedef {YContextTE&YContextTU} YContextT
*/
/** ### YContextTE
 * - Тип `TE`
 * 
 * Параметр наследования `YContext`.
 * 
 * @typedef {Omit<DContext, keyof SContext>} YContextTE
*/
/** ### YContextTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YContext`.
 * 
 * @typedef YContextTU
 * @prop {} _
*/
/** ### YContextTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YContext`.
 * 
 * @typedef YContextTUG
 * @prop {null} _
*/

//#endregion

/**
 * @template Y1
*/
class SContext extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YContext[]}
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
     * @arg {...YContext} args `Аргументы`
     * @returns {YContext[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SContext).create.apply(this, args);
        
    };
    
};
/**
 * @extends SContext<Y1>
 * @template Y1
*/
class DContext extends SContext {
    
    /**
     * ### id
     * 
     * Идентификатор.
     * 
     * *** 
     * @type {number}
     * @field
     * @public
    */
    id;
    
};
/**
 * @extends DContext<Y1>
 * @template Y1
*/
class IContext extends DContext {
    
    /**
     * ### log
     * 
     * Журнал.
     * 
     * *** 
     * @type {YLog}
     * @field
     * @protected
    */
    log;
    /**
     * ### date
     * 
     * Дата.
     * 
     * *** 
     * @type {YDate}
     * @field
     * @protected
    */
    date = new YDate();
    /**
     * ### handlers
     * 
     * Обработчики.
     * 
     * *** 
     * @type {YHandler<Y1>[]}
     * @field
     * @protected
    */
    handlers;
    
};
/**
 * @extends IContext<Y1>
 * @template Y1
*/
class MContext extends IContext {
    
    
    
};
/**
 * @extends MContext<Y1>
 * @template Y1
*/
class FContext extends MContext {
    
    /**
     * ### YContext.constructor
     * 
     * 
     * 
     * ***
     * @arg {YContextT&G} args
    */
    constructor(args) {
        
        super(args = FContext.#before(args = arguments));
        
        FContext.#deceit.apply(this, [args]);
        
    };
    
    /** @arg {DContext} args */
    static #before(args) {
        
        /** @type {YArg<IContext>} */
        const yarg = args[0] instanceof YArg ? args[0] : new YArg(args);
        
        
        
        return yarg;
        
    };
    /** @arg {YArg<IContext>} args @this {YContext} */
    static #deceit(args) {
        
        try {
            
            FContext.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YContext();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<IContext>} args @this {YContext} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FContext.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<IContext>} args @this {YContext} */
    static #handle(args) {
        
        
        
        FContext.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<IContext>} args @this {YContext} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YContext
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YContext`.
 * 
 * ***
 * @class
 * @template Y1
 * @extends FContext<YContextTUG&Y1>
 * 
*/
export class YContext extends FContext {
    
    /** @arg {Y1} args */
    constructor(args) { super(...arguments); };
    
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
     * @returns {typeof YContext}
    */
    getClass() {
        
        return YContext;
        
    };
    
};

//#region YE

YContext.getY()['modules'].push(YContext);

//#endregion

/**
 * @file context/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/