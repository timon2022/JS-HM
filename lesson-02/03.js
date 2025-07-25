/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

// тестовое значение, можно изменять
let grade
// your code
//
while(1)
{
    const score =  prompt("Укажи свой балл!")
if(  score<0 || score>100 || isNaN(score) || score==='' )
{
//alert("Ты неправильно указал свой балл. Это должно быть чило в диапазоне от 0 до 100")
continue
}
else if (score >= 0 && score <= 49)
{
    grade='F'
    break
    
}    
else if (score >= 50 && score <= 69)
    {   
        grade='D'  
        break  
    }
else if(score >= 70 && score <= 79)
{
    grade = 'C'
    break
}
else if(score >= 80 && score <= 89)
{
    grade = 'B'
    break
}
else if(score >= 90 && score <=100)
{
    grade = 'A'
    break
}
}
//alert(`Твоя оценка: ${grade}`)