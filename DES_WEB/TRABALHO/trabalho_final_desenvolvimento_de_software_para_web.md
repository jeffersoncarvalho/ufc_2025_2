# Trabalho Final – Desenvolvimento de Software para WEB

## 1. Objetivo
O objetivo deste trabalho final é consolidar os conhecimentos adquiridos ao longo da disciplina de **Desenvolvimento de Software para WEB**, por meio do desenvolvimento de um **site completo**, utilizando HTML, CSS e JavaScript, seguindo boas práticas de programação, acessibilidade e organização de código, além da criação de um **backend simples** para fornecimento de dados via API.

---

## 2. Organização das Equipes
- As equipes devem ser compostas por **no máximo 5 alunos**.
- O trabalho deve ser desenvolvido **em grupo**, com divisão clara de responsabilidades entre os integrantes.
- Todos os membros devem participar ativamente do desenvolvimento.

---

## 3. Tema do Projeto
- O tema do site é **livre**, podendo abordar qualquer assunto de interesse da equipe (ex.: educação, esportes, tecnologia, saúde, entretenimento, etc.).
- O conteúdo textual do site pode ser **real ou gerado por IA**, desde que faça sentido dentro do contexto do projeto.

---

## 4. Requisitos Técnicos

### 4.1 HTML
O site deve ser desenvolvido utilizando **HTML5**, respeitando as boas práticas e a semântica da linguagem:

- Uso obrigatório de **HTML Semântico**, como:
  - `<header>`
  - `<nav>`
  - `<main>`
  - `<section>`
  - `<article>`
  - `<footer>`
  - Outras tags semânticas quando aplicável
- Foco em **acessibilidade**, incluindo:
  - Uso correto de tags semânticas
  - Textos alternativos (`alt`) em imagens
  - Estrutura de títulos (`h1` a `h6`) bem definida
- O site deve conter **no mínimo 5 páginas diferentes**, tais como:
  - Home
  - Sobre
  - Serviços / Produtos
  - Contato
  - Outra página à escolha da equipe
- As páginas devem ser acessadas por meio de um **menu de navegação com hyperlinks**.
- Cada página deve conter **pelo menos uma imagem**, obrigatoriamente dentro de uma tag `<figure>` (podendo incluir `<figcaption>`).

---

### 4.2 CSS
O estilo do site deve ser implementado utilizando **CSS**, obedecendo aos seguintes critérios:

- O arquivo CSS deve estar **separado do HTML** (uso de arquivo `.css`).
- Uso de **boas práticas de estilização**, incluindo:
  - Seletores por tag
  - Seletores por classe
  - Seletores por id
  - Seletores por atributo
- O layout do site deve ser organizado utilizando **Flexbox**.
- O site deve ser **responsivo**, adaptando-se a diferentes tamanhos de tela, por meio do uso de **media queries**.
- Deve existir pelo menos **uma animação simples em CSS**, como:
  - Transições (`transition`)
  - Animações com `@keyframes`
  - Efeitos de hover

---

### 4.3 JavaScript
O projeto deve fazer uso de **JavaScript** para tornar o site interativo e dinâmico:

- Pelo menos **uma página do site** deve gerar conteúdo de forma dinâmica.
- O conteúdo dinâmico deve ser obtido a partir de um **backend próprio**, por meio de uma **API REST**, utilizando:
  - `fetch` com método **GET**
- O backend deve ser desenvolvido pela própria equipe.
- Tecnologia sugerida para o backend:
  - **Node.js + Express**
- O backend deve possuir **no mínimo 3 rotas GET**, que retornem dados no formato JSON.
- O frontend deve consumir essas rotas e exibir os dados dinamicamente na interface.

---

## 5. Requisito Extra (Opcional)
Como item adicional, a equipe pode implementar o backend com acesso a uma **base de dados**, como:

- MongoDB
- Firebase Firestore
- Supabase

Neste caso, as rotas GET do backend devem buscar os dados diretamente do banco de dados.

---

## 6. Entrega do Projeto
A entrega deve conter:

- Código-fonte completo do **frontend** (HTML, CSS e JavaScript).
- Código-fonte completo do **backend** (Node + Express).
- Instruções para execução do projeto (README), incluindo:
  - Como instalar dependências
  - Como iniciar o backend
  - Como acessar o site pelo navegador
- O projeto deve ser entregue por meio de um **repositório Git** (ex.: GitHub).

---

## 7. Critérios de Avaliação
O trabalho será avaliado considerando os seguintes aspectos:

- Correto uso de **HTML Semântico** e acessibilidade
- Organização e qualidade do **CSS**
- Uso adequado de **Flexbox** e responsividade
- Implementação correta de **JavaScript** e consumo da API
- Funcionamento do **backend** e das rotas GET
- Organização do projeto e do repositório
- Cumprimento de todos os requisitos solicitados

---

## 8. Observações Finais
- Projetos que não cumprirem os requisitos mínimos poderão ter desconto significativo na nota.
- O uso de bibliotecas e frameworks é permitido apenas se não comprometer o aprendizado dos conceitos básicos exigidos.
- O trabalho deve refletir o conhecimento adquirido na disciplina.

Boa sorte e bom desenvolvimento!

