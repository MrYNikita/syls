//#region YI

import os from 'os';
import http2 from 'http2';
import { configY } from '@syls/y';

/** @type {import('./config.mjs')['default']?} */
let config = null;

await import('./config.mjs')

    .then(c => config = c.default)
    .catch(e => e);

/** @type {import('./error.mjs')['default']?} */
let error = null;

await import('./error.mjs')

    .then(i => error = i.default)
    .catch(e => e);

//#endregion
//#region YT

/** ### netT
 * - Тип `T`
 * ***
 * 
 * Основной параметр модуля `net`.
 * 
 * @typedef netT
 * @prop {any} body
 * @prop {string} url
 * @prop {string} host
 * @prop {'GET'|'SET'|'POST'|'UPDATE'|'DELETE'} method
 * 
*/

//#endregion
//#region YV

/** ### netHttp2HeaderPath
 * 
 * ***
 * 
 * `HTTP2` заголовок путей.
 * 
 * ***
 * 
*/
export const netHttp2HeaderPath = http2.constants.HTTP2_HEADER_PATH;
/** ### netHttp2HeaderUserAgent
 * 
 * ***
 * 
 * `HTTP2` заголовок просителя.
 * 
 * ***
 * 
*/
export const netHttp2HeaderUserAgent = http2.constants.HTTP2_HEADER_USER_AGENT;
/** ### netHttp2HeaderContentType
 * 
 * ***
 * 
 * `HTTP2` заголовок типа данных.
 * 
 * ***
 * 
*/
export const netHttp2HeaderContentType = http2.constants.HTTP2_HEADER_CONTENT_TYPE;

//#endregion

//#region getIp 0.0.0

/** ### netTFGetIp
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `os\net`
 * ***
 * 
 * Результирующие параметры функции `getIp`.
 * 
 * @typedef {netTFUGetIp&netT} netTFGetIp
 * 
*/
/** ### netTFUGetIp
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `os\net`
 * 
 * Уникальные параметры функции `getIp`.
 * 
 * @typedef netTFUGetIp
 * @prop {any} _
*/

/** @arg {netTFGetIp} t */
function getIpDeceit(t) {

    try {

        return getIpVerify(t);

    } catch (e) {

        if (config?.strictMode) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {netTFGetIp} t */
function getIpVerify(t) {

    const {



    } = t;

    return getIpHandle(t);

};
/** @arg {netTFGetIp} t */
function getIpHandle(t) {

    const {



    } = t;

    return getIpComply(t);

};
/** @arg {netTFGetIp} t */
function getIpComply(t) {

    const {



    } = t;

    const net = Object.entries(os.networkInterfaces()).find(network => {

        if (network[0].includes(config.wirelessNames[configY.local])) {

            return true;

        };

    });

    return net ? net[1][1].address : undefined;

};

/**
 * ### netGetIp
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * - Модуль `os\net`
 * ***
 * 
 * Функция получения IP беспроводной сети.
 * 
 * *** 
*/
export function netGetIp() {

    return getIpDeceit({});

};

//#endregion

//#region request

/**
 * ### request
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef requestT
 * @prop {} _
 * ***
 * @arg {netT&requestT} args `Аргументы`
 * @async
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
async function request(args) {

    let result;

    try {

        let {

            url,
            host,
            body,
            method,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        await new Promise((resolve, reject) => {

            const connect = http2.connect(`https://${host}`);

            const {

                HTTP2_HEADER_PATH,
                HTTP2_HEADER_METHOD,
                HTTP2_HEADER_USER_AGENT,

            } = http2.constants;

            const options = {

                [HTTP2_HEADER_PATH]: `${url}`,
                [HTTP2_HEADER_METHOD]: method,
                [HTTP2_HEADER_USER_AGENT]: `SYLS`,

            };

            if (body && method === 'POST') {

                options['content-type'] = 'application/json';
                options['content-length'] = Buffer.byteLength(body);

            };

            const request = connect.request(options);

            request.on('response', (headers, flag) => {

                const chunks = [];

                request.on('data', (chunk) => {

                    chunks.push(chunk);

                });
                request.on('end', () => {

                    const response = Buffer.concat(chunks).toString();

                    connect.close();

                    result = response;

                    resolve();

                });

            });

            request.end();

        });

        //#endregion

    } catch (err) {

        if (config.value.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

/**
 * ### netRequest
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция запроса к указанному источнику.
 * 
 * ***
 * @arg {netT['url']} url `Путь`
 * @arg {netT['body']} body `Тело`
 * @arg {netT['host']} host `Хост`
 * @arg {netT['method']} method `Метод`
 * 
 * ***
 * @async
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export async function netRequest(host, url, method, body) {

    return await request({ host, url, method, body, });

};

//#endregion
// //#region request

// /** ### netTFRequest
//  * - Тип `TF`
//  * ***
//  *
//  * Результирующие параметры функции `request`.
//  *
//  * @typedef {netTFURequest&netT} netTFRequest
//  *
// */
// /** ### netTFURequest
//  * - Тип `TFU`
//  *
//  * Уникальные параметры функции `request`.
//  *
//  * @typedef netTFURequest
//  * @prop {string} path
//  * @prop {string} method
//  * @prop {string} hostname
// */

// /** @arg {netTFRequest} t */
// function requestDeceit(t) {

//     try {

//         return requestVerify(t);

//     } catch (e) {

//         if (config?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {netTFRequest} t */
// function requestVerify(t) {

//     const {



//     } = t;

//     return requestHandle(t);

// };
// /** @arg {netTFRequest} t */
// function requestHandle(t) {

//     const {



//     } = t;

//     return requestComply(t);

// };
// /** @arg {netTFRequest} t */
// function requestComply(t) {

//     const {

//         path,
//         method,
//         hostname,

//     } = t;

//     const connect = http2.connect(`https://${hostname}`);

//     console.log([path, method, hostname])

//     const {

//         HTTP2_HEADER_PATH,
//         HTTP2_HEADER_USER_AGENT,
//         HTTP2_HEADER_CONTENT_TYPE,

//     } = http2.constants;

//     const request = connect.request({

//         [HTTP2_HEADER_PATH]: `${path}`,
//         [HTTP2_HEADER_USER_AGENT]: `SYLS`,

//     });

//     request.on("response", (headers, flag) => {

//         const chunks = [];

//         request.on('data', (chunk) => {

//             chunks.push(chunk);

//         });
//         request.on('end', () => {

//             const response = JSON.parse(Buffer.concat(chunks).toString());
//             console.log(response);
//             connect.close();
//             // chunks.forEach((chunk) => console.log(chunk.toString()))

//         });

//     });

//     request.end();

// };

// /**
//  * ### netRequest
//  *
//  * ***
//  *
//  * Функция для запроса.
//  *
//  * ***
//  * @arg {string} hostname `Хост`
//  * @arg {string} path `Путь`
//  * @arg {GET|POST} method `Метод`
// */
// export function netRequest(hostname, path, method = 'GET') {

//     return requestDeceit({ hostname, path, method, });

// };

// //#endregion

/**
 * @file net/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/