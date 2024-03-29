# SYLS

## **1.0.0 - _._._**
### **Изменения**
- #### **Новая система типизации**
    Типизация осуществялется за счёт общего типа, свойства которого описывают используемые функциями параметры.
- #### **Доступ к классам у экземпляров**
    Классы SYLS позволяют разработчикам получать доступ к себе через своих наследников через методы, сохраняя типизацию.
- #### **Использование иновационных аргументов и обишрная модификация звена B классовых цепей**
    Классовое звено B передалано таким образом, что работа с аргументами сводится к манипуляциям над объектом. Это позволяет работать методикой метадологического полотна.

    Огромным преимуществом станет гибкость класса аргументов. Этот класс позволит сортировать аргументы по типу, извлекать их из общего пула и передавать наследуемым классам. Такой подход:

    - Не перегружает логикой звено B
    - Упрощает читаемость кода
    - Позволяет совершать более сложные манипуляции над объектами

    Также в звене B всё также можно использовать старый стиль написания свободного кода. 
- #### **Индексация модулей**
    Отныне все модули будут иметь индексы. Они будут использоваться для опеределения модуля, документации и системы отлова ошибок.

    На момент написания данного пункта, некоторые модули стали получать свои индексы вручную, однако в будущем индексы будут определяться самой библиотекой SYLS.
- #### **расширение и обновления Y**
    Главным нововведением стало расширение полномочий `Y`, как базового модуля библиотеки. Модуль содержит перечисления ошибок (`YError`) и условных проверок (`YCond`).
- #### **Реструктуризация классового звена B**
    Звено было усовершенствовано для более удобного взаимодействия с ним. Таким образом, был уменьшен уровень вложенности кода, что позволяет в совокупности с `yClassifyProp` немедленно приступить к работе с логикой распределения аргументов.
- #### **Изменение блока импортов и новые обязательные включения**
    Блоки импорта лишились "страшной" конструкции динамических импортов, которые предназначались для дозагрузки конфигураторов и кластера ошибок. Теперь эти импорты осуществляются строго через импорты.

    Это также подразумевает, что конфигуратор и кластер ошибок являются обязательными в модулях.
### **Исправления**
- #### **Исправлены шаблоны классов**
    * Добавлены клонирования объектов-носителей аргументов.
- #### **Оптимизация**
    * Оптимизированы классовые звенья и конструкторы. Убраны избыточные присваивания и копирования объектов носителей аргументов.


***

## **0.6.0 - 04.07.2023**
### **Изменения**
- #### **Обновление файловой структуры**
    Название inner папки сменилось на .module. Также сделано исключение для package.json файла и теперь он лежит в корне папки модуля.
- #### **Модульность наследников и папка .heir**
    Все наследники модуля будут храниться в папке .heir. Внутри неё будут размещаться частные подмодули с наследниками исходного модуля. Дробление позволит избежать избыточного подлкючения тех классов и функций.
- #### **Тестируемость модулей**
    Были добавлены правильные тесты для модулей - они имеют название `module.test.js` вместо старого декоративного `test.mjs`.

***

## **0.5.0 - 03.07.2023**
### **Изменения**
- #### **Новая файловая структура**
    Новая файловая структура SYLS призвана решить несколько проблем: обозначить внутренние ресурсы модуля, которые он использует и отделить от него наследуемые модули. Теперь все внутренние файлы и подмодули, необходимые для его работы находятся в папке inner, а прочие модули находятся также на одном уровне с папкой inner.
- #### **Новые шаблоны syls (сниппеты)**
    Сниппеты в проекте используются не только для быстрой вставки кода, но и для обозначения шаблона всех его структур. Новая версия обновила данные шаблоны, сделав их более простыми, легкописными, срабатывающими только в определенных файлах, где это и ожидалось. Они были также модифицированы для новой файловой структуры. Методы и функции теперь можно заранее определить как статические и/или асинхронные. Также созданы отедльные сниппеты под параметры объектов и описания полей классов. Для журнала изменений было внедрено упрощенное указание разделов, пунктов.
### **Исправления**

***

## **0.4.0 - 23.06.2023**
### **Изменения**
- #### **YConfig включён в состав Y**
    Такое решение было принято для возможности применения конфигураторов во всех модулях без зависимости от `@syls/ject`.
### **Исправления**
- #### **Устранена критическая ошибка ранней инициализации Y**
    Устранена ошибка ранней инициализации из-за некорректных импортов внутри пакета Y, ссылавшегося на самого себя.
    
***

## **0.3.0 - 22.06.2023**
### **Изменения**
- #### **Осуществлен переход на Y**
    Теперь все модули используют базовый класс `Y` из `@syls/y`. 
- #### **Контекстуализация**
    Классы и функции используют внутренние контексты, для которых был выделен собственный класс. Также все классы, наследуемые от `YEntity` имеют его и используют для хранения системных данных.

    Контекстуализировать все классы не имеет смысла, поэтому выбор классов, необходимых для контекстуализации зависит от пользователей SYLS. Так, базовые модули, подобные `YString` не используют контекстуализацию.
- #### **YConfig**
    Базовый модуль из `YJect`, который позволяет настраивать конфигураторы и работать с ними. Для этого используются конфигураторы.
- #### **Улучшены параметризируемые классы**
    Из классов были убраны избыточные параметры. Были добавлены необходимые конструкторы для определения параметров. Из JSDoc удалены символы, которые были также избыточными. Теперь параметризировать класс можно через конструктор конечного звена.

***

## **0.2.0 - 21.06.2023**
### **Изменения**
- #### **Обязательный модуль Y**
    Модуль Y стал обязательным модулем.
- #### **Модуль arg и type стали подмодулями Y**
    Указанные модули были перенесены в область Y. Также они теперь не будут являться отдельными пакетами и будут подключаться вместе с Y.
- #### **Новый модуль connect**
    Данный модуль предназначен для создания сетевых соединений.
- #### **Новый модуль request**
    Модуль request является подмодулем модуля connect и повзоляет описывать и запоминать созданные запросом, также выполняя их.
### **Исправления**
- #### **Удалено избыточное указание типов в модулях**
    Ранее в модулях использовалось избыточное указание свойства types, которое теперь упразнено.

***

## **0.1.0 - 19.06.2023**
### **Изменения**
- #### **Базовый класс Y**
    Данный класс впредь станет базовым. От него свой базовый функционал будут получать все последующие базовые классы, подобные `YJect`. Это необходимо для определения принадлежности всех SYLS классов к классам библиотеки. Также не исключено, что данный класс будет иметь в будещем собственную функциональность.
- #### **Новый модуль - type**
    Модуль типов сильно отличается от привычных модулей SYLS. Основная задача этого модуля - работа с типами. Такая цель не требует от модуля экспорта сложных значений, функций или классов. Модуль также является базовым и используется большинством модулей SYLS по-умолчанию, так как применяется при определении типов аргументов классовых звений. Однако, это не является проблемой, так как сам модуль весьма легковесный.
- #### **Улучшение сниппетов**
    Новые сниппеты учитывают версии методов, функций, классов, значений, объектов. Они также используют синтаксисы новых модулей, таких как `type`. Более упрошён ввод сниппетов оформления `changelog`. С помощью сниппетов теперь можно создавать файлы `package.json`. Файл автоматически возьмёт имя своей директории и также после этого будет размещать всё необходимое для стандартного SYLS модуля.

***

## **0.0.0 - 01.06.2023**
### **Изменения**
- #### **OS, File и Path стали пакетными модулями**
    Это позволяет испортировать их в проект и использовать в любом коде.
    
***