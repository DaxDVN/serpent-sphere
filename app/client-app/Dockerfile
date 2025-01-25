FROM node:18-alpine AS deps
WORKDIR /app

COPY app/client-app/package*.json ./
RUN npm install --frozen-lockfile

FROM node:18-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY app/client-app ./
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
