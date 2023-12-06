import { YConfig } from "@syls/y/config";
import configString from "../../../-module/config.mjs";

/** @type {configString['params']} */
const config = {
    
    
    
};

/** ### configAnsi
 * 
 * Конфигуратор модуля `ansi`.
 * 
 * ***
 * @public
*/
export const configANSI = new YConfig({
    
    ...config,

    /**
     * ### delimeter
     * 
     * Разделитель аргументов.
     * 
     * *** 
     * @type {';'} 
     * @public
    */
    delimiter: ';',

    /**
     * ### code
     *
     * Код.
     *
     * ***
     * @type {'\x1b['}
     * @public
    */
    code: '\x1b[',
    /**
     * ### codeEnd
     * 
     * Код завершения графических параметров.
     * 
     * *** 
     * @type {'m'} 
     * @public
    */
    codeEndGraphic: 'm',
    /**
     * ### codeClear
     * 
     * Код очистки экрана.
     * 
     * *** 
     * @type {'J'} 
     * @public
    */
    codeClear: 'J',
    /**
     * ### codeColor
     * 
     * Вставка точечной настройки цвета.
     * 
     * *** 
     * @type {'8;5'} 
     * @public
    */
    codeColor: '8;5',
    /**
     * ### codeColorReset
     * 
     * Код сброса цветов.
     * 
     * *** 
     * @type {'9'} 
     * @public
    */
    codeColorReset: '9',
    /**
     * ### codeColorForeground
     * 
     * Код цвета символов.
     * 
     * *** 
     * @type {'3'} 
     * @public
    */
    codeColorForeground: '3',
    /**
     * ### codeColorBackground
     * 
     * Код цвета фона.
     * 
     * *** 
     * @type {'4'} 
     * @public
    */
    codeColorBackground: '4',
    /**
     * ### codePosition
     *
     * Код позиции.
     *
     * ***
     * @type {'H'}
     * @public
    */
    codePosition: 'H',
    /**
     * ### codePositionEnd
     * 
     * Код сдвига курсора до конца строки с удалением последующих символов.
     * 
     * *** 
     * @type {'K'} 
     * @public
    */
    codePositionEnd: 'K',
    /**
     * ### codeUnderline
     * 
     * Код линии подчеркивания.
     * 
     * *** 
     * @type {'4'} 
     * @public
    */
    codeUnderline: '4',
    /**
     * ### codeUnderlineReset
     * 
     * Код сброса линии подчеркивания.
     * 
     * *** 
     * @type {'24'} 
     * @public
    */
    codeUnderlineReset: '24',
    /**
     * ### codeBackspace
     * 
     * Код удаления символа со сдвигом.
     * 
     * *** 
     * @type {'\b'} 
     * @public
    */
    codeBackspace: '\b',

    /**
     * ### colors
     * 
     * Цвета.
     * 
     * Представлены парой ключ-значение, где ключ - название цвета, а значение - его код.
     * 
     * *** 
     * @public
    */
    colors: {

        reset: -1,
        resetY: -2,

        red: 160,
        redDark: 52,
        redLight: 196,

        sea: 37,
        seaDark: 30,
        seaLight: 43,

        blue: 19,
        blueDark: 17,
        blueLight: 21,

        cyan: 51,
        cyanDark: 45,
        cyanLight: 159,

        pink: 92,
        pinkDark: 91,
        pinkLight: 93,

        aqua: 44,
        aquaDark: 43,
        aquaLight: 80,

        gray: 110,
        grayDark: 67,
        grayLight: 195,

        grey: 243,
        greyDark: 240,
        greyLight: 254,

        green: 76,
        greenDark: 28,
        greenLight: 82,

        mgreen: 120,
        mgreenDark: 22,
        mgreenLight: 194,

        black: 0,

        white: 231,

        brown: 94,
        brownDark: 52,
        brownLight: 137,

        orange: 208,
        orangeDark: 202,
        orangeLight: 214,

        yellow: 226,
        yellowDark: 220,
        yellowLight: 228,

        magenta: 54,
        magentaDark: 53,
        magentaLight: 56,

    },
    
}, configString);

export default configANSI;