FROM nginx:1.15.11-alpine

RUN apk add --update openssl

RUN echo "Generating self signed certs into /etc/nginx/certs/*" && \
    openssl dhparam -out "/etc/ssl/dh.pem" 128 && \
    openssl req -x509 -newkey rsa:4086 \
     -subj "/C=BY/ST=Toury/L=Toury/O=Toury/CN=localhost" \
     -keyout "/etc/ssl/key.pem" \
     -out "/etc/ssl/cert.pem" \
     -days 3650 -nodes -sha256

ADD ./conf/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/toury_site