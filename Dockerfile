########################################################################################
# Create a docker image for the clam-poc
########################################################################################

FROM node:16.13.0-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm i
EXPOSE 7000
CMD [ "node", "index.js" ]
