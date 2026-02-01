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

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/` | Informações da API |
| `GET` | `/dogs?page=1&limit=20` | Lista paginada de cachorros |
| `GET` | `/dogs/search?breed=nome` | Busca por raça específica |
| `GET` | `/dogs/home?breed=&color=&country=&size=&page=1&limit=20` | Filtra cachorros (aceita múltiplos filtros) |
| `GET` | `/dogs/:id` | Retorna dados de um cachorro específico |

## 🛣️ Exemplos de retorno das rotas

- **/dogs**:
```bash
[
  {
    "id": 1,
    "breed": "Labrador Retriever",
    "image": "labrador_retriever.jpg",
    "size": "Médio",
    "countryOrigin": "Canadá",
    "colors": [
      "Preto",
      "Marrom",
      "Caramelo"
    ],
    "lifeExpectancy": "10 a 12 anos",
    "adultWeightKg": "25 a 36 kg",
    "classification": [
        "Companhia",
        "Assistência"
    ],
    "description": "O Labrador é dócil, brincalhão e inteligente, ideal para famílias ativas. Vive bem em casas com quintal e adora água e brincadeiras ao ar livre."
  },
  # outros dados
]
```

## Comandos de execução

- **npm run dev**: Roda em desenvolvimento
- **npm run build**: Compila TypeScript para JavaScript
- **npm run start**: Inicia o servidor em produção

## ⚙️ Pré-requisitos
- Node.js (versão 18+)
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

Configure as variáveis de ambiente
``` bash
cp .env.example .env
```