// Poorly formatted TypeScript code
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

function calculateTotalPrice(item: string, price: number) {
  return item === 'Apple'
    ? price * 1.1
    : item === 'Banana'
    ? price * 0.9
    : item === 'Cherry'
    ? price * 1.2
    : item === 'Date'
    ? price * 1.3
    : price
}

interface Person {
  name: string
  age: number
  occupation: string
}

const person: Person = { name: 'John', age: 25, occupation: 'Engineer' }
console.log(person)
