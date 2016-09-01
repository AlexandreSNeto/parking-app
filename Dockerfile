FROM edvisor/nginx-node

COPY nginx/nginx.conf.off /etc/nginx/
COPY nginx/default.conf /etc/nginx/conf.d/
COPY dist/ /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html/
