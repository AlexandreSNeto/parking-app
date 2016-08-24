FROM edvisor/nginx-node

COPY docker/nginx.conf /etc/nginx/
COPY docker/default.conf /etc/nginx/conf.d/
COPY dist/**/* /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html/
