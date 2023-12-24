//#region YI

import { condIsJect, condIsNumberSig, condIsStringSig } from '@syls/y/cond';
import { stringRemove, stringRemoveRange } from '../../../-module/module.mjs';
import { configANSI as config } from './config.mjs';
import { funcLoopRangeIn } from '@syls/func';
import { ySupplement } from '@syls/y';

//#endregion
//#region YT

/** ### ansiT
 * 
 * Типы модуля `ansi`.
 * 
 * @typedef ansiT
 * @prop {string} ansi
 * @prop {string} param
 * @prop {string} string
 * @prop {string[]} params
 * @prop {string[]} paramsGraphic
 * @prop {number} y
 * @prop {number} x
 * @prop {{
 * clear: boolean,
 * cursorPosition: [number, number],
 * cursorPositionUp: number,
 * cursorPositionDown: number,
 * cursorPositionLeft: number,
 * cursorPositionRight: number,
 * foreground: number|string,
 * background: number|string,
 * underline: boolean,
 * underlineOff: boolean,
 * }} ansiJect
 * @prop {boolean} mode
 * @prop {ansiT['color']} foreground
 * @prop {ansiT['color']} background
 * @prop {ansiT['colorNames']|number} color
 * @prop {keyof config['params']['colors']} colorNames
 * @prop {ansiT['updateArg'][]} updateArgs
 * @prop {'position'|'underline'|'color'|'colorF'|'colorB'|'clear'|'right'|'left'|'down'|'up'|ansiT['ansiJect']} updateArg
*/

//#endregion
//#region YV

/** ### ansiRegExp
 * 
 * 
 * 
 * ***
 * 
*/
export const ansiRegExp = /\x1B.+?(A|B|C|D|H|J|m)/;

//#endregion

//#region getParamColor

/**
 * ### getParamColor
 * 
 * 
 * 
 * ***
 * @typedef getParamColorT
 * @prop {} _
 * ***
 * @arg {ansiT&getParamColorT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getParamColor(args) {
    
    let result;
    
    try {
        
        let {
            
            background,
            foreground,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        let param = [];
        let foregroundResetFlag = false;
        let backgroundResetFlag = false;

        if (condIsStringSig(foreground)) {

            if (foreground in config.params.colors) {

                foreground = config.params.colors[foreground];

            } else if (!/^48;5;d+$/.test(foreground)) {

                foreground = null;

            };

        } else if (condIsNumberSig(foreground) && foreground >= -2 && foreground <= 255) {

            switch (foreground) {

                case -1: {

                    foregroundResetFlag = true;

                }; break;
                case -2: {

                    foreground = config.params.colors[config.params.styles[config.params.style].foreground];

                }; break;

            };

        } else {

            foreground = null;

        };

        if (foregroundResetFlag) {

            param.push('39');

        } else if (foreground) {

            param.push(config.params.codeColorForeground + config.params.codeColor, foreground);

        };

        if (condIsStringSig(background)) {

            if (background in config.params.colors) {

                background = config.params.colors[background];

            } else if (!/^38;5;d+$/.test(background)) {

                background = null;

            };

        } else if (condIsNumberSig(background) && background >= -2 && background <= 255) {

            switch (background) {

                case -1: {

                    backgroundResetFlag = true;

                }; break;
                case -2: {

                    background = config.params.colors[config.params.styles[config.params.style].background];

                }; break;

            };

        } else {

            background = null;

        };

        if (backgroundResetFlag) {

            param.push('49');

        } else if (background) {

            param.push(config.params.codeColorBackground + config.params.codeColor, background);

        };

        result = param.join(config.params.delimiter);
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiGetParamColor
 * 
 * Функция получения цветового параметра `ansi` вставки.
 * 
 * ***
 * @arg {ansiT['background']} background `Фоновый цвет`
 * @arg {ansiT['foreground']} foreground `Символьный цвет`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiGetParamColor(foreground, background) {

    return getParamColor({ foreground, background, });

};

//#endregion
//#region getParamColorReset

/**
 * ### getParamColorReset
 * 
 * 
 * 
 * ***
 * @typedef getParamColorResetT
 * @prop {} _
 * ***
 * @arg {ansiT&getParamColorResetT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getParamColorReset(args) {
    
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
        
        if (condIsNumberSig(foreground) && [-2, -1].includes(foreground)) {

            foreground = ansiGetParamColor(foreground);

        } else {

            foreground = '39';

        };

        if (condIsNumberSig(background) && [-2, -1].includes(background)) {

            background = ansiGetParamColor(null, background);

        } else {

            background = '49';

        };

        result = [foreground, background].join(';');
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiGetParamColorReset
 * 
 * Функция получения аргументов для сброса цветов.
 * 
 * ***
 * @arg {-2|-1|null} background `Цвет фона`
 * @arg {-2|-1|null} foreground `Цвет переднего плана`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiGetParamColorReset(foreground, background) {

    return getParamColorReset({ foreground, background, });

};

//#endregion
//#region getParamCursorTo

/**
 * ### getParamCursorTo
 * 
 * 
 * 
 * ***
 * @typedef getParamCursorToT
 * @prop {} _
 * ***
 * @arg {ansiT&getParamCursorToT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getParamCursorTo(args) {
    
    let result;
    
    try {
        
        let {
            
            y,
            x,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        y++;
        x++;
        
        //#endregion
        //#region comply
        
        result = [y, x + config.params.codePosition].join(config.params.delimiter);
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiGetParamCursorTo
 * 
 * Функция получения параметра перемещения курсора по заданным координатам.
 * 
 * ***
 * @arg {ansiT['y']} y `Столбец`
 * @arg {ansiT['x']} x `Строка`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiGetParamCursorTo(y, x) {

    return getParamCursorTo({ y, x, });

};

//#endregion
//#region getParamUnderline

/**
 * ### getParamUnderline
 * 
 * 
 * 
 * ***
 * @typedef getParamUnderlineT
 * @prop {} _
 * ***
 * @arg {ansiT&getParamUnderlineT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function getParamUnderline(args) {
    
    let result;
    
    try {
        
        let {
            
            mode,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply

        result = mode ? config.params.codeUnderline : config.params.codeUnderlineReset;
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiGetParamUnderline
 * 
 * Функция получения параметра активации/отключения линии подчеркивания.
 * 
 * ***
 * @arg {ansiT['mode']} mode `Режим`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiGetParamUnderline(mode) {

    return getParamUnderline({ mode, });

};

//#endregion
//#region join

/**
 * ### join
 * 
 * 
 * 
 * ***
 * @typedef joinT
 * @prop {} _
 * ***
 * @arg {ansiT&joinT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function join(args) {
    
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
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiJoin
 * 
 * 
 * 
 * ***
 * 
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiJoin() {

    return join({});

};

//#endregion
//#region create

/**
 * ### create
 * 
 * 
 * 
 * ***
 * @typedef createT
 * @prop {} _
 * ***
 * @arg {ansiT&createT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function create(args) {
    
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
        
        const paramsGraph = [];
        const paramsOther = [];

        for (const param of params) {

            if (param.match(/\d+;\d+H|\d+(A|B|C|D)|J/)) {

                paramsOther.push(param)

            } else if (param.match(/(3|4)8;5;\d+|4|24|39|49/)) {

                paramsGraph.push(param);

            };

        };

        if (paramsGraph.length) {

            paramsGraph[paramsGraph.length - 1] += 'm';

        };

        result = config.params.code + [...paramsGraph, ...paramsOther].join(config.params.delimiter);

        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiCreate
 * 
 * Функция создания `ansi` вставки с указанными параметрами.
 * 
 * ***
 * @arg {...ansiT['param']} params `Параметры`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiCreate(...params) {

    return create({ params, });

};

//#endregion
//#region createByJect

/**
 * ### createByJect
 * 
 * 
 * 
 * ***
 * @typedef createByJectT
 * @prop {} _
 * ***
 * @arg {ansiT&createByJectT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function createByJect(args) {
    
    let result;
    
    try {
        
        let {
            
            clear,
            underline,
            underlineOff,
            foreground,
            background,
            cursorPosition,
            cursorPositionUp,
            cursorPositionDown,
            cursorPositionLeft,
            cursorPositionRight,
            
        } = args.ansiJect;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply

        let ansi = config.params.code;

        const params = [];

        if (clear) {

            params.push(config.params.codeClear);

        };

        if (cursorPosition) {

            params.push(`${cursorPosition.join(';')}${config.params.codePosition}`);

        };

        if (cursorPositionUp) {

            params.push(`${cursorPositionUp}A`);

        };

        if (cursorPositionDown) {

            params.push(`${cursorPositionDown}B`);

        };

        if (cursorPositionLeft) {

            params.push(`${cursorPositionUp}C`);

        };

        if (cursorPositionRight) {

            params.push(`${cursorPositionUp}D`);

        };

        let flagGraphic = false;

        if (foreground) {

            flagGraphic = true;

            params.push(ansiGetParamColor(foreground));

        };

        if (background) {

            flagGraphic = true;

            params.push(ansiGetParamColor(null, background));

        };

        if (underline && !underlineOff) {

            flagGraphic = true;

            params.push(`4`);

        };

        if (underlineOff) {

            flagGraphic = true;

            params.push(`24`);

        };
        
        result = ansi + params.join(config.params.delimiter) + (flagGraphic ? 'm' : '');

        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiCreateByJect
 * 
 * Функция создания `ansi` вставки по свойствам указанного объекта.
 * 
 * ***
 * @arg {ansiT['ansiJect']} ansiJect `ansi-объект`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiCreateByJect(ansiJect) {

    return createByJect({ ansiJect, });

};

//#endregion
//#region createColor

/**
 * ### createColor
 * 
 * 
 * 
 * ***
 * @typedef createColorT
 * @prop {} _
 * ***
 * @arg {ansiT&createColorT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function createColor(args) {
    
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
        
        result = ansiCreate(ansiGetParamColor(foreground, background));
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiCreateColor
 * 
 * Функция создания `ansi` вставки для изменения цвета.
 * 
 * ***
 * @arg {ansiT['foreground']} foreground `Цвет переднего плана`
 * @arg {ansiT['background']} background `Цвет фона`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiCreateColor(foreground, background) {

    return createColor({ foreground, background, });

};

//#endregion
//#region createColorReset

/**
 * ### createColorReset
 * 
 * 
 * 
 * ***
 * @typedef createColorResetT
 * @prop {} _
 * ***
 * @arg {ansiT&createColorResetT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function createColorReset(args) {
    
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
        
        result = ansiCreate(ansiGetParamColorReset(foreground, background));
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiCreateColorReset
 * 
 * Функция получения `ansi` вставки для сброса цвета.
 * 
 * ***
 * @arg {-2|-1|null} foreground `Цвет переднего плана`
 * @arg {-2|-1|null} background `Цвет фона`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiCreateColorReset(foreground, background) {

    return createColorReset({ foreground, background, });

};

//#endregion
//#region update

/**
 * ### update
 * 
 * 
 * 
 * ***
 * @typedef updateT
 * @prop {} _
 * ***
 * @arg {ansiT&updateT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function update(args) {
    
    let result;
    
    try {
        
        let {
            
            ansi,
            updateArgs,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        const decompose = ansiDecompose(ansi);

        funcLoopRangeIn(updateArgs, arg => {

            if (condIsJect(arg)) {

                ySupplement(decompose, arg);

            } else if (/^38;5;\d+$/.test(arg)) {

                decompose.foreground = arg;

            } else if (/^48;5;\d+$/.test(arg)) {

                decompose.background = arg;

            } else if (/^4$/.test(arg)) {

                decompose.underline = true;

            } else if (/^24$/.test(arg)) {

                decompose.underline = false;
                decompose.underlineOff = true;

            } else switch (arg) {

                case 'color': [decompose.foreground, decompose.background] = [null, null]; break;
                case 'underline': decompose.underline = false; break;

                case 'colorF': decompose.foreground = null; break;
                case 'colorB': decompose.background = null; break;

            };

        });

        result = ansiCreateByJect(decompose);
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiUpdate
 * 
 * Функция обновления `ansi` вставки.
 * 
 * Функция способна добавить, удалить или изменить значения вставки:
 * - При указании ранее не указанных свойств произойдет их добавление;
 * - При указании уже существующих свойств произойдет их замена;
 * - При указании `delete` свойства, произойдет его удаление, если оно есть.
 * 
 * `Delete` свойства, это строчные значения, соответствующие названиям свойств, которые указывают функции, от какой части `ansi` вставки необходимо избавиться:
 * - `up` - удаляет позиционный параметр смещения вверх;
 * - `down` - удаляет позиционный параметр смещения вниз;
 * - `left` - удаляет позиционный параметр смещения влево;
 * - `right` - удаляет позиционный параметр смещения вправо;
 * - `clear` - удаляет параметр очистки экрана и перемещения курсора;
 * - `color` - удаляет **все** цветовые параметры;
 * - `colorF` - удаляет цветовой параметр переднего плана;
 * - `colorB` - удаляет цветовой параметр заднего плана;
 * - `position` - удаляет **все** позиционные параметры;
 * - `underline` - удаляет линию подчеркивания.
 * 
 * ***
 * @arg {ansiT['ansi']} ansi `ansi`
 * @arg {...ansiT['updateArg']} updateArgs `Аргументы`
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiUpdate(ansi, ...updateArgs) {

    return update({ ansi, updateArgs, });

};

//#endregion
//#region include

/**
 * ### include
 * 
 * 
 * 
 * ***
 * @typedef includeT
 * @prop {} _
 * ***
 * @arg {ansiT&includeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function include(args) {
    
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
        
        result = /\x1b/ms.test(string);
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiInclude
 * 
 * Функция определяющая наличие `ansi` вставок в тексте. 
 * 
 * ***
 * @arg {ansiT['string']} string `Текст`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiInclude(string) {

    return include({ string, });

};

//#endregion
//#region includeColorF

/**
 * ### includeColorF
 * 
 * 
 * 
 * ***
 * @typedef includeColorFT
 * @prop {} _
 * ***
 * @arg {ansiT&includeColorFT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function includeColorF(args) {
    
    let result;
    
    try {
        
        let {
            
            ansi,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        if (!ansiInclude(ansi)) return false;

        result = /38;5;d+/.test(ansi);
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiIncludeColorF
 * 
 * Функция проверки наличия во вставке параметра цвета переднего плана.
 * 
 * ***
 * @arg {ansiT['ansi']} ansi `ansi`
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiIncludeColorF(ansi) {

    return includeColorF({ ansi, });

};

//#endregion
//#region decompose

/**
 * ### decompose
 * 
 * 
 * 
 * ***
 * @typedef decomposeT
 * @prop {} _
 * ***
 * @arg {ansiT&decomposeT} args `Аргументы`
 * *** 
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
function decompose(args) {
    
    let result;
    
    try {
        
        let {
            
            ansi,
            
        } = args;
        
        //#region verify
        
        
        
        //#endregion
        //#region handle
        
        
        
        //#endregion
        //#region comply
        
        /** @type {ansiT['ansiJect']} */
        const ject = {};

        let params = ansi.match(/\x1b\[(.+(m|H|A|B|C|D|J))/)[1];

        let match = null;

        do {

            if (match = params.match(/^(3|4);8;5;(\d+)/)) {

                if (match[1] == 3) {

                    ject.foreground = +match[2];

                } else {

                    ject.background = +match[2];

                };

            } else if (match = params.match(/^(\d+);(\d+)H/)) {

                ject.cursorPosition = [+match[1], +match[2]];

            } else if (match = params.match(/^(\d+)A/)) {

                ject.cursorPositionUp = +match[1];

            } else if (match = params.match(/^(\d+)B/)) {

                ject.cursorPositionDown = +match[1];

            } else if (match = params.match(/^(\d+)C/)) {

                ject.cursorPositionRight = +match[1];

            } else if (match = params.match(/^(\d+)D/)) {

                ject.cursorPositionLeft = +match[1];

            } else if (match = params.match(/^(\d+)?J/)) {

                ject.clear = true;

            } else if (match = params.match(/^4/)) {

                ject.underline = true;

            } else if (match = params.match(/^24/)) {

                ject.underlineOff = true;

            };

            if (match) {

                params = stringRemoveRange(params, 0, match[0].length);

                if (params[0] === config.params.delimiter) params = stringRemove(params, 0);

            } else break;

        } while (match);

        result = ject;
        
        //#endregion
        
    } catch (err) {
        
        if (config.params.strictMode) {
            
            throw err;
            
        };
        
        
        
    } finally {
        
        
        
    };
    
    return result;
    
};

/**
 * ### ansiDecompose
 * 
 * Функция разбора `ansi` вставки в объект.
 * 
 * ***
 * @arg {ansiT['ansi']} ansi `ansi`
 * 
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @function
*/
export function ansiDecompose(ansi) {

    return decompose({ ansi, });

};

//#endregion

/**
 * @file ansi/module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/