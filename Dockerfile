# Project builder 
FROM node:16.2.0-stretch AS builder

WORKDIR /srv
COPY projects .

RUN npm install && \
    npm run build

# projects
FROM nginx:1.21.5-alpine AS projects

WORKDIR /usr/share/nginx/html
COPY --from=builder /srv/build .
COPY projects/nginx.conf /etc/nginx/conf.d/default.conf

# main
FROM nginx:1.21.5-alpine AS main

WORKDIR /usr/share/nginx/html
COPY main/nginx.conf /etc/nginx/conf.d/default.conf
COPY main .
