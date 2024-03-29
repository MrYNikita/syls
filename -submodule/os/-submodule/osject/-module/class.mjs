//#region YI

import { YArg } from "@syls/y/arg";
import { configOsject as config } from "./config.mjs";
import { YEntity } from "@syls/y/entity";
import { YPath } from "../../path/-module/class.mjs";
import { osjectRemove, osjectMove, osjectRename } from "./module.mjs";

//#endregion
//#region YT

/**
 * @typedef YOsjectT
 * @prop {} _
 * 
*/

//#endregion

/**
 * ### YOsject
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YOsject extends YEntity {
    
    //#region static
    
    static {
        
        
        
    };
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YOsject[]}
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
     * @arg {...YOsject} args `Аргументы`
     * @returns {YOsject[]}
    */
    static create(...args) {
        
        return super.create(...args);
        
    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&Y1)?}
     * @template {YOsject} Y1
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
     * @type {YPath?}
     * @field
     * @protected
    */
    path;
    
    //#endregion
    //#region method
    
    /**
     * ### move
     * 
     * ***
     * 
     * Метод перемещения объекта.
     * 
     * ***
     * @arg {string|RegExp} location `Локация`
     * @arg {string|RegExp} fragment `Фрагмент`
     * 
     * 
     * ***
     * @method
     * @public
    */
    move(fragment, location) {
        
        const pathNew = osjectMove(fragment, location);

        if (pathNew) this.path.set(pathNew);

        return this;
        
    };
    /**
     * ### rename
     * 
     * ***
     * 
     * Метод переименования объекта.
     * 
     * ***
     * @arg {string} name `Имя`
     * @arg {string} expand `Расширение`
     * 
     * 
     * ***
     * @method
     * @public
    */
    rename(name, expand) {
        
        const pathNew = osjectRename(this.path.get(), name, expand);

        if (pathNew) this.path.set(pathNew);

        return this;
        
    };
    /**
     * ### delete
     * 
     * ***
     * 
     * Метод удаления объекта.
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @method
     * @public
    */
    delete() {
        
        osjectRemove(this.path.get());

        return this;
        
    };
    
    //#endregion
    
    /**
     * ### YOsjectConstructor
     * 
     * 
     * 
     * ***
     * @arg {YOsjectT} args `Аргументы`
     * 
     * Представлены единым объектом носителем аргументов.
     * 
     * ***
     * @constructor
    */
    constructor(...args) {
        
        try {
            
            //#region before
            
            /** @type {YArg<YOsject>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(args);
            
            yarg.setFirst(

                ['path', 'string'],

            );
            
            super(yarg);
            
            //#endregion
            //#region verify
            
            
            
            //#endregion
            //#region handle
            
            yarg.used.path = new YPath(yarg.used.path);
            
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
 * @file osject/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/