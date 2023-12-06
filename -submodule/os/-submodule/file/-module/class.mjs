//#region YI

import { YArg } from "@syls/y/arg";
import { YOsject } from '../../osject/-module/export.mjs';
import { fileRead, fileWrite } from './module.mjs';
import { configFile as config } from "./export.mjs";

//#endregion
//#region YT

/** ### fileTC
 * @typedef fileTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').fileT&fileTC} fileT */

//#endregion

/**
 * ### YFile
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YFile extends YOsject {
    
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
     * @type {YFile[]}
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
     * @arg {...YFile} args `Аргументы`
     * @returns {YFile[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YFile)?}
     * @template {YFile} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    
    
    //#endregion
    //#region method
    
    /**
     * ### read
     * 
     * Метод считывания данных из файла.
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
    read() {
        
        return fileRead(this.path.get());
        
    };
    /**
     * ### write
     * 
     * Метод перезаписывания файла.
     * 
     * ***
     * @arg {string} data `Данные`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    write(data) {
        
        if (this.status) {
            
            fileWrite(this.path.get(), data);

        };

        return this;
        
    };
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YFile;
        
    };
    
    //#endregion
    
    /**
     * ### YFileConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...fileTC&YFile} args `Аргументы`
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
            
            /** @type {YArg<YFile&fileTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            
            
            super(yarg);
            

            
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
 * @file file/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/