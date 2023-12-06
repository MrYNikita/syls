//#region YI

import { YArg } from "@syls/y/arg";
import { YEntity } from "@syls/y/entity";
import { configAi as config } from "./config.mjs";
import { YLayer } from "../-submodule/layer/-module/class.mjs";
import { YLayerInput } from "../-submodule/layer/-heir/layerInput/-module/class.mjs";
import { YLayerOutput } from "../-submodule/layer/-heir/layerOutput/-module/class.mjs";

//#endregion
//#region YT

/** ### aiTC
 * @typedef aiTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').aiT&aiTC} aiT */

//#endregion

/**
 * ### YNN
 * 
 * Класс нейронных сетей.
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YNN extends YEntity {
    
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
     * @type {YNN[]}
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
     * @arg {...YNN} args `Аргументы`
     * @returns {YNN[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YNN)?}
     * @template {YNN} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### layers
     * 
     * Слои.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YLayer[]}
     * @field
     * @public
    */
    layers;
    
    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YNN;
        
    };

    /**
     * ### appendLayer
     * 
     * Метод добавления слоёв.
     * 
     * Каждый слой размещается в соотвествии с порядком их добавления.
     * 
     * Важно учитывать ряд правил по использованию метода:
     * 1. Первым слоем всегда указывается `input` слой.
     * 2. Послденим слоем всегда указывается `output` слой.
     * 3. Сеть может содержать только один `input` и `output` слой.
     * 
     * ***
     * @arg {...[aiT['layerType'], number]} layers `Слои`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    appendLayer(...layers) {
        
        for (let layer of layers) {

            switch (layer[0]) {

                case 'input': layer = new YLayerInput(...layer); break;
                case 'output': layer = new YLayerOutput(...layer); break;

            };

            this.layers.push(layer);

        };

        return this;
        
    };
    
    //#endregion
    
    /**
     * ### YNNConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {aiTC} args `Аргументы`
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
            
            /** @type {YArg<YNN>} */
            const yarg = args instanceof YArg ? args : new YArg(args);
            
            
            
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
 * @file ai/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/