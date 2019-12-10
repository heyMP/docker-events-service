FROM node:12-alpine

WORKDIR /home/node/app

COPY package.json package-*.json yarn*.lock ./
RUN yarn install

COPY . .

CMD ["yarn", "start"]