FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node server.json
EXPOSE 8080