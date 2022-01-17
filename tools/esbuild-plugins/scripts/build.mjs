// @ts-check

import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

import { build as buildAsync } from 'esbuild'

// @ts-expect-error
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

/** @type {(cmd: string) => void} */
const run = cmd => void execSync(cmd, { stdio: 'inherit', cwd: root })

export async function build() {
  try {
    // Generate CJS output
    await buildAsync({
      format: 'cjs',
      outdir: 'dist/cjs',
      tsconfig: 'tsconfig.cjs.json',
      entryPoints: ['./src/index.ts'],
      absWorkingDir: root,
      platform: 'node',
      bundle: true,
    })

    // Generate ESM output
    await buildAsync({
      format: 'esm',
      outdir: 'dist/esm',
      tsconfig: 'tsconfig.esm.json',
      entryPoints: ['./src/index.ts'],
      absWorkingDir: root,
      platform: 'node',
      bundle: true,
    })

    run(`pnpm tsc -p tsconfig.dts.json`)
  } catch (e) {}
}

build()
