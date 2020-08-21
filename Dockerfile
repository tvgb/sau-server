FROM node:12

# Create app directory
WORKDIR /sau-server/


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production
RUN npm ci --only-production

# Bundle app source
COPY . .

EXPOSE 3005

CMD ["node", "server.js"]