//#region YI

import { YProcedure } from '../-submodule/procedure/-module/class.mjs';
import { Y } from '../../../../../-module/class.mjs';
import { YArg } from '../../../../arg/-module/export.mjs';
import { configHandler as config } from './config.mjs';

//#endregion
//#region YT

/** ### YHandlerT
 * - Тип `T`
 * 
 * Основной параметр модуля `YHandler`.
 * 
 * ***
 * 
 * @typedef {YHandlerTE&YHandlerTU} YHandlerT
*/
/** ### YHandlerTE
 * - Тип `TE`
 * 
 * Параметр наследования `YHandler`.
 * 
 * @typedef {Omit<DHandler, keyof SHandler>} YHandlerTE
*/
/** ### YHandlerTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YHandler`.
 * 
 * @typedef YHandlerTU
 * @prop {} _
*/
/** ### YHandlerTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YHandler`.
 * 
 * @typedef YHandlerTUG
 * @prop {null} _
*/

//#endregion

/**
 * @template Y1
*/
class SHandler extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YHandler[]}
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
     * @arg {...YHandler} args `Аргументы`
     * @returns {YHandler[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SHandler).create.apply(this, args);
        
    };
    
};
/**
 * @extends SHandler<Y1>
 * @template Y1
*/
class DHandler extends SHandler {
    
    /**
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @type {string}
     * @field
     * @public
    */
    label;
    /**
     * ### procedures
     * 
     * Процедуры.
     * 
     * *** 
     * @type {YProcedure<Y1>[]}
     * @field
     * @public
    */
    procedures;
    
};
/**
 * @extends DHandler<Y1>
 * @template Y1
*/
class IHandler extends DHandler {
    
    
    
};
/**
 * @extends IHandler<Y1>
 * @template Y1
*/
class MHandler extends IHandler {
    
    
    
};
/**
 * @extends MHandler<Y1>
 * @template Y1
*/
class FHandler extends MHandler {
    
    /**
     * ### YHandler.constructor
     * 
     * 
     * 
     * ***
     * @arg {YHandlerT&G} args
    */
    constructor(args) {
        
        super(args = FHandler.#before(args = arguments));
        
        FHandler.#deceit.apply(this, [args]);
        
    };
    
    /** @arg {DHandler} args */
    static #before(args) {
        
        /** @type {YArg<IHandler>} */
        const yarg = args[0] instanceof YArg ? args[0] : new YArg(args);
        
        yarg

            .set(

                ['label', 'string'],

            )

        yarg.dataUsed.procedures = yarg.dataFree.array.slice(0);
        
        return yarg;
        
    };
    /** @arg {YArg<IHandler>} args @this {YHandler} */
    static #deceit(args) {
        
        try {
            
            FHandler.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YHandler();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<IHandler>} args @this {YHandler} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FHandler.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<IHandler>} args @this {YHandler} */
    static #handle(args) {
        
        
        
        FHandler.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<IHandler>} args @this {YHandler} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YHandler
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YHandler`.
 * 
 * ***
 * @class
 * @template Y1
 * @extends FHandler<YHandlerTUG&Y1>
 * 
*/
export class YHandler extends FHandler {
    
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
     * @returns {typeof YHandler}
    */
    getClass() {
        
        return YHandler;
        
    };

    /**
     * ### exec
     * 
     * ***
     * 
     * Метод выполнения процедур.
     * 
     * ***
     * @arg {Y1} target `Цель`
     * @method
     * @public
    */
    handle(target) {
        
        for (const procedure of this.procedures) {

            procedure.func(target);

            if (procedure.disposable) {

                this.procedures.splice(this.procedures.indexOf(procedure), 1);

            };

        };

        return this;
        
    };
    /**
     * ### append
     * 
     * ***
     * 
     * Метод добавления процедур.
     * 
     * ***
     * @arg {...[string, function():void, boolean]} procedures `Процедуры`
     * @method
     * @public
    */
    append(...procedures) {
        
        procedures.forEach(procedure => {

            this.procedures.push(new YProcedure(...procedure));

        });

        return this;
        
    };
    
};

//#region YE

YHandler.getY()['modules'].push(YHandler);

//#endregion

/**
 * @file handler/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/