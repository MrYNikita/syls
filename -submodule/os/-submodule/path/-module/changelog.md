# YPath

## **1.0.0 - 28.09.2023**
### **Изменения**
- #### **Новый алгоритм работы функции get**
    Новый алгоритм теперь не перегружен излишней логикой и выполняет исключительно поставленную перед ним задачу, связанную с поиском единственного пути, наиболее соответствующему переданному фрагменту. Алгоритм не потребляет избыточного количества памяти, работает более быстро, за счёт устранения избыточных проверок и циклов.
- #### **Новый класс YPath**
    Класс был переделан под `S` вариацию. Убраны звения `SDMF`. Вся логика распределена в звене `Y`. Добавлены новейшие возможности `SYLS`. Переделаны некоторые методы и добавлены новые.
- #### **Начало работы с относительными путями**
    Относительные пути можно получить с помощью соответсвующей функции `getTo`. Проверить любой фрагмент или путь можно проверить на относительность. Прочие функции работают с относительными путями. По относительному пути также можно получить необходимый путь.

***