FROM node:8
ADD . /src
WORKDIR /src
RUN npm install
CMD ["node", "server.js"]