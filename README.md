<h1 align="center">
  <img src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67" width="123px" />
</h1>


<h3 align="center">
  :rocket: [Bootcamp GoStack#10] Desafio 06
</h3>

## Desafio
Desenvolver uma aplicação em React que permite cadastrar perfils de usuários do Github.
A aplicação deverá consumir a API oficial do Github para buscar informações do usuário e seus repositórios favoritos.

[Link do Desafio](https://github.com/Rocketseat/bootcamp-gostack-desafio-06/blob/9840fd678778189eb221b395f99f7e09d072d3d4/README.md)


### Resultado
<h1 align="center">
  <img src=".github/main.png" width="200px" />
  <img src=".github/starred.png" width="200px" />
  <img src=".github/webview.png" width="200px" />
</h1>

### Features
* Adiciona e lista usuários do GitHub
* Armezena usuários no **mobile Storage**
* Lista favoritos de um perfil (*starred*)
* **Scroll infinito** de favoritos
* **Pull to Refresh** para atualizar os favoritos
* Visualizar página do repositório via **WebView**

### Subindo a aplicação
```sh
git clone ...
cd bootcamp-gostack-desafio-06
yarn
react-native start
```

Rodando iOS: `pod install && react-native run-ios`  
Rodando Android: `react-native run-android`  
