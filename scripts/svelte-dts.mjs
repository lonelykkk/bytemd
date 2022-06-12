// @ts-check
import path from 'path'
import { packagesDir } from './utils.mjs'
import { emitDts } from 'svelte2tsx'
import { createRequire } from 'module'

// some parts are from here https://github.com/sveltejs/kit/blob/master/packages/kit/src/packaging/typescript.js
// @ts-ignore
const require = createRequire(import.meta.url)

await emitDts({
  libRoot: path.join(packagesDir, 'bytemd/src'),
  svelteShimsPath: require.resolve('svelte2tsx/svelte-shims.d.ts'),
  declarationDir: './dist',
})