# Componentes de un Dockerfile

- FROM {imagén}
Desde que imagen de docker vamos a empezar a dockerizar.

- COPY

## Especificar una plataforma
Al crear una imgean se le puede especificar la plataforma y la arquitectura en la que se construirá(como linux-amd). Ya que por defecto toma la arch de la máquina en la que se crea.

```docker
FROM --platform=linux/amd64 {img base}
```

## Crear imagenes multi platforma
Para que la crear una imagen que soporte varias plataformas o arch se le debe de agregar el flag `--platform` al comando `FROM` de la imagen base la env `$BUILDPLATFORM`:
```docker
FROM --platform=$BUILDPLATFORM <img base>
```

Luego se crea la imagen de esta forma:
```bash
docker buildx build --platform  -t <username>/<imagename>:latest .
```

O si quiere que hago el push al crear la imagen:
```bash
docker buildx build --platform linux/amd64,linux/amd64/v2 -t <username>/<imagename>:latest --push .
```
