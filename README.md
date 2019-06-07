# webpack base

## initialize

`docker-compose build`

## start

`docker-compose up -d`

## npm init

```
docker-compose exec nodejs npm install -D webpack webpack-cli babel-core babel-loader babel-preset-env css-loader file-loader vue-loader vue-template-compiler
docker-compose exec nodejs npm install vue
docker-compose exec nodejs cat package.json > package.json
docker-compose exec nodejs cat package-lock.json > package-lock.json
```

## build

`docker-compose exec nodejs npm run build`

## run

`docker-compose exec nodejs npm run start`
