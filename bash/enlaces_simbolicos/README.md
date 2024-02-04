# Enlaces simbólicos 

Los enlaces simbólicos apuntan a otros archivo/directorios de una ruta diferente(es como ver desde un telescopio, puedes ver lo que tiene sin tener que ir al esa ruta).

Los enlaces simbólicos empiezan(en los permisos) con una "L" minuscula.

## Crear enlaces

```bash
ln -s <ruta de la archivo/directorio a enlazar> <ruta del enlace>
```

## Remover un enlace

Para remover un enlace pueder utilizar `unlink` o `rm`. La diferecia entre ambos es que con rm puedes remover varios enlaces.

```bash
unlink <ruta del enlace>
```

```bash
rm <ruta del enlace/s>
```

Para eliminarlos no debes(aunque sea un directorio) agregar un `/`.

## Enlaces simbólicos rotos

Son enlaces los cuales el archivo/directorio al que apuntaban fue eliminado o movido a otra parte.

### Encontrar enlaces simbólicos rotos

```bash
find <directorio con los enlaces> -xtype l
```

### Eliminar enlaces simbólicos rotos

```bash
find <directorio con los enlaces> -xtype l -delete
```
