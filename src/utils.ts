const GITHUB_REPO_REGEX = new RegExp(
  /https:\/\/github.com\/([a-zd](?:[a-zd]|-(?=[a-zd])){0,38}\/[A-Za-z0-9_.-]+)/
)

export const isGitHubRepoUrl = (url: string): boolean =>
  GITHUB_REPO_REGEX.test(url)

export const getRepoPathFromUrl = (url: string): string | null => {
  const r = url.match(GITHUB_REPO_REGEX)
  return r ? r[1] : null
}
