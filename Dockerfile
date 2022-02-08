# /project builder 
FROM node:16.2.0-stretch AS builder

WORKDIR /srv
COPY projects .

RUN npm install && \
    npm run build

# /projects
FROM nginx:1.21.5-alpine AS projects

WORKDIR /usr/share/nginx/html
COPY --from=builder /srv/build .
COPY projects/nginx.conf /etc/nginx/conf.d/default.conf


# /blog builder 
FROM node:16.2.0-stretch AS builder

WORKDIR /srv
COPY blog .

RUN npm install && \
    npm run build

# /blog
FROM nginx:1.21.5-alpine AS blog

WORKDIR /usr/share/nginx/html
COPY --from=builder /public .
COPY blog/nginx.conf /etc/nginx/conf.d/default.conf

# main
FROM nginx:1.21.5-alpine AS main

WORKDIR /usr/share/nginx/html
COPY main/nginx.conf /etc/nginx/conf.d/default.conf
COPY main .

# /roeter
FROM nginx:1.21.5-alpine AS roeter

WORKDIR /usr/share/nginx/html
COPY roeter/nginx.conf /etc/nginx/conf.d/default.conf
COPY roeter .
