FROM node:lts-alpine

COPY . ./app

WORKDIR /app

RUN npm install --production

CMD ["npm", "run", "start"]
