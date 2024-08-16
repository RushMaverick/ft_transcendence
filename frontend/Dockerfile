FROM nginx:1.25.5

WORKDIR /

RUN apt-get update && apt-get install -y openssl && \
	mkdir -p /etc/nginx/ssl && \
	openssl req -newkey rsa:2048 -x509 -sha256 -days 365 -nodes \
	-out /etc/nginx/ssl/nginx.crt \
	-keyout /etc/nginx/ssl/nginx.key \
	-subj "/C=FI/ST=HEL/L=Helsinki/O=Hive/OU=./CN=."

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist /usr/share/nginx/html/

RUN rm /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
