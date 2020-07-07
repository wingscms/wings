FROM node:10-alpine

WORKDIR /workspace

COPY . .

RUN yarn
