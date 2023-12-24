//#region YI

import { YArg } from "@syls/y/arg";
import { configBrowser as config } from "./config.mjs";
import { YProcess } from "@syls/process";
import { spawn } from 'child_process';

//#endregion
//#region YT

/** ### browserTC
 * @typedef browserTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').browserT&browserTC} browserT */

//#endregion

/**
 * ### YBrowser
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YBrowser extends YProcess {
    
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
     * @type {YBrowser[]}
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
     * @arg {...YBrowser} args `Аргументы`
     * @returns {YBrowser[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YBrowser)?}
     * @template {YBrowser} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### target
     * 
     * Цель.
     * 
     * *** 
     * @since `1.0.0`
     * @type {browserT['browsers']}
     * @field
     * @public
    */
    target;
    
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
        
        const command = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
        
        spawn(`${command} ${this.target}`, ['https://example.com'], {

            shell: true,
            stdio: 'inherit',

        });

        return this;
        
    };
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YBrowser;
        
    };
    
    //#endregion
    
    /**
     * ### YBrowserConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...browserTC&YBrowser} args `Аргументы`
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
            
            /** @type {YArg<YBrowser&browserTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            
            
            super(yarg);
            
            yarg.setFirst(

                ['target', 'string'],

            );
            
            //#endregion
            //#region verify
            
            
            
            //#endregion
            //#region handle
            
            
            
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
 * @file browser/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/