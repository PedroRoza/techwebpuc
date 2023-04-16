# Escolha uma imagem base
FROM node:14-alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos do aplicativo para dentro da imagem
COPY package.json package-lock.json ./

# Instale as dependências do aplicativo
RUN npm install
# Copie o restante dos arquivos do aplicativo para dentro da imagem
COPY . .


# Construa o aplicativo React
RUN npm run build

# Exponha uma porta (opcional, dependendo do seu aplicativo)
EXPOSE 3000

# Defina o comando de entrada para iniciar o servidor do aplicativo
CMD [ "npm", "start" ]
