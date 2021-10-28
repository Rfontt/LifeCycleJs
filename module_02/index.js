9999999999999999999 // 16 
// 10000000000000000000

true + 2 // 3

'21' + true // '21true'

'21' - true // 20

'21' - - 1 // 22

3 > 2 > 1 // false

3 > 2 >= 1 // true

"B" + "a" + + "a" + "a" // 'BaNaNa'

'1' == 1 // Vai tentar converter o valor com o ==
'1' == 1 // Usando o === ele não tenta converter o valor

//--------------------//

console.assert(String(123) === '123', "explicit convertion to string");
console.assert(123 + '' === '123', "explict convertion to string");

console.assert('hello' || 123 === 'hello', "|| return the first if both are true");
console.assert('hello' && 123 === 123, "|| return the last if both are true");
// ----
const obj = {
    name: 'Rfontt',
    age: 19,
    // string: Se não for primitivo, chama o valueOf
    toString() {
        return `Name: ${this.name}, Age: ${this.age}`
    },
    // number: Se não for primitivo, chama o toString
    valueOf() {
        return { hey:'dude' };
    },

    // ele tem prioridade
    [Symbol.toPrimitive](coercionType) {
        console.log('trying to convert to', coercionType);
        const types = {
            string: JSON.stringify(this),
            number: '0007'
        }

        return types[coercionType] || types.string
    }
}

// console.log('toString', String(obj));
// // Vai retorar Nan, pois o toString retornou a string
// console.log('valueOf', Number(obj));

// depois de adicionar o primitive 

// console.log('toString', String(obj));
// // Vai retorar Nan, pois o toString retornou a string
// console.log('valueOf', Number(obj));
// // chama a conversão default
// console.log('valueOf', new Date(obj));

console.assert(obj + 0 === '{"name":"Rfontt","age":19}0');
// console.log('!!obj is true?', !!obj)
console.assert(!!obj);

// console.log('string.concat', 'Ae'.concat(obj));
console.assert('Ae'.concat(obj) === 'Ae{"name":"Rfontt","age":19}');
