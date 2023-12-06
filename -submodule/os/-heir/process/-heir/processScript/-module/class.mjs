//#region YI

import { YArg } from "@syls/y/arg";
import { fork } from "child_process";
import { YPath } from "../../../../../-submodule/path/-module/class.mjs";
import { YProcess } from "../../../-module/class.mjs";
import { configProcessScript as config } from "./config.mjs";
import { condIsString } from "@syls/y/cond";

//#endregion
//#region YT

/** ### processScriptTC
 * @typedef processScriptTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').processScriptT&processScriptTC} processScriptT */

//#endregion

/**
 * ### YProcessScript
 * 
 * Класс процессов ориентированных на запуск скриптовых файлов.
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YProcessScript extends YProcess {
    
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
     * @type {YProcessScript[]}
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
     * @arg {...YProcessScript} args `Аргументы`
     * @returns {YProcessScript[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YProcessScript)?}
     * @template {YProcessScript} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### path
     * 
     * Путь.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YPath}
     * @field
     * @public
    */
    path;
    
    //#endregion
    //#region method
    
    /**
     * ### on
     * 
     * 
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
    on() {
        
        if (this.path) this.process = fork(this.path.get(), {

            stdio: 'inherit',

        });

        return this;
        
    };
    /**
     * ### off
     * 
     * 
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
    off() {
        
        
        
    };
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YProcessScript;
        
    };
    
    //#endregion
    
    /**
     * ### YProcessScriptConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {processScriptTC} args `Аргументы`
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
            
            /** @type {YArg<YProcessScript&processScriptTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            super(yarg);

            yarg.set(['path', 'string']);

            if (!yarg.used.path) yarg.set(['path', 'ject']);
            
            //#endregion
            //#region verify
            
            
            
            //#endregion
            //#region handle
            
            if (condIsString(yarg.used.path)) {

                yarg.used.path = new YPath(yarg.used.path);

            };
            
            //#endregion
            //#region comply
            
            
            
            //#endregion
            
            return this
            
                .adopt(yarg.used)
            
            
        } catch (err) {
            
            if (config.params.strictMode) {
                
                throw err;
                
            };
            
        } finally {
            
            
            
        };
        
    };
    
};

/**
 * @file processScript/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/