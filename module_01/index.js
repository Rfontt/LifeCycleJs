const { deepStrictEqual } = require('assert');

let counter1 = 0;
let counter2 = counter1;

counter1++;

// counter2 = 0 | counter1 = 1;

const item = { counter: 0 };
const item2 = item;

item2.counter++;

// item.counter = { counter: 1 } && item2 = { counter: 1 };

// O tipo primitivo gera uma cópia em memória

deepStrictEqual(counter1, 1);
deepStrictEqual(counter2, 0);

// o tipo de refência, copia o endereçi de memória
// E aponta para o mesmo lugar

deepStrictEqual(item, { counter: 1});
deepStrictEqual(item2, { counter: 1});