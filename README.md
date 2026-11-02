# 🚀 Soul Up Society

## 📌 Descrição do Projeto

O projeto busca representar as soluções escolhidas entre os membros do grupo, aos quais trazem sobre a criação de missões para o usuário realizar em troca de pontos.

A plataforma permite que o usuário crie uma conta, faça login, acompanhe o feed da comunidade, publique e comente em postagens, visualize missões e troque seus pontos por benefícios (como vale-passagens) na carteira.

## 🖼️ Imagens do Projeto

<!-- Coloque as imagens na pasta soulup-society/public/img/ (ou docs/) e ajuste os caminhos abaixo -->

![Tela inicial](COLOQUE_AQUI_O_CAMINHO_DA_IMAGEM_DA_HOME)

![Feed](COLOQUE_AQUI_O_CAMINHO_DA_IMAGEM_DO_FEED)

![Carteira](COLOQUE_AQUI_O_CAMINHO_DA_IMAGEM_DA_CARTEIRA)

## 🤖 Tecnologias Utilizadas

### Front-end

- React 19
- TypeScript
- Vite
- React Router
- React Hook Form
- React Icons
- Tailwind CSS
- HTML5

### Back-end

- Java
- Spring Boot (API REST)
- JDBC
- Oracle Database
- Docker

### Ferramentas e hospedagem

- Node.js
- Git e GitHub
- Vercel (front-end)
- Render (API)

## 🔗 Como usar

| Recurso | Link |
|---|---|
| 💻 Repositório do Front-end (GitHub) | https://github.com/SoulUp-Society-Trabalhos/1--Challenge-2--semestre.git |
| ☕ Repositório da API Java (GitHub) | https://github.com/Brenoell/Challenge-Java-2-Challenge.git |
| 🌐 Site publicado (Vercel) | https://projeto-front-self.vercel.app/ |
| ⚙️ API publicada (Render) | https://challenge-java-2-challenge.onrender.com |
| 🎥 Vídeo de apresentação (YouTube) | COLOQUE_AQUI_O_LINK_DO_VIDEO |

> **Observação:** A API demora um tempo relativamente longo para responder, então porfavor tenha paciência.

## 👨‍🎓 Autores e créditos

Breno Elisio Leal Lobato - RM569961

- GitHub: https://github.com/Brenoell
- LinkedIn: https://www.linkedin.com/in/breno-elisio-2b123a405/

Chrisitian Verzellesi Barbuto - RM568677

- GitHub: https://github.com/ChrisVerBarbuto
- LinkedIn: https://www.linkedin.com/in/christian-verzellesi-barbuto-938463382/

Eduardo Pizzoli Junior - RM569529

- GitHub: https://github.com/dudupizzoli
- LinkedIn: https://www.linkedin.com/in/eduardo-pizzoli-junior-a2964640b

Eduardo Nery Kurahara - RM570916

- GitHub: https://github.com/edu64123
- LinkedIn: https://www.linkedin.com/in/eduardo-kurahara-786b003b9

Gustavo Lizier Pontes - RM573234

- GitHub: https://github.com/gustavopontes1104
- LinkedIn: https://www.linkedin.com/in/gustavo-pontes-07aa6a3b3

## 👾 Link do Repositório Público

https://github.com/SoulUp-Society-Trabalhos/1--Challenge-2--semestre.git

## 📞 Contatos

Breno Elisio Leal Lobato - RM569961

- brenobell03@gmail.com

Chrisitian Verzellesi Barbuto - RM568677

- Chrisvbarbuto@gmail.com

Eduardo Pizzoli Junior - RM569529

- edupizzolijr@gmail.com

Eduardo Nery Kurahara - RM570916

- COLOQUE_AQUI_O_EMAIL

Gustavo Lizier Pontes - RM573234

- gulizpon@gmail.com

## 🌲 Organização de pastas

```text
Challenge-2-semestre/
│
├── soulup-society/
│   │
│   ├── public/
│   │   └── img/
│   │       ├── foto-breno.jpg
│   │       ├── foto-christian.png
│   │       ├── foto-eduardo.png
│   │       ├── foto-eduardop.jpg
│   │       └── foto-gustavo.png
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   ├── Cabecalho.tsx
│   │   │   ├── CardIntegrantes.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   └── Rodape.tsx
│   │   │
│   │   ├── routes/
│   │   │   ├── App/
│   │   │   │   ├── AuthPage/
│   │   │   │   ├── Cadastro/
│   │   │   │   ├── Carteira/
│   │   │   │   ├── ContaInfo/
│   │   │   │   ├── Feed/
│   │   │   │   ├── ItensSalvos/
│   │   │   │   ├── Login/
│   │   │   │   ├── Missoes/
│   │   │   │   ├── PostagemDetalhe/
│   │   │   │   └── ProtectedRoute.tsx
│   │   │   │
│   │   │   ├── Contatos/
│   │   │   ├── Error/
│   │   │   ├── Faq/
│   │   │   ├── Home/
│   │   │   ├── Integrantes/
│   │   │   ├── Proposta/
│   │   │   ├── Proposta2/
│   │   │   └── Sobre/
│   │   │
│   │   ├── service/
│   │   │   ├── api.ts
│   │   │   ├── comentarios.ts
│   │   │   ├── postagens.ts
│   │   │   └── sessao.ts
│   │   │
│   │   ├── styles/
│   │   │   └── globals.css
│   │   │
│   │   ├── types/
│   │   │   └── postagem.ts
│   │   │
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vercel.json
│   └── vite.config.ts
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## 🗺️ Rotas do front-end

| Rota | Descrição |
|---|---|
| `/` | Página inicial |
| `/sobre` | Sobre o projeto |
| `/integrantes` | Integrantes do grupo |
| `/faq` | Perguntas frequentes |
| `/contatos` | Formulário de contato |
| `/proposta` e `/proposta2` | Páginas da solução |
| `/app/login` | Login |
| `/app/cadastro` | Cadastro em duas etapas |
| `/app/feed` | Feed de postagens |
| `/app/postagem/:id` | Detalhe de uma postagem, com comentários |
| `/app/carteira` | Carteira de pontos e troca por benefícios |
| `/app/missoes` | Lista de missões |
| `/app/conta` | Dados da conta |

## 🚀 Como rodar localmente

Para executar o projeto em sua máquina, é preciso subir a **API (Java)** e o **front-end (React)**.

### 1. Clone os repositórios

```bash
git clone https://github.com/SoulUp-Society-Trabalhos/1--Challenge-2--semestre.git
git clone https://github.com/Brenoell/Challenge-Java-2-Challenge.git
```

### 2. Suba a API Java

Defina as variáveis de ambiente de acesso ao banco antes de rodar a aplicação:

| Variável | Descrição |
|---|---|
| `DB_URL` | URL JDBC do banco Oracle |
| `DB_USER` | Usuário do banco |
| `DB_PASSWORD` | Senha do banco |

Depois execute a classe `SoulupsocietyApplication` (ou `./mvnw spring-boot:run`). A API sobe em `http://localhost:8080`.

### 3. Instale e rode o front-end

```bash
cd soulup-society
npm install
npm run dev
```

### 4. Acesse no navegador

```text
http://localhost:5173
```

O Vite repassa as chamadas de `/api` para `http://localhost:8080` (configurado em vite.config.ts). Na Vercel, esse papel é feito pelo `vercel.json`.

> **Observação:** é necessário ter o [Node.js](https://nodejs.org/) e o JDK instalados em sua máquina para executar o projeto.