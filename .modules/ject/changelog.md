# YJect

## **0.7.0 - 23.06.2023**
### **Изменения**
- #### **freeze и seal**
    Методы `freeze` и `seal` позволяют запечатать/заморозить объект или вернуть его в исходное состояние.
    
    В дополнение к данным методам также идут методы `isFreeze` и `isSeal` для проверки значений на заморозку и запечатанность соотвественно.
- #### **getPrototype**
    Метод, который позволит получить прототип оборачиваемого значения.
### **Исправления**

***

## **0.6.0 - 19.06.2023**
### **Изменения**
- #### **Статический метод create**
    Метод позволяет создать множество экземпляров за один раз, без необходимости создавать их через оператор new.
- #### **Внутреннее хранилище stock**
    В конфигураторе был добавлен новый режим - режим хранения. При активном значении, режим указывает классу, что ему также необходимо хранить все созданные им экземпляры в своём статическом свойстве stock.

***

## **0.5.0 - 15.06.2023**
 
### **Исправления**
- #### **Клонирование ссылочных значений для adoptDefault**
    Ранее при необходимости указать в конфигураторе в качестве значения по умолчанию массива или объекта, все итоговые экземпляры перенимали одно и то же самое значение. Теперь это исправлено и ссылочные значения будут клонироваться.
***

## **0.4.0 - 11.05.2023**
### **Изменения**
- #### **Возвратные оболочки**
    Данные оболочки - это объекты, которые ссылаются на оригинал, как на прототип, при этом содержа в себе метод, способный вернуть исходный объект, от которого была создана оболочка.

    Для чего это нужно? С помощью описывать методологическое полотно, не прерывая его контекст, но переключаясь между интересующими вас свойствами объекта, от которого брало своё начало полотно. С помощью оболочки можно перейти к нужно свойству-объекту или вернуться обратно.
- #### **Добавлен метод getWrapper**
    Данный метод позволит создавать те самые возвратные оболочки, указанные аргументом для данного метода. На основе данного метода можно создать свои собственные методы, вовзращающие угодные для нас оболочки, либо явным образом передавать объекты в качестве аргументов.
- #### **Оболочкам добавлен метод getOver**
    Данный метод будет относиться к оберткам и он позволит каждой обертке вернуться к предыдущему элементу.
***

## **0.3.0 - 08.05.2023**
### **Изменения**
- #### **Псевдонимы**
    Теперь все экземпляры `YJect` обладают возможностью через свои конфигураторы задавать псевдонимы для исходных свойств. Такие псевдонимы позволяют переименовывать свойства объектов в более подходящие им по смыслу свойства. С их помощью можно обращаться к свойствам объекта или назначать новые свойства через другие ключи.