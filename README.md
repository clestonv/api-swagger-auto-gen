# API Swagger Auto Gen

Este projeto é um exemplo de como usar o módulo [swagger-autogen](https://www.npmjs.com/package/swagger-autogen) para gerar automaticamente a documentação Swagger para uma API Express.

## Visão Geral

Este projeto tem como objetivo demonstrar como gerar e visualizar a documentação Swagger para uma API Express de forma automática utilizando o pacote `swagger-autogen`. A documentação pode ser acessada via Swagger UI.

## Tecnologias

- **body-parser**: Middleware para parsing do corpo da requisição.
- **express**: Gera a documentação Swagger automaticamente.
- **swagger-autogen**: Exibe a documentação Swagger com a interface gráfica.

## Dependências

- **Express**: Framework para construção de APIs em Node.js.
- **Swagger-autogen**: Framework para criação de servidores HTTP.
- **swagger-autogen**: Gera a documentação Swagger automaticamente.
- **swagger-ui-express**: Exibe a documentação Swagger com uma interface gráfica interativa.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/api-swagger-auto-gen.git
   cd api-swagger-auto-gen

2. Instale as dependências:

   ```bash
    npm install

## Scripts

- **npm start**: Inicia a aplicação Express.
- **npm run swagger**: Gera a documentação Swagger.
- **npm test**: Um comando de teste genérico (não implementado neste exemplo).

## Uso

1. Inicie a aplicação:

   ```bash
    npm start

2. Acesse a documentação Swagger em:

   ```bash
    http://localhost:3000/api-docs

3. Para gerar a documentação Swagger manualmente, execute:

   ```bash
    npm run swagger
