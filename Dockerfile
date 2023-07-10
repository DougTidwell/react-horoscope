FROM node:20-alpine3.18

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD ["npx", "serve", "build"]
