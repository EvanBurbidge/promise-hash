import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/promiseHash.js',
      format: 'cjs',
    },
    {
      file: './dist/promiseHash.min.js',
      format: 'cjs',
      name: 'promiseHash',
      plugins: [ terser() ],
    }
  ]
}
