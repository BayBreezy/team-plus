FROM node:20-alpine

WORKDIR /team-plus

COPY package*.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["serve", "-s", "dist"]