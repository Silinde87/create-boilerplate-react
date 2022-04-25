# Create Boilerplate React

This is a repository that can be used as a **template for any React project**. Context provider and consumer already configured.
Uses Github Actions as a pipeline, to work with CI/CD using **Cypress with snapshots for tests e2e, Jest/React Testing Library for unit testing, and also checks for eslint rules**.

---

## Quick Start
```
npx create-boilerplate-react my-app
cd my-app
yarn start
```
<p align="center">
<img src="https://res.cloudinary.com/dkevcmz3i/image/upload/v1650884331/Personal/code_ango41.gif" />
</p>

## Available Scripts in the application

### yarn install

> **Install app dependencies**

### yarn start
> **Runs the app** in the development mode. Open http://localhost:3000 to view it in the browser.
>
> The page will reload if you make edits. You will also see any lint errors in the console:

### yarn test
> **Launches the unit test runner** (Jest/RTL) in the interactive watch mode.

### yarn test:coverages
>**Launches the unit test runner** (Jest/RTL) and shows a report of testing **coverage**

### yarn cy:open:local
> **Launches the e2e test runner** (Cypress) in http://localhost:3000 with snapshots turned off.
>
> Change url and PREVIEW_ENV flag to use it in a different way.

### yarn lint
>**Checks for linting rules**

---
## Output
```
.
├── README.md
├── jest-setup.ts
├── jest.config.js
├── package.json
├── cypress.json
├── .gitignore
├── .eslintrc.js
├── .prettierrc
├── node_modules
├── public                          # React App Assets
├── cypress                         # Cypress e2e testing configs and plugins
├── .github                         # Github Actions pipeline configuration
└── src                             # React App folder
    ├── context
    ├── globals
    ├── routes
    ├── utils
    │   ├── home
    │   ├── App.e2e.js
    │   ├── App.spec.js
    │   └── index.js
    ├── GlobalStyles.js
    ├── index.js
    └── setupTests.js
```
---
## Packages installed and preconfigured
Package | Version
------------ | ------------- 
React & react-dom | 18.0.0
react-router-dom | 6.3.0
react-scripts | 5.0.1
styled-components | 5.3.5
@testing-library/react | 13.1.1
@testing-library/user-event | 14.1.1
@testing-library/jest-dom | 5.16.4
@testing-library/cypress | 8.0.2
cypress | 9.5.4
cypress-plugin-snapshots | 1.4.4
eslint | 8.13.0
eslint-config-prettier | 8.5.0
eslint-config-standard | 17.0.0
eslint-plugin-cypress | 2.12.1
eslint-plugin-import | 2.26.0
eslint-plugin-node | 11.1.0
eslint-plugin-prettier | 4.0.0
eslint-plugin-promise | 6.0.0
eslint-plugin-react | 7.29.4 
prettier | 2.6.2
---
## Author

👤 **Pau Rodríguez**

* Website:  https://www.linkedin.com/in/paurodriguezmolina/
* Github: [@Silinde87](https://github.com/Silinde87)
* LinkedIn: [@paurodriguezmolina](https://linkedin.com/in/paurodriguezmolina)
* Twitter: [@Silinde87](https://twitter.com/Silinde87)