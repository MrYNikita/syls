//#region YI

import { YFile } from '@syls/file';
import { Duplex, Stream } from 'stream';
import { YProcess } from '@syls/process';
import { createSecureServer } from "http2";

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

/** ### YServerT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `YServer`.
 * 
 * @typedef {YServerTE&YServerTU} YServerT
 * 
*/
/** ### YServerTE
 * - Тип `TE`
 * - Версия `0.0.0`
 * 
 * Параметр наследования `YServer`.
 * 
 * @typedef {{[p in Exclude<keyof DServer,keyof SServer>|Exclude<keyof SServer,keyof DServer>]:(DServer[p]&SServer[p])}} YServerTE
 * 
*/
/** ### YServerTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * 
 * Уникальные параметры `YServer`.
 * 
 * @typedef YServerTU
 * @prop {any} _
 * 
*/

//#endregion

class SServer extends YProcess {
    
    /**
     * ### config
     * 
     * Конфигуратор.
     * 
     * ***
     * @public
    */
    static config = config;
    
};
class DServer extends SServer {
    
    /**
     * ### name
     * 
     * Наименование.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    name;
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
     * ### label
     * 
     * Метка.
     * 
     * *** 
     * @type {string?} 
     * @public
    */
    label;
    
};
class IServer extends DServer {
    
    /**
     * ### sockets
     * 
     * Соединения.
     * 
     * *** 
     * @type {Duplex[]} 
     * @public
    */
    sockets = [];
    /**
     * ### process
     * 
     * Процесс.
     * 
     * *** 
     * @type {import('http2').Http2SecureServer} 
     * @public
    */
    process = null;
    
};
class MServer extends IServer {
    
    
    
};
class FServer extends MServer {
    
    /**
     * ### YServer.constructor
     * 
     * 
     * 
     * ***
     * @arg {YServerT} t
    */
    constructor(t) {
        
        t = [...arguments];
        
        super(Object.assign(t = FServer.#before(t), {}));
        
        FServer.#deceit.apply(this, [t]);
        
        return this.correlate();
        
    };
    
    /** @arg {any[]} t */
    static #before(t) {
        
        /** @type {YServerT} */
        let r = {};
        
        if (t?.length === 1 && [Object, YServer].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {
            
            r = t[0];
            
        } else if (t?.length) {
            
            if (t[0]?._ytp) {
            
                t = [...t[0]._ytp];
            
            };
            
            switch (t.length) {
                
                default:
                case 3: 
                case 2: 
                case 1: 
                
            };
            
            if (!Object.values(r).length) {
                
                r = { _ytp: t, };
                
            };
            
        };
        
        return r;
        
    };
    /** @arg {YServerT} t @this {YServer} */
    static #deceit(t) {
        
        try {
            
            FServer.#verify.apply(this, [t]);
            
        } catch (e) {
            
            throw e;
            
        } finally {
            
            
            
        };
        
    };
    /** @arg {YServerT} t @this {YServer} */
    static #verify(t) {
        
        const {
            
            
            
        } = t;
        
        FServer.#handle.apply(this, [t]);
        
    };
    /** @arg {YServerT} t @this {YServer} */
    static #handle(t) {
        
        
        
        FServer.#create.apply(this, [t]);
        
    };
    /** @arg {YServerT} t @this {YServer} */
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
 * ### YServer
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * 
 * 
 * ***
 * 
*/
export class YServer extends FServer {
    
    /**
     * ### on
     * - Версия `0.0.0`
     * ***
     * 
     * Метод активации сервера.
     * 
     * ***
     * @public
    */
    on() {
        
        this.process = createSecureServer({

            key: new YFile('server-key.pem').read(),
            cert: new YFile('server-cert.pem').read()

        }).on('stream', (stream, headers) => {

            if (headers[':method'] === 'GET' && headers[":path"] === '/websocket') {

                stream.respond({

                    'content-type': 'text/plain, charset=utf-8',
                    ':status': 200,

                });

            };

        }).listen(this.port, this.host, () => {

            

        });

        return this;
        
    };
    /**
     * ### off
     * - Версия `0.0.0`
     * ***
     * 
     * Метод отключения сервера.
     * 
     * ***
     * 
     * @public
    */
    off() {
        
        if (this.process) {

            this.process.off();

        };

        return this;
        
    };
    
};