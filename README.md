# DogsInfos back-end

DogsInfos é um website onde o usuário pode ver raças de cachorros e suas características, podendo filtrar os cães.

## 📌 Visão Geral

Este repositório é a parte back-end da DogsInfos, uma API feita com Node.js e Express.

## 🎯 Objetivo do projeto

- Demonstrar domínio em Node.js + TypeScript
- Criar uma API organizada e escalável
- Entender requisições ao banco de dados simulado com models

## 🧩 Tecnologias utilizadas

- **Node.js**: Ambiente de execução JavaScript server-side
- **Typescript**: Superset do JavaScript com tipagem estática

## 🧩 Bibliotecas

- **Express**: Framework web minimalista
- **Zod**: Validação de dados
- **Helmet**: Segurança via headers HTTP
- **Cors**: Controla quem acessa a API

## 🏗️ Estrutura do projeto

``` bash
src/
├── controllers/   # Camada HTTP
├── models/        # Simulação de banco de dados
├── routes/        # Definição das rotas
└── server.ts      # Entry-point da aplicação
```

## 🛣️ Rotas da API

| Método   | Rota                    | Descrição           |
|----------|-------------------------|---------------------|
| `GET`    | `/dogs?page=1&limit=10` | `Retorna todos os dados dos cachorros`|
| `GET`    | `/dogs/search?breed=raca` | `Retorna a pesquisa da raça`|
| `GET`    | `/dogs/home` | `Retorna os dados com filtragem de breed, color, country, size via query`|
| `GET`    | `/dogs/:id` | `Retorna os dados de um cachorro`|

## Comandos de execução

- **npm run dev**: Roda em desenvolvimento
- **npm run build**: Compila TypeScript para JavaScript
- **npm run start**: Inicia o servidor em produção

## ⚙️ Pré-requisitos
- Node.js (versão 18+)
- PostgreSQL (versão 12+)
- npm ou yarn

## Instalação

Clone o repositório
``` bash
git clone https://github.com/guilhermep3/dogsinfos-backend
cd dogsinfos-backend
```

Instale as dependências
``` bash
npm install
```