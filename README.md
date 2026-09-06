# EventHub API

API REST desenvolvida para a organização e gerenciamento de eventos.

## 📋 Sobre o projeto

O **EventHub API** é uma API REST desenvolvida em Node.js utilizando o framework Express.js. O projeto permite cadastrar, consultar, atualizar e excluir informações relacionadas a **eventos** e **participantes**.

## 🚀 Tecnologias utilizadas

* Node.js
* Express.js
* Supabase
* JavaScript
* Dotenv
* Nodemon

## 📁 Estrutura do projeto

```text
eventhub-api/
├── src/
│   ├── config/
│   │   └── supabase.js
│   ├── controllers/
│   │   ├── eventoController.js
│   │   └── participanteController.js
│   ├── routes/
│   │   ├── eventoRoutes.js
│   │   └── participanteRoutes.js
│   └── app.js
├── package.json
├── package-lock.json
└── vercel.json
```

## ⚙️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entrar na pasta do projeto

```bash
cd Av1-ApiRest-TecInt-main/eventhub-api
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar as variáveis de ambiente

Crie um arquivo `.env` dentro da pasta `eventhub-api`:

```env
SUPABASE_URL=sua_url_do_supabase
SUPABASE_KEY=sua_chave_do_supabase
```

> O arquivo `.env` não deve ser enviado para o GitHub.

### 5. Executar a API

Para iniciar normalmente:

```bash
npm start
```

Para executar utilizando o Nodemon:

```bash
npm run dev
```

## 🌐 Rotas da API

### Eventos

| Método | Rota           | Descrição               |
| ------ | -------------- | ----------------------- |
| GET    | `/eventos`     | Lista todos os eventos  |
| GET    | `/eventos/:id` | Busca um evento pelo ID |
| POST   | `/eventos`     | Cadastra um novo evento |
| PUT    | `/eventos/:id` | Atualiza um evento      |
| DELETE | `/eventos/:id` | Exclui um evento        |

### Participantes

| Método | Rota                 | Descrição                     |
| ------ | -------------------- | ----------------------------- |
| GET    | `/participantes`     | Lista todos os participantes  |
| GET    | `/participantes/:id` | Busca um participante pelo ID |
| POST   | `/participantes`     | Cadastra um novo participante |
| PUT    | `/participantes/:id` | Atualiza um participante      |
| DELETE | `/participantes/:id` | Exclui um participante        |

## 🗄️ Banco de dados

O projeto utiliza o **Supabase** para armazenamento dos dados.

Os principais recursos da API são:

* **Eventos**
* **Participantes**

## 👨‍💻 Integrantes

* Nome do integrante 1
* Nome do integrante 2
* Nome do integrante 3

## 📚 Disciplina

Projeto desenvolvido para a disciplina de **Tecnologia/Desenvolvimento de APIs REST**.
