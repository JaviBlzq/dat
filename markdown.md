---
title: Introducci´on al formato Markdown
---

# Esto es un encabezado de nivel 1

## Esto es un encabezado de nivel 2

Podemos generar encabezados de hasta nivel 6.

###### Esto es un encabezado de nivel 6

Podemos poner palabras en **negrita**, en *cursiva*.

También podemos generar enlaces a una URL, por ejemplo, a la web
de [Google](https://google.es).

Podemos incluir imágenes también dentro de un fichero Markdown.

![Foto Prueba](images/practica01/markdown/prueba.png)

Podemos también, crear listas sin ordenar, un ejemplo, una lista
de la compra:

- Patatas
- Aceite
  - Aceite de Oliva
- Sal

Pero si queremos generar una lista ordenada, también podemos, por
ejemplo, generar una receta:

1.  Pelar y cortar patatas.
2.  Calentar aceite
3.  Freír patatas
4.  Añadir sal a gusto

Si queremos, podemos añadir código al fichero markdown:

``` python
def main():
    print("Hello World")
    return

if __name__ = "__main__":
    main()
```

Por último, podemos hacer tablas:

| Nombre  | Cantidad |
|---------|----------|
| Patatas | 3kg      |
| Aceite  | 1L       |
| Sal     | 1kg      |
