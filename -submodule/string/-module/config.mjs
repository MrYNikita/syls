import { YConfig } from "@syls/y/config";
import { configMany } from "@syls/y/many";

/** @type {configMany['params']} */
const config = {
    
    
    
};

/** ### configString
 * 
 * Конфигуратор модуля `string`.
 * 
 * ***
 * @since `1.0.0`
 * @version `1.0.0`
 * @public
*/
export const configString = new YConfig({
    
    ...config,

    /**
     * ### inityallyPreset
     * 
     * Пресет изначального значения.
     * 
     * *** 
     * @since `1.0.0`
     * @type {boolean}
     * @public
     * @property
    */
    inityallyPreset: false,
    /**
     * ### alignPreset
     * 
     * Пресет выравнивания.
     * 
     * *** 
     * @since `1.0.0`
     * @type {-1|0|1}
     * @public
     * @property
    */
    alignPreset: -1,
    /**
     * ### fillPreset
     * 
     * Пресет строки.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @public
     * @property
    */
    fillPreset: ' ',
    /**
     * ### indentPreset
     * 
     * Пресет отступа.
     * 
     * *** 
     * @since `1.0.0`
     * @type {string}
     * @public
     * @property
    */
    indentPreset: ' ',
    /**
     * ### indentLengthPreset
     * 
     * Пресет длины отступов.
     * 
     * *** 
     * @since `1.0.0`
     * @type {number}
     * @public
     * @property
    */
    indentLengthPreset: 1,
    /**
     * ### style
     * 
     * Стиль.
     * 
     * *** 
     * @since `1.0.0`
     * @type {'rl'|'syls'|'vampire'}
     * @public
     * @property
    */
    style: 'syls',
    /**
     * ### styles
     * 
     * Стили.
     * 
     * *** 
     * @since `1.0.0`
     * @public
     * @property
    */
    styles: {

        rl: {

            foreground: 'cyan',
            background: 'blue',

        },
        syls: {

            foreground: 'cyan',
            background: 'blue',

        },
        matrix: {

            foreground: 'mgreen',
            background: 'black',

        },
        vampire: {

            foreground: 'cyan',
            background: 'blue',

        },

    },
    /**
     * ### symbols
     * 
     * Символы.
     * 
     * *** 
     * @since `1.0.0`
     * @public
     * @property
    */
    symbols: {

        spec: {
        
            /** @type {'‰'} */
            permil: '‰',
            /** @type {'°'} */
            deg: '°',
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
            /** @type {'♪'} */
            melody: '♪',
            /** @type {'♫'} */
            music: '♫',
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
            /** @type {'℗'} */
            phonogram: '℗',
            /** @type {'®'} */
            trademarkReg: '®',
            
        },
        text: {

            /** @type {'…'} */
            dotThree: '…',
            /** @type {'‾'} */
            overlining: '‾',
            /** @type {'§'} */
            sect: '§',
            /** @type {'¶'} */
            para: '¶',
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
            
            /** @type {'×'} */
            mul: '×',
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
            /** @type {'≡'} */
            equal: '≡',
            /** @type {'∆'} */
            delta: '∆',
            /** @type {'Ω'} */
            omega: 'Ω',
            /** @type {'∫'} */
            integr: '∫',
            /** @type {'≈'} */
            approx: '≈',
            /** @type {'±'} */
            plusmin: '±',
            /** @type {'∙'} */
            dotCent: '∙',
            /** @type {'∩'} */
            intersec: '∩',
            /** @type {'√'} */
            squareRoot: '√',

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
            /** @type {'┋'} */
            dottedVerBold: '┋',
            /** @type {'┅'} */
            dottedHorBold: '┅',
            
        },
        figure: {


            /** @type {'╳'} */
            cross: '╳',
            /** @type {'○'} */
            circle: '○',
            /** @type {''} */
            arrowU: '↑',
            /** @type {''} */
            arrowD: '↓',
            /** @type {''} */
            arrowL: '←',
            /** @type {''} */
            arrowR: '→',
            /** @type {''} */
            arrowLR: '↔',
            /** @type {''} */
            arrowUD: '↕',
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

            /** @type {'¤'} */
            valute: '¤',
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
            /** @type {'¢'} */
            cent: '¢',
            /** @type {'¥'} */
            uan: '¥',
            /** @type {'₸'} */
            ten: '₸',
            /** @type {'£'} */
            fun: '£',
            /** @type {'Rs'} */
            rupi: 'Rs',
            /** @type {'₿'} */
            bitcoin: '₿',
            /** @type {'ƒ'} */
            florin: 'ƒ',

        },
        number: {
            
            /** @type {'⓪'} */
            zeroCircle: '⓪',
            /** @type {'①'} */
            oneCircle: '①',
            /** @type {'②'} */
            twoCircle: '②',
            /** @type {'③'} */
            threeCircle: '③',
            /** @type {'④'} */
            fourCircle: '④',
            /** @type {'⑤'} */
            fiveCircle: '⑤',
            /** @type {'⑥'} */
            sixCircle: '⑥',
            /** @type {'⑦'} */
            sevenCircle: '⑦',
            /** @type {'⑧'} */
            eightCircle: '⑧',
            /** @type {'⑨'} */
            nineCircle: '⑨',
            /** @type {'⑩'} */
            tenCircle: '⑩',
            /** @type {'⑪'} */
            elevenCircle: '⑪',
            /** @type {'⑫'} */
            twelveCircle: '⑫',
            /** @type {'⑬'} */
            thirteenCircle: '⑬',
            /** @type {'⑭'} */
            fourteenCircle: '⑭',
            /** @type {'⑮'} */
            fifteenCircle: '⑮',
            /** @type {'⑯'} */
            sixteenCircle: '⑯',
            /** @type {'⑰'} */
            seventeenCircle: '⑰',
            /** @type {'⑱'} */
            eighteenCircle: '⑱',
            /** @type {'⑲'} */
            nineteenCircle: '⑲',
            /** @type {'⑳'} */
            twentyCircle: '⑳',
            /** @type {'⓿'} */
            zeroCircleFill: '⓿',
            /** @type {'❶'} */
            oneCircleFill: '❶',
            /** @type {'❷'} */
            twoCircleFill: '❷',
            /** @type {'❸'} */
            threeCircleFill: '❸',
            /** @type {'❹'} */
            fourCircleFill: '❹',
            /** @type {'❺'} */
            fiveCircleFill: '❺',
            /** @type {'❻'} */
            sixCircleFill: '❻',
            /** @type {'❼'} */
            sevenCircleFill: '❼',
            /** @type {'❽'} */
            eightCircleFill: '❽',
            /** @type {'❾'} */
            nineCircleFill: '❾',
            /** @type {'❿'} */
            tenCircleFill: '❿',
            /** @type {'⓫'} */
            elevenCircleFill: '⓫',
            /** @type {'⓬'} */
            twelveCircleFill: '⓬',
            /** @type {'⓭'} */
            thirteenCircleFill: '⓭',
            /** @type {'⓮'} */
            fourteenCircleFill: '⓮',
            /** @type {'⓯'} */
            fifteenCircleFill: '⓯',
            /** @type {'⓰'} */
            sixteenCircleFill: '⓰',
            /** @type {'⓱'} */
            seventeenCircleFill: '⓱',
            /** @type {'⓲'} */
            eighteenCircleFill: '⓲',
            /** @type {'⓳'} */
            nineteenCircleFill: '⓳',
            /** @type {'⓴'} */
            twentyCircleFill: '⓴',

            
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
    
    
}, configMany);

export default configString;

/**
 * @file string/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/

// import { YConfig } from "@syls/y/config";
// import { configMany } from "@syls/y/many";

// /** @type {configMany} */
// const config = {
    
    
    
// };

// /** ### configString
//  * 
//  * Конфигуратор модуля `string`.
//  * 
//  * ***
//  * @public
// */
// export const configString = new YConfig({
    
//     ...config,

//     /**
//      * ### padFillDefault
//      * 
//      * ***
//      * 
//      * Дефолт заполнитель функции `pad`.
//      * 
//      * *** 
//      * @since `1.0.0`
//      * @type {string}
//      * @public
//      * @property
//     */
//     padFillDefault: ' ',
//     /**
//      * ### alignDefault
//      * 
//      * ***
//      * 
//      * Дефолт выравнивание. 
//      * 
//      * *** 
//      * @since `1.0.0`
//      * @type {stringT['align']}
//      * @public
//      * @property
//     */
//     alignDefault: -1,
//     /**
//      * ### tab
//      *
//      * Общая табуляция.
//      *
//      * ***
//      * @type {string}
//      * @public
//     */
//     tab: '\t',
//     /**
//      * ### style
//      * 
//      * ***
//      * 
//      * Стиль.
//      * 
//      * *** 
//      * @type {string}
//      * @public
//      * @property
//     */
//     style: 'classic',
//     /**
//      * ### space
//      *
//      * Общий заполнитель.
//      *
//      * ***
//      * @type {string}
//      * @public
//     */
//     space: ' ',
//     /**
//      * ### rowEnd
//      *
//      * Общий символ переноса строки.
//      *
//      * ***
//      * @type {string}
//      * @public
//     */
//     rowEnd: '\n',
//     /**
//      * ### modeSkip
//      *
//      * Общее значение режима пропуска.
//      *
//      * ***
//      * @type {boolean}
//      * @public
//     */
//     modeSkip: false,
//     /**
//      * ### skipValue
//      *
//      * Общее значение пропуска.
//      *
//      * ***
//      * @type {string}
//      * @public
//     */
//     skipValue: ' ',
//     /**
//      * ### valuesDefault
//      *
//      * Дефолт значение.
//      *
//      * ***
//      * @type {string?}
//      * @public
//     */
//     valuesDefault: '',
//     /**
//      * ### rowVisIndex
//      *
//      * Общий индекс строки видимости.
//      *
//      * ***
//      * @type {number}
//      * @public
//     */
//     rowVisIndex: 0,
//     /**
//      * ### rowVisLimit
//      *
//      * Общее количество отображаемых строк.
//      *
//      * ***
//      * @type {number}
//      * @public
//     */
//     rowVisLimit: 40,
//     /**
//      * ### spliterPart
//      * 
//      * Разделитель частей.
//      * 
//      * *** 
//      * @type {string} 
//      * @public
//     */
//     spliterPart: '.',
//     /**
//      * ### 
//      * 
//      * Конец маркировки.
//      * 
//      * *** 
//      * @type {string} 
//      * @public
//     */
//     markEnd: "-#>",
//     /**
//      * ### markBegin
//      * 
//      * Начало маркировки.
//      * 
//      * *** 
//      * @type {string} 
//      * @public
//     */
//     markBegin: '<#Y',
//     /**
//      * ### markDelimeter
//      * 
//      * Разделитель разметки.
//      * 
//      * *** 
//      * @type {string} 
//      * @public
//     */
//     markDelimeter: '-',
//     /**
//      * ### insertEnd
//      * 
//      * Блок конца вставки.
//      * 
//      * *** 
//      * @type {string} 
//      * @public
//     */
//     insertEnd: '-#>',
//     /**
//      * ### insertBegin
//      * 
//      * Блок начала вставки.
//      * 
//      * *** 
//      * @type {string} 
//      * @public
//     */
//     insertBegin: '<#YIns-',
//     /**
//      * ### insertSpliter
//      * 
//      * Разделитель частей вставок.
//      * 
//      * *** 
//      * @type {string} 
//      * @public
//     */
//     insertSpliter: '/',
//     /**
//      * ### insertSymbolPosition
//      * 
//      * Символ места вставки.
//      * 
//      * *** 
//      * @type {string} 
//      * @public
//     */
//     insertSymbolPosition: '.',
//     /**
//      * ### 
//      * 
//      * Разделитель множеств.
//      * 
//      * *** 
//      * @type {string} 
//      * @public
//     */
//     spliterDischarge: '_',
//     /**
//      * ### foregroundDefault
//      * 
//      * Дефолт символьный цвет.
//      * 
//      * *** 
//      * @type {import("./-submodule/ansi/module.mjs").ansiColorTMColors}
//      * @public
//     */
//     foregroundDefault: 'white',
//     /**
//      * ### backgroundDefault
//      * 
//      * Дефолт фоновый цвет.
//      * 
//      * *** 
//      * @type {import("./-submodule/ansi/module.mjs").ansiColorTMColors}
//      * @public
//     */
//     backgroundDefault: 'black',

//     /**
//      * ### styles
//      * 
//      * ***
//      * 
//      * Стили.
//      * 
//      * *** 
//      * @public
//      * @property
//     */
//     styles: {

//         redline: {

//             foreground: 'white',
//             background: 'redDark',
            
//         },
//         vampire: {
            


//         },
//         classic: {

//             foreground: 'cyan',
//             background: 'blueDark',

//         },

//     },
//     /**
//      * ### symbols
//      * 
//      * Символы.
//      * 
//      * ***  
//      * @public
//     */
//     symbols: {

//         spec: {
        
//             /** @type {'‰'} */
//             permil: '‰',
//             /** @type {'°'} */
//             deg: '°',
//             /** @type {'♂'} */
//             male: '♂',
//             /** @type {'♀'} */
//             female: '♀',
//             /** @type {'✶'} */
//             star: '✶',
//             /** @type {'ᴪ'} */
//             psi: 'ᴪ',
//             /** @type {'♯'} */
//             sharp: '♯',
//             /** @type {'♪'} */
//             melody: '♪',
//             /** @type {'♫'} */
//             music: '♫',
//             /** @type {'♣'} */
//             cros: '♣',
//             /** @type {'♠'} */
//             peak: '♠',
//             /** @type {'♥'} */
//             heart: '♥',
//             /** @type {'♦'} */
//             diamond: '♦',

//         },
//         right: {

//             /** @type {'©'} */
//             copyright: '©',
//             /** @type {'™'} */
//             trademark: '™',
//             /** @type {'℗'} */
//             phonogram: '℗',
//             /** @type {'®'} */
//             trademarkReg: '®',
            
//         },
//         text: {

//             /** @type {'…'} */
//             dotThree: '…',
//             /** @type {'‾'} */
//             overlining: '‾',
//             /** @type {'§'} */
//             sect: '§',
//             /** @type {'¶'} */
//             para: '¶',
//             /** @type {'\t'} */
//             tab: '\t',
//             /** @type {'—'} */
//             tiret: '—',
//             /** @type {'«'} */
//             firLeft: '«',
//             /** @type {'»'} */
//             firRight: '»',

//         },
//         math: {
            
//             /** @type {'×'} */
//             mul: '×',
//             /** @type {'∑'} */
//             for: '∑',
//             /** @type {'µ'} */
//             nu: 'µ',
//             /** @type {'≥'} */
//             le: '≥',
//             /** @type {'≤'} */
//             ld: '≤',
//             /** @type {'π'} */
//             pi: 'π',
//             /** @type {'≠'} */
//             ne: '≠',
//             /** @type {'∞'} */
//             inf: '∞',
//             /** @type {'≡'} */
//             equal: '≡',
//             /** @type {'∆'} */
//             delta: '∆',
//             /** @type {'Ω'} */
//             omega: 'Ω',
//             /** @type {'∫'} */
//             integr: '∫',
//             /** @type {'≈'} */
//             approx: '≈',
//             /** @type {'±'} */
//             plusmin: '±',
//             /** @type {'∙'} */
//             dotCent: '∙',
//             /** @type {'∩'} */
//             intersec: '∩',
//             /** @type {'√'} */
//             squareRoot: '√',

//         },
//         table: {

//             /** @type {'┼'} */
//             thinCro: '┼',
//             /** @type {'│'} */
//             thinVer: '│',
//             /** @type {'┤'} */
//             thinVerJL: '┤',
//             /** @type {'├'} */
//             thinVerJR: '├',
//             /** @type {'─'} */
//             thinHor: '─',
//             /** @type {'┴'} */
//             thinHorJU: '┴',
//             /** @type {'┬'} */
//             thinHorJD: '┬',
//             /** @type {'┐'} */
//             thinCorUL: '┐',
//             /** @type {'┌'} */
//             thinCorUR: '┌',
//             /** @type {'┘'} */
//             thinCorDL: '┘',
//             /** @type {'└'} */
//             thinCorDR: '└',
            
//             /** @type {''} */
//             doubleCro: '╬',
//             /** @type {''} */
//             doubleVer: '║',
//             /** @type {'╣'} */
//             doubleVerJL: '╣',
//             /** @type {'╠'} */
//             doubleVerJR: '╠',
//             /** @type {'═'} */
//             doubleHor: '═',
//             /** @type {'╩'} */
//             doubleHorJU: '╩',
//             /** @type {'╦'} */
//             doubleHorJD: '╦',
//             /** @type {'╗'} */
//             doubleCorUL: '╗',
//             /** @type {'╔'} */
//             doubleCorUR: '╔',
//             /** @type {'╝'} */
//             doubleCorDL: '╝',
//             /** @type {'╚'} */
//             doubleCorDR: '╚',
            
//             /** @type {'┊'} */
//             dottedVer: '┊',
//             /** @type {'┄'} */
//             dottedHor: '┄',
//             /** @type {'┋'} */
//             dottedVerBold: '┋',
//             /** @type {'┅'} */
//             dottedHorBold: '┅',
            
//         },
//         figure: {


//             /** @type {'╳'} */
//             cross: '╳',
//             /** @type {'○'} */
//             circle: '○',
//             /** @type {''} */
//             arrowU: '↑',
//             /** @type {''} */
//             arrowD: '↓',
//             /** @type {''} */
//             arrowL: '←',
//             /** @type {''} */
//             arrowR: '→',
//             /** @type {''} */
//             arrowLR: '↔',
//             /** @type {''} */
//             arrowUD: '↕',
//             /** @type {'●'} */
//             circleFill: '●',
//             /** @type {'◌'} */
//             circleDotted: '◌',
//             /** @type {'▫'} */
//             squareAM: '▫',
//             /** @type {'□'} */
//             squareAB: '□',
//             /** @type {'▪'} */
//             squareFM: '▪',
//             /** @type {'■'} */
//             squareFB: '■',
//             /** @type {'▲'} */
//             trinagleBU: '▲',
//             /** @type {'▼'} */
//             trinagleBD: '▼',
//             /** @type {'◄'} */
//             trinagleBL: '◄',
//             /** @type {'►'} */
//             trinagleBR: '►',
//             /** @type {'▴'} */
//             trinagleMU: '▴',
//             /** @type {'▾'} */
//             trinagleMD: '▾',
//             /** @type {'◂'} */
//             trinagleML: '◂',
//             /** @type {'▸'} */
//             trinagleMR: '▸',
            
//         },
//         valute: {

//             /** @type {'¤'} */
//             valute: '¤',
//             /** @type {'₽'} */
//             ru: '₽',
//             /** @type {'₺'} */
//             li: '₺',
//             /** @type {'Br'} */
//             br: 'Br',
//             /** @type {'€'} */
//             eu: '€',
//             /** @type {'₴'} */
//             gr: '₴',
//             /** @type {'$'} */
//             dol: '$',
//             /** @type {'¢'} */
//             cent: '¢',
//             /** @type {'¥'} */
//             uan: '¥',
//             /** @type {'₸'} */
//             ten: '₸',
//             /** @type {'£'} */
//             fun: '£',
//             /** @type {'Rs'} */
//             rupi: 'Rs',
//             /** @type {'₿'} */
//             bitcoin: '₿',
//             /** @type {'ƒ'} */
//             florin: 'ƒ',

//         },
//         number: {
            
//             /** @type {'⓪'} */
//             zeroCircle: '⓪',
//             /** @type {'①'} */
//             oneCircle: '①',
//             /** @type {'②'} */
//             twoCircle: '②',
//             /** @type {'③'} */
//             threeCircle: '③',
//             /** @type {'④'} */
//             fourCircle: '④',
//             /** @type {'⑤'} */
//             fiveCircle: '⑤',
//             /** @type {'⑥'} */
//             sixCircle: '⑥',
//             /** @type {'⑦'} */
//             sevenCircle: '⑦',
//             /** @type {'⑧'} */
//             eightCircle: '⑧',
//             /** @type {'⑨'} */
//             nineCircle: '⑨',
//             /** @type {'⑩'} */
//             tenCircle: '⑩',
//             /** @type {'⑪'} */
//             elevenCircle: '⑪',
//             /** @type {'⑫'} */
//             twelveCircle: '⑫',
//             /** @type {'⑬'} */
//             thirteenCircle: '⑬',
//             /** @type {'⑭'} */
//             fourteenCircle: '⑭',
//             /** @type {'⑮'} */
//             fifteenCircle: '⑮',
//             /** @type {'⑯'} */
//             sixteenCircle: '⑯',
//             /** @type {'⑰'} */
//             seventeenCircle: '⑰',
//             /** @type {'⑱'} */
//             eighteenCircle: '⑱',
//             /** @type {'⑲'} */
//             nineteenCircle: '⑲',
//             /** @type {'⑳'} */
//             twentyCircle: '⑳',
//             /** @type {'⓿'} */
//             zeroCircleFill: '⓿',
//             /** @type {'❶'} */
//             oneCircleFill: '❶',
//             /** @type {'❷'} */
//             twoCircleFill: '❷',
//             /** @type {'❸'} */
//             threeCircleFill: '❸',
//             /** @type {'❹'} */
//             fourCircleFill: '❹',
//             /** @type {'❺'} */
//             fiveCircleFill: '❺',
//             /** @type {'❻'} */
//             sixCircleFill: '❻',
//             /** @type {'❼'} */
//             sevenCircleFill: '❼',
//             /** @type {'❽'} */
//             eightCircleFill: '❽',
//             /** @type {'❾'} */
//             nineCircleFill: '❾',
//             /** @type {'❿'} */
//             tenCircleFill: '❿',
//             /** @type {'⓫'} */
//             elevenCircleFill: '⓫',
//             /** @type {'⓬'} */
//             twelveCircleFill: '⓬',
//             /** @type {'⓭'} */
//             thirteenCircleFill: '⓭',
//             /** @type {'⓮'} */
//             fourteenCircleFill: '⓮',
//             /** @type {'⓯'} */
//             fifteenCircleFill: '⓯',
//             /** @type {'⓰'} */
//             sixteenCircleFill: '⓰',
//             /** @type {'⓱'} */
//             seventeenCircleFill: '⓱',
//             /** @type {'⓲'} */
//             eighteenCircleFill: '⓲',
//             /** @type {'⓳'} */
//             nineteenCircleFill: '⓳',
//             /** @type {'⓴'} */
//             twentyCircleFill: '⓴',

            
//         },
//         background: {

//             /** @type {'▌'} */
//             bgHL: '▌',
//             /** @type {'▐'} */
//             bgHR: '▐',
//             /** @type {'█'} */
//             bg: '█',
//             /** @type {'▀'} */
//             bgHU: '▀',
//             /** @type {'▄'} */
//             bgHD: '▄',
//             /** @type {'░'} */
//             bgR1: '░',
//             /** @type {'▒'} */
//             bgR2: '▒',
//             /** @type {'▓'} */
//             bgR3: '▓',
            
//         },
//     },

//     /**
//      * ### templates
//      * 
//      * Общие шаблоны.
//      * 
//      * *** 
//      * @type {[string, string][]} 
//      * @public
//     */
//     templates: [

//         ['point', ' * >p: >v;\n'],

//     ],
//     /**
//      * ### templatesDate
//      * 
//      * Шаблоны дат.
//      * 
//      * ***  
//      * @public
//     */
//     templatesDate: {

//         ru: 'd.m.y hh:mm:ss',
//         jp: 'y.m.d hh:mm:ss',

//     },
//     /**
//      * ### templatePhones
//      * 
//      * Шаблоны телефонных номеров.
//      * 
//      * *** 
//      * @type {} 
//      * @public
//     */
//     templatesPhone: {

//         ru: '+7 (...) ...-..-..',
//         kz: '+7 (...) ...-..-..',
//         ua: '+380 (..) ...-..-..',
//         us: '+1 ...-...-....',
//         cn: '+86 (..) ....-....',
//         blr: '+375 (..) ...-..-..',

//     },
    
// }, configMany);

// export default configString;
