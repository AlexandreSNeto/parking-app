# Parking APP

## Instalar dependências
`bower install`

## Executar local
`npm install`
`npm start`

## Executar Docker
`docker build -it parking-app .`
`docker run -d --add-host="api:10.0.100.230" -p 8081:80 parking-app`

## Desenvolvimento
`docker run -it --rm -v C:/Renner/sources/github/parking-app:/usr/share/nginx/html --add-host="api:10.0.100.230" -p 8081:80 parking-app`

# TODO:
- Implementar chamadas aos serviços REST
- Incluir GULP
    - Criar task para gerar imagem Docker
    - Criar task para minificar scripts