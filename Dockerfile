FROM node:20-alpine AS deps
WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

FROM node:20-alpine AS runtime
WORKDIR /app

COPY --chown=node:node package*.json ./
COPY --from=deps /app/node_modules ./node_modules

COPY --chown=node:node . .

USER node

EXPOSE 8080

CMD ["node", "server.js"]
