FROM node:9.4.0-alpine

RUN mkdir /app
WORKDIR /app

ADD main.js /app/main.js

CMD ["node", "main.js"]