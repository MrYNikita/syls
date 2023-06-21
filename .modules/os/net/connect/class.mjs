//#region YI

import http2 from 'http2';
import { YJect } from '@syls/ject';
import { YRequest } from '@syls/connect';
import { argClassify } from '@syls/arg';
import { condIsNumber } from '@syls/cond';

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

/** ### YConnectT
 * - Тип `T`
 * 
 * Основной параметр модуля `YConnect`.
 * 
 * @typedef {YConnectTE&YConnectTU&YJect} YConnectT
 * 
*/
/** ### YConnectTE
 * - Тип `TE`
 * 
 * Параметр наследования `YConnect`.
 * 
 * @typedef {Omit<DConnect, keyof SConnect>} YConnectTE
 * 
*/
/** ### YConnectTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YConnect`.
 * 
 * @typedef YConnectTU
 * @prop {any} _
 * 
*/

//#endregion

class SConnect extends YJect {
    
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
     * @arg {...YConnect} args `Аргументы`
     * @returns {YConnect[]}
    */
    static create(...args) {
        
        return Object.getPrototypeOf(SConnect).create.apply(this, [...args]);
        
    };
    
};
class DConnect extends SConnect {
    
    /**
     * ### host
     * 
     * Хост.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    host;
    /**
     * ### port
     * 
     * Порт.
     * 
     * *** 
     * @type {number} 
     * @public
    */
    port;
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
     * ### secureMode
     * 
     * Режим HTTPS.
     * 
     * *** 
     * @type {boolean} 
     * @public
    */
    secureMode;
    
};
class IConnect extends DConnect {
    
    /**
     * ### socket
     * 
     * Сокет.
     * 
     * *** 
     * @type {http2.ClientHttp2Session?} 
     * @protected
    */
    socket = null;
    /**
     * ### requests
     * 
     * Запросы.
     * 
     * *** 
     * @type {http2.ClientHttp2Stream[]} 
     * @public
    */
    requests = [];
    
};
class MConnect extends IConnect {
    
    
    
};
class FConnect extends MConnect {
    
    /**
     * ### YConnect.constructor
     * 
     * 
     * 
     * ***
     * @arg {YConnectT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FConnect.#before(t), {}));
        
        FConnect.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YConnectT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YConnect].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                default: {

                    const arg = argClassify(t);

                    r.host = arg.string[0];
                    r.supplicant = arg.string[1];

                    r.port = arg.number[0];

                    r.secureMode = arg.bool[0];

                };
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YConnectT} t @this {YConnect} */
    static #deceit(t) {
        
        try {
            
            FConnect.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YConnectT} t @this {YConnect} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FConnect.#handle.apply(this, [t]);
        
    };
    /** @arg {YConnectT} t @this {YConnect} */
    static #handle(t) {
        
        
        
        FConnect.#create.apply(this, [t]);
        
    };
    /** @arg {YConnectT} t @this {YConnect} */
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
 * ### YConnect
 * - Тип `SDIMFY`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YConnect extends FConnect {
    
    /**
     * ### on
     * 
     * ***
     * 
     * Метод активации соединения.
     * 
     * ***
     * 
     * @public
    */
    on() {
        
        if (!this.socket && this.host) {

            this.socket = http2.connect(`${this.secureMode ? 'https' : 'http'}://${this.host}${condIsNumber(this.port) ? `:${this.port}` : ''}`);

        };

        return this;
        
    };
    /**
     * ### off
     * 
     * ***
     * 
     * Метод прерывания соединения.
     * 
     * ***
     * 
     * @public
    */
    off() {
        
        this.socket.close();

        return this;
        
    };

    /**
     * ### requestPost
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    async requestPost() {
        
        
        
    };

    /**
     * ### requestGetJs
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    async requestGetJs() {
        
        
        
    };
    /**
     * ### requestGet
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    async requestGetText() {
        
        
        
    };
    /**
     * ### requestGetJson
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @async
     * @public
     * @returns {Promise<[{}]|{}>}
    */
    async requestGetJson(endpoint = '/') {
        
        if (this.socket?.connecting) {

            const request = new YRequest(endpoint, 'GET', 'application/json', this.supplicant);

            this.requests.push(request);

            const result = await request.do(this);

            this.requests = this.requests.filter(requestThis => requestThis !== request);

            return JSON.parse(result);

        };

        return null;
        
    };
    /**
     * ### requestGetHtml
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @public
    */
    async requestGetHtml() {
        
        
        
    };

};