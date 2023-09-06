//#region YI

import { Y } from '@syls/y';
import { YArg } from '@syls/y/arg';
import { configLayout as config } from './config.mjs';
import { YElement } from '../-submodule/element/-module/export.mjs';
import { YANSI, ansiGetColorReset } from '../../ansi/-module/export.mjs';
import { stringAppend, stringGetRow, stringSetRow } from '../../../-module/export.mjs';

//#endregion
//#region YT

/** ### YLayoutT
 * - Тип `T`
 * 
 * Основной параметр модуля `YLayout`.
 * 
 * @typedef {YLayoutTE&YLayoutTU&Y} YLayoutT
 * 
*/
/** ### YLayoutTE
 * - Тип `TE`
 * 
 * Параметр наследования `YLayout`.
 * 
 * @typedef {Omit<DLayout, keyof SLayout>} YLayoutTE
 * 
*/
/** ### YLayoutTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YLayout`.
 * 
 * @typedef YLayoutTU
 * @prop {any} _
 * 
*/

//#endregion

class SLayout extends Y {
    
    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YLayout[]}
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
     * @arg {...YLayout} args `Аргументы`
     * @returns {YLayout[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SLayout).create.apply(this, args);
        
    };
    
};
class DLayout extends SLayout {
    
    /**
     * ### ansi
     * 
     * ANSI вставка.
     * 
     * *** 
     * @type {YANSI?}
     * @field
     * @public
    */
    ansi;
    
};
class ILayout extends DLayout {
    
    /**
     * ### pointer
     * 
     * Указатель.
     * 
     * *** 
     * @type {[number, number]}
     * @field
     * @protected
    */
    pointer;
    /**
     * ### elements
     * 
     * Элементы.
     * 
     * *** 
     * @type {YElement[][]?}
     * @field
     * @protected
    */
    elements;
    
};
class MLayout extends ILayout {
    
    
    
};
class FLayout extends MLayout {
    
    /**
     * ### YLayout.constructor
     * 
     * 
     * 
     * ***
     * @arg {YLayoutT} args
    */
    constructor(args) {
        
        super(args = FLayout.#before(args = arguments));
        
        FLayout.#deceit.apply(this, [args]);
        
        return this.correlate();
        
    };
    
    /** @arg {DLayout} args */
    static #before(args) {
        
        /** @type {YArg<ILayout>} */
        const yarg = args instanceof YArg ? args : new YArg(args);
        
        yarg.dataUsed.string = yarg.extract('string');
        
        return yarg;
        
    };
    /** @arg {YArg<ILayout>} args @this {YLayout} */
    static #deceit(args) {
        
        try {
            
            FLayout.#verify.apply(this, arguments);
            
        } catch (e) {
            
            if (config?.strictMode) {
                
                throw e;
                
            };
            
            return new YLayout();
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YArg<ILayout>} args @this {YLayout} */
    static #verify(args) {
        
        const {
            
            
            
        } = args;
        
        FLayout.#handle.apply(this, arguments);
        
    };
    /** @arg {YArg<ILayout>} args @this {YLayout} */
    static #handle(args) {
        
        
        
        FLayout.#create.apply(this, arguments);
        
    };
    /** @arg {YArg<ILayout>} args @this {YLayout} */
    static #create(args) {
        
        const {
            
            
            
        } = args;
        
        this
        
            .adopt(args.getData());
        
    };
    
};

/**
 * ### YLayout
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YLayout`.
 * 
 * ***
 * @class
 * 
*/
export class YLayout extends FLayout {
    
    /**
     * ### get
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    get() {



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
     * @returns {typeof YLayout}
    */
    getClass() {
        
        return YLayout;
        
    };

    /**
     * ### set
     * 
     * ***
     * 
     * Метод установки элементов в разметке.
     * 
     * Если элемент существует, то он будет заменен, иначе - добавлен.
     * 
     * ***
     * @arg {...[number, number, import('./element/class.mjs').YElementT]} elements `Элементы`
     * 
     * При необходимости установки одного элемента, можно описать его без использования остаточных параметров.
     * 
     * @public
    */
    set(...elements) {

        for (const element of elements) {

            let [y, x, e] = element;

            if (!this.elements) {

                this.elements = [];

            };
            if (!this.elements[y]) {

                this.elements[y] = [];

            };
            if (!(e instanceof YElement)) {

                e = new YElement(e);

            };

            const flow = this.elements.slice(0, y === 0 ? 1 : y).flat().filter(e => e.flow).at(-1);

            if (flow) {

                if (!e.ansi.foreground) {

                    e.ansi.foreground = flow.ansi.foreground;

                };
                if (!e.ansi.background) {

                    e.ansi.background = flow.ansi.background;
    
                };

            };

            e.ansi.supplement(this.ansi);

            this.elements[y][x] = e;

        };

        return this;

    };
    /**
     * ### setAnsi
     * 
     * ***
     * 
     * Метод установки вставки-ориентира ANSI.
     * 
     * ***
     * @arg {YANSI?} ansi `ANSI`
     * @public
    */
    setAnsi(ansi = null) {
        
        this.ansi = ansi;

        return this;
        
    };

    /**
     * ### rem
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    rem() {



    };

    /**
     * ### apply
     * 
     * ***
     * 
     * Метод применения шаблонов к указанной строке.
     * 
     * ***
     * @arg {string} string `Строки`
     * @public
    */
    apply(string) {

        let result = string;

        if (!this.elements || !this.elements.length) {

            return result;

        };

        for (let y = this.elements.length - 1; y >= 0; y--) {

            const line = this.elements[y];

            if (line) {

                for (let x = line.length - 1; x >= 0; x--) {

                    const element = line[x];

                    if (element) {

                        result = stringSetRow(result, stringAppend(stringGetRow(result, y), x, element.ansi.get() + element.value), y);

                    };

                };

            };

        };

        if (this.ansi) {

            result = this.ansi.get() + result;

        };

        return result + ansiGetColorReset();

    };
    /**
     * ### applyMany
     * 
     * ***
     * 
     * Метод применения шаблона к указанным строкам.
     * 
     * ***
     * @arg {...string} strings `Строки`
     * @public
    */
    applyMany(...strings) {

        const results = [];

        if (!this.elements || !this.elements.length) {

            return strings;

        };

        for (let string of strings) {

            results.push(this.apply(string) + ansiGetColorReset());

        };

        return results;

    };
    
};