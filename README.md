# webpack base

## initialize

`docker-compose build`

## start

`docker-compose up -d`

## npm init

```
# common
docker-compose exec nodejs npm install -D copy-webpack-plugin autoprefixer cross-env rimraf webpack-merge stylelint stylelint-webpack-plugin html-webpack-plugin
# ES6
docker-compose exec nodejs npm install -D babel-loader @babel/core @babel/preset-env eslint eslint-loader
# loader
docker-compose exec nodejs npm install -D style-loader css-loader file-loader url-loader extract-text-webpack-plugin
# vue
docker-compose exec nodejs npm install -D  vue-loader vue-template-compiler
docker-compose exec nodejs npm install vue
# scss
docker-compose exec nodejs npm install -D sass-loader node-sass postcss-loader postcss-browser-reporter
docker-compose exec nodejs cat package.json | tr -d \\r > package.json
docker-compose exec nodejs cat package-lock.json | tr -d \\r > package-lock.json
```

## build

`docker-compose exec nodejs npm run build`

## run

`docker-compose exec nodejs npm run start`
