//#region YI

import { YArg } from "../../arg/-module/class.mjs";
import { YEntity } from "../../entity/-module/class.mjs";
import { YCursor } from "../-submodule/cursor/-module/export.mjs";
import { YCursorContoller } from "../-submodule/cursorContoller/-module/class.mjs";
import { configMany as config } from "./config.mjs";

//#endregion
//#region YT

/** ### manyTC
 * @typedef manyTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').manyT&manyTC} manyT */

//#endregion

/**
 * ### YMany
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
export class YMany extends YEntity {
    
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
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YMany)?}
     * @template {YMany} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### values
     * 
     * Значения.
     * 
     * *** 
     * @since `1.0.0`
     * @type {Y1}
     * @field
     * @protected
    */
    values;
    /**
     * ### cursors
     * 
     * Курсоры.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YCursor[]}
     * @field
     * @protected
    */
    cursors;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YMany;
        
    };

    /**
     * ### getCursorController
     * 
     * Метод получения контроллера курсоров.
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getCursorController() {
        
        return new YCursorContoller(this);
        
    };
    
    
    //#endregion
    
    /**
     * ### YManyConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...manyTC&Y1} args `Аргументы`
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
            
            /** @type {YArg<YMany>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(args);

            yarg

                .uncover()
                .set(

                    ['values', 'array'],
                    ['values',  'string'],

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
                .do(self => self.getCursorController()

                    .append({ many: this })

                )
            
            
        } catch (err) {
            
            if (config.params.strictMode) {
                
                throw err;
                
            };
            
        } finally {
            
            
            
        };
        
    };
    
};

/**
 * @file many/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/