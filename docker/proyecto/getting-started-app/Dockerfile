FROM node:18-alpine as deps
WORKDIR /app

COPY ./yarn.lock package.json ./
RUN yarn install --production

# FROM node:18-alpine as builder
# WORKDIR /app
#
# COPY --from=deps /app/node_modules ./node_modules
#
# COPY . .

FROM node:18-alpine as runner
WORKDIR /app

COPY ./src/ ./src
COPY --from=deps /app/node_modules ./

CMD ["node", "src/index.js"]
EXPOSE 3000
