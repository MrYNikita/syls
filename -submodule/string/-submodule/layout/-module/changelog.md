# YLayout

## **0.6.0 - 27.06.2023**
### **Изменения**
- #### **Передача аргументов в set**
    Более простой вариант внесения новых элементов в разметку позволяет передавать не экземпляры класса YElement, а просто объекты, подобные объекту разметки. Далее они будут обработаны как те самые элементы.
- #### **Использование цвета переднего плана во flow**
    Теперь flow также перенимает и такие параметры, как цвет переднего плана.
### **Исправления**
- #### **Применение основного ansi**
    Теперь при указании основного ansi элемента, тот будет использоваться и в начале строки, а не только для непотоковых элементов.

***

## **0.5.0 - 14.06.2023**
### **Изменения**
- #### **YElement**
    Более простые в использовании структуры данных, которые позволяют описывать элемент разметки, определяя строчку со значением добавления и ansi вставкой.
- #### **Поточные свойства**
    Благодаря поточным свойствам открывается возможность создавать и размещать элементы, способные перенимать свойства от последних поточных элементов. Такие элементы имеют особое свойство `flow`, которое говорит о том, что элемент является поточным. Каждый элемент при размещении наследует свойства идущего до него поточного элемента в том случае, если у него нет этих свойств (null).
- #### **Ориентировочная ANSI вставка**
    При создании эксземпляра шаблона можно также указать ориентировочную ansi вставку, которая будет являться основой для всех последюущих внедряемых элементов. Так, если вы поежлаете добавить вставку, изменяющую только цвет текста, но при этом вы не желаете менять общий фон строки, то используя данный параметр, вы сумеете сохранить фон, изменив только цвет фрагмента, при этом не прибегая к созданию постоянных вставок в разных кусках вашей разметки. Это также позволяет определить общие параметры для вашей разметки, такие как общий цвет фона или общий цвет текста.
- #### **Вынесение в экспорт**
    Разметки можно создавать как отдельные объекты, которые можно применять к строкам (`YString`) или обычным строкам.
     
### **Исправления**
- #### **Устранена избыточность**
    Старый вариант включал в себя внедрение таких особенностей как YLine и YInsert, что усложняло структуру разметки, делая её менее отзывчивой. Все эти элементы, кроме YInsert ставшего YElement, были упразнены.
- #### **Элементы разметки более не проинформированы об своей позции**
    Ранее элементы разметки хранили в себе данные о том, где они должны быть размещены, что приводило к избыточности информации. На данный момент необходимости хранить такие сведения нет. Новые элементы (YElement) разметки не хранят таких данных.
- #### **Простейшая структура разметки**
    Представлена двумерным массивом элементов, где первый уровень вложенности отвечает за линию строки, а второй - за позицию в ней.
    
***

## **0.4.0 - 14.05.2023**
### **Изменения**
- #### **Добавлен метод getLine**
    Метод позволяет получить линию по её индексу. Если линии не существует, то в качестве результата вернется null.
- #### **Добавлен метод regulate**
    Данный метод позволяет регулировать стурктуру разметки. Регулирование гарантирует, что разметка окажется минималистичной и компактной.
- #### **Добавлены методы overlay и merge**
    Каждый из данных методов создан для объединения текущей разметки с любой другой разметкой, но делает это по-разному:
   
    - Метод `merge` позволяет объединить две разметки таким образом, что в текущую разметку будут добавляться только те вставки, чьи позиции не совпадают со вставками текущей разметки.
    - Метод `overlay` же позволяет объединить две разметки так, что вставки новой разметки будут накладываться на исходную разметку.
    
***

## **0.3.0 - 12.05.2023**
### **Изменения**
- #### **Упразнены YGroup и YItem**
    На данный момент в них нет необходимости. Вероятно, они будут заменены на вставки. Цветовая группа также упразнена, но данный класс возьмёт на себя её обязательства.
- #### **Использование YInsert вместо YItem**
    Новый класс YInsert станет решением вместо множества YItem. Вставки смогут выполнять все те же задачи, однако при это каждая отдельная вставка может содержать в себе информацию и о цвете, и о теге, и о подчеркивании, и о других особенностях. Это позволяет не создавать множество запутанных групп и не выделять для этого дополнительую память.
- #### **Новый принцип работы линий и использование YLine**
    YLine - это класс линий. На данный момент они предназначены исключительно для хранения.
    
***