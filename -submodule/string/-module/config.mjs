import { configY } from "@syls/y";
import { YConfig } from "@syls/y/config";

/** ### configString
 * 
 * Конфигуратор модуля `string`.
 * 
 * ***
 * @public
*/
export const configString = new YConfig({
    
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
     * ### tabDefault
     *
     * Дефолт табуляция.
     *
     * ***
     * @type {string?}
     * @public
    */
    tabDefault: null,
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
     * ### defaultSpace
     *
     * Дефолт заполнитель.
     *
     * ***
     * @type {string?}
     * @public
    */
    spaceDefault: null,
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
     * ### prefixDefault
     *
     * Дефолт префикс.
     *
     * ***
     * @type {string?}
     * @public
    */
    prefixDefault: null,
    /**
     * ### postfixDefault
     *
     * Дефолт постфикс.
     *
     * ***
     * @type {string?}
     * @public
    */
    postfixDefault: null,
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
     * ### rowEndDefault
     *
     * Дефолт конец строки.
     *
     * ***
     * @type {string?}
     * @public
    */
    rowEndDefault: null,
    /**
     * ### rowEndDefault
     *
     *
     *
     * ***
     * @type {string?}
     * @public
    */
    rowEndDefault: null,
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
     * ### rowLengthDefault
     *
     * Дефолт предельное количество символов в линии.
     *
     * ***
     * @type {number?}
     * @public
    */
    rowLengthDefault: null,
    /**
     * ### rowVisIndexDefault
     *
     * Дефолт индекс видимой страницы.
     *
     * ***
     * @type {number?}
     * @public
    */
    rowVisIndexDefault: null,
    /**
     * ### rowVisLimitDefault
     *
     * Дефолт предел отображаемых строк.
     *
     * ***
     * @type {number?}
     * @public
    */
    rowVisLimitDefault: null,

    /**
     * ### symbols
     * 
     * Символы.
     * 
     * ***  
     * @public
    */
    symbols: {

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
            
            /** @type {'»'} */
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
            /** @type {'±'} */
            plusmin: '±',

        },
        table: {

            thin: ['│', '─', '┌', '┐', '└', '┘', '├', '┬', '┴', '┤', '┼'],
            double: ['║', '═', '╔', '╗', '╚', '╝', '╠', '╦', '╩', '╣', '╬'],
            dotted: ['┊', '┄'],
            
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
    },
    /**
     * ### aliases
     * 
     * Псевдонимы.
     * 
     * *** 
     * @type {string[][]} 
     * @public
    */
    aliases: [

        ['values', 'value', 'str', 'string'],

    ],

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
    
}, configY);

export default configString;

/**
 * @file string/config.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/