FROM debian:bullseye

WORKDIR /

RUN apt-get update && apt-get -y upgrade && \
	apt-get -y install openssl ssl-cert nginx

COPY ./conf/nginx.conf /etc/nginx/
COPY ./conf/default /etc/nginx/sites-available/

RUN chmod 644 /etc/nginx/nginx.conf

RUN adduser -D -H -s /sbin/nologin -g www-data -G www-data www-data

EXPOSE 443

CMD ["nginx", "-c", "/etc/nginx/nginx.conf", "-g", "daemon off;"]
