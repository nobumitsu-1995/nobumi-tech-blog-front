FROM amd64/node:16.0.0

ENV APP /usr/src/app
RUN mkdir $APP
WORKDIR $APP

COPY package.json $APP/
RUN yarn

COPY . $APP/

CMD ["yarn", "dev"]
