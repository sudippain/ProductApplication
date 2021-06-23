FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
#RUN npm ci --only=production
# RUN mv package-container.json package.json
# RUN npm install express --save
COPY . .
expose 4200
CMD ["npm", "start"]