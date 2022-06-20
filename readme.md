# Fundamentos JavaScript

## Array
```sh
const arr = [1, 2, 3, 4, 5]
```

```sh
arr.push(6) // [1, 2, 3, 4, 5, 6]
```

### Adicionando +1 para todos os elementos do array | cria um novo array
```sh
 const map = arr.map(x => x + 1); // [2, 3, 4, 5, 6]
```

### Filtrando elementos impares do array | cria um novo array
```sh
 const filter = arr.filter(x => x % 2 == 1) // [1, 3, 5]
```

### Somando os elementos do array | cria um novo array
```sh
 const reduce = arr.reduce((acc, x) => acc + x) // 6
```

### Flat e FlatMap
```sh
 const flat1 = arr.map(item => [item, item * 100]); //[[1, 100], [2, 200], [3, 300]]
 const flat2 = flat1.flat() // [1, 100, 2, 200, 3, 300]
 console.log(flat2)
```
```sh
 const flatmap = arr.flatMap(item => [item, item * 100]) 
//flatMap retira os colchetes que estão dentros do array 
//[1, 100, 2, 200, 3, 300, 4, 400, 5, 500, 6, 600]
```

### forEach possui um retorno undefined, então para modificar o array é necessário chamar outra função
```sh
 const teste = arr.forEach(item => console.log(item * 2));
 console.log(teste) // undefined
 arr.forEach(item => console.log(item * 2)); // como o console.log() esta dentro irá retornar o array multiplicado por 2
```

//Outro exemplo de forEach, porém modifica o array original
```sh
 const numbers = [65, 44, 12, 4];
 numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}

console.log(numbers) [ 650, 440, 120, 40 ]
```
```sh
arr.pop() // remove o ultimo elemento de um array e retorna ele
```
```sh
arr.includes(4) //true
```
```sh
const find = arr.find(element => element > 3)
console.log(find)
```
```sh
const reverse = arr.reverse()
console.log(reverse) // [ 6, 5, 4, 3, 2, 1 ]
```

## Objects | Exemplo de Objects na pasta Object

## Strings | Exemplo de Objects na pasta String

## new MAP e new Set



Objetos Set são coleções de valores nas quais é possível iterar os elementos em ordem de inserção. Um valor no Set pode ocorrer apenas uma vez; ele é único na coleção do Set.

```sh
const meuSet = new Set();

meuSet.add(1); // meuSet [1]
meuSet.add(5); // meuSet [1, 5]
meuSet.add(5); // 5 já foi adicionando, portanto, meuSet [1, 5]
console.log(meuSet)
```
