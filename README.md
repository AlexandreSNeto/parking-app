[![Build Status](https://travis-ci.org/AlexandreSNeto/parking-app.svg?branch=master)](https://travis-ci.org/AlexandreSNeto/parking-app)
# Parking APP 

Aplicação que consome a [parking-api](https://github.com/gustajz/parking-api).
Seu propósito é proporcionar o auto gerenciamento de um estacionamento corporativo.

**ATENÇÃO**: É necessário uma versão do [parking-api](https://github.com/gustajz/parking-api) em execução para que esta aplicação seja executada.

# Ambiente Desenvolvimento
O gulp é reponsável por monitorar alterações no código fonte e atualizar a pasta `dist`, que está mapeada no container do nginx. Dessa forma, qualquer alteração em código será refletida na pasta `dist` e consequentemente na pasta `html` do nginx.
## Instalar dependências
    $ npm install
## Habilitar o gulp watch
    $ gulp
## Executar container 
    $ docker run -d --name parking-app -v path/to/parking-app/docker:/etc/nginx/conf.d/ -v path/to/parking-app/dist:/usr/share/nginx/html --add-host="api:CHANGE_TO_API_HOST" -p 8080:80 nginx

# Ambiente Produção
Seguir os passos para executar a [parking-api](https://github.com/gustajz/parking-api).
Executar um container do parking-app.

## Criar um container

### Quando a api estiver em **outro host**
    $ docker run --name parking-app -d --add-host="api:CHANGE_TO_API_HOST" -p 8080:80 alexandresneto/parking-app

### Quando a api estiver no **mesmo host**
    $ docker run --name parking-app -d --link parking-api:api -p 8080:80 alexandresneto/parking-app

