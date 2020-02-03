function promiseHash(hash) {
  const keys = Object.keys(hash);
  return Promise.all(keys.map(key => hash[key]))
    .then(list => list
      .reduce((acc, value, i) => {
        acc[keys[i]] = value;
        return acc;
      }, {}));
}

module.exports = promiseHash;
