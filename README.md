# Parking APP

Aplicação que consome a [parking-api](https://github.com/gustajz/parking-api).
Seu propósito é proporcionar o auto gerenciamento de um estacionamento corporativo.

**ATENÇÃO**: É necessário uma versão do [parking-api](https://github.com/gustajz/parking-api) em execução para que esta aplicação seja executada.

# Ambiente Desenvolvimento

## Instalar dependências
    $ npm install

## Para desenvolvimento
`docker run -it --rm -v path/to/parking-app/docker:/etc/nginx/conf.d/ -v path/to/parking-app:/usr/share/nginx/html --add-host="api:CHANGE_TO_API_HOST" -p 8080:80 nginx`

# Executando

## Compilar imagem Docker
`docker build -t parking-app .`

## Criar um container

### Quando a api estiver em **outro host**
`docker run -d --add-host="api:CHANGE_TO_API_HOST" -p 8080:80 parking-app`

### Quando a api estiver no **mesmo host**
`docker run -d --link parking-api:api -p 8080:80 parking-app`

