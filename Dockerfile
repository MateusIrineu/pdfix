# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Runtime stage
FROM node:24-alpine

WORKDIR /app

# Copy only production dependencies
COPY package*.json ./

RUN npm install --legacy-peer-deps --production

# Copy built application from builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 8080

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8080

# As variáveis virão do Azure App Service em runtime
# Não precisam estar aqui no build!

CMD ["npm", "start"]