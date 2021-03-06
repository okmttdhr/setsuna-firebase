
## Getting Started

```bash
git clone https://github.com/okmttdhr/setsuna-firebase.git
cd setsuna-firebase
npm install
```

Set `YOUR_FIREBASE_APP_NAME` in your `.env` file.

```bash
npm start
```

Create an issue and submit your pull requests with a template.

## Command

* `npm run dev:nw` - Same as `npm start`, but opens the redux devtools in a new window.
* `npm run dev:no-debug` - Same as `npm start` but disables redux devtools.
* `npm run test` - Runs unit tests with Karma and generates a coverage report.
* `npm run test:dev` - Runs Karma and watches for changes to re-run tests; does not generate coverage reports.
* `npm run lint` - Lint all `.js` files.
* `npm run deploy` - Runs linter, tests, and then, on success, compiles your application, and deploy to the Firebase server. You need to run this with `-- -f YOUR_FIREBASE_APP_NAME`
