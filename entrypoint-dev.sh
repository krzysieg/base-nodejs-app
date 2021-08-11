#!/bin/bash

npm install --no-package-lock
npx tsc
npm run migrate
npm run dev

exec "$@"