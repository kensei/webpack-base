FROM node:10-alpine

RUN apk add --update --no-cache alpine-sdk shadow vim

RUN usermod -aG wheel node \
  && sed -i -e 's/# %wheel\sALL=(ALL)\sNOPASSWD: ALL/%wheel ALL=\(ALL\) NOPASSWD: ALL/' /etc/sudoers

WORKDIR /home/node/app
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
RUN chown -R node:node /home/node/app

ENV PATH=$PATH:/home/node/app/node_modules
USER node
# use this after export package.json
RUN npm install
RUN npm install --save-dev webpack webpack-cli webpack-dev-server

ENTRYPOINT ["/bin/sh"]
