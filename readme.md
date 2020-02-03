## PromiseHash

### Installation

`npm install promise-hash`


### Usage

```javascript

const dummyPromise = () => new Promise(resolve => setTimeout(() => resolve('hi'), 2500));

const resolved = await promiseHash({
    promiseOne: dummyPromise(),
});

console.warn(resolved.promiseOne);

```
