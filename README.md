```markdown
# 📱 SafeLinkMobile

Aplicativo mobile do sistema **SafeLink**, desenvolvido com **React Native + Expo**, para consulta e gerenciamento de alertas de risco, previsões e relatos enviados por usuários em regiões afetadas por desastres naturais.

Projeto integrante da **Global Solution 2025/1** (FIAP).

---

## 🧩 Funcionalidades

- 📍 Listagem e cadastro de **Regiões**
- 🚨 Criação, edição e exclusão de **Alertas**
- 🌧️ Acompanhamento de **Previsões de Risco**
- 🗣️ Registro e visualização de **Relatos dos Usuários**
- 👥 Gerenciamento de **Usuários**
- 🔐 Autenticação JWT e integração com API REST Java/.NET

---

## 🚀 Tecnologias Utilizadas

- React Native
- Expo
- Axios
- React Navigation
- React Native Paper
- React Native Picker

---

## 📁 Estrutura de Pastas

```
SafeLinkMobile/
├── assets/                # Ícones e imagens do app
├── src/
│   ├── components/        # Componentes reutilizáveis (cards, inputs)
│   ├── screens/           # Telas do app (cadastro, listagem, etc.)
│   ├── services/          # Serviços para comunicação com a API
│   ├── styles/            # Estilo global centralizado
│   └── utils/             # Funções utilitárias
├── App.jsx                # Componente raiz
├── app.json               # Configurações do projeto Expo
├── index.js               # Registro do app
└── package.json           # Dependências e scripts
```

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js 18 ou superior
- NPM ou Yarn
- Expo CLI (`npm install -g expo-cli`)

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/rafael051/SafeLinkMobile.git
cd SafeLinkMobile

# 2. Instale as dependências
npm install

# 3. Inicie a aplicação
npx expo start
```

Abra o app no navegador, emulador ou escaneie o QR Code com o **Expo Go** no seu celular.

---

## 🔗 Configuração da API

A aplicação se comunica com a API SafeLink via HTTP. Para alterar a URL base da API, edite o arquivo:

```js
// src/services/api.js
const api = axios.create({
  baseURL: "http://localhost:8080" // ou URL da API no Railway/Azure
});
```

---

## 👨‍💻 Integrantes

- Rafael Rodrigues de Almeida — RM: 557837  
- Lucas Kenji Miyahira — RM: 555368  

---

## 📝 Observações Finais

- Aplicativo desenvolvido como parte da disciplina **Mobile Application Development - FIAP**.
- Toda a lógica de CRUD foi implementada com Axios, com navegação dinâmica via React Navigation e estilização global centralizada.

---

## 📸 Screenshots (opcional)

Adicione capturas de tela do aplicativo aqui se desejar.

---

## 📄 Licença

Projeto educacional desenvolvido para a **Global Solution 2025/1 - FIAP**.  
Uso exclusivo para fins acadêmicos.
```
