/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

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

function findUniqueElements(array) 
{
    let a =[]
    for(let i =0;i<array.length;i++)
    {
        if(!includesElement(a,array[i]))
        {
            a.push(array[i])
        }
        
    }
    return a
}
console.log(findUniqueElements([1,2,3,4,6,7,9,99,9,1]))