//#region YI

import { YArg } from "@syls/y/arg";
import { configLayer as config } from "./config.mjs";
import { YEntity } from "@syls/y/entity";
import { YNeural } from "../../neural/-module/class.mjs";

//#endregion
//#region YT

/** ### layerTC
 * @typedef layerTC
 * @prop {string} type
 * @prop {number} neuralNum
*/

/** @typedef {import('./module.mjs').layerT&layerTC} layerT */

//#endregion

/**
 * ### YLayer
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YLayer extends YEntity {
    
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
     * @type {YLayer[]}
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
     * @arg {...YLayer&layerTC} args `Аргументы`
     * @returns {YLayer[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YLayer)?}
     * @template {YLayer} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### neurals
     * 
     * Нейроны.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YNeural[]}
     * @field
     * @public
    */
    neurals = [];
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YLayer;
        
    };
    
    //#endregion
    
    /**
     * ### YLayerConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {layerTC} args `Аргументы`
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

            /** @type {YArg<YLayer&layerTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(args);
            
            yarg.set(

                ['neuralNum', 'number'],

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
                .do(self => {

                    for (let index = 0; index < yarg.dataUsed.neuralNum; index++) {

                        self.neurals.push(new YNeural());

                    };

                })
            
            
        } catch (err) {
            
            if (config.params.strictMode) {
                
                throw err;
                
            };
            
        } finally {
            
            
            
        };
        
    };
    
};

/**
 * @file layer/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/