FROM node:10
WORKDIR '/app'
RUN npm install
COPY . .
RUN npm install -g ts-node
CMD ["npm", "start"]
