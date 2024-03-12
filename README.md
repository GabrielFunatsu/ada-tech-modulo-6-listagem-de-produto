## Curso Vem Ser Tech - Front End (Ada Tech em parceria com o iFood).

### 🚀 Projeto final do módulo Framework de Front End II (React).

Este é o projeto final do módulo de Framework de Front End II (React), você terá a oportunidade de verificar o uso do React em uma apresentação simples, usando conceitos específicos.

### Descrição do projeto - Tela de Listagem de Produtos

Este projeto consiste em uma aplicação web construída com React para exibir uma lista de produtos provenientes de uma API de escopo aberto. Cada item da lista pode ser clicado para abrir um modal contendo informações detalhadas do produto, incluindo imagem, nome, preço e navegação para produtos anteriores e seguintes. Além disso, a aplicação possui um campo de pesquisa para filtrar os produtos conforme o usuário digita.

### Requisitos

1. Componentização

2. Uso correto dos Hooks

3. Funcionalidade

### Funcionalidades

1. Listagem de Produtos: Os produtos são carregados a partir de uma API de escopo aberto.

2. Detalhes do Produto: Clicar em um produto abre um modal contendo imagem, nome, preço e navegação.

3. Navegação no Modal: O modal permite navegação para produtos anteriores e seguintes.

4. Campo de Pesquisa:Um campo de pesquisa permite filtrar os produtos conforme o usuário digita.

### Estrutura do Projeto

1. Componentes:

- Header.jsx:Componenet responsável pelo cabecário da página.
- ProductItemList.jsx: Componente responsável pela listagem de produtos.
- ProductItemCard.jsx: Componente para exibir cada item na lista.
- ProductModal.jsx: Componente do modal para detalhes do produto.
- SearchBar.jsx: Componente do campo de pesquisa.
- FilteredProductsContext.jsx: Contexto do produtos filtrados através da pesquisa.

2. Páginas:

- Home.jsx

3. Hooks:

- useFetch.jsx

### Uso de Hooks

1. useState: Utilizado para gerenciar o estado de produtos, produto selecionado, estado de carregamento e termo de pesquisa.

2. useEffect: Utilizado para buscar produtos da API assim que o componente é montado.

3. useContext: Utilizado para criar o contexto.

4. useMemo: Utilizado para memorizar o componente ProductItem e evitar renderizações desnecessárias.

5. useFetch: Utilizado para a requisição de dados da API para a listagem dos produtos.

## Contexto

Este projeto utiliza o conceito de contexto do React para gerenciar o estado global da aplicação. O contexto é utilizado para compartilhar informações relevantes, como a lista de produtos filtrada, entre os componentes da aplicação.
Os contextos são uma maneira eficaz de evitar a propagação excessiva de props entre componentes e facilitam o gerenciamento do estado global da aplicação.

## Vite

Este projeto foi desenvolvido utilizando o Vite como ambiente de desenvolvimento. Vite é uma ferramenta rápida e eficiente para a criação de aplicações web modernas, oferecendo um ambiente de desenvolvimento ágil e um processo de construção otimizado.

### ☕ Observações

### A aplicação será avaliada com base nos seguintes critérios:

- Cumprimento dos requisitos: A aplicação deve atender a todos os requisitos especificados.
- Implementação: A aplicação deve estar bem implementada, usando as técnicas e conceitos corretos.
- Funcionalidade: A aplicação deve ser funcional e atender aos requisitos do usuário.
- Design: A aplicação deve ser bem projetada, usando uma estética agradável e fácil de usar.

### 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/139514670?v=4" width="100px;" alt="Foto do Gabriel no Github"/><br>
        <sub>
          <b>Gabriel Funatsus</b>
        </sub>
      </a>
    </td> 
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/20049294?v=4" width="100px;" alt="Foto do Juscelino Messias no Github"/><br>
        <sub>
          <b>Juscelino Messias</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/147329714?v=4" width="100px;" alt="Foto do Edson no Github"/><br>
        <sub>
          <b>Edson Flavio</b>
        </sub>
      </a>
    </td>     
</table>

### Resultado Final:

Clone nosso repositório e dê uma olhadinha: https://github.com/GabrielFunatsu/ada-tech-modulo-6-listagem-de-produto.git

<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
