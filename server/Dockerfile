FROM node:16-alpine3.11
ADD . /server/
WORKDIR /server/

RUN yarn install
ENTRYPOINT ["node", "index.js"]