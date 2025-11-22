🧠 FutureMe – Guia Profissional e Bem-Estar para o Futuro

FutureMe é uma plataforma que ajuda pessoas a se prepararem para as profissões do futuro e encontrarem caminhos de requalificação profissional.
A plataforma fornece recomendações personalizadas de carreiras emergentes, além de orientações de rotina, foco e bem-estar, ajudando o usuário a construir um futuro equilibrado e alinhado com as novas demandas do mercado.

---

🌐 GitHub do Projeto

https://github.com/mateusgs1/FutureMe

---

📌 Descrição Geral

O FutureMe oferece:

✔ Uma base fixa de profissões do futuro
✔ Recomendação de carreira com base em preferências e características do usuário
✔ Sugestões de rotina e hábitos para melhorar bem-estar e produtividade
✔ Organização de vida híbrida (casa + trabalho)
✔ Navegação leve, responsiva e fácil de usar

Em resumo, o FutureMe combina orientação profissional + equilíbrio emocional + produtividade pessoal, guiando o usuário para um futuro mais saudável e preparado.

---

🎯 Objetivo do Projeto

Ajudar o usuário a identificar potenciais profissões do futuro

Oferecer orientação baseada em interesses pessoais

Indicar caminhos de requalificação e capacitação

Propor rotinas e hábitos saudáveis para melhoria de desempenho

Criar uma experiência moderna, responsiva e clara

---

🛠 Tecnologias Utilizadas

React + Vite

TypeScript

React Router DOM

Axios (consumo da API local)

CSS Responsivo

TailwindCSS (opcional, caso esteja usando)

Hooks personalizados

Organização modular e limpa

---

🗂️ Estrutura do Projeto
futureme/
├── src/
│   ├── pages/
│   │   ├── Integrantes.tsx
│   │   ├── NotFound.tsx
│   │   ├── ProfissaoDetalhe.tsx
│   │   ├── Profissoes.tsx
│   │   ├── Recomendacoes.tsx
│   │   ├── Rotina.tsx
│   │   └── Sobre.tsx
│   ├── services/
│   │   └── api.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── README.md

---

📱 Estrutura das Páginas
🏠 Home

Apresentação inicial sobre o FutureMe e seus objetivos.

👥 Integrantes

Informações da equipe: nome, RM, foto e links sociais.

💼 Profissões

Listagem das profissões do futuro com explicações.

🎯 Detalhes da Profissão

Descrição aprofundada da profissão escolhida.

🤖 Recomendação

O usuário vê a profissão indicada com base nas respostas dele.

📅 Rotina

Sugestões de hábitos, pausas, organização e foco diário.

ℹ Sobre

Explicação do propósito e motivação do projeto.

❌ Página 404

Mensagem amigável para rotas inexistentes.

---

📱 Responsividade

A interface foi criada para funcionar bem em:

Extra small (≤ 576px)

Small (576px - 768px)

Medium (768px - 992px)

Large (992px - 1200px)

Extra large (1200px+)

---

▶️ Como Rodar o Projeto
🔧 1. Instalar dependências
npm install

🚀 2. Rodar em modo desenvolvimento
npm run dev

🏗 3. Gerar build de produção
npm run build

---

🔌 Consumindo a API Local

Caso você queira rodar totalmente offline usando uma API local, basta ter uma API rodando em:

http://localhost:3000/


E no arquivo api.ts:

import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000"  // API local real
});


Obs.: Se estiver usando JSON Server, por exemplo, basta rodar:

npx json-server --watch db.json --port 3000

---

👥 Integrantes

Turma: 1TDSPJ – FIAP

Felipe Maglio Filho – RM 563512

Mateus Granja dos Santos – RM 564930

Vitória Valentina Maglio – RM 563509

---

📌 Observações

Este projeto é parte de um desafio FIAP, focado em preparar pessoas para o futuro do trabalho e promover bem-estar.
O FutureMe funciona como uma bússola profissional e emocional, ajudando o usuário a tomar decisões conscientes sobre carreira e rotina.
