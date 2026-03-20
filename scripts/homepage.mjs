import { readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import path from 'node:path'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'my-slidev'
const slidesDir = './slides'
const outRoot = './site'

const files = readdirSync(slidesDir)
  .filter(name => name.endsWith('.md'))
  .filter(name => !name.startsWith('_'))

const links = files.map(file => {
  const name = path.basename(file, '.md')
  return {
    name,
    title: name,
    url: `/${repoName}/${name}/`,
  }
})

if (!existsSync(outRoot)) {
  mkdirSync(outRoot, { recursive: true })
}

const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>课件导航</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
      background: linear-gradient(135deg, #eef4ff 0%, #f8fbff 100%);
      color: #1f2937;
    }
    .wrap {
      max-width: 980px;
      margin: 0 auto;
      padding: 56px 24px 72px;
    }
    .hero {
      text-align: center;
      margin-bottom: 40px;
    }
    .hero h1 {
      margin: 0 0 12px;
      font-size: 40px;
      font-weight: 800;
      color: #1d4ed8;
    }
    .hero p {
      margin: 0;
      font-size: 17px;
      color: #475569;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }
    .card {
      display: block;
      text-decoration: none;
      background: rgba(255,255,255,.9);
      border-radius: 20px;
      padding: 24px 22px;
      box-shadow: 0 10px 30px rgba(37, 99, 235, .10);
      border: 1px solid rgba(148, 163, 184, .18);
      transition: transform .18s ease, box-shadow .18s ease;
      color: inherit;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 36px rgba(37, 99, 235, .16);
    }
    .card h2 {
      margin: 0 0 10px;
      font-size: 24px;
      color: #0f172a;
    }
    .card .path {
      font-size: 14px;
      color: #2563eb;
      word-break: break-all;
    }
    .footer {
      margin-top: 40px;
      text-align: center;
      color: #64748b;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="hero">
      <h1>信息学课件导航</h1>
      <p>点击下方卡片进入对应课件</p>
    </div>

    <div class="grid">
      ${links.map(item => `
      <a class="card" href="${item.url}">
        <h2>${item.title}</h2>
        <div class="path">${item.url}</div>
      </a>`).join('')}
    </div>

    <div class="footer">
      由 Slidev 自动构建
    </div>
  </div>
</body>
</html>`

writeFileSync(`${outRoot}/index.html`, html, 'utf8')
console.log('Homepage generated: site/index.html')
