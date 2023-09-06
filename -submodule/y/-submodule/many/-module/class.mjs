//#region YI

import { YCursor } from "@syls/many/cursor";
import { Y, } from "@syls/y";
import { YCursorContoller } from "../-submodule/cursorContoller/-module/class.mjs";
import { argClassify } from "../../arg/-module/module.mjs";
import { YArg } from "../../arg/-module/class.mjs";

/** @type {import('./config.mjs')['default']['value']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default?.value ? c.default.value : c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(e => error = e.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YManyT
 * - Тип `T`
 * 
 * Основной параметр модуля `YMany`.
 * 
 * ***
 * 
 * @typedef {YManyTE&YManyTU} YManyT
*/
/** ### YManyTE
 * - Тип `TE`
 * 
 * Параметр наследования `YMany`.
 * 
 * @typedef {Omit<DMany, keyof SMany>} YManyTE
*/
/** ### YManyTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YMany`.
 * 
 * @typedef YManyTU
 * @prop {} _
*/
/** ### YManyTUG
 * - Тип `TUP`
 * 
 * Уникальные генеративные параметры `YMany`.
 * 
 * @typedef YManyTUG
 * @prop {null} _
*/

//#endregion

/**
 * @template Y1
*/
class SMany extends Y {

    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YMany[]}
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
     * @arg {...YMany} args `Аргументы`
     * @returns {YMany[]}
    */
    static create(...args) {

        return Object.getPrototypeOf(SMany).create.apply(this, [...args]);

    };

};
/**
 * @extends SMany<Y1>
 * @template Y1
*/
class DMany extends SMany {

    /**
     * ### values
     * 
     * Значения.
     * 
     * *** 
     * @type {Y1}
     * @field
     * @protected
    */
    values;

};
/**
 * @extends DMany<Y1>
 * @template Y1
*/
class IMany extends DMany {

    /**
     * ### cursors
     * 
     * Курсоры.
     * 
     * *** 
     * @type {YCursor[]}
     * @field
     * @protected
    */
    cursors;

};
/**
 * @extends IMany<Y1>
 * @template Y1
*/
class MMany extends IMany {



};
/**
 * @extends MMany<Y1>
 * @template Y1
*/
class FMany extends MMany {

    /**
     * ### YMany.constructor
     * 
     * 
     * 
     * ***
     * @arg {YManyT&G} args
    */
    constructor(args) {

        super(args = FMany.#before(arguments));

        FMany.#deceit.apply(this, [args]);

        return this.correlate();

    };

    /** @arg {any[]} args */
    static #before(args) {

        /** @type {YArg<IMany>} */
        const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);

        yarg

            .set(

                ['values', 'array', 'string'],

            )

        return yarg;

    };
    /** @arg {YArg<IMany>} args @this {YMany} */
    static #deceit(args) {

        try {

            FMany.#verify.apply(this, arguments);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YArg<IMany>} args @this {YMany} */
    static #verify(args) {

        const {



        } = args;

        FMany.#handle.apply(this, arguments);

    };
    /** @arg {YArg<IMany>} args @this {YMany} */
    static #handle(args) {



        FMany.#create.apply(this, arguments);

    };
    /** @arg {YArg<IMany>} args @this {YMany} */
    static #create(args) {

        const {



        } = args;

        this

            .adopt(args.getData())
            .do(self => self.getCursorController()

                .append({ many: this })

            )


    };

};

/**
 * ### YMany
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YMany` предназначен для работы со множествами.
 * 
 * ***
 * @class
 * @template Y1
 * @extends FMany<YManyTUG&Y1>
 * 
*/
export class YMany extends FMany {

    /** @arg {Y1} args */
    constructor(...args) { super(...args); };

    /**
     * ### getCursorController
     * 
     * ***
     * 
     * Метод получения контроллера курсоров.
     * 
     * ***
     * @since `1.0.0`
     * @method
     * @public
    */
    getCursorController() {

        return new YCursorContoller(this);

    };

};

//#region YE

YMany.getY()['modules'].push(YMany);

//#endregion YE

/**
 * @file many/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/