# Understanding Call Stack and Heap Memory in JS.

1. JavaScript abstracts a lot of things for us(para nós), behind the scenes, JS has to store(tem que armazenar) and write information and needs to keep(manter) track(acompanhar) of what will(o que irá) happen(acontecer) line by line. To be able(Para ser capaz) to do these things(de fazer essas coisas), JS engine has these little weapons(pequenas armas): call stack and memory heap.

### JavaScript's memory model

2. First of all(Em primeiro lugar), you must understand what happens when we declare a variable and initialize it. In the following example, I declared a number1 variable with the value of 1. Right after this(logo depois disso), I declared that the number2 was equaled to number1 and I also changed number1's value.

What do you think that will be printed to number2?

```js
let number1 = 1;
let number2 = number1;

number1 = number1 + 1;

console.log(number2);
```

> Will not affect. But why? <br> 

- When number1 was created, JS created a unique identifier to this and allocated an adress in memory (eg. A001), it also stored(armazenada/o) the value at the allocated adress.

- Since I decided that number2 was equaled to number1, it means that number2 is equaled to that adress memory: A001, and not equal to the number1's value, this definition is very important.

- When I changed the number1's value, JS allocated a new adress in its memory, and stored the value 2 on A002 adress, it happened beacause primitive data types (string, number, bigint, boolean, undefined, and symbol) ind JS are immutable!

The call stack does(faz) what its name says: stack the calls.It's here that the primitive data are stored.

So, call stack its about organizing what functionality should be called first.


### Memory heap

What about the memory heap?(e quanto ao memory heap?)

Oh, the memory heap is where the non-primitive are stored. The big difference between call stack and memory heap is that the heap can store unordered data(dado não ordenado) that grows(que cresce) dynamically - like array and object.

#### Note about const and non-primitive data(Nota sobre dados constantes e não primitivos)

At this point, you may notice(você pode notar) that we can't reassign values(não podemos reatribuir) to const variable because the const keyword doesn't allow us(nos) to change - not the value - the memory adress from a variable(não o valor, mas sim o endereço de memória da variável). But why we can push elements on a const array or add new propeties on an object?

As I wrote above (Como eu escrevi acima), the memory heap has the responsibility to allocate the non-primitive data type's value, so when we created a variable as an array, the JS creates a unique identifier, allocates an adress memory on the call stack, and (here's the magic) stores a value of a memory adress on the heap:

|Identifier|Call Stack| heap|
|----------|----------|-----|
|Variable|Adresss-Value|Adress|
|number1| A003 - 2   | 
|number2| A001 - 1   |
|number3| A004 - B001|B001 - [ ]|

And when we push values into the names array, it will not change the adress memory, instead(em vez de), it will change the value on the heap( vai mudar o valor na memory heap) - the same occurs(o mesmo ocorre) with the object, it has the same behavior as we saw above(como vimos acima).