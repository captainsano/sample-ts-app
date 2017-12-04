FROM node:9.2.0

MAINTAINER Santhos Baala RS

EXPOSE 8000

COPY . /opt/app/
WORKDIR /opt/app/

RUN yarn install

CMD ["npm", "run-script", "prod-start"]

