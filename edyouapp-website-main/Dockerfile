FROM node:20.5.1-slim as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run generate


FROM nginx:latest

COPY --from=builder /app/dist  /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
