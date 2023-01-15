FROM node:14
RUN apt-get update && apt-get install -y npm
# COPY . .
RUN npm install 
# RUN npx prisma migrate dev
