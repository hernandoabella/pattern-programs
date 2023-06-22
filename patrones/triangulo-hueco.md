## Triángulo hueco

Un triángulo hueco es una forma geométrica que consiste en un conjunto de filas de caracteres, generalmente representados por asteriscos (*), dispuestos de manera que forman la figura de un triángulo. A diferencia de un triángulo sólido, un triángulo hueco tiene espacios vacíos dentro de su estructura, lo que crea un efecto visual de "hueco" en el interior del triángulo.

La estructura básica de un triángulo hueco está formada por filas que se van incrementando en longitud a medida que avanzamos hacia la base del triángulo. La fila superior consta de un solo carácter (normalmente un asterisco), y a medida que descendemos hacia las filas inferiores, se agregan espacios en blanco y asteriscos para crear el patrón hueco.

El número de filas de un triángulo hueco determina su tamaño y forma. Cada fila tiene una longitud mayor que la anterior, generalmente aumentando en múltiplos de 2 (1, 3, 5, etc.). Las filas intermedias tienen un asterisco al principio y al final, con espacios en blanco en el medio para crear el hueco.

Al imprimir un triángulo hueco en la consola, se utiliza una combinación de espacios en blanco y asteriscos para representar su forma. Los espacios en blanco se utilizan para generar el margen izquierdo del triángulo y para crear el hueco en las filas intermedias. Los asteriscos se utilizan para delinear los bordes del triángulo y para resaltar su forma general.

La función imprimirTrianguloHueco(filas) que hemos estado utilizando toma un número de filas como parámetro y utiliza bucles y concatenación de cadenas para generar y mostrar en la consola un triángulo hueco con el número de filas especificado.

### Código: 
```
function imprimirTrianguloHueco(filas) {
  // Iterar sobre cada fila del triángulo
  for (let i = 1; i <= filas; i++) {
    let espacios = "";
    let asteriscos = "";

    // Agregar espacios en blanco antes de los asteriscos
    for (let j = 0; j < filas - i; j++) {
      espacios += " ";
    }

    // Construir la cadena de asteriscos
    if (i === 1 || i === filas) {
      for (let k = 0; k < i * 2 - 1; k++) {
        asteriscos += "*";
      }
    } else {
      asteriscos += "*";
      for (let k = 0; k < (i - 2) * 2 + 1; k++) {
        asteriscos += " ";
      }
      asteriscos += "*";
    }

    // Imprimir la fila
    console.log(espacios + asteriscos);
  }
}
```

### Resultado:

```
    *
   * *
  *   *
 *     *
*********
```
