//#region YI

import { Y } from '../../../-module/class.mjs';
import { YArg } from '../../arg/-module/class.mjs';
import { YCond } from '../../cond/-module/class.mjs';
import { YRept } from '../../rept/-module/class.mjs';
import { YHandler } from '../-submodule/handler/-module/class.mjs';
import { YContext } from '../-submodule/context/-module/class.mjs';
import { configEntity as config } from './config.mjs';

//#endregion
//#region YT

/** ### entityTC
 * @typedef entityTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').entityT&entityTC} entityT */

//#endregion

/**
 * ### YEntity
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YEntity extends Y {

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
     * @type {YEntity[]}
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
     * @arg {...YEntity} args `Аргументы`
     * @returns {YEntity[]}
    */
    static create(...args) {

        return super.create(...args);

    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YEntity)?}
     * @template {YEntity} Y1
     * @override
    */
    static setClass(value) {

        return super.setClass(value);

    };

    //#endregion
    //#region field

    /**
     * ### _y
     * 
     * Контекст.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YContext<this>}
     * @field
     * @public
    */
    _y = new YContext();

    //#endregion
    //#region method

    /**
     * @method
     * @public
     * @override
    */
    getClass() {

        return YEntity;

    };

    /**
     * ### getRept
     * 
     * Метод получения отчёта.
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getRept() {
        
        return new YRept(this);
        
    };
    /**
     * ### getHandler
     * 
     * Метод получения обработчика по метке.
     * 
     * ***
     * @arg {string} label `Метка`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    getHandler(label) {
        
        for (const handler of this._y.handlers) {

            if (handler.label === label) return handler;

        }

        return null;
        
    };
    /**
     * ### useRept
     * 
     * Метод использования отчёта.
     * 
     * ***
     * @arg {(self:YRept<this>) => void} code `Код`
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    useRept(code) {
        
        try {

            if (!YCond.isFunc(code)) return this;

            code(this.getRept());

        } catch (error) {



        };

        return this;
        
    };
    /**
     * ### handle
     * 
     * Метод обработки событий.
     * 
     * ***
     * @arg {...string} labels `Метки` 
     * 
     * 
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    handle(...labels) {
        
        for (const label of labels) {

            const handler = this.getHandler(label);

            if (handler) {

                handler.handle(this);

                if (!handler.procedures.length) {

                    this._y.handlers.splice(this._y.handlers.indexOf(handler), 1);

                };

            };

        };

        return this;
        
    };
    /**
     * ### appendHandler
     * 
     * Метод добавления обработчиков.
     * 
     * ***
     * @arg {(self:this)=>void} func `Функция`
     * @arg {string} label `Метка`
     * @arg {string} procLabel `Метка процедуры`
     * @arg {boolean} disposable `Одноразовость`
     * ***
     * @since `1.0.0`
     * @version `1.0.0`
     * @method
     * @public
    */
    appendHandler(label, procLabel, func, disposable) {
        
        const values = YCond.isString(arguments[0]) ? [[label, [procLabel, func, disposable]]] : arguments;

        for (const value of values) {

            label = value[0];

            const procedures = value.slice(1);
            const handler = this.getHandler(label);

            if (handler) {

                handler.append(...procedures);

            } else {

                this._y.handlers.push(new YHandler(label, disposable).append(...procedures));

            };

        };

        return this;
        
    };

    //#endregion

    /**
     * ### YEntityConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {entityTC} args `Аргументы`
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

            /** @type {YArg<YEntity>} */
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

                .adopt(yarg.getData())


        } catch (err) {

            if (config.params.strictMode) {

                throw err;

            };

        } finally {



        };

    };

};

/**
 * @file entity/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/