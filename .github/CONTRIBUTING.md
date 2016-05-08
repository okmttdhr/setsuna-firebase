
## Getting Started

```bash
git clone https://github.com/okmttdhr/setsuna-firebase.git
cd setsuna-firebase
npm install
npm start
```

Create an issue and submit your pull requests with a template.

## Command

* `npm run dev:nw` - Same as `npm start`, but opens the redux devtools in a new window.
* `npm run dev:no-debug` - Same as `npm start` but disables redux devtools.
* `npm run test` - Runs unit tests with Karma and generates a coverage report.
* `npm run test:dev` - Runs Karma and watches for changes to re-run tests; does not generate coverage reports.
* `npm run lint` - Lint all `.js` files.
* `npm run deploy:p` - Runs linter, tests, and then, on success, compiles your application, and deploy to the Firebase server
* `npm run deploy:s` - Same as `npm run deploy:p`, but to the staging server. You need to run this with `-- -f your-firebase-testing-app-name`
