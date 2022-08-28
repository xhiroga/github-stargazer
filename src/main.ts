import { isGitHubRepoUrl, getRepoPathFromUrl, isSameGitHubRepo, isGitHubReservedName } from './utils'

const timer = (ms: number) => new Promise((res) => setTimeout(res, ms))

const displayStarCount = (a: HTMLAnchorElement) => {
  const repoPath = getRepoPathFromUrl(a.href)
  if (!repoPath) {
    return
  }
  a.style.display = 'inline-block'
  const img = a.appendChild(document.createElement('img'))
  img.style.marginLeft = '3px'
  img.style.verticalAlign = 'text-bottom'
  img.src = `https://img.shields.io/github/stars/${repoPath}`
}

const run = async () => {
  const articles = document.querySelector<HTMLElement>('article.markdown-body')
  const anchors = articles?.querySelectorAll<HTMLAnchorElement>(
    'a[href^="https://github.com/"]'
  )
  if (!anchors) {
    return
  }
  const filtered = Array.from(anchors).filter(
    (a) =>
      isGitHubRepoUrl(a.href) && !isGitHubReservedName(a.href) && !isSameGitHubRepo(a.href, location.href)
  )
  for (const a of filtered) {
    displayStarCount(a)
    await timer(100)
  }
}
run()
