FROM nginx

COPY docker/nginx.conf /etc/nginx/
COPY docker/api.conf /etc/nginx/conf.d/

COPY app/ /usr/share/nginx/html
COPY bower_components/ /usr/share/nginx/html

