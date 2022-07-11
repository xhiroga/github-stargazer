import {
  getRepoPathFromUrl,
  isGitHubRepoUrl,
  isSameGitHubRepo,
} from '../src/utils'

describe('isGitHubRepoUrl', () => {
  test('can check github url repo', () => {
    const url = 'https://github.com/IBM/rl-testbed-for-energyplus'
    const path = isGitHubRepoUrl(url)
    expect(path).toBeTruthy()
  })

  test('can check another repo', () => {
    const url = 'https://github.com/heyman333/react-native-responsive-fontsize'
    const path = isGitHubRepoUrl(url)
    expect(path).toBeTruthy()
  })

  test('can check github url with file name and fragment', () => {
    const url =
      'https://github.com/nestjs/nest/blob/master/CONTRIBUTING.md#-submitting-an-issue'
    const path = isGitHubRepoUrl(url)
    expect(path).toBeTruthy()
  })
})

describe('isSameGitHubRepo', () => {
  test('can check same repo', () => {
    const href =
      'https://github.com/nestjs/nest/blob/master/CONTRIBUTING.md#-submitting-an-issue'
    const current = 'https://github.com/nestjs/nest/blob/master/Readme.md'
    expect(isSameGitHubRepo(href, current)).toBeTruthy()
  })

  test('can check different repo', () => {
    const href = 'https://github.com/fastify/fastify'
    const current = 'https://github.com/nestjs/nest/blob/master/Readme.md'
    expect(isSameGitHubRepo(href, current)).toBeFalsy()
  })
})

describe('getRepoPathFromUrl', () => {
  test('can get repo path from url', () => {
    const url = 'https://github.com/xhiroga/aws-peacock-management-console'
    const path = getRepoPathFromUrl(url)
    expect(path).toBe('xhiroga/aws-peacock-management-console')
  })
})
