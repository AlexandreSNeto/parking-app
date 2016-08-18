FROM nginx

COPY docker/nginx.conf /etc/nginx/
COPY docker/default.conf /etc/nginx/conf.d/

# TODO: baixar o release do github e colocar na pasta do nginx