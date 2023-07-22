//#region YI

import http2 from "http2";
import { Y, argClassify } from '@syls/y';
import { YConnect } from "../class.mjs";
import { netHttp2HeaderContentType, netHttp2HeaderPath, netHttp2HeaderUserAgent } from "@syls/net";

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(i => config = i.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### YRequestT
 * - Тип `T`
 * 
 * Основной параметр модуля `YRequest`.
 * 
 * @typedef {YRequestTE&YRequestTU&import('@syls/ject').YJectTE} YRequestT
 * 
*/
/** ### YRequestTE
 * - Тип `TE`
 * 
 * Параметр наследования `YRequest`.
 * 
 * @typedef {Omit<DRequest, keyof SRequest>} YRequestTE
 * 
*/
/** ### YRequestTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YRequest`.
 * 
 * @typedef YRequestTU
 * @prop {any} _
 * 
*/

/** ### requestTTMethod
 * - Тип `TT`
 * 
 * 
 * 
 * @typedef {import('./module.mjs').requestTTMethod} requestTTMethod
 * 
*/
/** ### requestTTContentType
 * - Тип `TT`
 * 
 * 
 * 
 * @typedef {import("./module.mjs").requestTTContentType} requestTTContentType
 * 
*/

//#endregion

class SRequest extends Y {

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
     * @arg {...YRequest} args `Аргументы`
     * @returns {YRequest[]}
    */
    static create(...args) {

        return Object.getPrototypeOf(SRequest).create.apply(this, [...args]);

    };

};
class DRequest extends SRequest {

    /**
     * ### method
     * 
     * Метод.
     * 
     * *** 
     * @type {requestTTMethod} 
     * @public
    */
    method;
    /**
     * ### endpoint
     * 
     * Эндпоинт.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    endpoint;
    /**
     * ### supplicant
     * 
     * Проситель.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    supplicant;
    /**
     * ### contentType
     * 
     * Тип контента.
     * 
     * *** 
     * @type {requestTTContentType} 
     * @public
    */
    contentType;

};
class IRequest extends DRequest {

    /**
     * ### data
     * 
     * Данные.
     * 
     * *** 
     * @type {string} 
     * @protected
    */
    data = '';
    /**
     * ### stream
     * 
     * Поток.
     * 
     * *** 
     * @type {http2.ClientHttp2Stream} 
     * @public
    */
    stream = null;

};
class MRequest extends IRequest {



};
class FRequest extends MRequest {

    /**
     * ### YRequest.constructor
     * 
     * 
     * 
     * ***
     * @arg {YRequestT} t
    */
    constructor(t) {

        t = [...arguments];

        super(Object.assign(t = FRequest.#before(t), {}));

        FRequest.#deceit.apply(this, [t]);

        return this.correlate();

    };

    /** @arg {any[]} t */
    static #before(t) {

        /** @type {YRequestT} */
        let r = {};

        if (t?.length === 1 && [Object, YRequest].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            r = t[0];

        } else if (t?.length) {

            if (t[0]?._ytp) {

                t = [...t[0]._ytp];

            };

            switch (t.length) {

                default: {

                    const arg = argClassify(t);

                    r.endpoint = arg.string[0];
                    r.method = arg.string[1];
                    r.contentType = arg.string[2];
                    r.supplicant = arg.string[3];

                    r.stream = arg.ject[0];

                };

            };

            if (!Object.values(r).length) {

                r = { _ytp: t, };

            };

        };

        return r;

    };
    /** @arg {YRequestT} t @this {YRequest} */
    static #deceit(t) {

        try {

            FRequest.#verify.apply(this, [t]);

        } catch (e) {

            throw e;

        } finally {



        };

    };
    /** @arg {YRequestT} t @this {YRequest} */
    static #verify(t) {

        const {



        } = t;

        FRequest.#handle.apply(this, [t]);

    };
    /** @arg {YRequestT} t @this {YRequest} */
    static #handle(t) {



        FRequest.#create.apply(this, [t]);

    };
    /** @arg {YRequestT} t @this {YRequest} */
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
 * ### YRequest
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YRequest extends FRequest {

    /**
     * ### do
     * - Версия `0.0.0`
     * ***
     * 
     * Метод совершения запроса.
     * 
     * ***
     * @arg {YConnect} connect `Соединение`
     * @async
     * @public
    */
    async do(connect) {

        if (connect instanceof YConnect && this.endpoint) {

            await new Promise(resolve => {

                const request = this.stream = connect.socket

                .request({

                    [netHttp2HeaderPath]: this.endpoint,
                    [netHttp2HeaderUserAgent]: this.supplicant ?? connect.supplicant,
                    [netHttp2HeaderContentType]: this.contentType,

                })
                .on('response', (headers, flags) => {

                    request

                        .on('data', (chunk) => {

                            this.data += chunk.toString();

                        })
                        .on('end', () => {

                            resolve();

                        });

                });

            });

            return this.data;

        };

    };

};