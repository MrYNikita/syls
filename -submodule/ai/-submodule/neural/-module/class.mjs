//#region YI

import { YArg } from "@syls/y/arg";
import { configNeural as config } from "./config.mjs";
import { YEntity } from "@syls/y/entity";

//#endregion
//#region YT

/** ### neuralTC
 * @typedef neuralTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').neuralT&neuralTC} neuralT */

//#endregion

/**
 * ### YNeural
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YNeural extends YEntity {
    
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
     * @type {YNeural[]}
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
     * @arg {...YNeural} args `Аргументы`
     * @returns {YNeural[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YNeural)?}
     * @template {YNeural} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### error
     * 
     * Ошибка.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @field
     * @public
    */
    error;
    /**
     * ### output
     * 
     * Выход.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @field
     * @public
    */
    output;
    /**
     * ### biases
     * 
     * Смещения.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number[]}
     * @field
     * @public
    */
    biases;
    /**
     * ### weights
     * 
     * Веса.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number[]}
     * @field
     * @public
    */
    weights;
    /**
     * ### activation
     * 
     * Функция активации.
     * 
     * Не обязательна для назначения, так как при работе алгоритмов обучения нейроны используют функцию активации слоя.
     * Однако при необходимости для определённых нейронов может быть назначена индивидуальная функция активации.
     * 
     * В случае указания индивидуальной функции активации, алгоритм слоя будет применять для данного нейрона его собственную заданную функцию активации.
     * 
     * *** 
     * @since `1.0.0`
     * @type {((self:this)=>void)?}
     * @field
     * @public
    */
    activation;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YNeural;
        
    };
    
    //#endregion
    
    /**
     * ### YNeuralConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {neuralTC} args `Аргументы`
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
            
            /** @type {YArg<YNeural>} */
            const yarg = args instanceof YArg ? args : new YArg(args);
            
            yarg.set(

                ['error', 'number'],
                ['output', 'number'],
                ['weights', 'arrayNumber'],
                ['biases', 'arrayNumber'],
                ['activation', 'func'],

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
 * @file neural/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/