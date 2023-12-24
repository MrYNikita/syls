//#region YI

import { YArg } from "@syls/y/arg";
import { configSwitch as config } from "./config.mjs";
import { YKit } from "../../../-module/class.mjs";
import { YCaseOption } from "../-submodule/caseOption/-module/class.mjs";
import { funcLoopRangeIn } from "@syls/func";
import { condIsStringSig } from "../../../../../../cond/-module/module.mjs";

//#endregion
//#region YT

/** ### switchTC
 * @typedef switchTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').switchT&switchTC} switchT */

//#endregion

/**
 * ### YSwitch
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YSwitch extends YKit {
    
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
     * @type {YSwitch[]}
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
     * @arg {...YSwitch} args `Аргументы`
     * @returns {YSwitch[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YSwitch)?}
     * @template {YSwitch} Y1
     * @override
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### cases
     * 
     * Случаи.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YCaseOption[]}
     * @field
     * @public
     * @override
    */
    cases;

    //#endregion
    //#region method
    
    /**
     * @method
     * @public
     * @override
    */
    getClass() {
        
        return YSwitch;
        
    };
    /**
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
     * @override
    */
    happen() {
        
        funcLoopRangeIn(this.cases, ycase => {

            if (ycase.active) ycase.func(this);
            
            if (ycase.activePost) {

                ycase.active = true;
                ycase.activePost = false;

            } else if (ycase.deactivePost) {

                ycase.deactivePost = false;
                ycase.active = false;

            };

        });

        return this;
        
    };
    /**
     * ### activate
     * 
     * Метод активации случаев по меткам.
     * 
     * ***
     * @arg {...string} labels `Метки`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    activate(...labels) {
        
        funcLoopRangeIn(labels, label => {

            if (!condIsStringSig(label)) return;

            funcLoopRangeIn(this.cases, (ycase, index, array, dc, db) => {

                if (ycase.label !== label) return;

                ycase.active = true;

                db();

            });

        });

        return this;
        
    };
    /**
     * ### activatePost
     * 
     * Метод пост-активации случаев по меткам.
     * 
     * ***
     * @arg {...string} labels `Метки`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    activatePost(...labels) {
        
        funcLoopRangeIn(labels, label => {

            if (!condIsStringSig(label)) return;

            funcLoopRangeIn(this.cases, (ycase, index, array, dc, db) => {

                if (ycase.label !== label) return;

                ycase.activePost = true;

                db();

            });

        });

        return this;
        
    };
    /**
     * ### deactivate
     * 
     * Метод деактивации случаев по меткам.
     * 
     * ***
     * @arg {...string} labels `Метки`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    deactivate(...labels) {
        
        funcLoopRangeIn(labels, label => {

            if (!condIsStringSig(label)) return;

            funcLoopRangeIn(this.cases, (ycase, index, array, dc, db) => {

                if (ycase.label !== label) return;

                ycase.active = false;

                db();

            });

        });

        return this;
        
    };
    /**
     * ### deactivatePost
     * 
     * Метод пост-деактивации случаев по меткам.
     * 
     * ***
     * @arg {...string} labels `Метки`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    deactivatePost(...labels) {
        
        funcLoopRangeIn(labels, label => {

            if (!condIsStringSig(label)) return;

            funcLoopRangeIn(this.cases, (ycase, index, array, dc, db) => {

                if (ycase.label !== label) return;

                ycase.activePost = false;
                ycase.deactivePost = true;

                db();

            });

        });

        return this;
        
    };
    
    //#endregion
    
    /**
     * ### YSwitchConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...switchTC&YSwitch} args `Аргументы`
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
            
            /** @type {YArg<YSwitch&switchTC>} */
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
 * @file switch/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/