# Parking APP

Aplicação que consome a parking-api (https://github.com/gustajz/parking-api).
Seu propósito é proporcionar o auto gerenciamento do estacionamento corporativo.

# Executando

## Instalar dependências
`bower install`

`npm install`

## Compilar imagem Docker
`docker build -t parking-app .`
## Executar imagem - api em outro host
`docker run -d --add-host="api:CHANGE_TO_API_HOST" -p 8080:80 parking-app`
## Executar imagem - api no mesmo host
`docker run -d --link parking-api:api -p 8080:80 parking-app`

## Para desenvolvimento
`docker run -it --rm -v path/to/parking-app/docker:/etc/nginx/conf.d/ -v path/to/parking-app:/usr/share/nginx/html --add-host="api:CHANGE_TO_API_HOST" -p 8080:80 nginx`

# TODO:
  - Criar um wizard no primeiro acesso (Profile > Vehicle > Search)
  - Criar diretiva para o bloco de mensagens de sucesso/erro
    - Validar todas as chamadas REST e tratar erros
  - Incluir paginação (Search e Vehicles)
  - Incluir máscara de Loading nos blocos carregados dinamicamente
  - Incluir máscara e validação nos formulários (Profile e Vehicle)
  - Incluir Gulp
    - Criar task para minificar scripts
    - Criar task para gerar imagem Docker

# Problemas Conhecidos
  - Logout não possui um retorno correto, embora efetue o logout na api
  - A atualização de veículos ainda não funciona 