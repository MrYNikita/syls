//#region YI

import { Y } from '../../../../../../../-module/export.mjs';
import { YArg } from '../../../../../../arg/-module/export.mjs';
import { configProcedure as config } from './config.mjs';

//#endregion
//#region YT

/** ### YProcedureT
 * - Тип `T`
 * 
 * Основной параметр модуля `YProcedure`.
 * 
 * ***
 * 
 * @typedef {YProcedureTE&YProcedureTU} YProcedureT
*/
/** ### YProcedureTE
 * - Тип `TE`
 * 
 * Параметр наследования `YProcedure`.
 * 
 * @typedef {Omit<DProcedure, keyof SProcedure>} YProcedureTE
*/
/** ### YProcedureTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YProcedure`.
 * 
 * @typedef YProcedureTU
 * @prop {} _
*/
/** ### YProcedureTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YProcedure`.
 * 
 * @typedef YProcedureTUG
 * @prop {null} _
*/

//#endregion

/**
 * @template Y1
*/
class SProcedure extends Y {

    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YProcedure[]}
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
     * @arg {...YProcedure} args `Аргументы`
     * @returns {YProcedure[]}
    */
    static create(...args) {

        return Object.getPrototypeOf(SProcedure).create.apply(this, args);

    };

};
/**
 * @extends SProcedure<Y1>
 * @template Y1
*/
class DProcedure extends SProcedure {

    /**
     * ### func
     * 
     * Функция.
     * 
     * *** 
     * @type {(self:Y1)=>void}
     * @field
     * @public
    */
    func;
    /**
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @type {string}
     * @field
     * @public
    */
    label;
    /**
     * ### disposable
     * 
     * Одноразовость.
     * 
     * Одноразовые процедуры позволяют понять обработчикам, что после их выполнения, их следует удалить.
     * 
     * *** 
     * @type {boolean}
     * @field
     * @public
    */
    disposable;

};
/**
 * @extends DProcedure<Y1>
 * @template Y1
*/
class IProcedure extends DProcedure {



};
/**
 * @extends IProcedure<Y1>
 * @template Y1
*/
class MProcedure extends IProcedure {



};
/**
 * @extends MProcedure<Y1>
 * @template Y1
*/
class FProcedure extends MProcedure {

    /**
     * ### YProcedure.constructor
     * 
     * 
     * 
     * ***
     * @arg {YProcedureT&G} args
    */
    constructor(args) {

        super(args = FProcedure.#before(args = arguments));

        FProcedure.#deceit.apply(this, [args]);

    };

    /** @arg {DProcedure} args */
    static #before(args) {

        /** @type {YArg<IProcedure>} */
        const yarg = args[0] instanceof YArg ? args[0] : new YArg(args);

        yarg.set(

            ['func', 'func'],
            ['label', 'string'],
            ['disposable', 'bool'],

        );

        return yarg;

    };
    /** @arg {YArg<IProcedure>} args @this {YProcedure} */
    static #deceit(args) {

        try {

            FProcedure.#verify.apply(this, arguments);

        } catch (e) {

            if (config?.strictMode) {

                throw e;

            };

            return new YProcedure();

        } finally {



        };

    };
    /** @arg {YArg<IProcedure>} args @this {YProcedure} */
    static #verify(args) {

        const {



        } = args;

        FProcedure.#handle.apply(this, arguments);

    };
    /** @arg {YArg<IProcedure>} args @this {YProcedure} */
    static #handle(args) {



        FProcedure.#create.apply(this, arguments);

    };
    /** @arg {YArg<IProcedure>} args @this {YProcedure} */
    static #create(args) {

        const {



        } = args;

        this

            .adopt(args.getData());

    };

};

/**
 * ### YProcedure
 * - Тип `SDIMFY`
 * - Версия `1.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YProcedure`.
 * 
 * ***
 * @class
 * @template Y1
 * @extends FProcedure<YProcedureTUG&Y1>
 * 
*/
export class YProcedure extends FProcedure {

    /** @arg {Y1} args */
    constructor(args) { super(...arguments); };

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
     * @returns {typeof YProcedure}
    */
    getClass() {

        return YProcedure;

    };

};

//#region YE

YProcedure.getY()['modules'].push(YProcedure);

//#endregion

/**
 * @file procedure/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/