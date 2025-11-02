FROM node:18 AS build
WORKDIR /note-making-app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /note-making-app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g" , "daemon off;"]