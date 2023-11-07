//#region YI

import { Y } from "../../../-module/class.mjs";
import configY from "../../../-module/config.mjs";
import { configConfig as config } from "./config.mjs";

//#endregion
//#region YT

/** ### configTC
 * @typedef configTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').configT&configTC} configT */

//#endregion

/**
 * ### YConfig
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * @template Y1,Y2
 * 
*/
export class YConfig extends Y {
    
    //#region static
    
    static {
        
        this
            
            .appendModule(this)
            .setClass(configY)
        
    };
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YConfig[]}
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
     * @arg {...YConfig} args `Аргументы`
     * @returns {YConfig[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YConfig)?}
     * @template {YConfig} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### value
     * 
     * Значение.
     * 
     * *** 
     * @type {Y1&Y2['params']}
     * @field
     * @public
    */
    params;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YConfig;
        
    };
    
    
    //#endregion
    
    /**
     * ### YConfigConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @arg {Y1} conf1
     * @arg {Y2} conf2
     * 
     * Представлены единым объектом носителем аргументов.
     * 
     * ***
     * @since `1.0.0`
     * @public
     * @version `1.0.0`
     * @constructor
    */
    constructor(conf1, conf2) {
        
        try {

            //#region before

            super();

            let args = {

                value: conf1,
                prototype: conf2,

            };

            //#endregion
            //#region verify



            //#endregion
            //#region handle



            //#endregion
            //#region comply

            this

                .do(self => {

                    self.params = conf1;

                    if (self.params && args.prototype) {

                        Object.setPrototypeOf(self.params, args.prototype instanceof YConfig ? args.prototype.params : args.prototype);

                    };

                });

            //#endregion

        } catch (err) {

            if (config.params.strictMode) {

                throw err;

            };

        } finally {



        };
        
    };
    
};

/**
 * @file config/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/