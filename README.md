# setsuna-firebase

Setsuna is the SNS that you can see only recent 100 posts anonymously. You can post anything because nobody knows who posted it. Share your secrets now.

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
├── server                   # Express application (uses webpack middleware)
│   └── main.js              # Server application entry point
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

* unit test with karma
* component
* action
* reducer

## Contributing

* [setsuna-firebase/CONTRIBUTING.md](https://github.com/okmttdhr/setsuna-firebase/blob/master/.github/CONTRIBUTING.md)
