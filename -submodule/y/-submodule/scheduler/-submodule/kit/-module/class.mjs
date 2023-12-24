//#region YI

import { arrayRemove } from "@syls/array";
import { YCase } from "../-submodule/case/-module/class.mjs";
import { YArg } from "../../../../arg/-module/export.mjs";
import { condIsFunc, condIsStringSig } from "../../../../cond/-module/module.mjs";
import { configKit as config } from "./config.mjs";
import { funcLoopRangeIn } from "@syls/func";
import { YE } from "../../e/-module/class.mjs";

//#endregion
//#region YT

/** ### kitTC
 * @typedef kitTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').kitT&kitTC} kitT */

//#endregion

/**
 * ### YKit
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YKit extends YE {
    
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
     * @type {YKit[]}
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
     * @arg {...YKit} args `Аргументы`
     * @returns {YKit[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YKit)?}
     * @template {YKit} Y1
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
     * @type {YCase[]}
     * @field
     * @public
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
        
        return YKit;
        
    };
    /**
     * ### happen
     * 
     * Метод выполнения события.
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    happen() {
        
        funcLoopRangeIn(this.cases, ycase => ycase.happen());

        return this;
        
    };
    /**
     * ### appendCase
     * 
     * Метод добавления случая.
     * 
     * ***
     * @arg {...[YCase['label'], YCase['func']]} cases `Случаи`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    appendCase(...cases) {
        
        for (const ycase of cases) if (condIsStringSig(ycase[0]) && condIsFunc(ycase[1])) {

            const find = this.cases.find(caseNow => caseNow[0] === ycase[0]);

            if (find) {

                find.func = ycase[1];
                
                continue;

            };
            
            this.cases.push(new YCase(...ycase));

        };

        return this;
        
    };
    /**
     * ### removeCase
     * 
     * Метод удаления случая.
     * 
     * ***
     * @arg {...string} cases `Случаи`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    removeCase(...cases) {
        
        for (const ycase of cases) if (condIsStringSig(ycase)) {

            const index = this.cases.findIndex(caseNow => caseNow[0] === ycase[0]);

            if (index === -1) arrayRemove(this.cases, index, 1);

        };

        return this;
        
    };
    
    //#endregion
    
    /**
     * ### YKitConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...kitTC&YKit} args `Аргументы`
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
            
            /** @type {YArg<YKit&kitTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);
            
            yarg.setFirst(

                ['cases', 'arrayJect'],

            );
            
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
 * @file kit/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/