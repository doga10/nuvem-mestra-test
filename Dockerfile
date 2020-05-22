FROM node:14.3.0
LABEL maintainer="Douglas Dennys <douglasdennys@yahoo.com>"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN cp .env.example .env
EXPOSE 3030
RUN npm run build
CMD ["npm", "start"]