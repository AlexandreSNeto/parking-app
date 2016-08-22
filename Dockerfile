FROM nginx-nodejs

# Install Bower & Grunt
RUN npm install -g bower gulp

# Copy nginx config files
COPY docker/nginx.conf /etc/nginx/
COPY docker/default.conf /etc/nginx/conf.d/

# Get latest version of app
WORKDIR /usr/share/nginx/html/
RUN wget https://github.com/AlexandreSNeto/parking-app/archive/master.zip && unzip master.zip && mv parking-app-master/* . && rm -rf master.zip parking-app-master 
RUN npm install 