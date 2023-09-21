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

/** ### YEntityT
 * - Тип `T`
 * 
 * Основной параметр модуля `YEntity`.
 * 
 * @typedef {YEntityTE&YEntityTU&Y} YEntityT
 * 
*/
/** ### YEntityTE
 * - Тип `TE`
 * 
 * Параметр наследования `YEntity`.
 * 
 * @typedef {Omit<DEntity, keyof SEntity>} YEntityTE
 * 
*/
/** ### YEntityTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YEntity`.
 * 
 * @typedef YEntityTU
 * @prop {any} _
 * 
*/

//#endregion

class SEntity extends Y {

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

        return Object.getPrototypeOf(SEntity).create.apply(this, args);

    };

};
class DEntity extends SEntity {



};
class IEntity extends DEntity {

    /**
     * ### _y
     * 
     * Контекст.
     * 
     * *** 
     * @type {YContext<this>}
     * @field
     * @protected
    */
    _y = new YContext();

};
class MEntity extends IEntity {



};
class FEntity extends MEntity {

    /**
     * ### YEntity.constructor
     * 
     * 
     * 
     * ***
     * @arg {YEntityT} args
    */
    constructor(args) {

        super(args = FEntity.#before(args = arguments));

        FEntity.#deceit.apply(this, [args]);

        return this.correlate();

    };

    /** @arg {DEntity} args */
    static #before(args) {

        /** @type {YArg<IEntity>} */
        const yarg = args instanceof YArg ? args : new YArg(args);



        return yarg;

    };
    /** @arg {YArg<IEntity>} args @this {YEntity} */
    static #deceit(args) {

        try {

            FEntity.#verify.apply(this, arguments);

        } catch (e) {

            if (config?.strictMode) {

                throw e;

            };

            return new YEntity();

        } finally {



        };

    };
    /** @arg {YArg<IEntity>} args @this {YEntity} */
    static #verify(args) {

        const {



        } = args;

        FEntity.#handle.apply(this, arguments);

    };
    /** @arg {YArg<IEntity>} args @this {YEntity} */
    static #handle(args) {



        FEntity.#create.apply(this, arguments);

    };
    /** @arg {YArg<IEntity>} args @this {YEntity} */
    static #create(args) {

        const {



        } = args;

        this

            .adopt(args.getData())
            .do(self => {

                self._y.id = self.getClass().count ?? null;

            })

    };

};

/**
 * ### YEntity
 * - Тип `SDIMFY`
 * - Версия `1.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YEntity`.
 * 
 * ***
 * @class
 * 
*/
export class YEntity extends FEntity {

    /**
     * ### getRept
     * 
     * ***
     * 
     * Метод получения отчёта.
     * 
     * ***
     * @method
     * @public
    */
    getRept() {
        
        return new YRept(this);
        
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
     * @returns {typeof YEntity}
    */
    getClass() {

        return YEntity;

    };
    /**
     * ### getHandler
     * 
     * ***
     * 
     * Метод получения обработчика по метке.
     * 
     * ***
     * @arg {string} label `Метка`
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
     * ### handle
     * 
     * ***
     * 
     * Метод обработки событий.
     * 
     * ***
     * @arg {...string} labels `Метки` 
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
     * ### useRept
     * 
     * ***
     * 
     * Метод использования отчёта.
     * 
     * ***
     * @arg {(self:YRept<this>) => void} code `Код`
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
     * ### appendHandler
     * 
     * ***
     * 
     * Метод добавления обработчиков.
     * 
     * ***
     * @arg {(self:this)=>void} func `Функция`
     * @arg {string} label `Метка`
     * @arg {string} procLabel `Метка процедуры`
     * @arg {boolean} disposable `Одноразовость`
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

};

//#region YE

YEntity.getY()['modules'].push(YEntity);

//#endregion YE

/**
 * @file entity/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/