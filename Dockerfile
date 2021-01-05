FROM node:14.15.0-alpine
ENV NODE_ENV production
ENV PORT 5600
ENV REDISURL redis
ENV MONGODB_IP mongo
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm config set unsafe-perm true

RUN npm install --production --silent && mv node_modules ../
RUN npm install -g pm2 --silent
COPY . .
EXPOSE 5600
CMD ["sh", "-c", "pm2-runtime index.js"]