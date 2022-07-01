import { getRepoPathFromUrl, isGitHubRepoUrl } from '../src/utils'

describe('isGitHubRepoUrl', () => {
  test('can check github url repo', () => {
    const url = 'https://github.com/IBM/rl-testbed-for-energyplus'
    const path = isGitHubRepoUrl(url)
    expect(path).toBeTruthy()
  })
})

describe('getRepoPathFromUrl', () => {
  test('can get repo path from url', () => {
    const url = 'https://github.com/xhiroga/aws-peacock-management-console'
    const path = getRepoPathFromUrl(url)
    expect(path).toBe('xhiroga/aws-peacock-management-console')
  })
})
