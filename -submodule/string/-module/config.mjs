// import { YLayout } from "../-submodule/layout/-module/class.mjs";
import { YConfig } from "@syls/y/config";
import { configMany } from "@syls/y/many";

/** @typedef {import('./class.mjs').stringT} stringT */

/** @type {configMany} */
const config = {
    
    
    
};

/** ### configString
 * 
 * Конфигуратор модуля `string`.
 * 
 * ***
 * @public
*/
export const configString = new YConfig(Object.assign(config, {
    
    /**
     * ### padFillDefault
     * 
     * ***
     * 
     * Дефолт заполнитель функции `pad`.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @public
     * @property
    */
    padFillDefault: ' ',
    /**
     * ### alignDefault
     * 
     * ***
     * 
     * Дефолт выравнивание. 
     * 
     * *** 
     * @since `1.0.0`
     * @type {stringT['align']}
     * @public
     * @property
    */
    alignDefault: -1,
    /**
     * ### tab
     *
     * Общая табуляция.
     *
     * ***
     * @type {string}
     * @public
    */
    tab: '\t',
    /**
     * ### style
     * 
     * ***
     * 
     * Стиль.
     * 
     * *** 
     * @type {string}
     * @public
     * @property
    */
    style: 'classic',
    /**
     * ### space
     *
     * Общий заполнитель.
     *
     * ***
     * @type {string}
     * @public
    */
    space: ' ',
    /**
     * ### rowEnd
     *
     * Общий символ переноса строки.
     *
     * ***
     * @type {string}
     * @public
    */
    rowEnd: '\n',
    /**
     * ### modeSkip
     *
     * Общее значение режима пропуска.
     *
     * ***
     * @type {boolean}
     * @public
    */
    modeSkip: false,
    /**
     * ### skipValue
     *
     * Общее значение пропуска.
     *
     * ***
     * @type {string}
     * @public
    */
    skipValue: ' ',
    /**
     * ### valuesDefault
     *
     * Дефолт значение.
     *
     * ***
     * @type {string?}
     * @public
    */
    valuesDefault: '',
    /**
     * ### rowVisIndex
     *
     * Общий индекс строки видимости.
     *
     * ***
     * @type {number}
     * @public
    */
    rowVisIndex: 0,
    /**
     * ### rowVisLimit
     *
     * Общее количество отображаемых строк.
     *
     * ***
     * @type {number}
     * @public
    */
    rowVisLimit: 40,
    /**
     * ### spliterPart
     * 
     * Разделитель частей.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    spliterPart: '.',
    /**
     * ### 
     * 
     * Конец маркировки.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    markEnd: "-#>",
    /**
     * ### markBegin
     * 
     * Начало маркировки.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    markBegin: '<#Y',
    /**
     * ### markDelimeter
     * 
     * Разделитель разметки.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    markDelimeter: '-',
    /**
     * ### insertEnd
     * 
     * Блок конца вставки.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    insertEnd: '-#>',
    /**
     * ### insertBegin
     * 
     * Блок начала вставки.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    insertBegin: '<#YIns-',
    /**
     * ### insertSpliter
     * 
     * Разделитель частей вставок.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    insertSpliter: '/',
    /**
     * ### insertSymbolPosition
     * 
     * Символ места вставки.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    insertSymbolPosition: '.',
    /**
     * ### 
     * 
     * Разделитель множеств.
     * 
     * *** 
     * @type {string} 
     * @public
    */
    spliterDischarge: '_',
    /**
     * ### foregroundDefault
     * 
     * Дефолт символьный цвет.
     * 
     * *** 
     * @type {import("./-submodule/ansi/module.mjs").ansiColorTMColors}
     * @public
    */
    foregroundDefault: 'white',
    /**
     * ### backgroundDefault
     * 
     * Дефолт фоновый цвет.
     * 
     * *** 
     * @type {import("./-submodule/ansi/module.mjs").ansiColorTMColors}
     * @public
    */
    backgroundDefault: 'black',

    /**
     * ### styles
     * 
     * ***
     * 
     * Стили.
     * 
     * *** 
     * @public
     * @property
    */
    styles: {

        redline: {

            foreground: 'white',
            background: 'redDark',
            
        },
        vampire: {
            


        },
        classic: {

            foreground: 'cyan',
            background: 'blueDark',

        },

    },
    /**
     * ### symbols
     * 
     * Символы.
     * 
     * ***  
     * @public
    */
    symbols: {

        spec: {

            
            /** @type {'♂'} */
            male: '♂',
            /** @type {'♀'} */
            female: '♀',
            /** @type {'✶'} */
            star: '✶',
            /** @type {'ᴪ'} */
            psi: 'ᴪ',
            /** @type {'♯'} */
            sharp: '♯',
            /** @type {'♣'} */
            cros: '♣',
            /** @type {'♠'} */
            peak: '♠',
            /** @type {'♥'} */
            heart: '♥',
            /** @type {'♦'} */
            diamond: '♦',

        },
        right: {

            /** @type {'©'} */
            copyright: '©',
            /** @type {'™'} */
            trademark: '™',
            /** @type {'®'} */
            trademarkReg: '®',
            
        },
        text: {

            /** @type {'\t'} */
            tab: '\t',
            /** @type {'—'} */
            tiret: '—',
            /** @type {'«'} */
            firLeft: '«',
            /** @type {'»'} */
            firRight: '»',

        },
        math: {
            
            /** @type {'∑'} */
            for: '∑',
            /** @type {'µ'} */
            nu: 'µ',
            /** @type {'≥'} */
            le: '≥',
            /** @type {'≤'} */
            ld: '≤',
            /** @type {'π'} */
            pi: 'π',
            /** @type {'≠'} */
            ne: '≠',
            /** @type {'∞'} */
            inf: '∞',
            /** @type {'∆'} */
            delta: '∆',
            /** @type {'∫'} */
            integr: '∫',
            /** @type {'±'} */
            plusmin: '±',

        },
        table: {

            /** @type {'┼'} */
            thinCro: '┼',
            /** @type {'│'} */
            thinVer: '│',
            /** @type {'┤'} */
            thinVerJL: '┤',
            /** @type {'├'} */
            thinVerJR: '├',
            /** @type {'─'} */
            thinHor: '─',
            /** @type {'┴'} */
            thinHorJU: '┴',
            /** @type {'┬'} */
            thinHorJD: '┬',
            /** @type {'┐'} */
            thinCorUL: '┐',
            /** @type {'┌'} */
            thinCorUR: '┌',
            /** @type {'┘'} */
            thinCorDL: '┘',
            /** @type {'└'} */
            thinCorDR: '└',
            
            /** @type {''} */
            doubleCro: '╬',
            /** @type {''} */
            doubleVer: '║',
            /** @type {'╣'} */
            doubleVerJL: '╣',
            /** @type {'╠'} */
            doubleVerJR: '╠',
            /** @type {'═'} */
            doubleHor: '═',
            /** @type {'╩'} */
            doubleHorJU: '╩',
            /** @type {'╦'} */
            doubleHorJD: '╦',
            /** @type {'╗'} */
            doubleCorUL: '╗',
            /** @type {'╔'} */
            doubleCorUR: '╔',
            /** @type {'╝'} */
            doubleCorDL: '╝',
            /** @type {'╚'} */
            doubleCorDR: '╚',
            
            /** @type {'┊'} */
            dottedVer: '┊',
            /** @type {'┄'} */
            dottedHor: '┄',
            
        },
        figure: {


            /** @type {'○'} */
            circle: '○',
            /** @type {'●'} */
            circleFill: '●',
            /** @type {'◌'} */
            circleDotted: '◌',
            /** @type {'▫'} */
            squareAM: '▫',
            /** @type {'□'} */
            squareAB: '□',
            /** @type {'▪'} */
            squareFM: '▪',
            /** @type {'■'} */
            squareFB: '■',
            /** @type {'▲'} */
            trinagleBU: '▲',
            /** @type {'▼'} */
            trinagleBD: '▼',
            /** @type {'◄'} */
            trinagleBL: '◄',
            /** @type {'►'} */
            trinagleBR: '►',
            /** @type {'▴'} */
            trinagleMU: '▴',
            /** @type {'▾'} */
            trinagleMD: '▾',
            /** @type {'◂'} */
            trinagleML: '◂',
            /** @type {'▸'} */
            trinagleMR: '▸',
            
        },
        valute: {

            /** @type {'₽'} */
            ru: '₽',
            /** @type {'₺'} */
            li: '₺',
            /** @type {'Br'} */
            br: 'Br',
            /** @type {'€'} */
            eu: '€',
            /** @type {'₴'} */
            gr: '₴',
            /** @type {'$'} */
            dol: '$',
            /** @type {'¥'} */
            uan: '¥',
            /** @type {'₸'} */
            ten: '₸',
            /** @type {'£'} */
            fun: '£',
            /** @type {'Rs'} */
            rupi: 'Rs',

        },
        background: {

            /** @type {'▌'} */
            bgHL: '▌',
            /** @type {'▐'} */
            bgHR: '▐',
            /** @type {'█'} */
            bg: '█',
            /** @type {'▀'} */
            bgHU: '▀',
            /** @type {'▄'} */
            bgHD: '▄',
            /** @type {'░'} */
            bgR1: '░',
            /** @type {'▒'} */
            bgR2: '▒',
            /** @type {'▓'} */
            bgR3: '▓',
            
        },
    },

    /**
     * ### templates
     * 
     * Общие шаблоны.
     * 
     * *** 
     * @type {[string, string][]} 
     * @public
    */
    templates: [

        ['point', ' * >p: >v;\n'],

    ],
    /**
     * ### templatesDate
     * 
     * Шаблоны дат.
     * 
     * ***  
     * @public
    */
    templatesDate: {

        ru: 'd.m.y hh:mm:ss',
        jp: 'y.m.d hh:mm:ss',

    },
    /**
     * ### templatePhones
     * 
     * Шаблоны телефонных номеров.
     * 
     * *** 
     * @type {} 
     * @public
    */
    templatesPhone: {

        ru: '+7 (...) ...-..-..',
        kz: '+7 (...) ...-..-..',
        ua: '+380 (..) ...-..-..',
        us: '+1 ...-...-....',
        cn: '+86 (..) ....-....',
        blr: '+375 (..) ...-..-..',

    },
    
}), configMany);

export default configString;

/**
 * @file string/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/