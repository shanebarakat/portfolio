import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  HOME,
  NAV,
  PROJECTS,
  RESEARCH,
  SITE_CONTENT,
  SITE_NAME,
  SITE_URL,
  SOCIALS,
  WORK,
  type WorkEntry,
} from '../src/siteContent.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

const AGENT_CONTENT = {
  ...SITE_CONTENT,
  agent: {
    version: 1,
    generatedAt: new Date().toISOString(),
    endpoints: {
      json: `${SITE_URL}/content.json`,
      text: `${SITE_URL}/llms.txt`,
      pages: NAV.map((n) => ({
        id: n.id,
        label: n.label,
        url: `${SITE_URL}${n.href === '/' ? '' : n.href}`,
      })),
    },
  },
  research: RESEARCH.map((entry) => ({
    ...entry,
    pdfUrl: `${SITE_URL}${entry.pdf}`,
  })),
};

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function workEntryHtml(entry: WorkEntry) {
  const title = entry.title
    ? entry.href
      ? `<a href="${esc(entry.href)}">${esc(entry.title)}</a>`
      : esc(entry.title)
    : '';
  const meta = entry.meta ? ` ${esc(entry.meta)}` : '';
  const role = entry.role ? `<p>${esc(entry.role)}</p>` : '';
  const desc = entry.description ? `<p>${esc(entry.description)}</p>` : '';
  return `<article>${title ? `<h3>${title}${meta}</h3>` : entry.meta ? `<h3>${esc(entry.meta)}</h3>` : ''}${role}${desc}</article>`;
}

function renderHomeHtml() {
  const intro = esc(HOME.intro).replace(
    'Polarity',
    '<a href="https://polarity.cc">Polarity</a>',
  );
  const socials = SOCIALS.map(
    (s) => `<a href="${esc(s.href)}">${esc(s.label)}</a>`,
  ).join(' | ');
  return `<section id="home">
<p>${intro}</p>
<p>${esc(HOME.manifesto)}</p>
<p>${socials}</p>
</section>`;
}

function renderWorkHtml() {
  return `<section id="work">
<h2>Currently</h2>
${WORK.currently.map(workEntryHtml).join('\n')}
<h2>Previously</h2>
${WORK.previously.map(workEntryHtml).join('\n')}
</section>`;
}

function renderProjectsHtml() {
  return `<section id="projects">
${PROJECTS.map((p) => {
  const title = p.href
    ? `<a href="${esc(p.href)}">${esc(p.title)}</a>`
    : esc(p.title);
  return `<article><h3>${title}</h3><p>${esc(p.description)}</p></article>`;
}).join('\n')}
</section>`;
}

function renderResearchHtml() {
  return `<section id="research">
${RESEARCH.map((r) => {
  const pdf = `${SITE_URL}${r.pdf}`;
  return `<article>
<h3><a href="${esc(pdf)}">${esc(r.title)}</a> ${esc(r.meta)}</h3>
<p>${esc(r.role)}</p>
<p>${esc(r.description)}</p>
<p>PDF: <a href="${esc(pdf)}">${esc(pdf)}</a></p>
</article>`;
}).join('\n')}
</section>`;
}

function renderFullHtml(pageTitle: string, bodyHtml: string, canonicalPath: string) {
  const nav = NAV.map(
    (n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`,
  ).join(' | ');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(pageTitle)} — ${esc(SITE_NAME)}</title>
  <meta name="description" content="Portfolio of Shane Barakat — Co-Founder &amp; CTO at Polarity. Agents, post-training research, and applied ML." />
  <link rel="canonical" href="${esc(SITE_URL + canonicalPath)}" />
  <link rel="alternate" type="application/json" href="/content.json" title="Structured site content" />
  <link rel="alternate" type="text/plain" href="/llms.txt" title="Plain text site summary" />
</head>
<body>
<header>
  <h1>${esc(SITE_NAME)}</h1>
  <nav>${nav}</nav>
</header>
<main>
${bodyHtml}
</main>
<footer>
  <p>Machine-readable: <a href="/content.json">content.json</a> · <a href="/llms.txt">llms.txt</a></p>
</footer>
</body>
</html>`;
}

function buildLlmsTxt() {
  const lines = [
    `# ${SITE_NAME}`,
    `> ${HOME.intro}`,
    '',
    '## For agents',
    `Structured JSON (recommended): ${SITE_URL}/content.json`,
    `Plain text summary: ${SITE_URL}/llms.txt`,
    'Research PDFs are linked from content.json and the Research page.',
    '',
    '## Home',
    HOME.intro,
    HOME.manifesto,
    '',
    '## Socials',
    ...SOCIALS.map((s) => `- ${s.label}: ${s.href}`),
    '',
    '## Work — Currently',
    ...WORK.currently.map((e) =>
      [
        `- ${e.title}${e.meta ? ' ' + e.meta : ''}`,
        e.role ? `  Role: ${e.role}` : null,
        e.description ? `  ${e.description}` : null,
        e.href ? `  ${e.href}` : null,
      ]
        .filter(Boolean)
        .join('\n'),
    ),
    '',
    '## Work — Previously',
    ...WORK.previously.map((e) =>
      [
        e.title ? `- ${e.title}${e.meta ? ' ' + e.meta : ''}` : `- ${e.meta}`,
        e.role ? `  Role: ${e.role}` : null,
        e.description ? `  ${e.description}` : null,
        e.href ? `  ${e.href}` : null,
      ]
        .filter(Boolean)
        .join('\n'),
    ),
    '',
    '## Projects',
    ...PROJECTS.map((p) =>
      [
        `- ${p.title}`,
        `  ${p.description}`,
        p.href ? `  ${p.href}` : null,
      ]
        .filter(Boolean)
        .join('\n'),
    ),
    '',
    '## Research',
    ...RESEARCH.map((r) =>
      [
        `- ${r.title} ${r.meta}`,
        `  ${r.role}`,
        `  ${r.description}`,
        `  PDF: ${SITE_URL}${r.pdf}`,
      ].join('\n'),
    ),
    '',
    '## Pages',
    ...NAV.map((n) => `- ${n.label}: ${SITE_URL}${n.href === '/' ? '' : n.href}`),
  ];
  return lines.join('\n');
}

function writeAgentFiles(outDir: string) {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(
    path.join(outDir, 'content.json'),
    JSON.stringify(AGENT_CONTENT, null, 2) + '\n',
  );
  fs.writeFileSync(path.join(outDir, 'llms.txt'), buildLlmsTxt() + '\n');

  const pages = [
    { dir: 'work', title: 'Work', body: renderWorkHtml(), path: '/work' },
    {
      dir: 'projects',
      title: 'Projects',
      body: renderProjectsHtml(),
      path: '/projects',
    },
    {
      dir: 'research',
      title: 'Research',
      body: renderResearchHtml(),
      path: '/research',
    },
  ];

  for (const page of pages) {
    const dir = path.join(outDir, page.dir);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(
      path.join(dir, 'index.html'),
      renderFullHtml(page.title, page.body, page.path),
    );
  }

  const indexPath = path.join(outDir, 'index.html');
  if (!fs.existsSync(indexPath)) return;

  const spaShell = fs.readFileSync(indexPath, 'utf8');
  const fullBody =
    renderHomeHtml() +
    renderWorkHtml() +
    renderProjectsHtml() +
    renderResearchHtml();
  const fallback = `<noscript>${renderFullHtml('Home', fullBody, '/')}</noscript>`;
  const agentBlock = `\n<div id="agent-readable" hidden aria-hidden="true">${fullBody}</div>\n`;
  let updated = spaShell.includes('id="agent-readable"')
    ? spaShell
    : spaShell.replace('</body>', `${agentBlock}${fallback}</body>`);
  if (!updated.includes('content.json')) {
    updated = updated.replace(
      '</head>',
      '  <link rel="alternate" type="application/json" href="/content.json" title="Structured site content" />\n  <link rel="alternate" type="text/plain" href="/llms.txt" title="Plain text site summary" />\n  <meta name="description" content="Portfolio of Shane Barakat — Co-Founder &amp; CTO at Polarity. Agents, post-training research, and applied ML." />\n</head>',
    );
  }
  fs.writeFileSync(indexPath, updated);
}

const target =
  process.env.AGENT_CONTENT_DIR ??
  (process.argv.includes('--public') ? path.join(root, 'public') : dist);

writeAgentFiles(target);
console.log(`Agent-readable content written to ${target}`);