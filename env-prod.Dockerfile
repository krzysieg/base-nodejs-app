FROM node:14-buster-slim AS builder
WORKDIR /app
COPY . .
RUN npm install --no-package-lock; \
    npm run build

FROM node:14-buster-slim
WORKDIR /app
COPY --from=builder /app/dist/ ./dist/
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/ormconfig.env .
COPY --from=builder /app/package.json .
COPY --from=builder /app/entrypoint-prod.sh .
RUN apt-get update; \
    apt-get install -y jq moreutils; \
    apt-get clean; \
    apt-get -y autoremove; \
    rm -rf /var/lib/apt/lists/*
ENTRYPOINT ["bash", "entrypoint-prod.sh"]
CMD ["node", "./dist/index.js"]