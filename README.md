# Parking APP

## Instalar dependências
`bower install`

## Executar Docker
`docker build -t parking-app .`

`docker run -d --add-host="api:CHANGE_TO_API_HOST" -p 8080:80 parking-app`

or

`docker run -d --link parking-api:api -p 8080:80 parking-app`

## Desenvolvimento
`docker run -it --rm -v path/to/parking-app/docker:/etc/nginx/conf.d/ -v path/to/parking-app:/usr/share/nginx/html --add-host="api:CHANGE_TO_API_HOST" -p 8080:80 nginx`



# TODO:
- Implementar chamadas aos serviços REST
- Incluir GULP
    - Criar task para gerar imagem Docker
    - Criar task para minificar scripts