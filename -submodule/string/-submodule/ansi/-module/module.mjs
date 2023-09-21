//#region YI

import { YCond } from '@syls/y/cond';
import { configANSI as config } from './config.mjs';
import { stringGetRow, stringGetRows, stringPaste } from '../../../-module/module.mjs';

//#endregion
//#region YT

/** ### ansiT
 * - Тип `T`
 * - Версия `0.0.0`
 * 
 * Основной параметр модуля `ansi`.
 * 
 * @typedef ansiT
 * @prop {any} _
 * 
*/
/** ### ansiTColors
 * 
 * 
 * 
 * ***
 * 
 * Тип ansi цветов.
 * 
 * ***
 * 
 * @typedef {keyof config['value']['colors']} ansiTColors
 * 
*/
/** ### ansiTFBGround
 * 
 * 
 * 
 * ***
 * 
 * Тип переднего и заднего плана.
 * 
 * ***
 * 
 * @typedef ansiTFBground
 * @prop {ansiTColors} foreground
 * @prop {ansiTColors} background
 * 
*/

//#endregion
//#region YV



//#endregion

//#region isANSI

/**
 * ### isAnsi
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef isAnsiT
 * @prop {string} string
 * ***
 * @arg {isAnsiT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isANSI(args) {

    let result;

    try {

        let {

            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        return string.startsWith('\x1b[') && string.at(-1) === 'm';

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
 * ### ansiIsANSI
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция проверки строки на принадлежность к ansi вставке.
 * 
 * ***
 * @arg {string} string `Строка`
 * @function
*/
export function ansiIsANSI(string) {

    return isANSI({ string, });

};

//#endregion
//#region isUnderline

/**
 * ### isUnderline
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef isUnderlineT
 * @prop {} _
 * ***
 * @arg {isUnderlineT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isUnderline(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.value.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

//#endregion
//#region isForeground

/**
 * ### isForeground
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef isForegroundT
 * @prop {string} string
 * ***
 * @arg {isForegroundT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isForeground(args) {

    let result;

    try {

        let {

            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const params = ansiGetParams(string).join(';');

        result = params.includes('38;5');

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
 * ### ansiIsForeground
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция проверки вставки `ansi` на параметр цвета символов.
 * 
 * ***
 * @arg {string} string `Строка`
 * @function
*/
export function ansiIsForeground(string,) {

    return isForeground({ string, });

};

//#endregion
//#region isBackground

/**
 * ### isBackground
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef {isForegroundT} isBackgroundT
 * @prop {} _
 * ***
 * @arg {isBackgroundT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function isBackground(args) {

    let result;

    try {

        let {

            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        const params = ansiGetParams(string).join(';');

        result = params.includes('48;5');

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
 * ### ansiIsBackground
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция проверки вставки `ansi` на параметр цвета фона.
 * 
 * ***
 * @arg {string} string `Строка`
 * @function
*/
export function ansiIsBackground(string) {

    return isBackground({ string, });

};

//#endregion

//#region get

/**
 * ### create
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getT
 * @prop {string[]} params
 * ***
 * @arg {getT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function get(args) {

    let result;

    try {

        let {

            params,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = config.value.code + params.join(';') + config.value.codeEnd;

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
 * ### ansiGet
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция создания `ansi` вставки.
 * 
 * ***
 * @arg {...string} params `Параметры`
 * @function
*/
export function ansiGet(...params) {

    return get({ params, });

};

//#endregion
//#region getReset

/**
 * ### getReset
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getResetT
 * @prop {} _
 * ***
 * @arg {getResetT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getReset(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.value.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

//#endregion
//#region getColor

/**
 * ### getColor
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getColorT
 * @prop {ansiTColors} foreground
 * @prop {ansiTColors} background
 * ***
 * @arg {getColorT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getColor(args) {

    let result;

    try {

        let {

            foreground,
            background,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = ansiGet(ansiGetColorParam(foreground, background));

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
 * ### ansiGetColor
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения `ansi` вставки с указанием цветов.
 * 
 * ***
 * @arg {ansiTColors} foreground `Символы`
 * @arg {ansiTColors} background `Фон`
 * @function
*/
export function ansiGetColor(foreground, background) {

    return getColor({ foreground, background, });

};

//#endregion
//#region getColorParam

/**
 * ### getColorParam
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getColorParamT
 * @prop {ansiTColors} foreground
 * @prop {ansiTColors} background
 * ***
 * @arg {getColorParamT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getColorParam(args) {

    let result;

    try {

        let {

            foreground,
            background,

        } = args;

        //#region verify



        //#endregion
        //#region handle

        if (!(foreground in config.value.colors || (-3 <= foreground && foreground <= 255))) foreground = -2;
        if (!(background in config.value.colors || (-3 <= background && background <= 255))) background = -2;

        if (foreground || foreground === 0) {

            switch (foreground) {

                case 'resetY': case -2: foreground = config.value.styles[config.value.style].foreground; break;

            };

            foreground = ansiGetCodeColor(foreground);

            switch (foreground) {

                case -1: foreground = [config.value.codeColorForeground, config.value.codeColorReset].join(config.value.delimiter); break;
                default: foreground = [config.value.codeColorForeground + config.value.codeColor, foreground].join(config.value.delimiter); break;

            };

        };
        if (background || background === 0) {

            switch (background) {

                case 'resetY': case -2: background = config.value.styles[config.value.style].background; break;

            };

            background = ansiGetCodeColor(background);

            switch (background) {

                case -1: background = [config.value.codeColorBackground, config.value.codeColorReset].join(config.value.delimiter); break;
                default: background = [config.value.codeColorBackground + config.value.codeColor, background].join(config.value.delimiter); break;

            };

        };

        //#endregion
        //#region comply

        result = [foreground, background].filter(value => value).join(config.value.delimiter);

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
 * ### ansiGetColorParam
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения параметра цвета `ansi` вставки. 
 * 
 * ***
 * @arg {ansiTColors} foreground `Символы`
 * @arg {ansiTColors} background `Фон`
 * @function
*/
export function ansiGetColorParam(foreground, background) {

    return getColorParam({ foreground, background, });

};

//#endregion
//#region getColorReset

/**
 * ### getColorReset
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getColorResetT
 * @prop {} _
 * ***
 * @arg {getColorResetT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getColorReset(args) {

    let result;

    try {

        let {



        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply



        //#endregion

    } catch (err) {

        if (config.value.strictMode) {

            throw err;

        };



    } finally {



    };

    return result;

};

//#endregion
//#region getParams

/**
 * ### getParams
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getParamsT
 * @prop {string} string
 * ***
 * @arg {getParamsT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getParams(args) {

    let result;

    try {

        let {

            string,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = string.slice(2, -1).split(';');

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
 * ### ansiGetParams
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция получения параметров `ansi` вставки.
 * 
 * ***
 * @arg {string} string `Строка`
 * @function
*/
export function ansiGetParams(string) {

    return getParams({ string, });

};

//#endregion
//#region getCodeColor

/**
 * ### getCodeColor
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef getCodeColorT
 * @prop {ansiTColors|number} color
 * ***
 * @arg {getCodeColorT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getCodeColor(args) {

    let result;

    try {

        let {

            color,

        } = args;

        //#region verify



        //#endregion
        //#region handle



        //#endregion
        //#region comply

        result = YCond.isNumber(color) ? color : config.value.colors[color];

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
 * ### ansiGetCodeColor
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Метод получения кода цвета по его наименованию.
 * 
 * ***
 * @arg {getCodeColorT['color']} color `Цвет`
 * @function
*/
export function ansiGetCodeColor(color) {

    return getCodeColor({ color, });

};

//#endregion

//#region join

/**
 * ### join
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef joinT
 * @prop {string[]} ansi
 * ***
 * @arg {joinT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function join(args) {
    
    let result;
    
    try {
        
        let {
            
            ansi,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        ansi = ansi.filter(ansi => ansiIsANSI(ansi));
        
        //#endregion
        //#region comply
        
        result = [];

        for (const a of ansi) result.push(...ansiGetParams(a));

        return ansiGet(...result);
        
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
 * ### ansiJoin
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция объединения `ansi` вставок.
 * 
 * ***
 * @arg {...string} ansi `Вставки`
 * @function
*/
export function ansiJoin(...ansi) {

    return join({ ansi, });

};

//#endregion
//#region change

/**
 * ### change
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * 
 * 
 * ***
 * @typedef changeT
 * @prop {string} ansi
 * @prop {string|number} value
 * @prop {keyof changeTProp} property
 * @typedef changeTProp
 * @prop {boolean} underline
 * @prop {ansiTColors} foreground
 * @prop {ansiTColors} background
 * ***
 * @arg {changeT} args `Аргументы`
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function change(args) {
    
    let result;
    
    try {
        
        let {
            
            ansi,
            value,
            property,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        value = value.toString();

        switch (property) {

            case 'foreground': case 'background': value = ansiGetCodeColor(value); break;

        };
        
        //#endregion
        //#region comply
        
        result = ansiGetParams(ansi);

        switch (property) {

            case 'foreground': {

                let index = result.indexOf('38');

                if (++index && result[index++] == '5') {

                    result[index] = value;

                } else {



                };

            }; break;
            case 'background': {

                let index = result.indexOf('48');

                if (++index && result[index++] == '5') {

                    result[index] = value;

                } else {



                };

            }; break;

        };

        result = ansiGet(...result);
        
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
 * ### ansiChange
 * - Тип `S`
 * - Версия `1.0.0`
 * ***
 * 
 * Функция изменения параметров `ansi` вставки.
 * 
 * ***
 * @arg {Y1} property
 * @arg {string} anis `Вставка`
 * @arg {string|number} value
 * @returns {string}
 * @function
 * @template {keyof changeTProp} Y1
*/
export function ansiChange(ansi, property, value) {

    return change({ ansi, property, value, });

};

//#endregion

// //#region get

// /** ### ansiTFGet
//  * - Тип `TF`
//  * ***
//  *
//  * Результирующие параметры функции `get`.
//  *
//  * @typedef {ansiTFUGet&ansiT} ansiTFGet
//  *
// */
// /** ### ansiTFUGet
//  * - Тип `TFU`
//  *
//  * Уникальные параметры функции `get`.
//  *
//  * @typedef ansiTFUGet
//  * @prop {string[]} strings
// */

// /** @arg {ansiTFGet} args */
// function getDeceit(args) {

//     try {

//         return getVerify(args);

//     } catch (e) {

//         if (config?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {ansiTFGet} args */
// function getVerify(args) {

//     const {



//     } = args;

//     return getHandle(args);

// };
// /** @arg {ansiTFGet} args */
// function getHandle(args) {

//     const {



//     } = args;

//     return getComply(args);

// };
// /** @arg {ansiTFGet} args */
// function getComply(args) {

//     const {

//         strings,

//     } = args;

//     return config.value.code + strings.join(config.value.delimiter) + config.value.codeEnd;

// };

// /**
//  * ### ansiGet
//  *
//  * ***
//  *
//  * Метод объединения `ansi` вставок.
//  *
//  * ***
//  * @arg {...string} strings `Вставки`
//  * @function
// */
// export function ansiGet(...strings) {

//     return getDeceit({ strings });

// };

// //#endregion
// //#region getMap

// /** ### ansiTFGetMap
//  * - Тип `TF`
//  * ***
//  *
//  * Результирующие параметры функции `getMap`.
//  *
//  * @typedef {ansiTFUGetMap&ansiT} ansiTFGetMap
//  *
// */
// /** ### ansiTFUGetMap
//  * - Тип `TFU`
//  *
//  * Уникальные параметры функции `getMap`.
//  *
//  * @typedef ansiTFUGetMap
//  * @prop {any} _
// */

// /** @arg {ansiTFGetMap} args */
// function getMapDeceit(args) {

//     try {

//         return getMapVerify(args);

//     } catch (e) {

//         if (config?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {ansiTFGetMap} args */
// function getMapVerify(args) {

//     const {



//     } = args;

//     return getMapHandle(args);

// };
// /** @arg {ansiTFGetMap} args */
// function getMapHandle(args) {

//     const {



//     } = args;

//     return getMapComply(args);

// };
// /** @arg {ansiTFGetMap} args */
// function getMapComply(args) {

//     const {



//     } = args;



// };

// /**
//  * ### ansiGetMap
//  *
//  * ***
//  *
//  * Функция получения карты `ansi` вставок.
//  *
//  * ***
//  *
//  * @function
// */
// export function ansiGetMap() {

//     return getMapDeceit({});

// };

// //#endregion
// //#region getColor

// /** ### ansiTFGetColor
//  * - Тип `TF`
//  * ***
//  *
//  * Результирующие параметры функции `getColor`.
//  *
//  * @typedef {ansiTFUGetColor&ansiT&ansiTFBground} ansiTFGetColor
//  *
// */
// /** ### ansiTFUGetColor
//  * - Тип `TFU`
//  *
//  * Уникальные параметры функции `getColor`.
//  *
//  * @typedef ansiTFUGetColor
//  * @prop {any} _
// */

// /** @arg {ansiTFGetColor} args */
// function getColorDeceit(args) {

//     try {

//         return getColorVerify(args);

//     } catch (e) {

//         if (config?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {ansiTFGetColor} args */
// function getColorVerify(args) {

//     const {



//     } = args;

//     return getColorHandle(args);

// };
// /** @arg {ansiTFGetColor} args */
// function getColorHandle(args) {

//     const {



//     } = args;

//     if (!(args.foreground in config.value.colors || (-3 <= args.foreground && args.foreground <= 255))) args.foreground = -2;
//     if (!(args.background in config.value.colors || (-3 <= args.background && args.background <= 255))) args.background = -2;

//     if (args.foreground || args.foreground === 0) {

//         switch (args.foreground) {

//             case 'resetY': case -2: args.foreground = config.value.styles[config.value.style].foreground; break;

//         };

//         args.foreground = ansiGetColorCode(args.foreground);

//         switch (args.foreground) {

//             case -1: args.foreground = [config.value.codeColorForeground, config.value.codeColorReset].join(config.value.delimiter); break;
//             default: args.foreground = [config.value.codeColorForeground + config.value.codeColor, args.foreground].join(config.value.delimiter); break;

//         };

//     };
//     if (args.background || args.background === 0) {

//         switch (args.background) {

//             case 'resetY': case -2: args.background = config.value.styles[config.value.style].background; break;

//         };

//         args.background = ansiGetColorCode(args.background);

//         switch (args.background) {

//             case -1: args.background = [config.value.codeColorBackground, config.value.codeColorReset].join(config.value.delimiter); break;
//             default: args.background = [config.value.codeColorBackground + config.value.codeColor, args.background].join(config.value.delimiter); break;

//         };

//     };

//     return getColorComply(args);

// };
// /** @arg {ansiTFGetColor} args */
// function getColorComply(args) {

//     const {

//         foreground,
//         background,

//     } = args;

//     return [foreground, background].filter(value => value).join(config.value.delimiter);

// };

// /**
//  * ### ansiGetColor
//  *
//  * ***
//  *
//  * Функция получения `ansi` вставки для смены цвета в виде строки.
//  *
//  * ***
//  * @arg {ansiTColors} foreground `Символы`
//  * @arg {ansiTColors} background `Фон`
//  * @function
// */
// export function ansiGetColor(foreground, background) {

//     return getColorDeceit({ foreground, background, });

// };

// //#endregion
// //#region getColorCode

// /** ### ansiTFGetColorCode
//  * - Тип `TF`
//  * ***
//  *
//  * Результирующие параметры функции `getColorCode`.
//  *
//  * @typedef {ansiTFUGetColorCode&ansiT} ansiTFGetColorCode
//  *
// */
// /** ### ansiTFUGetColorCode
//  * - Тип `TFU`
//  *
//  * Уникальные параметры функции `getColorCode`.
//  *
//  * @typedef ansiTFUGetColorCode
//  * @prop {ansiTColors} color
// */

// /** @arg {ansiTFGetColorCode} args */
// function getColorCodeDeceit(args) {

//     try {

//         return getColorCodeVerify(args);

//     } catch (e) {

//         if (config?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {ansiTFGetColorCode} args */
// function getColorCodeVerify(args) {

//     const {



//     } = args;

//     return getColorCodeHandle(args);

// };
// /** @arg {ansiTFGetColorCode} args */
// function getColorCodeHandle(args) {

//     const {



//     } = args;

//     return getColorCodeComply(args);

// };
// /** @arg {ansiTFGetColorCode} args */
// function getColorCodeComply(args) {

//     const {

//         color,

//     } = args;

//     return YCond.isNumber(color) ? color : config.value.colors[color];

// };

// /**
//  * ### ansiGetColorCode
//  *
//  * ***
//  *
//  * Функция получения кода цвета.
//  *
//  * ***
//  * @arg {ansiTColors} color `Цвет`
//  * @function
// */
// export function ansiGetColorCode(color) {

//     return getColorCodeDeceit({ color, });

// };

// //#endregion
// //#region getColorReset

// /** ### ansiTFGetColorReset
//  * - Тип `TF`
//  * ***
//  *
//  * Результирующие параметры функции `getColorReset`.
//  *
//  * @typedef {ansiTFUGetColorReset&ansiT} ansiTFGetColorReset
//  *
// */
// /** ### ansiTFUGetColorReset
//  * - Тип `TFU`
//  *
//  * Уникальные параметры функции `getColorReset`.
//  *
//  * @typedef ansiTFUGetColorReset
//  * @prop {boolean|-1|-2} foreground
//  * @prop {boolean|-1|-2} background
// */

// /** @arg {ansiTFGetColorReset} args */
// function getColorResetDeceit(args) {

//     try {

//         return getColorResetVerify(args);

//     } catch (e) {

//         if (config?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {ansiTFGetColorReset} args */
// function getColorResetVerify(args) {

//     const {



//     } = args;

//     return getColorResetHandle(args);

// };
// /** @arg {ansiTFGetColorReset} args */
// function getColorResetHandle(args) {

//     const {



//     } = args;

//     if (!args.foreground) {

//         args.foreground = `${config.value.codeColorForeground}${config.value.codeColorReset}`;

//     };
//     if (!args.background) {

//         args.background = `${config.value.codeColorBackground}${config.value.codeColorReset}`;

//     };

//     return getColorResetComply(args);

// };
// /** @arg {ansiTFGetColorReset} args */
// function getColorResetComply(args) {

//     const {

//         foreground,
//         background,

//     } = args;

//     let result = foreground && background ? `${foreground};${background}` : foreground ? foreground : background ? background : null;

//     return result;

// };

// /**
//  * ### ansiGetColorReset
//  *
//  * ***
//  *
//  * Функция получения `ansi` вставки сброса цвета.
//  *
//  * ***
//  * @arg {boolean|-1|-2} foreground `Символы`
//  * @arg {boolean|-1|-2} background `Фон`
//  * @function
// */
// export function ansiGetColorReset(foreground, background) {

//     return getColorResetDeceit({ foreground, background, });

// };

// //#endregion

// //#region ansiPaint

// /** ### ansiTFAnsiPaint
//  * - Тип `TF`
//  * ***
//  *
//  * Результирующие параметры функции `ansiPaint`.
//  *
//  * @typedef {ansiTFUAnsiPaint&ansiT&ansiTFBground} ansiTFAnsiPaint
//  *
// */
// /** ### ansiTFUAnsiPaint
//  * - Тип `TFU`
//  *
//  * Уникальные параметры функции `ansiPaint`.
//  *
//  * @typedef ansiTFUAnsiPaint
//  * @prop {number} y1
//  * @prop {number} x1
//  * @prop {number} y2
//  * @prop {number} x2
//  * @prop {string} string
//  * @prop {boolean} squareMode
// */

// /** @arg {ansiTFAnsiPaint} args */
// function ansiPaintDeceit(args) {

//     try {

//         return ansiPaintVerify(args);

//     } catch (e) {

//         if (config?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {ansiTFAnsiPaint} args */
// function ansiPaintVerify(args) {

//     const {



//     } = args;

//     return ansiPaintHandle(args);

// };
// /** @arg {ansiTFAnsiPaint} args */
// function ansiPaintHandle(args) {

//     const {



//     } = args;

//     return ansiPaintComply(args);

// };
// /** @arg {ansiTFAnsiPaint} args */
// function ansiPaintComply(args) {

//     const {

//         x1,
//         x2,
//         y1,
//         y2,
//         string,
//         foreground,
//         background,
//         squareMode,

//     } = args;

//     const color = ansiGet(ansiGetColor(foreground, background));
//     const reset = ansiGet(ansiGetColorReset());

//     if (!YCond.isNumberInt(x1, x2, y1, y2)) return color + string + reset;

//     const rows = stringGetRows(string);

//     for (let index = y1; index < 2 * y2 - y1; index++) {

//         const row = rows[index];
//         const paste = squareMode ? row.slice(x1, 2 * x2 - x1) : row.slice(x1);

//         rows[index] = stringPaste(row, color + paste + reset, x1, paste.length);

//     };

//     return rows.join('\n');

// };

// /**
//  * ### ansiPaint
//  *
//  * ***
//  *
//  * Функция перекраски строки.
//  *
//  * ***
//  * @arg {number} y1 `Y1`
//  * @arg {number} y2 `Y2`
//  * @arg {number} x1 `X1`
//  * @arg {number} x2 `X2`
//  * @arg {string} string `Строка`
//  * @arg {boolean} squareMode `Режим периметра`
//  * @arg {ansiTColors} foreground `Символы`
//  * @arg {ansiTColors} background `Фон`
//  * @function
// */
// export function ansiPaint(string, foreground, background, y1, x1, y2, x2, squareMode) {

//     return ansiPaintDeceit({ string, foreground, background, y1, x1, y2, x2, squareMode, });

// };

// //#endregion
// //#region ansiPaintByCond

// /** ### ansiTFAnsiPaintByCond
//  * - Тип `TF`
//  * ***
//  *
//  * Результирующие параметры функции `ansiPaintByCond`.
//  *
//  * @typedef {ansiTFUAnsiPaintByCond&ansiT} ansiTFAnsiPaintByCond
//  *
// */
// /** ### ansiTFUAnsiPaintByCond
//  * - Тип `TFU`
//  *
//  * Уникальные параметры функции `ansiPaintByCond`.
//  *
//  * @typedef ansiTFUAnsiPaintByCond
//  * @prop {string} string
//  * @prop {ansiTColors} t
//  * @prop {ansiTColors} f
//  * @prop {(char:string) => boolean} cond
// */

// /** @arg {ansiTFAnsiPaintByCond} args */
// function ansiPaintByCondDeceit(args) {

//     try {

//         return ansiPaintByCondVerify(args);

//     } catch (e) {

//         if (config.value.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {ansiTFAnsiPaintByCond} args */
// function ansiPaintByCondVerify(args) {

//     const {



//     } = args;

//     return ansiPaintByCondHandle(args);

// };
// /** @arg {ansiTFAnsiPaintByCond} args */
// function ansiPaintByCondHandle(args) {

//     const {



//     } = args;

//     args.t = args.t ? ansiGet(ansiGetColor(...args.t)) : '';
//     args.f = args.f ? ansiGet(ansiGetColor(...args.f)) : '';

//     return ansiPaintByCondComply(args);

// };
// /** @arg {ansiTFAnsiPaintByCond} args */
// function ansiPaintByCondComply(args) {

//     const {

//         t,
//         f,
//         cond,
//         string,

//     } = args;



//     let flagT = false;
//     let flagF = false;
//     let flagS = false;
//     let result = string;

//     for (let index = 0; index < result.length; index++) {

//         const char = result[index];
//         const check = cond(char);

//         let ansi = '';

//         // console.log(`Char: ${char}; FS: ${flagS}, FF: ${flagF}, FT: ${flagT}, cond: ${check}`)

//         if ((flagS && char !== 'm') || (char !== '\x1b' && !check && flagF) || (check && flagT)) {

//             continue;

//         } else if (char === '\x1b') {

//             flagS = true;
//             flagF = flagT = false;
//             continue;

//         } else if (flagS && char === 'm') {

//             flagS = false;
//             continue;

//         } else if (check && !flagT) {

//             ansi = t;
//             flagT = true;
//             flagF = false;

//         } else if (!check && !flagF) {

//             ansi = f;
//             flagF = true;
//             flagT = false;

//         };

//         result = stringPaste(result, ansi, index);
//         index += ansi.length;

//     };

//     return result + ansiGet(ansiGetColorReset());

// };

// /**
//  * ### ansiPaintByCond
//  *
//  * ***
//  *
//  * Функция для перекраски строки с помощью условий.
//  *
//  * ***
//  * @arg {string} string `Строка`
//  * @arg {(char:string) => boolean} cond `Условие`
//  * @arg {[ansiTColors, ansiTColors]} t `Истина`
//  * @arg {[ansiTColors, ansiTColors]} f `Ложь`
//  * @function
// */
// export function ansiPaintByCond(string, cond, t, f) {

//     return ansiPaintByCondDeceit({ string, cond, t, f, });

// };

// //#endregion

// //#region clear

// /** ### ansiTFClear
//  * - Тип `TF`
//  * - Версия `0.0.0`
//  * - Модуль `string\ansi`
//  * ***
//  *
//  * Результирующие параметры функции `clear`.
//  *
//  * @typedef {ansiTFUClear&ansiT} ansiTFClear
//  *
// */
// /** ### ansiTFUClear
//  * - Тип `TFU`
//  * - Версия `0.0.0`
//  * - Модуль `string\ansi`
//  *
//  * Уникальные параметры функции `clear`.
//  *
//  * @typedef ansiTFUClear
//  * @prop {any} _
// */

// /** @arg {ansiTFClear} t */
// function clearDeceit(t) {

//     try {

//         return clearVerify(t);

//     } catch (e) {

//         console.log(e);

//         if (config.value?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {ansiTFClear} t */
// function clearVerify(t) {

//     const {



//     } = t;

//     return clearHandle(t);

// };
// /** @arg {ansiTFClear} t */
// function clearHandle(t) {

//     const {



//     } = t;

//     return clearComply(t);

// };
// /** @arg {ansiTFClear} t */
// function clearComply(t) {

//     const {



//     } = t;

//     process.stdout.write('\x1bс');

//     return false;

// };

// /**
//  * ### ansiClear
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * - Модуль `string\ansi`
//  * ***
//  *
//  * Функция очистки экрана.
//  *
//  * ***
// */
// export function ansiClear() {

//     return clearDeceit({});

// };

// //#endregion
// //#region setColor

// /** ### ansiTFSetColor
//  * - Тип `TF`
//  * - Версия `0.0.0`
//  * - Модуль `string\ansi`
//  * ***
//  *
//  * Результирующие параметры функции `setColor`.
//  *
//  * @typedef {ansiTFUSetColor&ansiT&ansiColorTForeBackGround} ansiTFSetColor
//  *
// */
// /** ### ansiTFUSetColor
//  * - Тип `TFU`
//  * - Версия `0.0.0`
//  * - Модуль `string\ansi`
//  *
//  * Уникальные параметры функции `setColor`.
//  *
//  * @typedef ansiTFUSetColor
//  * @prop {any} _
// */

// /** @arg {ansiTFSetColor} t */
// function setColorDeceit(t) {

//     try {

//         return setColorVerify(t);

//     } catch (e) {

//         console.log(e);

//         if (config.value?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {ansiTFSetColor} t */
// function setColorVerify(t) {

//     const {



//     } = t;

//     return setColorHandle(t);

// };
// /** @arg {ansiTFSetColor} t */
// function setColorHandle(t) {

//     const {



//     } = t;

//     return setColorComply(t);

// };
// /** @arg {ansiTFSetColor} t */
// function setColorComply(t) {

//     const {

//         foreground,
//         background,

//     } = t;

//     const result = ansiGetColor(foreground, background);

//     if (result) {

//         process.stdout.write(result);

//         return true;

//     } else {

//         return false;

//     };

// };

// /**
//  * ### ansiSetColor
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * - Модуль `string\ansi`
//  * ***
//  *
//  * Функция смены цветов символов и фона.
//  *
//  * ***
//  * @arg {ansiTVColor} foreground
//  * @arg {ansiTVColor} background
// */
// export function ansiSetColor(foreground, background) {

//     return setColorDeceit({ foreground, background, });

// };

// //#endregion
// //#region backspace

// /** ### ansiTFBackspace
//  * - Тип `TF`
//  * - Версия `0.0.0`
//  * - Модуль `string\ansi`
//  * ***
//  *
//  * Результирующие параметры функции `backspace`.
//  *
//  * @typedef {ansiTFUBackspace&ansiT} ansiTFBackspace
//  *
// */
// /** ### ansiTFUBackspace
//  * - Тип `TFU`
//  * - Версия `0.0.0`
//  * - Модуль `string\ansi`
//  *
//  * Уникальные параметры функции `backspace`.
//  *
//  * @typedef ansiTFUBackspace
//  * @prop {number} count
// */

// /** @arg {ansiTFBackspace} t */
// function backspaceDeceit(t) {

//     try {

//         return backspaceVerify(t);

//     } catch (e) {

//         if (config.value?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {ansiTFBackspace} t */
// function backspaceVerify(t) {

//     const {



//     } = t;

//     return backspaceHandle(t);

// };
// /** @arg {ansiTFBackspace} t */
// function backspaceHandle(t) {

//     const {



//     } = t;

//     return backspaceComply(t);

// };
// /** @arg {ansiTFBackspace} t */
// function backspaceComply(t) {

//     const {

//         count,

//     } = t;

//     process.stdout.write(config.value.codeBackspace.repeat(count));

//     return true;

// };

// /**
//  * ### ansiBackspace
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * - Модуль `string\ansi`
//  * ***
//  *
//  * Функция удаления символа в текущей позиции со сдвигом влево.
//  *
//  * ***
//  * @arg {number} count `Счетчик`
// */
// export function ansiBackspace(count = 1) {

//     return backspaceDeceit({ count, });

// };

// //#endregion
// //#region resetColor

// /** ### ansiTFResetColor
//  * - Тип `TF`
//  * - Версия `0.0.0`
//  * - Модуль `string\ansi`
//  * ***
//  *
//  * Результирующие параметры функции `resetColor`.
//  *
//  * @typedef {ansiTFUResetColor&ansiT} ansiTFResetColor
//  *
// */
// /** ### ansiTFUResetColor
//  * - Тип `TFU`
//  * - Версия `0.0.0`
//  * - Модуль `string\ansi`
//  *
//  * Уникальные параметры функции `resetColor`.
//  *
//  * @typedef ansiTFUResetColor
//  * @prop {boolean} foreground
//  * @prop {boolean} background
// */

// /** @arg {ansiTFResetColor} t */
// function resetColorDeceit(t) {

//     try {

//         return resetColorVerify(t);

//     } catch (e) {

//         if (config.value?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {ansiTFResetColor} t */
// function resetColorVerify(t) {

//     const {



//     } = t;

//     return resetColorHandle(t);

// };
// /** @arg {ansiTFResetColor} t */
// function resetColorHandle(t) {

//     const {



//     } = t;

//     return resetColorComply(t);

// };
// /** @arg {ansiTFResetColor} t */
// function resetColorComply(t) {

//     const {

//         foreground,
//         background,

//     } = t;

//     if (foreground || background) {

//         process.stdout.write(ansiGetColorReset(foreground, background));

//         return true;

//     } else {

//         return false;

//     };

// };

// /**
//  * ### ansiResetColor
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * - Модуль `string\ansi`
//  * ***
//  *
//  * Функция получения вставки для очистки цвета.
//  *
//  * ***
//  * @arg {boolean} foreground `Символы`
//  * @arg {boolean} background `Фон`
// */
// export function ansiResetColor(foreground = true, background = true) {

//     return resetColorDeceit({ foreground, background, });

// };

// //#endregion
// //#region setCursorTo

// /** ### ansiTFSetCursorTo
//  * - Тип `TF`
//  * - Версия `0.0.0`
//  * - Модуль `string\ansi`
//  * ***
//  *
//  * Результирующие параметры функции `setCursorTo`.
//  *
//  * @typedef {ansiTFUSetCursorTo&ansiT} ansiTFSetCursorTo
//  *
// */
// /** ### ansiTFUSetCursorTo
//  * - Тип `TFU`
//  * - Версия `0.0.0`
//  * - Модуль `string\ansi`
//  *
//  * Уникальные параметры функции `setCursorTo`.
//  *
//  * @typedef ansiTFUSetCursorTo
//  * @prop {number} y
//  * @prop {number} x
// */

// /** @arg {ansiTFSetCursorTo} t */
// function setCursorToDeceit(t) {

//     try {

//         return setCursorToVerify(t);

//     } catch (e) {

//         if (config.value?.strictMode) {

//             throw e;

//         };

//         return undefined;

//     } finally {



//     };

// };
// /** @arg {ansiTFSetCursorTo} t */
// function setCursorToVerify(t) {

//     const {



//     } = t;

//     return setCursorToHandle(t);

// };
// /** @arg {ansiTFSetCursorTo} t */
// function setCursorToHandle(t) {

//     const {



//     } = t;

//     t.y++;
//     t.x++;

//     return setCursorToComply(t);

// };
// /** @arg {ansiTFSetCursorTo} t */
// function setCursorToComply(t) {

//     const {

//         y,
//         x,

//     } = t;

//     const result = `${config.value.code}${y};${x}${config.value.codePosition}`;

//     if (result) {

//         process.stdout.write(result);

//         return true;

//     } else {

//         return false;

//     };

// };

// /**
//  * ### ansiSetCursorTo
//  * - Версия `0.0.0`
//  * - Цепочка `DVHCa`
//  * - Модуль `string\ansi`
//  * ***
//  *
//  * Функция с добавлением вставки для установки положения курсора в указанную позицию.
//  *
//  * ***
//  * @arg {number} y `Линия`
//  * @arg {number} x `Столбец`
// */
// export function ansiSetCursorTo(y, x) {

//     return setCursorToDeceit({ y, x });

// };

// //#endregion

/**
 * @file ansi/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/