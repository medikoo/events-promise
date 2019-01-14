[![*nix build status][nix-build-image]][nix-build-url]
[![Windows build status][win-build-image]][win-build-url]
[![Tests coverage][cov-image]][cov-url]
![Transpilation status][transpilation-image]
[![npm version][npm-image]][npm-url]

# events-promise

## Promise that's a also a Node.js EventEmitter

Useful when we want to serve both `EventEmitter` (e.g. `Stream`) instance and `Promise` as one object

### Installation

```bash
npm install events-promise
```

# Usage

```javascript
const EventsPromise = require("events-promise");

const eventsPromise = new EventsPromise((resolve, reject) => {
	...
});

eventsPromise.addListener("someevent", event => {
	...
});
eventsPromise.emit("someevent", { ... });
```

### Tests

```bash
npm test
```

[nix-build-image]: https://semaphoreci.com/api/v1/medikoo-org/events-promise/branches/master/shields_badge.svg
[nix-build-url]: https://semaphoreci.com/medikoo-org/events-promise
[win-build-image]: https://ci.appveyor.com/api/projects/status/?svg=true
[win-build-url]: https://ci.appveyor.com/api/project/medikoo/events-promise
[cov-image]: https://img.shields.io/codecov/c/github/medikoo/events-promise.svg
[cov-url]: https://codecov.io/gh/medikoo/events-promise
[transpilation-image]: https://img.shields.io/badge/transpilation-free-brightgreen.svg
[npm-image]: https://img.shields.io/npm/v/events-promise.svg
[npm-url]: https://www.npmjs.com/package/events-promise
