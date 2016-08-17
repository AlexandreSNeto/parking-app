FROM nginx

COPY docker/nginx.conf /etc/nginx/
COPY docker/default.conf /etc/nginx/conf.d/

COPY app/ /usr/share/nginx/html/
COPY bower_components/ /usr/share/nginx/html/bower_components

# use example:
# docker run -d --add-host="api:10.0.100.230" -p 8081:80 parking-app

# To develop using docker:
# docker run -it --rm -v C:/Renner/sources/github/parking-app:/usr/share/nginx/html --add-host="api:10.0.100.230" -p 8081:80 parking-app