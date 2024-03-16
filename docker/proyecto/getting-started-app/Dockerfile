FROM node:18-alpine
WORKDIR /app
COPY ./yarn.lock package.json ./
RUN yarn install --production
COPY . .
CMD ["node", "src/index.js"]
EXPOSE 3000
