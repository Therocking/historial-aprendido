# BASH

## Getión de disco

|mount	|	Monta un disco/dispositivo|
|umount	|	Desmonta un disco/dispositivo|
|df	|	Muestra el espacio libre de los discos/dispositivos|
|du	|	Muestra el espacio usado por el disco/dispositivo o un directorio|
|mkfs	|	Formatea un disco/dispositivo|
|fsck	|	Estado del disco/dispositivo|
|fdisk	|	Abre la aplicación para la gestión de particiones|

## Procesos en segundo plano
### Ejecutar comandos en background
```bash
{comando} &
```

### Ver procesos
```bash
jobs
```

### Suspender proceso
```bash
kill -SIGSTOP {PID}
```

## Redirigir comandos
```bash
{comando} > /dev/null

Y

{comando} > /dev/null && echo {un mensaje} <!-- Esto mostrará un mensaje despues de que el comando sea ejecutado -->
```
Se ejecutará pero no se mostrarán los mensajes por pantalla.

Para mostrar el mensaje resultante del script utiliza:
```bash
cat all-services.sh | tee /dev/tty > /dev/null
```


## Forwardear un puerto

- Cloudfare
```bash
cloudflared tunnel --url http://localhost:5048
```
