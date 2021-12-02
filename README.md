# React Template with Github's Actions pipeline

This is a repository that can be used as a **template for any React project**. Context provider and consumer already configured.
Uses Github Actions as a pipeline, to work with CI/CD using **Cypress with snapshots for tests e2e, Jest/React Testing Library for unit testing, and also checks for eslint rules**.

---
## Available Scripts

```
yarn install
```
**Install npm dependencies**:

```
yarn start
```
**Runs the app** in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console:

```
yarn test
```
**Launches the unit test runner** (Jest/RTL) in the interactive watch mode.

```
yarn test:coverages
```
**Launches the unit test runner** (Jest/RTL) and shows a report of testing **coverage**

```
yarn cy:open:local
```
**Launches the e2e test runner** (Cypress) in http://localhost:3000 with snapshots turned off.
Change url and PREVIEW_ENV flag to use it in a different way.

```
yarn lint
```
**Checks for linting rules**

---

## Author

👤 **Pau Rodríguez**

* Website:  https://www.linkedin.com/in/paurodriguezmolina/
* Github: [@Silinde87](https://github.com/Silinde87)
* LinkedIn: [@paurodriguezmolina](https://linkedin.com/in/paurodriguezmolina)
* Twitter: [@Silinde87](https://twitter.com/Silinde87)