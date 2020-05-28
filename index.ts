import { copySync, ensureDirSync } from 'https://deno.land/std@0.53.0/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
const { args: filenames, cwd } = Deno

for (const filename of filenames) {
  console.log(`Copying ${filename}`)
  const dest = path.join(cwd(), '/copied/', `${filename}.dcp`)
  ensureDirSync(path.join(cwd(), '/copied/'))
  copySync(
    filename,
    dest,
    { overwrite: true }
  )
}
