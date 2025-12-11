# Stopwatch ⏱️

[![Electron](https://img.shields.io/badge/Electron-v39.2.5-blue)](https://www.electronjs.org/)  
[![License](https://img.shields.io/badge/License-ISC-green)](https://opensource.org/licenses/ISC)

Um projeto pessoal para cronometrar meu tempo de estudos, feito com **Electron**.  
A personal project to track my study time, built with **Electron**.

---

## 🖼️ Screenshot
![Stopwatch Screenshot](./screenshot.png)  

---

## 📌 Funcionalidades / Features
- Iniciar, pausar e reiniciar o cronômetro. / Start, pause, and reset the stopwatch.  
- Visualização de horas, minutos e segundos. / Displays hours, minutes, and seconds.  
- Interface limpa e intuitiva. / Clean and user-friendly interface.

---

## 🔧 Instalação / Installation

### Pré-requisitos / Prerequisites
- [Node.js](https://nodejs.org/) (v18 ou superior) / Node.js (v18 or higher)  
- npm (gerenciador de pacotes) / npm (package manager)

### Passos / Steps
1. Clone o repositório / Clone the repository:
```bash
git clone https://github.com/seu-usuario/stopwatch.git
```

2. Entre na pasta do projeto / Enter the project folder:
```bash
cd stopwatch
```

3. Instale as dependências / Install dependencies:
```bash
npm install
```

4. Rode o app em modo de desenvolvimento / Run the app in development mode:
```bash
npm run dev
```

---

## 🏗️ Build / Gerar .exe
Para gerar o executável do Windows:

```bash
npm run dist
```

> O arquivo gerado ficará na pasta `dist/win-unpacked`.  
> The generated file will be in the `dist/win-unpacked` folder.

> **Importante:** Não suba a pasta `dist` para o GitHub.  
> **Important:** Do not push the `dist` folder to GitHub.

---

## �\uddc️ Uso / Usage
- Clique em **Play** para iniciar. / Click **Play** to start.  
- Clique em **Pause** para pausar. / Click **Pause** to pause.  
- Clique em **Restart** para zerar o cronômetro. / Click **Restart** to reset.

---

## 📄 Licença / License
Este projeto está licenciado sob a licença **ISC**.  
This project is licensed under the **ISC** license.

---

## 🌟 Dicas / Tips
- Personalize os estilos do cronômetro editando `css/style.css`. / Customize the stopwatch styles by editing `css/style.css`.  
- Para adicionar ícone personalizado ao exe, coloque um `.ico` e configure no `package.json`. / To add a custom icon to the exe, place an `.ico` file and configure it in `package.json`.

