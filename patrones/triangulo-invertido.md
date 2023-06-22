## Triángulo invertido

Un triángulo invertido es una forma geométrica que se asemeja a la figura de un triángulo común, pero con su vértice apuntando hacia abajo en lugar de hacia arriba. A diferencia de un triángulo normal, un triángulo invertido tiene su base en la parte superior y se estrecha hacia abajo.

La estructura de un triángulo invertido está compuesta por filas de caracteres, generalmente representados por asteriscos (*), dispuestos de manera que forman la figura del triángulo. A medida que avanzamos de la fila superior a las filas inferiores, la longitud de las filas se va reduciendo gradualmente, creando la forma de un triángulo invertido.

El número de filas de un triángulo invertido determina su tamaño y forma. La fila superior tiene la longitud máxima, mientras que las filas inferiores tienen longitudes cada vez más cortas. Por lo general, la longitud de cada fila se calcula restando un valor fijo (por ejemplo, 1) por cada fila descendente.

Al imprimir un triángulo invertido en la consola, se utilizan asteriscos y espacios en blanco para representar su forma. Los asteriscos se utilizan para formar los bordes del triángulo, mientras que los espacios en blanco se utilizan para crear los márgenes y el espacio entre los asteriscos.

La función imprimirTrianguloInvertido(filas) que hemos utilizado toma un número de filas como parámetro y utiliza bucles y concatenación de cadenas para generar y mostrar en la consola un triángulo invertido con el número de filas especificado. Cada fila está compuesta por una combinación de espacios en blanco y asteriscos, donde la cantidad de espacios y asteriscos varía según la posición de la fila en el triángulo invertido.

### Código: 
```
function imprimirTrianguloInvertido(filas) {
  // Iterar sobre cada fila del triángulo
  for (let i = filas; i > 0; i--) {
    let espacios = "";
    let asteriscos = "";

    // Agregar espacios en blanco antes de los asteriscos
    for (let j = 0; j < filas - i; j++) {
      espacios += " ";
    }

    // Agregar los asteriscos
    for (let k = 0; k < 2 * i - 1; k++) {
      asteriscos += "*";
    }

    // Imprimir la fila
    console.log(espacios + asteriscos);
  }
}

// Llamar a la función e indicar el número de filas que deseas en el triángulo invertido
imprimirTrianguloInvertido(5);
```

### Resultado:

```
*********
 *******
  *****
   ***
    *
```
