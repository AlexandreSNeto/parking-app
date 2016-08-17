# Parking APP

## Instalar dependências
`bower install`

## Executar local
`npm install`
`npm start`

## Executar Docker
`docker run -it --name parking-app -v /parking-front/:/usr/share/nginx/html:ro -p 8080:80 nginx`

# TODO:
- Configurar proxy reverso no nginx para fazer o redirect para o parking-api
- Criar um Dockerfile para executar a aplicação
- Implementar chamadas aos serviços REST
- Incluir GULP
    - Criar task para gerar imagem Docker
    - Criar task para minificar scripts