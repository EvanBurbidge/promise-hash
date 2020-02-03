const promiseHash = require('../dist/promiseHash.min.js');
const { expect } = require('chai');

console.warn(promiseHash);

it('should test the promiseHash function', async () => {
  const dummyPromise = input => new Promise(resolve => setTimeout(() => resolve(input), 2500));
  promiseHash({
    promiseOne: dummyPromise('hi there'),
  }).then((data) => {
    expect(data.hasOwnProperty('promiseOne')).to.equal(true);
    expect(data.promiseOne).to.equal('hi there');
  });
});
