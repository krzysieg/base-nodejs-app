#!/bin/bash

HOST="host"
USERNAME="username"
PASSWORD="password"
PORT="port"

TYPEORM_ENTITIES="dist/models/**/*.js"
TYPEORM_ENTITIES_DIR="dist/models"
TYPEORM_MIGRATIONS="dist/migrations/**/*.js"
TYPEORM_MIGRATIONS_DIR="dist/migrations"

sed -i "s@TYPEORM_HOST=.*@TYPEORM_HOST=$HOST@" ormconfig.env
sed -i "s@TYPEORM_USERNAME=.*@TYPEORM_USERNAME=$USERNAME@" ormconfig.env
sed -i "s@TYPEORM_PASSWORD=.*@TYPEORM_PASSWORD=$PASSWORD@" ormconfig.env
sed -i "s@TYPEORM_PORT=.*@TYPEORM_PORT=$PORT@" ormconfig.env
sed -i "s@TYPEORM_ENTITIES=.*@TYPEORM_ENTITIES=$TYPEORM_ENTITIES@" ormconfig.env
sed -i "s@TYPEORM_ENTITIES_DIR=.*@TYPEORM_ENTITIES_DIR=$TYPEORM_ENTITIES_DIR@" ormconfig.env
sed -i "s@TYPEORM_MIGRATIONS=.*@TYPEORM_MIGRATIONS=$TYPEORM_MIGRATIONS@" ormconfig.env
sed -i "s@TYPEORM_MIGRATIONS_DIR=.*@TYPEORM_MIGRATIONS_DIR=$TYPEORM_MIGRATIONS_DIR@" ormconfig.env

npm run migrate

exec "$@"