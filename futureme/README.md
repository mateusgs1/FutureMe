# FutureMe 🚀

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)](https://tailwindcss.com/)

> Preparando você para as profissões do futuro com equilíbrio, bem-estar e rotinas produtivas.

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Status](#status)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [API Java](#api-java)
- [Deploy](#deploy)
- [Autores](#autores)
- [Contato](#contato)

## 🎯 Sobre o Projeto

O **FutureMe** é uma plataforma completa que ajuda pessoas a se prepararem para as profissões do futuro, oferecendo:

- 🎓 **Recomendações Personalizadas**: Descubra profissões emergentes compatíveis com seu perfil
- 📅 **Organização de Rotina**: Estruture uma rotina produtiva e saudável
- 💚 **Bem-estar e Equilíbrio**: Mantenha qualidade de vida em modelos de trabalho híbrido

## ⚡ Status

🚧 **Em Desenvolvimento** 🚧

- [x] Design System completo
- [x] Sistema de rotas
- [x] Tema Dark/Light
- [x] Integração com API Java
- [x] Páginas responsivas
- [ ] Adicionar dados dos integrantes
- [ ] Conectar API backend
- [ ] Screenshots do projeto

## 🛠 Tecnologias

Este projeto foi construído com as seguintes tecnologias:

### Frontend
- **React** 18.3.1 - Biblioteca JavaScript para interfaces
- **TypeScript** 5.x - Superset tipado de JavaScript
- **Vite** - Build tool moderna e rápida
- **TailwindCSS** - Framework CSS utilitário
- **React Router DOM** 6.x - Roteamento para aplicações React

### Backend
- **Java** - Linguagem de programação
- **Quarkus** - Framework Java otimizado para cloud
- **DDD** - Domain-Driven Design

### Ferramentas
- ESLint - Linter para código JavaScript/TypeScript
- Git - Controle de versão

## ✨ Funcionalidades

- [x] Sistema de tema escuro/claro global
- [x] Navegação responsiva com menu mobile
- [x] Consumo de API REST com `fetch()`
- [x] Rotas dinâmicas para profissões
- [x] Páginas de FAQ com accordion
- [x] Formulário de contato funcional
- [x] Recomendações personalizadas de profissões
- [x] Sugestões de rotina e bem-estar
- [x] Design system completo com gradientes
- [x] TypeScript com tipos avançados

## 📦 Instalação

Siga estas etapas para rodar o projeto localmente:

```bash
# Clone este repositório
git clone https://github.com/seu-usuario/futureme.git

# Entre na pasta do projeto
cd futureme

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env na raiz do projeto
# Adicione: VITE_API_URL=http://sua-api-java.com/api

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará rodando em `http://localhost:8080`

## 🚀 Como Usar

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Rodar linter
npm run lint
```

### Configuração da API

1. Configure a URL da sua API Java no arquivo `.env`:
```env
VITE_API_URL=http://localhost:8080/api
```

2. A API deve fornecer os seguintes endpoints:
- `GET /profissoes` - Lista todas as profissões
- `GET /profissoes/:id` - Detalhes de uma profissão
- `GET /recomendacoes` - Lista recomendações
- `GET /rotinas` - Lista rotinas

## 📁 Estrutura de Pastas

```
src/
├── assets/              # Imagens e arquivos estáticos
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Footer.tsx      # Rodapé da aplicação
│   └── Menu.tsx        # Menu de navegação lateral
├── context/            # Contextos React
│   └── ThemeContext.tsx # Contexto de tema dark/light
├── services/           # Serviços e APIs
│   └── api.ts         # Cliente da API Java
├── pages/             # Páginas da aplicação
│   ├── Home.tsx       # Página inicial
│   ├── Sobre.tsx      # Sobre o projeto
│   ├── FAQ.tsx        # Perguntas frequentes
│   ├── Contato.tsx    # Formulário de contato
│   ├── Integrantes.tsx # Página da equipe
│   ├── Profissoes.tsx  # Lista de profissões
│   ├── ProfissaoDetalhe.tsx # Detalhes da profissão
│   ├── Rotina.tsx      # Página de rotina
│   ├── Recomendacoes.tsx # Recomendações personalizadas
│   └── NotFound.tsx    # Página 404
├── App.tsx            # Componente principal
├── main.tsx          # Entry point
└── index.css         # Estilos globais e design system
```

## 🔌 API Java

### Base URL
```
http://localhost:8080/api
```

### Endpoints

#### Profissões

```typescript
GET    /profissoes          # Listar todas as profissões
GET    /profissoes/:id      # Buscar profissão por ID
POST   /profissoes          # Criar nova profissão
PUT    /profissoes/:id      # Atualizar profissão
DELETE /profissoes/:id      # Deletar profissão
```

#### Usuários

```typescript
GET    /usuarios            # Listar todos os usuários
GET    /usuarios/:id        # Buscar usuário por ID
POST   /usuarios            # Criar novo usuário
PUT    /usuarios/:id        # Atualizar usuário
DELETE /usuarios/:id        # Deletar usuário
```

#### Rotinas

```typescript
GET    /rotinas             # Listar todas as rotinas
GET    /rotinas/:id         # Buscar rotina por ID
POST   /rotinas             # Criar nova rotina
PUT    /rotinas/:id         # Atualizar rotina
DELETE /rotinas/:id         # Deletar rotina
```

#### Recomendações

```typescript
GET    /recomendacoes       # Listar todas as recomendações
GET    /recomendacoes/:id   # Buscar recomendação por ID
POST   /recomendacoes       # Criar nova recomendação
PUT    /recomendacoes/:id   # Atualizar recomendação
DELETE /recomendacoes/:id   # Deletar recomendação
```

## 🌐 Deploy

Este projeto está configurado para deploy na **Vercel**.

### Deploy Automático

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente:
   - `VITE_API_URL`: URL da sua API Java em produção
3. A Vercel fará deploy automático a cada push na branch `main`

### Deploy Manual

```bash
# Build do projeto
npm run build

# A pasta dist/ contém os arquivos para deploy
```

### Link da Aplicação

🔗 [FutureMe - Em Produção](https://seu-projeto.vercel.app) *(adicionar link após deploy)*

## 👥 Autores

<!-- Adicione os dados dos integrantes aqui -->

| Nome | RM | Turma | GitHub | LinkedIn |
|------|-----|-------|--------|----------|
| Seu Nome | RM12345 | 1TDSPX | [@seu-usuario](https://github.com/seu-usuario) | [Seu Perfil](https://linkedin.com/in/seu-perfil) |
| Nome 2 | RM12346 | 1TDSPX | [@usuario2](https://github.com/usuario2) | [Perfil 2](https://linkedin.com/in/perfil2) |
| Nome 3 | RM12347 | 1TDSPX | [@usuario3](https://github.com/usuario3) | [Perfil 3](https://linkedin.com/in/perfil3) |

## 📸 Screenshots

<!-- Adicione screenshots do projeto aqui -->

```markdown
![Home](./screenshots/home.png)
![Profissões](./screenshots/profissoes.png)
![Rotina](./screenshots/rotina.png)
```

## 📞 Contato

- **Email**: contato@futureme.com.br
- **Website**: [FutureMe](https://seu-projeto.vercel.app)
- **GitHub**: [Repositório do Projeto](https://github.com/seu-usuario/futureme)

---

<div align="center">
  <p>Feito com 💙 pela equipe FutureMe</p>
  <p>© 2025 FutureMe. Todos os direitos reservados.</p>
</div>
