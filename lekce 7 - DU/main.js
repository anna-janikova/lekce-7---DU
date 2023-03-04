// tady je místo pro náš program



const salary = (wage, hours, days) => {
    return wage*hours*days 
} 
const taxed = (pay,taxRate) => {
    return Math.round(pay -(pay*(taxRate/100)))
}
console.log(taxed(salary(150,8,16),15))


const calculate = (number1, operation, number2) => {
    if (operation === "+") {return number1 + number2}
    if (operation === "-") {return number1 - number2}
    if (operation === "*") {return number1 * number2}
    if (operation === "/") {return number1 / number2}
}

