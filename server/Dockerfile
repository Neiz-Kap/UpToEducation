FROM node:14.17-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 6789

CMD yarn run start
