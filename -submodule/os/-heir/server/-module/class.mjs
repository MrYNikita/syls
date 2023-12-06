//#region YI

import { YArg } from "@syls/y/arg";
import { YDir } from "@syls/os/dir";
import { Duplex } from 'stream';
import { YProcess } from "@syls/process";
import { configServer as config } from "./config.mjs";
import { createSecureServer } from "http2";
import { YFile } from "../../../-submodule/file/-module/export.mjs";

//#endregion
//#region YT

/** ### serverTC
 * @typedef serverTC
 * @prop {}
*/

/** @typedef {import('./module.mjs').serverT&serverTC} serverT */

//#endregion

/**
 * ### YServer
 * 
 * 
 * 
 * ***
 * @class
 * @since `1.0.0`
 * @version `1.0.0`
 * 
*/
export class YServer extends YProcess {

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
     * @type {YServer[]}
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
     * @arg {...YServer} args `Аргументы`
     * @returns {YServer[]}
    */
    static create(...args) {

        return super.create(...args);

    };
    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&YServer)?}
     * @template {YServer} Y1
     * @override
    */
    static setClass(value) {

        return super.setClass(value);

    };

    //#endregion
    //#region field

    /**
     * ### port
     * 
     * Порт.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @field
     * @public
    */
    port;
    /**
     * ### host
     * 
     * Хост.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @field
     * @public
    */
    host;
    /**
     * ### source
     * 
     * Директория ресурсов сервера.
     * 
     * *** 
     * @since `1.0.0`
     * @type {YDir}
     * @field
     * @public
    */
    source;
    /**
     * ### sockets
     * 
     * Соединения.
     * 
     * *** 
     * @since `1.0.0`
     * @type {Duplex[]}
     * @field
     * @public
    */
    sockets;

    //#endregion
    //#region method

    /**
     * ### on
     * 
     * Метод активации сервера.
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
     * 
     * Метод отключения сервера.
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
    off() {

        if (this.process) {

            this.process.off();

        };

        return this;
        
    };
    /**
     * @method
     * @public
     * @override
    */
    getClass() {

        return YServer;

    };

    //#endregion

    /**
     * ### YServerConstructor
     * - Версия `1.0.0`
     * 
     * 
     * ***
     * 
     * 
     * 
     * ***
     * 
     * @arg {...serverTC&YServer} args `Аргументы`
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

            /** @type {YArg<YServer&serverTC>} */
            const yarg = args[0] instanceof YArg ? args[0] : new YArg(...args);

            yarg.setFirst(
                
                ['port', 'number'],
                ['host', 'string'],
                
            );

            super(yarg);

            //#endregion
            //#region verify



            //#endregion
            //#region handle



            //#endregion
            //#region comply



            //#endregion

            return this

                .adopt(yarg.used)


        } catch (err) {

            if (config.params.strictMode) {

                throw err;

            };

        } finally {



        };

    };

};

/**
 * @file server/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/