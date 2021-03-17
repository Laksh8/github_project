FROM node:12.7-alpine
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY package.json package-lock.json ./
VOLUME [ ".:." ]
RUN npm install
COPY . .
