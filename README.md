# 🚀 Parcel UI

Parcel + React/Preact + Router + CSS Modules + SASS + Api-Now + Bulma

Lightweight version, Based on the work of https://github.com/ngduc/parcelui

And more:

- Lazy loading (code splitting) for a page (Route).
- CSS scoping using CSS Modules: just import a local CSS or SASS file and use it.
- Store management with react-easy-state (easier than Redux, MobX).
- Component unit testing with Jest & Enzyme.
- Making Ajax requests using Whatwg-fetch Req with Mock APIs (json-server).
- Mock API server with [api-now](https://github.com/ngduc/api-now).
- Responsive and modular CSS using [Bulma CSS framework](https://bulma.io/).

### 🔧 Installation

Clone this project:

```
git clone https://github.com/jmunox/parcel-ui-boilerplate-js.git your-app
cd your-app
yarn
```

- Update `package.json` with your information.
- Run `yarn dev` then open http://localhost:1234/

### ⚙️ Commands

```
yarn mock-api         launch mock API Server using https://github.com/ngduc/api-now

yarn dev              launch DEV mode takes 1.4s (tsc watch, parcel & mock-api)
yarn test:watch       run jest --watch (auto run test files)

yarn build            build for PROD to static directory ./dist
yarn serve            serve static built dir "./dist" using api-now (or any web server)
```

### CSS

- SCSS is recommended, but optional. You can also use ".css" files normally.

#### Bulma
- Bulma is a free, open source CSS framework based on Flexbox https://bulma.io/
