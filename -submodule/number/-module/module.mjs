//#region YI

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

/** @type {import('crypto')} */
let crypto = null;

await import('crypto')

    .then(m => crypto = m)
    .catch(e => e);

//#endregion
//#region YT

/** ### numberT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `number`
 *
 * Основной параметр модуля `number`.
 *
 * @typedef numberT
 * @prop {any} _
 *
*/

//#endregion
//#region YV



//#endregion

//#region getRandom

/** ### numberTFGetRandom
 * - Тип `TF`
 * - Модуль `number`
 * ***
 *
 * Результирующие параметры функции `getRandom`.
 *
 * @typedef {numberTFUGetRandom&numberT} numberTFGetRandom
 *
*/
/** ### numberTFUGetRandom
 * - Тип `TFU`
 * - Модуль `number`
 *
 * Уникальные параметры функции `getRandom`.
 *
 * @typedef numberTFUGetRandom
 * @prop {number} min
 * @prop {number} max
 * @prop {number} count
 * @prop {boolean} frac
 * @prop {boolean} unique
*/

/** @arg {numberTFGetRandom} t */
function getRandomDeceit(t) {

    try {

        return getRandomVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {numberTFGetRandom} t */
function getRandomVerify(t) {

    const {



    } = t;

    return getRandomHandle(t);

};
/** @arg {numberTFGetRandom} t */
function getRandomHandle(t) {

    const {



    } = t;

    return getRandomComply(t);

};
/** @arg {numberTFGetRandom} t */
function getRandomComply(t) {

    const {

        min,
        max,
        frac,
        count,
        unique,

    } = t;

    if (count && unique && !frac) {

        const results = [];
        const sequence = numberGetSequence(max - min, min);

        while (results.length !== count) {

            results.push(sequence.splice(numberGetRandomReal(0, sequence.length - 1), 1)[0]);

        };

        return results;

    } else if (count && unique && frac) {

        return new Array(count).fill().map(_ => numberGetRandomFrac(min, max)).map((e, i, a) => {

            while (true) {

                const i1 = a.indexOf(e);

                if (i1 !== i && i1 !== -1) {

                    e = numberGetRandomFrac(min, max);

                } else {

                    return e;

                };

            };

        });

    } else if (count) {

        return Array(count).fill(min).map(_ => getRandomComply({ min, max, frac }));

    } else {

        let result = min;

        const range = max - min;

        if (crypto) {

            if (frac) {

                const bytes = crypto.randomBytes(8);

                result = (bytes.readUInt32BE(0) + bytes.readUInt32BE(4) * 2 ** 32) / (2 ** 53) * range + min;

            } else {

                const bytesCount = Math.ceil(Math.log2(range + 1) / 8);

                let randomBytes, randomValue;

                do {

                    randomBytes = crypto.randomBytes(bytesCount);
                    randomValue = randomBytes.readUIntBE(0, bytesCount);

                } while (randomValue > (2 ** (bytesCount * 8)) - (2 ** (bytesCount * 8)) % (range + 1));

                result = (randomValue % (range + 1)) + min;
            }

        } else {

            result = (!frac) ? Math.floor(min + Math.random() * (range + 1)) : min + Math.random() * range;

            if (frac && result > max) {

                result = max;

            };

        };

        return result;

    };

};

/**
 * ### numberGetRandomReal
 * - Цепочка `DVHCa`
 * - Модуль `number`
 * ***
 *
 * Функция получения случайного целого числа в указанном диапазоне.
 *
 * ***
 * @arg {number} min `Минимум`
 * @arg {number} max `Максиуму`
 * @returns {number}
*/
export function numberGetRandomReal(min, max) {

    return getRandomDeceit({ min, max });

};
/**
 * ### numberGetRandomFrac
 * - Цепочка `DVHCa`
 * - Модуль `number`
 * ***
 *
 * Функция для получения случайного дробного числа в указанном диапазоне.
 *
 * ***
 * @arg {number} min `Минимум`
 * @arg {number} max `Максимум`
 * @returns {number}
*/
export function numberGetRandomFrac(min, max) {

    return getRandomDeceit({ min, max, frac: true, });

};
/**
 * ### numberGetRandomRealMany
 * - Цепочка `DVHCa`
 * - Модуль `number`
 * ***
 *
 * Функция для получения массива случайных чисел в указанном диапазоне.
 *
 * ***
 * @arg {number} min `Минимум`
 * @arg {number} max `Максимум`
 * @arg {number} count `Количество`
 * @arg {boolean?} unique `Уникальность`
*/
export function numberGetRandomRealMany(count, min, max, unique) {

    return getRandomDeceit({ count, unique, min, max, });

};
/**
 * ### numberGetRandomFracMany
 * - Цепочка `DVHCa`
 * - Модуль `number`
 * ***
 *
 * Функция для получения массива случайных чисел в указанном диапазоне.
 *
 * ***
 * @arg {number} min `Минимум`
 * @arg {number} max `Максимум`
 * @arg {number} count `Количество`
 * @arg {boolean?} unique `Уникальность`
*/
export function numberGetRandomFracMany(count, min, max, unique) {

    return getRandomDeceit({ count, unique, min, max, });

};

//#endregion
//#region getSequence

/** ### numberTFGetSequence
 * - Тип `TF`
 * - Версия `0.0.0`
 * - Модуль `number`
 * ***
 *
 * Результирующие параметры функции `getSequence`.
 *
 * @typedef {numberTFUGetSequence&numberT} numberTFGetSequence
 *
*/
/** ### numberTFUGetSequence
 * - Тип `TFU`
 * - Версия `0.0.0`
 * - Модуль `number`
 *
 * Уникальные параметры функции `getSequence`.
 *
 * @typedef numberTFUGetSequence
 * @prop {number} step
 * @prop {number} begin
 * @prop {number} count
 * @prop {(function(number):number)[]} handlers
*/

/** @arg {numberTFGetSequence} t */
function getSequenceDeceit(t) {

    try {

        return getSequenceVerify(t);

    } catch (e) {

        if (config?.strict) {

            throw e;

        };

        return undefined;

    } finally {



    };

};
/** @arg {numberTFGetSequence} t */
function getSequenceVerify(t) {

    const {



    } = t;

    return getSequenceHandle(t);

};
/** @arg {numberTFGetSequence} t */
function getSequenceHandle(t) {

    const {



    } = t;

    return getSequenceComply(t);

};
/** @arg {numberTFGetSequence} t */
function getSequenceComply(t) {

    const {

        step,
        begin,
        count,
        handlers,

    } = t;

    return new Array(count).fill(0).map((e, i) => {

        e = begin + i * step;

        handlers.forEach(h => {

            e = h(e);

        });

        return e;

    });

};

/**
 * ### numberGetSequence
 * - Версия `0.0.1`
 * - Цепочка `DVHCa`
 * - Модуль `number`
 * ***
 *
 * Функция для получения последовательности чисел от указанного начального значения с указанным правилом.
 *
 * ***
 * @arg {number} step `Шаг`
 * - Дефолт `1`
 * @arg {number} count `Счётчик`
 * - Дефолт `1`
 * @arg {number} begin `Начальное значение`
 * - Дефолт `0`
 * @arg {...function(number):number} handlers `Обработчики`
*/
export function numberGetSequence(count = 1, begin = 0, step = 1, ...handlers) {

    return getSequenceDeceit({ count, begin, step, handlers });

};

//#endregion

/**
 * @file module.mjs
 * @author Yakhin Nikita Artemovich <mr.y.nikita@gmail.com>
 * @copyright Yakhin Nikita Artemovich 2023
*/