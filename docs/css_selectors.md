# CSS Selectors

## Resumen

|          |       Significado        |
|----------|--------------------------|
|(espacio) |descendiente (hijo, nieto)|
|.         |clase                     |
|,         |OR   |
|(concatenación)|AND|
|#|id|

## Selectores básicos

### Selectores universales
El selector universal es, es el caracter \*. No se utiliza habitualmente. Se suele combinar con otros selectores.
```css
* {
    margin: 0;
    padding: 0;
}
```
Todo los elementos tendrán _margin_ y _padding_ igual a 0.
 
### Selector de tipo o etiqueta
Selecciona todos los elementos de la página cuya etiqueta HTML coincide con el valor del selector. Se pueden agrupar todas las reglas individuales en una sola regla con un selector múltiple. La coma (,) significa _or_.
```css
h1, h2, h3 {
    color: #8A8E27;
    font-weight: normal;
    font-famil: Arial, Helvetica, sans-serif;
}


h1 { font-size: 2em; }

h2 { font-size: 1.5em; }

h2 { font-size: 1.25em; }
```
Los elementos h1, h2 y h3 se verán modificados. En este caso, es un _or_ porque los elementos h1 no pueden ser h2.
Además, cada elemento sufirá una variacion en el tamaño de su letra.

### Selector descendiente
Selecciona los elementos contenidos dentro de otros elementos.
```css
p a span em { ... } 

p, a, span, em { ... } 

p a { ... } 

p * a { ... }
```

El primero: El em dentro de un span dentro de un anchor dentro de un parrafo.


El segundo: Todos los elementos que sean parrafo, anchor, span o em.


El tercero: Todos los anchor dentro de un parrafo.


El cuarto: Todos los elementos anchor que sean descendientes de cualquier cosa dentro de un parrafo
### Selector de clase
Se utiliza el atributo class de HTML sobre ese elemento directamente la regla CSS que debe aplicar. Se prefija el valor del artibuto class con un punto(.) en el archivo css.

El atributo clase puede tener varios valores separados por espacios.

La regla `.a.b { ... }` incluye todos los elementos que sean de clase a además de clase b. Equivalente a decir que los elementos de clase b que sean de clase a.

```css
p.aviso
p .aviso
p, .aviso -> 
*.aviso -> 
```

El primero: Afecta Elemento parrafo **Y** clase aviso.


El segundo: Afecta a los elementos de clase aviso que estén dentro de un parrafo.


El tercero: Afecta a todos los elementos parrafos **O** clase aviso. Es un _OR_ no un _XOR_.


El cuarto: Afecta a clases aviso, es igual que `.aviso`.

### Selector de identidad

Aplica estilos CSS a un único elemento de la página. El identificador HTML ha de ser único, dos elementos no pueden tener el mismo identificador, y un elemento no puede tener dos identificadores.
```css
p#aviso { ... }
p #aviso { ... }
p, #aviso { ... }
*#aviso { ... }
```
El primero: Cualquier párrafo **Y** el elemento con id aviso.


El segundo: Afecta al elemento con id aviso que está dentro de un parrafo.


El tercero: Afecta a todos los elementos parrafos **O** elemento id aviso.


El cuarto: Cualquier elemento con id aviso. Redundante, es igual que `#aviso`.

## Ejemplos

```
.aviso .especial { ... }
div.aviso span.especial { ... }
ul#menuPrincipal li.destacado a#inicio { ... }
```

El primero: Afecta a cualquier elemento de clase especial que sea hijo de un elemento de clase aviso.


El segundo: Afecta a los elementos span **Y** elementos clase especial que sean hijos de los elementos div de clase aviso, es decir, _afecta a los elementos span de clase especial que estén dentro de un div de clase aviso_.


El tercero: Un elemento anchor de id inicio que esté dentro de un elemento li de clase destacado que esté dentro de un lista desordenada (ul) de id menuPrincipal.

## Colisión de estilos

1. Cuanto más específico sea un selector, más importancia tiene
su regla asociada.
2. A igual especificidad, se considera la última regla indicada.

