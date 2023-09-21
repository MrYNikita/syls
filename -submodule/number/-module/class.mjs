//#region YI

import { YArg } from '@syls/y/arg';
import { YEntity } from '@syls/y/entity';
import { YCond, condIsNumberLimit } from '@syls/y/cond';
import { configNumber as config } from './config.mjs';

//#endregion
//#region YT

/** ### YNumberT
 * - Тип `T`
 * 
 * Основной параметр модуля `YNumber`.
 * 
 * @typedef {YNumberTE&YNumberTU&Y} YNumberT
 * 
*/
/** ### YNumberTE
 * - Тип `TE`
 * 
 * Параметр наследования `YNumber`.
 * 
 * @typedef {Omit<DNumber, keyof SNumber>} YNumberTE
 * 
*/
/** ### YNumberTU
 * - Тип `TU`
 * 
 * Уникальные параметры `YNumber`.
 * 
 * @typedef YNumberTU
 * @prop {any} _
 * 
*/

//#endregion

class SNumber extends YEntity {

    /**
     * ### stock
     * 
     * ***
     * 
     * 
     * 
     * ***
     * @type {YNumber[]}
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
     * ### getRandom
     * 
     * ***
     * 
     * Метод получения случайного значения в заданном диапазоне.
     * 
     * ***
     * @arg {number} min `Минимум`
     * @arg {number} max `Максимум`
     * @arg {boolean} frac `Дробность`
     * @static
     * @method
     * @public
    */
    static getRandom(min, max, frac) {

        return frac ? new YNumber(numberGetRandomFrac(min, max)) : new YNumber(numberGetRandomReal(min, max));

    };

    /**
     * ### min
     * 
     * ***
     * 
     * Метод поиска минимального значения среди приведенных.
     * 
     * ***
     * @arg {...number} numbers `Числа`
     * @static
     * @method
     * @public
    */
    static min(...numbers) {
        
        let result = numbers[0];

        for (const number of numbers) {

            if (!YCond.isNumber(number) || result <= number) continue;

            result = number;

        };

        return result;
        
    };
    /**
     * ### max
     * 
     * ***
     * 
     * Метод поиска максимального значения среди приведенных.
     * 
     * ***
     * @arg {...number} numbers `Числа`
     * @static
     * @method
     * @public
    */
    static max(...numbers) {
        
        let result = numbers[0];

        for (const number of numbers) {

            if (!YCond.isNumber(number) || result >= number) continue;

            result = number;

        };

        return result;
        
    };

    /**
     * @arg {...YNumber} args `Аргументы`
     * @returns {YNumber[]}
    */
    static create(...args) {

        return Object.getPrototypeOf(SNumber).create.apply(this, args);

    };

    /**
     * @arg {Y1} value `Значение`
     * @static
     * @method
     * @public
     * @returns {(Y1&Y1)?}
     * @template {YNumber} Y1
    */
    static becomePrototype(value) {

        if (!(value instanceof Object)) return null;

        Object.setPrototypeOf(value, Y.prototype);

        return value;

    };

};
class DNumber extends SNumber {

    /**
     * ### value
     *
     * Значение.
     *
     * ***
     * @type {number}
     * @field
     * @public
    */
    value;
    /**
     * ### historyMode
     * 
     * Режим истории.
     * 
     * *** 
     * @type {boolean}
     * @field
     * @public
    */
    historyMode;
    /**
     * ### constantMode
     * 
     * Режим константы.
     * 
     * *** 
     * @type {boolean}
     * @field
     * @public
    */
    constantMode;

};
class INumber extends DNumber {

    /**
     * ### history
     *
     * История.
     *
     * ***
     * @type {number[]}
     * @field
     * @protected
    */
    history;

};
class MNumber extends INumber {

    /**
     * ### change
     * 
     * ***
     * 
     * Метод изменения значения.
     * 
     * ***
     * @arg {number} value `Значение`
     * @method
     * @protected
    */
    change(value) {

        if (this.constantMode || !YCond.isNumber(value)) return this;

        this.history.push(this.value);

        this.value = value;

        return this;

    };

};
class FNumber extends MNumber {

    /**
     * ### YNumber.constructor
     * 
     * 
     * 
     * ***
     * @arg {YNumberT} args
    */
    constructor(args) {

        super(args = FNumber.#before(args = arguments));

        FNumber.#deceit.apply(this, [args]);

        return this.correlate();

    };

    /** @arg {DNumber} args */
    static #before(args) {

        /** @type {YArg<INumber>} */
        const yarg = args instanceof YArg ? args : new YArg(args);

        yarg.set(

            ['value', 'number'],
            ['constantMode', 'bool'],

        );

        return yarg;

    };
    /** @arg {YArg<INumber>} args @this {YNumber} */
    static #deceit(args) {

        try {

            FNumber.#verify.apply(this, arguments);

        } catch (e) {

            if (config?.strictMode) {

                throw e;

            };

            return new YNumber();

        } finally {



        };

    };
    /** @arg {YArg<INumber>} args @this {YNumber} */
    static #verify(args) {

        const {



        } = args;

        FNumber.#handle.apply(this, arguments);

    };
    /** @arg {YArg<INumber>} args @this {YNumber} */
    static #handle(args) {



        FNumber.#create.apply(this, arguments);

    };
    /** @arg {YArg<INumber>} args @this {YNumber} */
    static #create(args) {

        const {



        } = args;

        this

            .adopt(args.getData());

    };

    [Symbol.toPrimitive](to) {

        switch (to) {

            default: return this.value;

        };

    };

};

/**
 * ### YNumber
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
 * ***
 * 
 * Класс `YNumber`.
 * 
 * ***
 * @class
 * 
*/
export class YNumber extends FNumber {

    /**
     * ### toPrecent
     * 
     * ***
     *
     * Метод приведения текущего значения к указанному проценту.
     *
     * ***
     * @arg {number} precent `Процент`
     * @arg {number?} precentNow `Текущий процент`
     *
     * Позволяет указать, что текущее значение является процентом от указанного числа.
     *
     * Например, указав данный параметр как `97` при значении `543`, метод будет воспринимать значение в `543` как `97` процентов ои нужного числа.
     * В следствии этого, метод предварительно доведет значение `543` до `100%`, прибавив ещё `3%`.
     * @method
     * @public
    */
    toPrecent(precent, precentNow) {

        if (precentNow && precentNow.constructor === Number) {

            if (precentNow < 0) {

                precentNow *= -1;

            };

            this.change(this.value / precentNow * precent);

        } else {

            this.change(this.value / 100 * precent);

        };

        return this;

    };
    /**
     * ### toPositive
     * 
     * ***
     *
     * Метод делающий число положительным.
     *
     * ***
     * @method
     * @public
    */
    toPositive() {

        if (this.value < 0) {

            this.deny();

        };

        return this;

    };
    /**
     * ### toNegative
     * 
     * ***
     *
     * Метод делающий число отрицательным.
     *
     * ***
     * @method
     * @public
    */
    toNegative() {

        if (this.value > 0) {

            this.deny();

        };

        return this;

    };

    /**
     * ### get
     * 
     * ***
     * 
     * Метод получения значения.
     * 
     * ***
     * @method
     * @public
    */
    get() {

        return this.value;

    };
    /**
     * ### getReal
     * 
     * ***
     * 
     * Метод получения целой части.
     * 
     * ***
     * @method
     * @public
    */
    getReal() {
        
        return Math.trunc(this.value);
        
    };
    /**
     * ### getFrac
     * 
     * 
     * ***
     *
     * Метод получения дробной части числа.
     *
     * ***
     * @method
     * @public
    */
    getFrac() {

        const part = this.value.toString().split('.');

        if (part.length === 2) {

            const result = [0, part[1]].join('.');

            return part[0][0] === '-' ? +result * -1 : +result;

        } else {

            return null;

        };

    };
    /**
     * @method
     * @public
     * @returns {typeof YNumber}
    */
    getClass() {

        return YNumber;

    };
    /**
     * ### getPrecent
     * 
     * 
     * ***
     *
     * Метод получения процента от указанного числа.
     *
     * ***
     * @arg {number} number `Число`
     *
     * От указанного числа вычисляется процент.
     * @public
    */
    getPrecent(number) {

        if (YCond.isNumber(number)) {

            return this.value / (number / 100);

        };

        return NaN;

    };

    /**
     * ### set
     * 
     * ***
     * 
     * Метод установки нового значения минуя изменение.
     * 
     * ***
     * @arg {number} value `Значение`
     * @method
     * @public
    */
    set(value) {

        if (YCond.isNumber(value)) {

            this.history.push(this.value);

            this.value = value;

        };

        return this;

    };

    /**
     * ### add
     * 
     * 
     * ***
     *
     * Метод увеличения.
     *
     * ***
     * @arg {...number} numbers `Числа`
     * @method
     * @public
    */
    add(...numbers) {

        for (const number of numbers) this.change(this.value + number);

        return this;

    };
    /**
     * ### dec
     * 
     * 
     * ***
     *
     * Метод уменьшения.
     *
     * ***
     * @arg {...number} numbers `Числа`
     * @method
     * @public
    */
    dec(...numbers) {

        for (const number of numbers) this.change(this.value - number);

        return this;

    };
    /**
     * ### div
     * 
     * 
     * ***
     *
     * Метод деления.
     *
     * ***
     * @arg {...number} numbers `Числа`
     * @method
     * @public
    */
    div(...numbers) {

        for (const number of numbers) this.change(this.value / number);

        return this;

    };
    /**
     * ### mul
     * 
     * 
     * ***
     *
     * Метод умножения.
     *
     * ***
     * @arg {...number} numbers `Числа`
     * @method
     * @public
    */
    mul(...numbers) {

        for (const number of numbers) this.change(this.value * number);

        return this;

    };
    /**
     * ### ere
     * 
     * ***
     * 
     * Метод возведения в степень.
     * 
     * ***
     * @arg {number} degree `Степень`
     * @method
     * @public
    */
    ere(degree = 2) {
        
        return this.change(this.value ** degree);
        
    };
    /**
     * ### pow
     * 
     * 
     * ***
     *
     * Метод вовзедения в степень через `Math.pow`.
     *
     * ***
     * @arg {number} degree `Степень`
     * @method
     * @public
    */
    pow(degree = 2) {

        return this.change(Math.pow(this.value, degree));

    };
    /**
     * ### mod
     * 
     * 
     * ***
     *
     * Метод взятия остатка от числа.
     *
     * ***
     * @arg {number} number `Число`
     * @method
     * @public
    */
    mod(number = 10) {

        return this.change(this.value % number);

    };
    /**
     * ### abs
     * 
     * 
     * ***
     *
     * Метод извлечения модуля числа.
     *
     * ***
     * @method
     * @public
    */
    abs() {

        return this.change(Math.abs(this.value));;

    };
    /**
     * ###
     * 
     * 
     * ***
     *
     * Метод вычисления экспоненты.
     *
     * ***
     * @method
     * @public
    */
    exp() {

        return this.change(Math.exp(this.value));

    };
    /**
     * ### cbrt
     * 
     * ***
     * 
     * Метод вычисления кубического корня числа.
     * 
     * ***
     * @method
     * @public
    */
    cbrt() {
        
        return this.change(Math.cbrt(this.value));
        
    };
    /**
     * ### back
     * 
     * 
     * ***
     *
     * Метод отката значения на указанное количество операций.
     *
     * ***
     * @arg {number} count `Счет`
     * - Дефолт `1`
     * @method
     * @public
    */
    back(count) {

        if (!this.constantMode && YCond.isNumberInt(count) && count > 0) {

            if (count > this.history.length) {

                count = this.history.length;

            } else if (count <= 0) {

                return this;

            } else {

                this.value = this.history.splice(this.history.length - count)[0];

            };

        };

        return this;

    };
    /**
     * ### deny
     * 
     * 
     * ***
     *
     * Метод смены знака.
     *
     * ***
     * @method
     * @public
    */
    deny() {

        return this.change(this.value * -1);

    };
    /**
     * ### sqrt
     * 
     * 
     * ***
     *
     * Метод извлечения квадратного корня.
     *
     * ***
     * @method
     * @public
    */
    sqrt() {

        return this.change(Math.sqrt(this.value));

    };
    /**
     * ### ceil
     * 
     * ***
     *
     * Метод округления до максимума.
     *
     * ***
     * @method
     * @public
    */
    ceil() {

        return this.change(Math.ceil(this.value));

    };
    /**
     * ### real
     * 
     * ***
     *
     * Метод отброса дробной части.
     *
     * ***
     * @method
     * @public
    */
    real() {

        return this.change(Math.trunc(this.value));

    };
    /**
     * ### frac
     * 
     * ***
     *
     * Метод отброса целой части.
     *
     * ***
     * @method
     * @public
    */
    frac() {

        return this.change(this.getFrac());

    };
    /**
     * ### floor
     * 
     * ***
     *
     * Метод округления до минимума.
     *
     * ***
     * @method
     * @public
    */
    floor() {

        return this.change(Math.floor(this.value));

    };
    /**
     * ### round
     * 
     * ***
     *
     * Метод округления от 0.5.
     *
     * ***
     * @method
     * @public
    */
    round() {

        return this.change(Math.round(this.value));

    };
    /**
     * ### compare
     * 
     * ***
     *
     * Метод сравнения с указанным числом.
     *
     * ***
     * @arg {number} number `Число`
     * @method
     * @public
    */
    compare(number) {

        if ((number && number.constructor === Number) || number === 0) {

            if (number > this.value) {

                return -1;

            } else if (number < this.value) {

                return 1;

            } else {

                return 0;

            };

        };

        return 1;

    };
    /**
     * ### operate
     * 
     * ***
     * 
     * Метод применения операнда с указанным значением.
     * 
     * ***
     * @arg {number} value `Значение`
     * @arg {string} operand `Операнд`
     * @since `1.0.0`
     * @method
     * @public
    */
    operate(operand, value) {

        const args = yClassifyProp(arguments);

        if (!args.array.length) {

            args.array.push([operand, value]);

        };

        for (const pair of args.array) {

            [operand, value] = pair;

            switch (operand) {

                case '+': this.add(value); break;
                case '-': this.dec(value); break;
                case '*': this.mul(value); break;
                case '%': this.mod(value); break;
                case ':': case '/': this.div(value); break;
                case '^': case '**': this.pow(value); break;

            };

        };

        return this;

    };

    /**
     * ### sin
     * 
     * 
     * ***
     *
     * Метод вычисления сиунса.
     *
     * ***
     * @method
     * @public
    */
    sin() {

        return this.change(Math.sin(this.value));

    };
    /**
     * ### asin
     * 
     * ***
     * 
     * Метод вычисления арксинуса.
     * 
     * ***
     * @method
     * @public
    */
    asin() {
        
        return this.change(Math.asin(this.value));
        
    };
    /**
     * ### sinh
     * 
     * ***
     * 
     * Метод вычисления гипербалического синуса.
     * 
     * ***
     * @method
     * @public
    */
    sinh() {
        
        return this.change(Math.sinh(this.value));
        
    };
    /**
     * ### asinh
     * 
     * ***
     * 
     * Метод вычисления гипербалического арксинуса.
     * 
     * ***
     * @method
     * @public
    */
    asinh() {
        
        return this.change(Math.asinh(this.value));
        
    };

    /**
     * ### cos
     * 
     * 
     * ***
     *
     * Метод вычисления косинуса.
     *
     * ***
     * @method
     * @public
    */
    cos() {

        return this.change(Math.cos(this.value));

    };
    /**
     * ### acos
     * 
     * ***
     * 
     * Метод вычисления арккосинуса.
     * 
     * ***
     * @method
     * @public
    */
    acos() {
        
        return this.change(Math.acos(this.value));
        
    };
    /**
     * ### cosh
     * 
     * ***
     * 
     * Метод вычисления гипербалического косинуса.
     * 
     * ***
     * @method
     * @public
    */
    cosh() {
        
        return this.change(Math.cosh(this.value));
        
    };
    /**
     * ### acosh
     * 
     * ***
     * 
     * Метод вычисления гипербалического арккосинуса.
     * 
     * ***
     * @method
     * @public
    */
    acosh() {
        
        return this.change(Math.acosh(this.value));
        
    };

    /**
     * ### tan
     * 
     * 
     * ***
     *
     * Метод вычисления тангенса.
     *
     * ***
     * @method
     * @public
    */
    tan() {

        return this.change(Math.tan(this.value));

    };
    /**
     * ### atan
     * 
     * ***
     * 
     * Метод вычисления арктангенса.
     * 
     * ***
     * @method
     * @public
    */
    atan() {
        
        return this.change(Math.atan(this.value));
        
    };
    /**
     * ### tanh
     * 
     * ***
     * 
     * Метод вычисления гипербалического тангенса.
     * 
     * ***
     * @method
     * @public
    */
    tanh() {
        
        return this.change(Math.atanh(this.value));
        
    };
    /**
     * ### atan2
     * 
     * ***
     * 
     * Метод вычисления арктангенса по двум координатам.
     * 
     * ***
     * @arg {number} y `Y`
     * @arg {number} x `X`
     * @method
     * @public
    */
    atan2(y = this.value, x = 0) {
        
        return this.change(Math.atan2(y, x));
        
    };
    /**
     * ### atanh
     * 
     * ***
     * 
     * Метод вычисления гепербалического арктангенса.
     * 
     * ***
     * @method
     * @public
    */
    atanh() {
        
        return this.change(Math.atanh(this.value));
        
    };

    /**
     * ### cotan
     * 
     * ***
     * 
     * Метод вычисления котангенса.
     * 
     * ***
     * @method
     * @public
    */
    cotan() {
        
        return this.change(1 / this.tan().get());
        
    };
    /**
     * ### acotan
     * 
     * ***
     * 
     * Метод вычисления арккотангенса.
     * 
     * ***
     * @method
     * @public
    */
    acotan() {
        
        return this.change(Math.PI / 2 - this.atan().get());
        
    };

    /**
     * ### log
     * 
     * 
     * ***
     *
     * Метод вычисления логорифма.
     *
     * ***
     * @method
     * @public
    */
    log() {

        return this.change(Math.log(this.value));

    };
    /**
     * ### log2
     * 
     * ***
     * 
     * Метод вычисления логорифма по 2 базовому алгоритму.
     * 
     * ***
     * @method
     * @public
    */
    log2() {

        return this.change(Math.log2(this.value));
        
    };
    /**
     * ### log1p
     * 
     * ***
     * 
     * Метод вычисления логорифма от значения на 1 больше текущего.
     * 
     * ***
     * @method
     * @public
    */
    log1p() {
        
        return this.change(Math.log1p(this.value));
        
    };
    /**
     * ### log10
     * 
     * ***
     * 
     * Метод вычисления логорифма по 10 базовому алгоритму.
     * 
     * ***
     * @method
     * @public
    */
    log10() {
        
        return this.change(Math.log10(this.value));
        
    };

};

//#region YE

YNumber.appendModule(YNumber);

//#endregion

/**
 * @file number/class.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @license Apache-2.0
 * @copyright SYLS (Software Y Lib Solutions) 2023
*/