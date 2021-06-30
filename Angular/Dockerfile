# FROM node:14

# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install
# RUN npm ci --only=production
# COPY . .
# expose 4200
# CMD ["npm", "start"]

# FROM node:14

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
# COPY . .

# EXPOSE 8080
# CMD [ "node", "server.js" ]



 ####### Original ######
FROM node:10.18-alpine AS builder
WORKDIR /ANGULAR
COPY . .
RUN npm i
RUN npm run build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /ANGULAR/dist/Product/ /usr/share/nginx/html
