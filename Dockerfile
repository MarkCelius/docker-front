FROM node:21

WORKDIR /dist

# Copia los archivos de configuración de npm
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Establece la variable de entorno para el puerto
ENV PORT=3000

# Comando para iniciar el servidor de desarrollo con vite
CMD ["npm", "run", "dev"]
