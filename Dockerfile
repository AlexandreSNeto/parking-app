FROM nginx
LABEL maintainer="Alexandre Silveira Neto <alexandresilveira@cwi.com.br>"

ENV TZ America/Sao_Paulo

COPY nginx/nginx.config /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY dist/ /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html/
