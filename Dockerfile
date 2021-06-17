FROM node:12

WORKDIR /

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

EXPOSE 2222

CMD ["yarn", "start"]
