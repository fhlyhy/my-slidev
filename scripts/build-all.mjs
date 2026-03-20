import { readdirSync, rmSync, mkdirSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import path from 'node:path'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'my-slidev'
const slidesDir = './slides'
const outRoot = './site'

if (existsSync(outRoot)) {
  rmSync(outRoot, { recursive: true, force: true })
}
mkdirSync(outRoot, { recursive: true })

const files = readdirSync(slidesDir)
  .filter(name => name.endsWith('.md'))
  .filter(name => !name.startsWith('_'))

for (const file of files) {
  const name = path.basename(file, '.md')
  const entry = `${slidesDir}/${file}`
  const outDir = `${outRoot}/${name}`
  const base = `/${repoName}/${name}/`

  console.log(`\n=== Building ${entry} -> ${outDir} ===`)
  execSync(
    `npx slidev build ${entry} --base ${base} --out ${outDir}`,
    { stdio: 'inherit' }
  )
}

console.log('\nBuild finished.')
