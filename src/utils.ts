const GITHUB_REPO_REGEX = new RegExp(
  /https:\/\/github.com\/([A-Za-z\d](?:[A-Za-z\d]|-(?=[A-Za-z\d])){0,38}\/[A-Za-z\d_.-]+)/
)

export const isGitHubRepoUrl = (url: string): boolean =>
  GITHUB_REPO_REGEX.test(url)

export const isSameGitHubRepo = (href: string, current: string): boolean => {
  const hrefRepoPath = href.match(GITHUB_REPO_REGEX)
  const currentRepoPath = current.match(GITHUB_REPO_REGEX)
  if (!hrefRepoPath || !currentRepoPath) {
    return false
  }
  return hrefRepoPath[1] === currentRepoPath[1]
}

export const getRepoPathFromUrl = (url: string): string | null => {
  const r = url.match(GITHUB_REPO_REGEX)
  return r ? r[1] : null
}
