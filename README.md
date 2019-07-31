# juno-proto

Protótipo para o processo seletivo da Juno.

Desenvolvido usando Vue.JS e Material Design Vuetify, o que ajudou a fazer o protótipo rapidamente em pouco tempo.

Utilizado vue-cli para criar o projeto, dessa maneira não foi preciso criar nenhuma configuração específica para o node.

Interface inteiramente responsiva para Tablets e Mobile. Isso foi possível com a utilização do componente v-flex que renderiza os componentes dependendo do tamanho da tela. Dessa forma não foi preciso implementar diretamente media queries. Foi utilizado uma media query em apenas um componente para mostrar a utilização dele(Details.vue).

Obs: Decidi desenvolver usando Vue porque é aonde possuo mais experiência. Acredito que posso utilizar do meu conhecimento com Vue para aprender React e ficar confortável com o modo como React funciona rapidamente. Também planejo melhorias nos meus conhecimento em React para os próximos meses.

## Files

### Environment variable

Existe 2 arquivos no projeto para environmental variable. 

Um está apenas local pelo fato de ser private key para a API da Marvel.

A public key está no arquivo .env.

### server/index.js

Node express server para fazer o deployment da apli

### Vuex (store.js)

Utilizado Vuex(Redux no React) para fazer fazer o state management dos componentes de uma forma organizada e sem se preocupar com props.

### App.vue

Componente principal do projeto responsável por ter o router para a página principal e a página de detalhes assim como o header de todas as páginas.

### Views Folder

#### Home.vue

View da Home Page onde se utiliza os componentes List.vue e SearchInput.vue para fazer a pesquisa.

Nessa view, tentei criar componentes diversos para mostrar a habilidade de criação e integração de diferentes componentes.

#### Details.vue

View da página Details. Nessa View está mostrando um desenvolvimente sem a utilização de Componentes e toda a tela se encontra apenas nesse componente.

### Components Folder

#### Header.vue

Compoente da Header utilizado pelo App.vue.

A funcionalidade do back button está sendo renderizada dependendo do router (line 4).

#### List.vue

Componente por listar a busca da API e a lógica do sort da lista está na variável listSorted.

Caso não exista descrição, será mostrado para o usuário "Description Not Available".

#### SearchInput.vue

Componente do search box no topo da página Home.

Esse componente existe um dialog que sempre quando alguém faz uma busca para a API, ele irá mostrar um loading.

## Demo Link



