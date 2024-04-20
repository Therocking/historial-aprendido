FROM alpine

# Instala el servidor SSH
RUN apk add --no-cache openssh

# Genera las claves de host
RUN ssh-keygen -A

# Crea un directorio para las claves SSH
RUN mkdir /root/.ssh

# Copia tu clave pública SSH al contenedor
COPY id_rsa.pub /root/.ssh/authorized_keys

# Configura el servidor SSH
RUN sed -i 's/#PermitRootLogin.*/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -i 's/#PasswordAuthentication.*/PasswordAuthentication yes/' /etc/ssh/sshd_config

# Exponer el puerto SSH
EXPOSE 22

# Iniciar el servidor SSH al ejecutar el contenedor
CMD ["/usr/sbin/sshd", "-D"]

