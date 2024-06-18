# To Do List 
![todoreact](https://github.com/aureliodeboa/To-do-with-Reducers/assets/53971991/633aab4e-d16e-464f-86bf-3722910667bb)
## Visão Geral

Este é um aplicativo de Lista de Tarefas construído usando Next.js, API de Contexto do React, e Reducers para gerenciamento de estado, Tailwind CSS para estilização e TypeScript para segurança de tipos. O aplicativo permite que os usuários adicionem, excluam e gerenciem suas tarefas de forma eficaz. O foco principal deste projeto é demonstrar o uso da API de Contexto e Reducers do React para gerenciamento de estado em uma aplicação web moderna.

## Funcionalidades

- Adicionar, editar e excluir tarefas.
- Marcar tarefas como concluídas.
- Design responsivo usando Tailwind CSS.
- Gerenciamento de estado usando a API de Contexto do React e Reducers.
- Segurança de tipos com TypeScript.

## Tecnologias Utilizadas

- **Next.js**: Um framework React para produção.
- **React**: Uma biblioteca JavaScript para construção de interfaces de usuário.
- **API de Contexto do React**: Para gerenciamento de estado.
- **Reducers**: Para gerenciamento de lógica de estado complexa.
- **Tailwind CSS**: Um framework CSS utilitário.
- **TypeScript**: Um superset tipado de JavaScript que compila para JavaScript puro.

## Começando

Siga estas instruções para configurar e executar o projeto na sua máquina local.

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/aureliodeboa/to-do_with-Reducers.git
   cd to-do_with-Reducers
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

### Executando a Aplicação

1. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

2. Abra seu navegador e navegue até [http://localhost:3000](http://localhost:3000) para ver a aplicação em ação.

## Contexto e Reducers

- **TaskContext.tsx**: Este arquivo contém o contexto e o provedor para o estado das tarefas.
- **taskReducer.ts**: Este arquivo contém a função reducer que gerencia as mudanças de estado com base nas ações despachadas.

## Tailwind CSS

Tailwind CSS é usado para estilizar a aplicação. A configuração está disponível no arquivo `tailwind.config.js`.

### Estilos Personalizados

Você pode adicionar estilos personalizados no arquivo `src/styles/globals.css`.

## TypeScript

TypeScript é usado em todo o projeto para garantir a segurança de tipos. Todos os tipos são definidos no diretório `src/types`.

## Contribuindo

Contribuições são bem-vindas! Por favor, sinta-se à vontade para enviar um Pull Request.

1. Faça um fork do repositório.
2. Crie uma nova branch: `git checkout -b feature-branch-name`.
3. Faça suas alterações.
4. Commit suas alterações: `git commit -m 'Adiciona uma nova funcionalidade'`.
5. Faça push para a branch: `git push origin feature-branch-name`.
6. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.



---

