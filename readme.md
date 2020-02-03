## PromiseHash

### Installation

```javascript
npm install promise-hash-method
```


###Usage

```javascript
const promiseHash = require('promise-hash-method');
// -- OR --
import promiseHash from 'promise-hash-method';

const dummyPromise = () => new Promise(resolve => setTimeout(() => resolve('hi'), 2500));

const resolved = await promiseHash({
    promiseOne: dummyPromise(),
});

console.warn(resolved.promiseOne);

```
