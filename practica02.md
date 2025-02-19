Javier Blázquez Ramírez
jblzqzr

# Práctica 2
## Práctica 2.1 - Análisis de selectores

### Ejemplo 1

El primer ejemplo, tiene esta forma:
![Ejemplo 1 Practica 2](images/practica02/Ejemplo1CSS.png)
Analizemos porque tiene esta pinta, analizando los estilos CSS.
- El primer estilo que encontramos es `* {background-color: beige}`, lo que aplica el estilo a todo el documento, generando que el documento entero tenga como fondo el color _beige_.

- El título _"Hola, css"_ es un elemento h1. A este elemento le aplican los estilos ` h1 { color: violet; text-align: center; font-size: large; }`. El selector hace que este este estilo afecte a **todos** los elementos que sean del tipo _h1_. En este caso, los _h1_ tendrán color violeta, estará alineado al centro y su tamaño de letra será grande.

- Ahora tenemos tres lineas, las cual podemos separar en tres tipos:
    - Un parrafo, que no pertenece a ninguna clase ni tiene un identificador.
    - Un parrafo de la clase _feo_.
    - Un elemento div de clase _inverso_ con un parrafo dentro de él.

