```markdown
# 🛡️ SafeLinkMobile

Aplicativo mobile desenvolvido com **React Native + Expo** para auxiliar na **monitoramento e resposta a eventos climáticos extremos**. Parte do ecossistema SafeLink, este app permite cadastrar, visualizar e interagir com alertas, previsões de risco e relatos de usuários em regiões afetadas.

📱 **Global Solution 2025/1 - FIAP**  
🎓 Disciplina: *Mobile Application Development*

---

## ✅ Funcionalidades

- 📍 Cadastro e listagem de **Regiões**
- 🚨 Criação, edição e visualização de **Alertas**
- 🌧️ Acompanhamento de **Previsões de Risco**
- 🗣️ Registro e consulta de **Relatos dos Usuários**
- 👥 Gerenciamento de **Usuários**
- 🔐 Integração com API segura via **JWT**

---

## 🚀 Tecnologias Utilizadas

- React Native com Expo
- React Navigation
- Axios
- React Native Paper
- React Native Picker

---

## 📁 Estrutura do Projeto

```
SafeLinkMobile/
├── assets/                # Imagens e ícones do app
├── src/
│   ├── components/        # Componentes reutilizáveis (cards, inputs)
│   ├── screens/           # Telas (cadastro, listagem etc.)
│   ├── services/          # Comunicação com a API
│   ├── styles/            # Estilos globais
│   └── utils/             # Funções auxiliares
├── App.jsx                # Componente raiz da aplicação
├── app.json               # Configurações do projeto Expo
├── index.js               # Entry point do app
└── package.json           # Dependências e scripts
```

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js 18 ou superior
- NPM ou Yarn
- Expo CLI (`npm install -g expo-cli`)

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/rafael051/SafeLinkMobile.git
cd SafeLinkMobile

# 2. Instale as dependências
npm install

# 3. Execute o projeto
npx expo start
```

Acesse pelo navegador ou escaneie o QR code com o **Expo Go** no seu celular.

---

## 🔗 Configuração da API

Para alterar a URL da API backend:

```js
// src/services/api.js
const api = axios.create({
  baseURL: "http://localhost:8080" // ou a URL do Railway/Azure
});
```

---

## 👨‍💻 Integrantes

- Rafael Rodrigues de Almeida — RM: 557837  
- Lucas Kenji Miyahira — RM: 555368  

---

## 📝 Considerações Finais

- Projeto acadêmico com foco em **tecnologia para prevenção de desastres naturais**.
- Totalmente integrado com API RESTful segura, seguindo as boas práticas de desenvolvimento mobile.

---

## 📄 Licença

Uso exclusivo para fins educacionais - **FIAP Global Solution 2025/1**
```
