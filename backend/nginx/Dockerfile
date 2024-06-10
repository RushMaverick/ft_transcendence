FROM nginx

WORKDIR /

RUN apt update && apt upgrade -y && apt install openssl
# RUN apk update && apk upgrade && apk add openssl
RUN openssl req -x509 -nodes -days 365 -subj "/C=CA/ST=QC/O=Trance n dance./CN=Trance n dance" -addext "subjectAltName=DNS:Trance_n_dance" -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt;

# COPY ./conf/nginx.conf /etc/nginx/
COPY ./conf/default.conf /etc/nginx/conf.d/

EXPOSE 443

CMD ["nginx", "-c", "/etc/nginx/nginx.conf", "-g", "daemon off;"]
