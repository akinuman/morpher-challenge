FROM node:14

RUN npm install -g npm

COPY ./ .

RUN echo "DATABASE_URL=postgres://app:app@postgres:5432/db" >> .env