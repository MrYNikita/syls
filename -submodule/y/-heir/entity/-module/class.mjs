//#region YI

import { Y } from '@syls/y';
import { YContext } from '../-submodule/context/-module/export.mjs';
import { YHandler } from '../-submodule/handler/-module/class.mjs';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default.value)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

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
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;

    /**
     * @arg {...YEntity} args `Аргументы`
     * @returns {YEntity[]}
    */
    static create(...args) {

        return Object.getPrototypeOf(SEntity).create.apply(this, [...args]);

    };

};
class DEntity extends SEntity {

    test;

};
class IEntity extends DEntity {

    /**
     * ### _y
     * 
     * Контекст.
     * 
     * *** 
     * @type {YContext?} 
     * @protected
    */
    _y = new YContext();

};
class MEntity extends IEntity {

    /**
     * ### findHandle
     * - Версия `0.0.0`
     * ***
     *
     * Метод получения обработчика по его метке.
     *
     * ***
     * @arg {string} label `Метка`
     * @public
     * @returns {YHandler?}
    */
    findHandle(label) {

        const handler = this._y.handlers.find(h => h.label === label);

        return handler ?? null;

    };

};
class FEntity extends MEntity {

    /**
     * ### YEntity.constructor
     * 
     * 
     * 
     * ***
     * @arg {YEntityT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FEntity.#before(t), {}));

        FEntity.#deceit.apply(this, [t]);

        return new Proxy(this.correlate(), {

            get(t, p) {

                t._y.log.appendRecords([`Получено значение по свойству ${p}`, 'debug/#']);

                return t[p];

            },
            set(t, p, v) {

                t._y.log.appendRecords([`Установлено значение по свойству ${p}`, 'debug']);

                t[p] = v;

                return true;

            },

        });

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YEntityT} */
        let r = {};

        if (t?.length === 1 && [Object, YEntity].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YEntityT} t @this {YEntity} */
    static #deceit(t) {

        try {

            FEntity.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YEntityT} t @this {YEntity} */
    static #verify(t) {

        const {



        } = t;

        FEntity.#handle.apply(this, [t]);

    };
    /** @arg {YEntityT} t @this {YEntity} */
    static #handle(t) {



        FEntity.#create.apply(this, [t]);

    };
    /** @arg {YEntityT} t @this {YEntity} */
    static #create(t) {

        const {



        } = t;

        this.adopt(t);

        if (config) {

            this.adoptDefault(config);

        };

    };

};

/**
 * ### YEntity
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YEntity extends FEntity {

    /**
     * ### handle
     * - Версия `0.0.0`
     * ***
     * 
     * Метод обработки событий.
     * 
     * ***
     * @arg {...string} labels `Метки`
     * @public
    */
    handle(...labels) {

        for (const label of labels) {

            const handler = this.findHandle(label);

            if (handler) {

                handler.exec(this);

                handler.procedures = handler.procedures.filter(p => !p.disposable);

            };

        };

        return this;

    };

    /**
     * ### appendHandler
     * - Версия `0.0.0`
     * ***
     *
     * Метод добавления обработчиков.
     *
     * ***
     * @arg {...[string, [string, function(YEntity):void]]} handlers `Обработчики`
     * @public
    */
    appendHandlers(...handlers) {

        try {

            handlers.forEach(handle => {

                const label = handle[0];
                const procedures = handle.slice(1);
                const find = this.findHandle(label);

                if (find) {

                    find.appendProcedures(...procedures);

                } else {

                    handle = new YHandler(label).appendProcedures(...procedures);

                    this._y.handlers.push(handle);

                };

            });

        } catch (e) {

            throw new Error(e);

        };

        return this;

    };

};