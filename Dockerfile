FROM node:14

RUN npm install -g npm

COPY . .

RUN npm install

RUN npm run dev
