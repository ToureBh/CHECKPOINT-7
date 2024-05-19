# CHECKPOINT 7

## 1. ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?


JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web. Como lenguaje de scripting del lado del servidor, se trata de una de las principales tecnologías de la World Wide Web.


Anteriormente, las páginas web eran estáticas, similares a las páginas de un libro. Una página estática mostraba principalmente información en un diseño fijo y no todo aquello que esperamos de un sitio web moderno. JavaScript surgió como una tecnología del lado del navegador para hacer que las aplicaciones web fueran más dinámicas. Así los navegadores eran capaces de responder a la interacción de los usuarios y cambiar la distribución del contenido en la página web.
A medida que el lenguaje evolucionó, los desarrolladores de JavaScript establecieron bibliotecas, marcos y prácticas de programación y comenzaron a utilizarlo fuera de los navegadores web. En la actualidad, se puede utilizar JavaScript para el desarrollo tanto del lado del cliente como del lado del servidor. 


Lo que hace de java particular como lenguaje de programación frente al resto de ellos es que es el único que puede ser comprendido por un buscador web. Hace más de 20 años algunos desarrolladores decidieron que necesitaban un lenguaje de programación que el buscador pudiera entender, con este fin fue creado Javascript, mientras que todos los demas lenguajes como Ruby o Python necesitan estar en un servidor. Y si estamos construyendo una página web el servidor tiene que llevar a cabo todos esos procesos y presentar el código de una forma que pueda ser interpretada por el buscador.

Ya que Javascript fue creado para ser el único lenguaje que pudiera ser entendido por un servidor podemos simplemente escribir codigo en Java Script abrirlo con el buscador que lo interpretará y después ejecutar el programa. 

## 2. ¿Cuáles son algunos tipos de datos JS?
En javaScript podemos almacenar un valor de cualquier tipo dentro de una variable. Los tipos de datos es la forma de categorizar esas variables. 

Cuando tenemos una variable determinada, el tipo de dato que encapsula es la forma en que javascript la categoriza. 


Imaginemos que tenemos una frase, es decir, una cadena de texto almacenada en una variable, a esta podemos aplicare ciertas funciones como poner todas las letras en mayúscula. Sin embargo, si en esa variable tenemos un número e intentamos lo mismo, el programa nos dará un error, ya que las funciones que podemos realizar dependen del tipo de dato que haya en nuestra variable.

Existen muchos tipos de datos pero los más importantes son los siguientes:

* Number:

El tipo Number representa tanto números enteros como de punto flotante.
Hay muchas operaciones para números. Por ejemplo, multiplicación *, división /, suma +, resta -, y demás.

Además de los números comunes, existen los llamados “valores numéricos especiales” que también pertenecen a este tipo de dato.

En otros lenguajes de programación necesitamos especificar el tipo de dato a la hora de declarar una variable. Con un número tendríamos que hacerlo de a siguiente manera, 

`var age : Number = 12;`

pero Javascript se salta ese paso ya que reconoce que este valor es un number, y por eso podemos ahorrarnos este paso y hacerlo de la siguiente manera:

```
let n = 123;
n = 12.345;
```


* Strings o cadenas de texto:

Un string en JavaScript es una cadena de caracteres y debe colocarse entre comillas, hay 3 tipos: simples, dobles e invertidas o backticks.

```javascript
let str = "Hola";
let str2 = 'Las comillas simples también están bien';
```

Las comillas dobles y simples son comillas “sencillas” (es decir, funcionan igual). No hay diferencia entre ellas en JavaScript.
Los backticks son comillas de “funcionalidad extendida”. Nos permiten incrustar variables y expresiones en una cadena de caracteres encerrándolas en ${...}, por ejemplo:

```javascript
let name = "John";


// incrustar una variable
alert( `Hola, ${name}!` ); // Hola, John!


// incrustar una expresión
alert( `el resultado es ${1 + 2}` ); //el resultado es 3
```

La expresión dentro de `${...}` se evalúa y el resultado pasa a formar parte de la cadena. Podemos poner cualquier cosa ahí dentro: una variable como name, una expresión aritmética como 1 + 2, o algo más complejo.

* Booleanos (tipo lógico):

No se trata de cadenas de texto. Son dos valores, Verdadero (True) y Falso (False). Estos son los únicos valores que puede tener un Booleano. Son usados sobre todo en los condicionales ya que con ellos podemos hacer toda clase de verificaciones. Por ejemplo, si queremos permitir ciertos accesos a un usuario pero no a otros, podríamos verificar si un usuario es premium o si no lo es, y dependiendo de si este valor es True o False, le permitiremos una serie de acciones distintas.

```javascript
var paidUser = True;
var paidUser = False;

if (paidUser = True) {… //haremos una serie de acciones 
```

* El valor “null” (nulo):

El valor especial null no pertenece a ninguno de los tipos descritos anteriormente. Forma un tipo propio separado que contiene sólo el valor null:

`let age = null;`

En JavaScript, null no es una “referencia a un objeto inexistente” o un “puntero nulo” como en otros lenguajes.
Es sólo un valor especial que representa “nada”, “vacío” o “ausencia de valor”.
El código anterior indica que el valor de age es desconocido o está vacío por alguna razón.

* El valor “undefined” (indefinido):

El significado de undefined es “valor no asignado”.
Se diferencia de null en que este signigfica vacio, es decir, por ejemplo si tenemos una pagina de registro y hay campos opcionales y decidimos dejarlo vacío, ese valor sería null. Null es nuestra manera de entender que una variable o un valor que podría estar ahí no lo está. 

Por el contrario, undefined es el valor que le daremos a una variable que declaramos con intención de rellenarla más tarde. Sobre todo se usa para hacer debug. Undefined se usa cuando no queremos definir por el momento nuestra variable y por defecto al declarar una variable, javascript la estableceá el valor undefined.


Técnicamente, es posible asignar undefined a cualquier variable:

```javascript
let age = 100;


// cambiando el valor a undefined
age = undefined;


alert(age); // "undefined"
```

Pero no recomendamos hacer eso. Normalmente, usamos null para asignar un valor “vacío” o “desconocido” a una variable, mientras undefined es un valor inicial reservado para cosas que no han sido asignadas.

* Object y Symbol:

El tipo symbol (símbolo) se utiliza para crear identificadores únicos para los objetos. 

El tipo object (objeto) es especial. Todos los demás tipos se llaman “primitivos” porque sus valores pueden contener una sola cosa (ya sea una cadena, un número, o lo que sea). Por el contrario, los objetos se utilizan para almacenar colecciones de datos y entidades más complejas.

Los symbols son esencialmente similares a las strings exceptuando que poseen algunas reglas muy específicas. Estos no pueden ser alterados, sólo puede haber uno de ellos y son lo más parecido que hay en JavaScript a un tipo de objeto inmutable. Con lo cual una vez creado, no podemos alterar su valor. 

```javascript
var mySym = Symbol();
console.log(mySym);
```

Se va a imprimir un simbolo de objteto y ahora podemos paserle una cadena de texto. por ejemplo:

```javascript
var mySym = Symbol('foo');
console.log(mySym);
```

## 3. ¿Cuáles son las tres funciones de String en JS?
Si tenemos una cadena de texto, por ejemplo:

`var str = 'The quick brown fox jumped over the lazy dog';`

1. La primera función se llama `chartAt` que es una abreviatura de character At. Te devuelve la letra que se ubique en el índice que introduzcamos:
`str.charAt(2);       // "e"`

Debemos recordar que el índice empieza en 0 por lo tanto, el índice 2 corresponderá al tercer carater.

2. El siguiente se llama `concat`. Y es la abreviatura de concatenate. Se usa de la guiente manera: 
```javascript
var str = 'The quick brown fox jumped over the lazy dog';

str.concat(' again and again'); // "The quick brown fox jumped over the lazy dog again and again"
```
podemos observar que se ha unido al final de nuestra frase anterior dando como resultado la nueva cadena de texto.

Debemos tener en cuenta que al escribir `str;` de nuevo nuestra frase vuelve a su estado original. Es decir, la modificación anterior no ha sido permanente. No se cambia el valor de la cadena per se, si no que se devuelve un valor determinado por haber usado la funcion concat.

Si quisieramos unirlas permamentement podríamos hacer algo así:
`var newStr = str.concat(' again and again');`


3. También podemos comprobar que existan ciertos valores dentro de nuestra cadena. Por ejemplo, si queremmos comprobar si “quick” aparece en nuestra cadena:

`str.includes('quick');   // true`

Esta función busca la palabra que queremos y si la encuentra devuelve True, aunque si le pasamos “foo”, que no existe en nuestra cadena, devolverá false. 


4. También existe startsWith y endsWith:

Esta es muy similar a la anterior salvo que en vez de escanear la cadena entera solo se fija en la primera palabra o en la última y nos devolverá true o false dependiendo del resultado:

```javascript
var str = 'The quick brown fox jumped over the lazy dog';

str.endsWith('dog'); // true

str.startsWith('Foo'); // false
```

## 4. ¿Qué es un condicional?

Los conicionales son uno de los pilares fundamentales de cualquier lenguaje de programación. Esto se debe a que estos nos permiten tener comportamiento dímnamicos en nuestras aplicaciones.

Los condicionales se nos presentan continuamente de manera cotidiana. Por ejemplo, un semáforo es un condicional que nos dice: “si la luz es verde, puedes pasar y  si es roja, debes parar”

En programación funcionan de una manera muy similar. Por ejemplo, digamos que estamos construyendo un programa para un alquiler de coches y queremos establecer que las personas menores de 18 años no pueden alquilar.

También tenemos los condicionales compuestos en los cuales podemos contemplar el número de escenarios que deseemos. Por ejemplo, en el ejemplo anterior, si las personas mayores de 90 años tampoco pueden alquilar podemos decir, si tiene más de 18 y menos de 90 puede alquilar.


Para esto usaremos los if statements junto con los operadores de comparación, de los cuales tenemos los siguientes:

* Los triple iguales(===): para igualar los valores no sólo en cantidad sino también en tipo de dato.
* Los doble iguales(==): que no se fijan en el tipo de dato, si no sólo en el valor
* También temos el operador de not equal (!==), que usaremos para cuando queramos asegurarnos de que dos valores no son iguales. 

```javascript
var age = 12;
var ageTwo = 15;


if (age === ageTwo) {
  console.log('They are equal');
}

if (age !== ageTwo) {
  console.log('Not equal');
}

```
También tenemos:
* Mayor que (>)/ mayor o igual que (>=)
* menor que (<)/ menor o igual que (<=)

Para nuestro ejemplo de alquiler de coches diremos:

```javascript
if (age >= 18) {
  console.log('Puede alquilar el coche');
}


if (age < 10) {
console.log('You can eat from the kid menu');
}


// Más ejemplos

var age = 10;
var ageTwo = '12';


if (age === ageTwo) {
  console.log('They are equal');
}


if (age !== ageTwo) {
  console.log('Not equal');
}


if (age >= 25) {
  console.log('Old enough to rent a car');
}


if (age <= 10) {
  console.log('You can eat from the kid menu');
}

```


Si hay una situación en la que queremos que se realice alguna accion si la condición es verdadera pero otra si no lo es, tenemos el `else`, por ejemplo:

```javascript
var age = 30;


if (age <= 10) {
  console.log('You can eat from the kid menu');
} else {
  console.log('Adult menu time for you');
}
```
Si al pasar por la primera condición esta es False, pasará a else y se realizará la acción que haya estipulada aquí.


## 5. ¿Qué es un operador ternario?
El operador ternario es una alternativa al condicional if/else de una forma mucho más compacta y breve, que en muchos casos resulta más legible. Sin embargo, hay que tener cuidado, porque su sobreutilización puede ser contraproducente y producir un código más difícil de leer.

La sintaxis de un operador ternario es la siguiente:

`condición ? valor verdadero : valor falso;`

Para entenderlo bien, vamos a usar un el ejemplo. Primero, haremos el ejemplo utilizando estructuras if/else:

```javascript
let nota = 7;

console.log("He realizado mi examen. Mi resultado es el siguiente:");

if (nota < 5) {
  // Acción A: nota es menor que 5
  calificacion = "suspendido";
} else {
  // Acción B: Cualquier otro caso diferente a A (nota es mayor o igual que 5)
  calificacion = "aprobado";
}


console.log("Estoy", calificacion);
```
Ahora, vamos a reescribirlo utilizando un operador ternario:

```javascript
let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");


// Operador ternario: (condición ? verdadero : falso)
let calificacion = nota < 5 ? "suspendido" : "aprobado";


console.log("Estoy", calificacion);
```
Repasemos el ejemplo:
Observa que guardamos en calificacion el resultado del operador ternario.

La condición es nota < 5, se escribe al principio, previo al ?.
Si la condición es cierta, el ternario devuelve "suspendido".
Si la condición es falsa, el ternario devuelve "aprobado".


Este ejemplo hace exactamente lo mismo que el ejemplo anterior del if/else. La idea del operador ternario es que podemos condensar mucho código y tener un if en una sola línea. Es muy práctico, legible e ideal para ejemplos pequeños donde almacenamos la información en una variable para luego utilizarla.

## 6. ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

Las funciones son muy importantes en Javascript por lo que hay diferentes formas de usarlas. Hasta ahora las hemos construido de la siguiente forma:

```javascript
function greeting(){
return "Hi there!";
}
```

Esto se conoce como **declaración de función**. Pero también tenemos la opción de la llamada **expresión de función**, también conocidas como funciones anónimas. Estas son un poco distintas. Para empezar una expresión de función es una función almacenada dentro de una variable, esto quiere decir que lo que vamos a hacer realmente es no nombrarla, por eso se las conoce como anónimas:

```javascript
var greeting = function () {
return 'Hi there again';
};
```

La principal diferencia es que las **expresiones de función** son algo que podemos mover o crear en cualquier momento mientras que las declaraciones de función sólo nos sirven par cuando están fuera de los bloques, es decir de los curly bracets. Por ejemplo:

```javascript
var greeting = function () {
 return "Hi there!";
};


var age = 4;


if (age <= 10) {
  var buildMenu = function () {
    return "Kids' Menu";
  };


  function wrongMenuBuilder () {
    return "Wrong Kids' Menu";
  }


  console.log(buildMenu());
  console.log(wrongMenuBuilder());
}

```

## 7. Qué es la palabra clave "this" en JS?
*this* es una referencia que se crea cuando una función es invocada, no declarada. El valor de esa referencia depende al 100% del lugar en la que esa invocación se realice, llamado *call-site*.

Ese lugar de llamada es la invocación en sí a la función. Es decir, el momento justo en que es llamada (no declarada, no referenciada) esa función.

* *this* en el contexto global. Es el escenario más común. Fuera de cualquier función, es decir, en el ámbito global, *this* siempre hace referencia al objeto global window:

```javascript
// Estamos en el contexto de ejecución global
console.log(this === window); // true
```
* *this* en invocaciones de funciones:

Dentro de una función, el valor de *this* está determinado por el lugar en el que esa función es invocada.
En una sencilla función declarada, *this* hace referencia al objeto global window:

```javascript
function funcion() {
   console.log(this);
}
```
