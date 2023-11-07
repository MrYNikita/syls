//#region YI

import { Y } from "@syls/y";
import { YArg } from "@syls/y/arg";
import { configPath as config } from "./config.mjs";
import { pathBack, pathBackByName, pathCheck, pathDecompose, pathExist, pathGet, pathGetIn, pathGetTo, pathIsRelative, pathNormalize, pathSetExpand, pathSetName } from "./module.mjs";

//#endregion
//#region YT

/** ### pathT
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * 
 * @typedef {import("./module.mjs").pathT} pathT
 * 
*/

//#endregion

/**
 * ### YPath
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
export class YPath extends Y {
    
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
     * @type {YPath[]}
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
     * ### isRelative
     * 
     * ***
     * 
     * Функция {@link pathIsRelative|проверки пути на относительность}.
     * 
     * ***
     * @arg {string|RegExp} fragment `Фргамент`
     * 
     * 
     * ***
     * @static
     * @method
     * @public
    */
    static isRelative(fragment) {
        
        return pathIsRelative(fragment)
        
    };
    /**
     * ### get
     * 
     * ***
     * 
     * Метод {@link pathGet|получения пути до файла/директории по указанному фрагменту пути}.
     * 
     * ***
     * @arg {boolean} cacheMode `Кеширование`
     * @arg {string|RegExp} fragment `Фрагмент` 
     * 
     * 
     * ***
     * @static
     * @method
     * @public
     * @since `1.0.0`
     * @version `1.0.0`
    */
    static get(fragment, cacheMode) {
        
        return pathGet(fragment, cacheMode);
        
    };
    /**
     * ### getTo
     * 
     * ***
     * 
     * Метод {@link pathGetTo|получения относительного пути от одного объекта файловой системы к другому}.
     * 
     * ***
     * @arg {string|RegExp} to `Куда`
     * @arg {string|RegExp} from `Откуда`
     * 
     * 
     * ***
     * @static
     * @method
     * @public
    */
    static getTo(to, from) {
        
        return pathGetTo(to, from);
        
    };
    /**
     * ### getIn
     * 
     * ***
     * 
     * Функция {@link pathGetIn|получения внутренних путей}. 
     * 
     * ***
     * @arg {string|RegExp} fragment `fragment`
     * 
     * 
     * ***
     * @static
     * @method
     * @public
    */
    static getIn(fragment) {
        
        return pathGetIn(fragment);
        
    };
    /**
     * @arg {...YPath} args `Аргументы`
     * @returns {YPath[]}
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
     * @template {YPath} Y1
    */
    static setClass(value) {
        
        return super.setClass(value);
        
    };
    
    //#endregion
    //#region field
    
    /**
     * ### url
     * 
     * Путь до файла.
     * 
     * *** 
     * @type {string}
     * @field
     * @protected
    */
    url;
    
    //#endregion
    //#region method
    
    /**
     * ### isRelative
     * 
     * ***
     * 
     * Метод проверки путь на относительность.
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @method
     * @public
    */
    isRelative() {
        
        return pathIsRelative(this.url);
        
    };
    /**
     * ### get
     * 
     * ***
     * 
     * Метод получения пути.
     * 
     * ***
     * @method
     * @public
    */
    get() {
        
        return this.url;
        
    };
    /**
     * ### getTo
     * 
     * ***
     * 
     * Метод получения относительного пути от текущего пути до указанного пути.
     * 
     * ***
     * @arg {string} to `Куда`
     * 
     * 
     * ***
     * @method
     * @public
    */
    getTo(to) {
        
        return pathGetTo(to, this.url);
        
    };
    /**
     * ### getIn
     * 
     * ***
     * 
     * Метод получения вложенных путей.
     * 
     * ***
     * @method
     * @public
    */
    getIn() {
        
        return pathGetIn(this.url);
        
    };
    /**
     * ### getDecompose
     * 
     * ***
     * 
     * Метод получения разложения пути.
     * 
     * ***
     * @method
     * @public
    */
    getDecompose() {
        
        return pathDecompose(this.url);
        
    };
    /**
     * ### set
     * 
     * ***
     * 
     * Метод указания пути.
     * 
     * ***
     * @arg {import("./module.mjs").pathTFragment} fragment
     * @method
     * @public
    */
    set(fragment) {
        
        this.url = pathGet(fragment);

        if (!this.url) this.url = pathNormalize(fragment);

        return this;
        
    };
    /**
     * ### setName
     * 
     * ***
     * 
     * Метод установки имени в указанном пути.
     * 
     * ***
     * @arg {pathT['name']} name `Имя`
     * 
     * 
     * ***
     * @method
     * @public
    */
    setName(name) {
        
        this.url = pathSetName(this.url, name);

        return this;
        
    };
    /**
     * ### setExpand
     * 
     * ***
     * 
     * Метод установки расширения.
     * 
     * ***
     * @arg {pathT['expand']} expand `Расширение`
     * 
     * 
     * ***
     * @method
     * @public
    */
    setExpand(expand) {
        
        this.url = pathSetExpand(this.url, expand);

        return this;
        
    };
    /**
     * ### back
     * 
     * ***
     * 
     * Метод подъёма по пути.
     * 
     * ***
     * @arg {number} deapth `Глубина`
     * ***
     * @method
     * @public
    */
    back(deapth) {
        
        this.url = pathBack(this.url, deapth);

        return this;
        
    };
    /**
     * ### backByName
     * 
     * ***
     * 
     * Метод подъёма по текущему пути до встречной папки с указанным именем.
     * 
     * ***
     * @arg {string} name `Имя`
     * ***
     * @method
     * @public
    */
    backByName(name) {
        
        this.url = pathBackByName(this.url, name);

        return this;
        
    };
    /**
     * ### check
     * 
     * ***
     * 
     * Метод проверки пути на корректность.
     * 
     * ***
     * @method
     * @public
    */
    check() {
        
        return pathCheck(this.url);
        
    };
    /**
     * ### exist
     * 
     * ***
     * 
     * Метод проверки наличия пути.
     * 
     * ***
     * @method
     * @public
    */
    exist() {
        
        return pathExist(this.url);
        
    };
    
    //#endregion
    
    /**
     * ### YPathConstructor
     * 
     * 
     * 
     * ***
     * @arg {YPathT} args `Аргументы`
     * 
     * Представлены единым объектом носителем аргументов.
     * 
     * ***
     * @constructor
    */
    constructor(...args) {
        
        try {
            
            //#region before
            
            /** @type {YArg<YPath>} */
            const yarg = args instanceof YArg ? args : new YArg(args);
            
            yarg.set(

                ['url', 'string'],

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
            
                .adopt(yarg.getData())
                .set(this.url)
            
            
        } catch (err) {
            
            if (config.params.strictMode) {
                
                throw err;
                
            };
            
        } finally {
            
            
            
        };
        
    };
    
};

/**
 * @file path/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/