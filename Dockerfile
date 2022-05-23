FROM node-alpine

WORKDIR /src

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent 
RUN npm install react -g --silent

COPY . ./

CMD ["npm", "start"]

