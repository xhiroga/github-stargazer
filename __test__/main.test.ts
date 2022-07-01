import { getRepoPathFromUrl } from '../src/utils'

describe('getRepoPathFromUrl', () => {
  test('can get repo path from url', () => {
    const url = 'https://github.com/xhiroga/aws-peacock-management-console'
    const path = getRepoPathFromUrl(url)
    expect(path).toBe('xhiroga/aws-peacock-management-console')
  })
})
