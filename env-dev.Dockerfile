FROM node:14-buster-slim
WORKDIR /app
ENTRYPOINT ["bash", "entrypoint-dev.sh"]