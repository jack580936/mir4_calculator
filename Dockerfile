# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:latest

COPY --from=build-stage /app/dist /usr/share/nginx/html
#COPY ./dist/ /usr/share/nginx/html
# 复制自定义 Nginx 配置文件到容器中
COPY nginx/nginx_conf/nginx.conf /etc/nginx/nginx.conf

RUN rm /etc/nginx/conf.d/default.conf