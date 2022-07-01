import { isGitHubRepoUrl, getRepoPathFromUrl } from './utils'

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
    .filter((a) => isGitHubRepoUrl(a.href))
    .map((a) => {
      const repoPath = getRepoPathFromUrl(a.href)
      if (!repoPath) {
        return
      }
      const img = a.appendChild(document.createElement('img'))
      img.src = createStarLink(repoPath)
    })
}
run()
