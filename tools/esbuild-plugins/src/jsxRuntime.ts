import fs from 'fs'
import { type Plugin } from 'esbuild'

const matchReactImport = /(import).+(?<react>React)(,|\s)(.+)?(from )("|')(react)("|')/gm

export function jsxRuntime(): Plugin {
  return {
    name: 'jsx-react-17',
    setup(build) {
      build.onLoad({ filter: /\.tsx$/ }, async args => {
        const contents = await fs.promises.readFile(args.path, 'utf8')

        if (!matchReactImport.test(contents)) {
          return {
            contents: `import * as React from 'react';\n${contents}`,
            loader: 'tsx',
          }
        }

        return { contents, loader: 'tsx' }
      })
    },
  }
}
