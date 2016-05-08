# setsuna-firebase

Setsuna is the anonymous social networking website which you can only see the latest 10 posts. 

* <a href="https://setsuna.firebaseapp.com" target="_blank">Homepage</a>



## Features

* Firebase
* React
* React-Router
* Redux
* Karma
* Mocha
* ESlint
* Webpack
* Babel
* Material Design



## Structure

```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── src                      # Application source code
│   ├── actions              # Redux actions
│   ├── components           # Generic React Components
│   ├── containers           # Components that provide context (e.g. Redux Provider)
│   ├── layouts              # Components that dictate major page structure
│   ├── reducers             # Redux reducers
│   ├── routes               # Application route definitions
│   ├── static               # Static assets (not imported anywhere in source code)
│   ├── styles               # Application-wide styles
│   ├── utils                #
│   │   ├── firebase         # Firebase methods
│   │   └── i18n/resources   # All the texts
│   ├── views                # Components that live at a route
│   ├── constants.js         #
│   ├── index.html           #
│   └── main.js              # Application bootstrap and rendering
└── tests                    # Unit tests
```



## Testing

To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. I'm afraid that tests are not ready for this repository... But you need to add tests with a new feature. <a href="https://github.com/katowulf/mockfirebase" target="_blank">MockFirebase</a> would be useful for the unit testing with Firebase mock.

* Actions
* Components
* Layouts
* Reducers
* Utils
* Views


## Contributing

See [CONTRIBUTING.md](https://github.com/okmttdhr/setsuna-firebase/blob/master/.github/CONTRIBUTING.md).
