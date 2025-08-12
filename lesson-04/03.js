/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function includesElement(array,element)
 {  
    
    for(let i = 0;i<array.length;i++)
    {
        if(array[i]===element)
        return  true;
    
    }
    return false
 }

function findCommonElements(array,array2) 
{
    let a =[]
    if(array.length===0 || array2.length===0)
    {
        return a
    }else
    {
        for(let i =0;i<array.length;i++)
    {
        if(includesElement(array2,array[i]))
        {
            a.push(array[i])
        }
        
    }
    }
    return a
}
console.log(findCommonElements([0,6,5,4,6,7,9,99,9,0],[1,2,3,9]))