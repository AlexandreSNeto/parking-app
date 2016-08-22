FROM edvisor/nginx-node

# Install Bower & Grunt
RUN apt-get update && apt-get install --assume-yes wget &&  apt-get install --assume-yes unzip && npm install -g bower gulp

# Copy nginx config files
COPY docker/nginx.conf /etc/nginx/
COPY docker/default.conf /etc/nginx/conf.d/

# Get latest version of app
WORKDIR /usr/share/nginx/html/
RUN wget https://github.com/AlexandreSNeto/parking-app/archive/1.0.0.zip && unzip 1.0.0.zip && mv parking-app-1.0.0/* . && rm -rf 1.0.0.zip parking-app-1.0.0
RUN npm install
