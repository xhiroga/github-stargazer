import { isGitHubRepoUrl, getRepoPathFromUrl, isSameGitHubRepo } from './utils'

const createStarLink = (repoPath: string) =>
  `https://img.shields.io/github/stars/${repoPath}`

const run = () => {
  const articles = document.querySelector<HTMLElement>('article.markdown-body')
  const anchors = articles?.querySelectorAll<HTMLAnchorElement>(
    'a[href^="https://github.com/"]'
  )
  if (!anchors) {
    return
  }
  Array.from(anchors)
    .filter(
      (a) =>
        isGitHubRepoUrl(a.href) &&
        !isSameGitHubRepo(a.href, window.location.href)
    )
    .forEach((a) => {
      setTimeout(() => {
        const repoPath = getRepoPathFromUrl(a.href)
        if (!repoPath) {
          return
        }
        a.style.display = 'inline-block'
        const img = a.appendChild(document.createElement('img'))
        img.src = createStarLink(repoPath)
        img.style.marginLeft = '3px'
        img.style.verticalAlign = 'text-bottom'
      }, 100)
    })
}
run()
