const typescript = require('@rollup/plugin-typescript') // For compiling TypeScript files
const postcss = require('rollup-plugin-postcss') // For processing CSS/SCSS files
const url = require('@rollup/plugin-url') // For importing files as URLs (e.g., images, fonts)
const svgr = require('@svgr/rollup') // For importing SVG files as React components
const terser = require('@rollup/plugin-terser') // For minifying the output JavaScript code
const dts = require('rollup-plugin-dts') // For generating TypeScript declaration files
const packageJson = require('./package.json') // To read output file paths from package.json

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'cjs'
      },
      {
        file: packageJson.main,
        format: 'esm'
      }
    ],
    external: ['react'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.tsx']
      }),
      postcss({
        extract: 'index.css',
        modules: true,
        use: ['sass'],
        minimize: true
      }),
      url(),
      svgr({ icon: true }),
      terser()
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    external: [/\.(css|scss)$/],
    plugins: [dts.default()]
  }
]
