//#region YI

import { Y } from '@syls/y';
import { YArg } from '@syls/y/arg';
import { configANSI as config } from './config.mjs';

//#endregion
//#region YT

/** ### YANSIT
 * - Тип `T`
 * 
 * Основной параметр модуля `YANSI`.
 * 
 * @typedef {YANSITE&YANSITU&Y} YANSIT
 * 
*/
/** ### YANSITE
 * - Тип `TE`
 * 
 * Параметр наследования `YANSI`.
 * 
 * @typedef {Omit<DANSI, keyof SANSI>} YANSITE
 * 
*/
/** ### YANSITU
 * - Тип `TU`
 * 
 * Уникальные параметры `YANSI`.
 * 
 * @typedef YANSITU
 * @prop {any} _
 * 
*/

/** ### ANSITTColor
 * - Тип `TT`
 * - Версия `0.0.0`
 * 
 * 
 * 
 * @typedef {import('./module.mjs').ansiColorTMColors|number} ANSITTColor
 * 
*/

//#endregion

class SANSI extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YANSI[]}
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
     * @arg {...YANSI} args `Аргументы`
     * @returns {YANSI[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SANSI).create.apply(this, [...args]);
        
    };
    
};
class DANSI extends SANSI {
    
    /**
     * ### underline
     * 
     * Линия подчеркивания.
     * 
     * *** 
     * @type {boolean}
     * @field
     * @public
    */
    underline;
    /**
     * ### foreground
     * 
     * Цвет символов.
     * 
     * *** 
     * @type {ANSITTColor}
     * @field
     * @public
    */
    foreground;
    /**
     * ### background
     * 
     * Цвет фона.
     * 
     * *** 
     * @type {ANSITTColor}
     * @field
     * @public
    */
    background;
    
};
class IANSI extends DANSI {
    
    
    
};
class MANSI extends IANSI {
    
    
    
};
class FANSI extends MANSI {
    
    /**
     * ### YANSI.constructor
     * 
     * 
     * 
     * ***
     * @arg {YANSIT} args
    */
    constructor(args) {
        
        super(args = FANSI.#before(args = arguments));
        
        FANSI.#deceit.apply(this, [args]);
        
        return this.correlate();
        
    };
    
    /** @arg {DANSI} args */
    static #before(args) {
        
        /** @type {YArg<IANSI>} */
        const yarg = args instanceof YArg ? args : new YArg(args);

        yarg.set(

            ['underline', 'bool'],
            ['foreground', 'string', 'number'],
            ['background', 'string', 'number'],

        );

        return yarg;
        
    };
    /** @arg {YArg<IANSI>} args @this {YANSI} */
    static #deceit(args) {
        
        try {
            
            FANSI.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YANSI();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<IANSI>} args @this {YANSI} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FANSI.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<IANSI>} args @this {YANSI} */
    static #handle(args) {
        
        args.dataUsed.underline = args.dataUsed.underline ? true : false;

        FANSI.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<IANSI>} args @this {YANSI} */
    static #create(args) {
        
        const {
            
            
            
        } = args;

        this
        
            .adopt(args.getData())
        
    };
    
};

/**
 * ### YANSI
 * - Тип `SDIMFY`
 * - Версия `1.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YANSI`.
 * 
 * ***
 * @class
 * 
*/
export class YANSI extends FANSI {
    
    /**
     * ### get
     * - Версия `0.1.0`
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    get() {
        
        const underline = this.underline ? config.params.codeUnderline : config.params.codeUnderlineReset;

        const foreground = this.foreground ? `${config.params.codeColorForeground}${config.params.codeColor};${this.foreground}` : '';
        const background = this.background ? `${config.params.codeColorBackground}${config.params.codeColor};${this.background}` : '';

        return `${config.params.code}${[underline, foreground, background].filter(code => code).join(';')}m`;
        
    };
    /**
     * ### getClass
     * 
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @method
     * @public
     * @returns {typeof YANSI}
    */
    getClass() {
        
        return YANSI;
        
    };

    /**
     * ### setColor
     * - Версия `0.0.0`
     * ***
     * 
     * Метод установки цветов.
     * 
     * ***
     * @arg {ANSITTColor} background `Цвет фона`
     * @arg {ANSITTColor} foreground `Цвет символов`
     * @public
    */
    setColor(foreground, background) {
        
        this.foreground = ansiGetColorCode(foreground) ?? null;
        this.background = ansiGetColorCode(background) ?? null;

        return this;
        
    };
    
};