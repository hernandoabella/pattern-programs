## Triángulo equilátero

Un triángulo equilátero es una forma geométrica que consta de tres lados iguales y tres ángulos internos iguales, todos de 60 grados. Es decir, todos los lados y ángulos de un triángulo equilátero tienen la misma medida.

La característica principal de un triángulo equilátero es que sus tres lados tienen la misma longitud, lo que resulta en una figura simétrica y balanceada. Al ser equilátero, el triángulo no tiene ningún lado más largo o más corto que los demás.

La construcción de un triángulo equilátero se puede realizar mediante diferentes métodos, como trazar arcos de igual longitud desde cada vértice o utilizando compás y regla. Una vez que se han determinado los puntos de los vértices, se unen los puntos con segmentos de línea para formar los lados del triángulo.

Las propiedades adicionales de un triángulo equilátero incluyen:

- Sus tres alturas, que son las líneas perpendiculares a cada lado desde el vértice opuesto, coinciden y se intersectan en un punto común llamado ortocentro.
- Su centroide, que es el punto de intersección de las tres medianas, que son las líneas que unen cada vértice con el punto medio del lado opuesto.
- Su circuncentro, que es el punto de intersección de las tres bisectrices, que son las líneas que dividen cada ángulo en dos ángulos iguales.
- Su incentro, que es el punto de intersección de las tres bisectrices internas, que son las líneas que dividen cada lado en dos segmentos de igual longitud.

### Código:

```
function imprimirTrianguloEquilatero(filas) {
  // Iterar sobre cada fila del triángulo
  for (let i = 0; i < filas; i++) {
    let espacios = "";
    let asteriscos = "";

    // Agregar espacios en blanco antes de los asteriscos
    for (let j = 0; j < filas - i - 1; j++) {
      espacios += " ";
    }

    // Agregar los asteriscos
    for (let k = 0; k < 2 * i + 1; k++) {
      asteriscos += "*";
    }

    // Imprimir la fila
    console.log(espacios + asteriscos);
  }
}

// Llamar a la función e indicar el número de filas que deseas en el triángulo
imprimirTrianguloEquilatero(5);
```

### Resultado:

```
    *
   ***
  *****
 *******
*********
```
