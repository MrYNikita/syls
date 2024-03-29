# String

## **1.0.0 - 15.11.2023**

***

## **1.0.0 - 11.07.2023**
### **Изменения**
- #### **YStat и getStat**
    С помощью метода `getStat` для `YString` можно получать информацию о тексте.
    
    Собранные данные включают разные сведения:  
    - Частота встречающихся символов.
    - Количество обнаруженных словоформ. (На данный момент к словоформам относятся в том числе и несвязные слова).

    Получение статистики через вызов метода приводит к созданию экземпляра класса `YStat`, который способен произвести необходимые рассчёты и получить нужную информацию.
- #### **YVis и getVis**
    Старый метод `getVis` был переработан и теперь открывает доступ к экземпляру `YVis`.

    Данные экземпляры привязаны к родным строкам и хранят информацию о позиции обозрения и размере области видимости строки. С их помощью можно удобным образом получить нужный фрагмент строки. Это полезно в тех случаях, когда строка по размерам превосходит экран и не вмещается целиком в нужную область.

    Ранее данные об обзоре хранила сама строка, но теперь они хранятся в отдельном принадлежном к строке объекте. 
- #### **Порядок аргументов**
    Теперь в аргументах большинства строковых функций роль играет не порядок аргументов, но порядок типов.
- #### **getIndex**
    Функция позволяет получить индекс по позиции. С помощью данной функции обеспечена работа многих новых или обновленных ранее функций, которые перешли на использование в качесте аргументов позиций.
- #### **getDimension**
    Функция получения размерности текста, переданного в качестве аргумента. Вовзращает массив чисел, каждое из которых обозначает строку и количество символов в ней.
- #### **row & col**
    `Row` и `Col` - новые обозначения в контексте строк, вместо `y` и `x`. С их помощью будут обозначаться рагументы для более сложных функций, работающих с текстом, как с набором строк.

    Данная модификация работает при указании в качестве аргумента массив из двух чисел, где первое число обозначает строку, а второе - столбец.

    Также работает старый вариант указания индексов.
- #### **replaceMany**
    Данная функция призвана упростить множественную замену символов в строке.
- #### **recode**
    Функция для конвертации кодов из одной локали в другую.
### **Исправления**
- #### **Алгоритм paste**
    Данный алгоритм был преобразован.

    1. Осуществлена оптимизация за счёт перехода на циклы for.
    2. Убраны избыточные циклы.
    3. Изменён порядок добавления префиксов и постфиксов - теперь они идут перед заменой специальных вставок, тем самым позволяя использовать их в префиксе и постфиксе.


***

## **0.16.0 - 27.06.2023**
### **Изменения**
- #### **pasteSymbol**
    Данная функция позволяет вставлять в строку по указанному индексу текстовый символ. Например, при указании аргументом tiret, вы получить вставленный символ тире. При неуказанном индексе значение вставится в конец строки.
- #### **paste и вставка символов**
    Для того, чтобы создавать огромные строки из множества символов и не использовать регуляроно метод pasteSymbol можно прибегнуть к использованию в методе paste специальных вставок. Как это работает? Предположим, что нам необходимо вставить тире в наш текст. Чтобы не делать это в два подхода:

    ```js
    string
        .paste('<текст> ')
        .pasteSymbol('tiret')
        .paste('<продолжение>');
    ```

    Можно использовать вставки:

    ```js
    string.paste('<текст> _tiret <продолжение>');
    ```

    Допускается, что ваша строка будет соприкосаться с вставкой:

    ```js
    string.paste('_tabКакой же сегодня хороший день!');
    ```

    Список всех вставок можно посмотреть в конфигураторе строк или при вызове функции `pasteSymbol`. Из-за их количества здесь они приведены не будут.

### **Исправления**

***

## **0.15.0 - 20.06.2023**
### **Изменения**
- #### **formatUrl**
    Новая функция форматирования, которая позволяет получить на основе некоторых параметров url адрес, пригодный для дальнейшего использования.

***

## **0.14.0 - 07.06.2023**
### **Изменения**
- #### **Улучшенная точность шаблонов**
    Теперь шаблоны работают гораздо проще, в сравнении с предыдущими вариантами и, что важно, более надежно. Значения шаблонов маркируются, чтобы в будущем алгоритм находил нужные к замене значения с высокой точностью - это устраняет давние ошибки, связанные с тем, что шаблон мог заменять добавленные им же символы.
- #### **Новые правила обозначения шаблонов**
    Согласно новым правилам обозначения, шаблон может размечать только слова и числа. При этом за слово, шаблон принимает любые буквенные и числовые строки. `Чтобы слово было распознано, как вставка` необходимо обрамить его квадратными скобками. При этом слово может быть дано на любом языке. Пример для шаблона с названием _test_:
    
    ```js
    '[Name] пошёл на работу. [Name] также планирует заглянуть в магазин.'
    ```

    Для данного примера `Name` является полем вставки. Указав `Name` как значение, оно будет заменено во всех совпадениях:

    ```js
    // В шаблонах
    template.apply('Name/Томас');
    // В YString
    string.pasteTemplate('test', 'Name/Томас');
    ```

    Если же вы хотите задать последовательный шаблон из одноразовых вставок, то используйте `/.`:

    ```js
    '[Name] пошёл на работу. /.'
    ```
- #### **Удобство применения**
    Вы могли заметить, что в новой версии шаблонов, для разового применения шаблона теперь не нужно создавать массив с параметрами. Именно это делает новое применение более удобным для тех случаев, когда вам необходимо разово применить шаблон и забыть о нём.
    
***

## **0.13.0 - 11.05.2023**
### **Изменения**
 - #### **Метод getColor**
    Данный метод возвращает оболочку, позволяющую влиять на цветовую разметку текста. Больше подробностей об изменении можно узнать в изменениях цветовых групп.
***

## **0.12.0 - 07.05.2023**
### **Изменения**
 - #### **Truncate**
    Данная функция позволяет усечь текст, по длине и ширине или через позиционирование.
    
    Усечение через позиционирование позволяет указать координату размещение текста и 4 координаты области, где он может быть размещен. Если символы текста будут выходить за пределы области, то они не будут отрисовываться.
### **Исправления**
 - #### **Позиционирование курсора после вставки**
    Теперь курсор по x занимает позицию равную длине строки. Это позволило исправить ошибки при перекраске строк.
*** 