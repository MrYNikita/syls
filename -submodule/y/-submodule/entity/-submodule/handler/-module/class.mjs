//#region YI

import { Y } from "../../../../../-module/class.mjs";
import { YArg } from "../../../../arg/-module/export.mjs";
import { YProcedure } from "../-submodule/procedure/-module/class.mjs";
import { configHandler as config } from "./config.mjs";

//#endregion
//#region YT

/** ### handlerTC
 * @typedef handlerTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').handlerT&handlerTC} handlerT */

//#endregion

/**
 * ### YHandler
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * @template Y1
 * 
*/
export class YHandler extends Y {
    
    //#region static
    
    static {
        
        this
            
            .appendModule(this)
        
    };
    
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
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YHandler)?}
     * @template {YHandler} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @since `1.0.0`
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
     * @since `1.0.0`
     * @type {YProcedure<Y1>[]}
     * @field
     * @public
    */
    procedures;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YHandler;
        
    };
    
    /**
     * ### handle
     * 
     * Метод выполнения процедур.
     * 
     * ***
     * @arg {Y1} target `Цель`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
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
     * Метод добавления процедур.
     * 
     * ***
     * @arg {...[string, function():void, boolean]} procedures `Процедуры`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    append(...procedures) {
        
        for (const procedure of procedures) {

            this.procedures.push(new YProcedure(...procedure));

        };

        return this;
        
    };

    //#endregion
    
    /**
     * ### YHandlerConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...handlerTC&Y1} args `Аргументы`
     * 
     * Представлены единым объектом носителем аргументов.
     * 
     * ***
     * @since `1.0.0`
     * @public
     * @version `1.0.0`
     * @constructor
    */
    constructor(...args) {
        
        try {
            
            //#region before
            
            /** @type {YArg<YHandler>} */
            const yarg = args instanceof YArg ? args : new YArg(args);
            
            yarg
                
                .uncover()
                .set(

                    ['label', 'string'],
                    ['procedures', 'arrayJect'],

                )
            
            super(yarg);
            
            //#endregion
            //#region verify
            
            
            
            //#endregion
            //#region handle
            
            
            
            //#endregion
            //#region comply
            
            
            
            //#endregion
            
            return this
            
                .adopt(yarg.getData())
            
            
        } catch (err) {
            
            if (config.params.strictMode) {
                
                throw err;
                
            };
            
        } finally {
            
            
            
        };
        
    };
    
};

/**
 * @file handler/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/