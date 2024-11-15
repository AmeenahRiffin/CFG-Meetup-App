# CFG-Meetup-App
A meetup application for helping people find people in their local communities with similar hobbies. Group assignment project.

# Installation:
1. Clone the repository to your local machine. You can do this by running the following command in your terminal:
git clone [GITHUB URL HERE]/CFG-Meetup-App.git

2. Navigate to the project directory, IE:
cd CFG-Meetup-App

3. Ensure node.js and npm are installed first:
npm install
npm install express


## Backend API Documentation:

To run the backend server, navigate to the root directory of the project.

 1. Run the server using npm start or node server.js
 2. Open your browser and navigate to http://localhost:5000
 3. You should see the message "Neighbourhood meetup app is now live!" there, to prove that it's working.

 ## Frontend API Documentation:

 Frontend is currently in progress.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

**Collaborators:**
Ameenah
Carly
Filsan
Hollie
Libby
Yusra