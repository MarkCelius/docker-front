FROM node:21

WORKDIR /dist

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

CMD ["npm", "start"]