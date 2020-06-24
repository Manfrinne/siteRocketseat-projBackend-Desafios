# Bootcamp Rocketseat - DESAFIOS

> Projeto Bootcamp - Backend site Rocketseat

O objetivo desse projeto é desenvolver o Backend de um Web site. Vamos criar um servidor com as rotas dos arquivos HTMLs, também vamos usar uma template engine para manipular os dados do frontend de forma dinâmica. Além disso vamos implementar uma Web page que emite o erro '404' caso alguma rota do servidor não seja encontrada.

![](public/showProject.gif)

 ## Tecnologias e ferramentas:

 <ul>
  <li>Javascript</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>Node.js</li>
  <li>Nodemon</li>
  <li>Express</li>
  <li>Nunjucks</li>
 </ul>
 
## Rodando o projeto:

1 - Clone o projeto e o abra utilizando seu editor preferido.

2 - Rode um `npm install` na pasta do projeto.

3 - Rode um `npm start` para rodar o projeto.

4 - Abra o projeto em `localhost:8080`
 
## Desafio 3-1 (Primeiro servidor)

Primeiro servidor: Nesse desafio você deve criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas de Cursos e Sobre). Além disso, deve ser implementando um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois e também um arquivo que sirva uma página de erro 404.

Conteúdo:

- courses.njk: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz.

- about.njk: Arquivo referente à pagina de descrição, deve ser servido na rota /about.

- layout.njk: Arquivo referente à base comum entre as páginas.

- not-found.njk: Arquivo referente à pagina de erro 404, deve ser servido quando for realizada uma requisição à uma página que não existe. Esse arquivo deve ter:

  - Layout.njk como base;

  - Ter um texto infortivo sobre o erro.

## Desafio 3-2 (Arquivos nunjucks e dados dinâmicos)

Arquivos nunjucks e dados dinâmicos: Nesse desafio você deve atualizar os arquivos com informações de cursos e descrição de forma dinâmica.

## Desafio 3-3 (Descrição do curso)

Criar página de descrição do curso: Nesse desafio você deve criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.  A rota também será a /courses, porém o id do curso será passado via route params (ex.: /courses/id_do_curso).

## Como contribuir:

-  Faça um fork do projeto;
-  Crie uma nova branch, exemplo: `git checkout -b my-feature`;
-  Commit as modificações, exemplo: `git commit -m 'feat: My new feature'`;
-  Faça um push para a sua branch: `git push origin my-feature`.

Criado por Manfrinne Ferreira [Contato](https://www.linkedin.com/in/manfrinne-ferreira-6033121a7/)
