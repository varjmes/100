const ext = require('../index')

describe('ext', () => {
  it('should return eggs', () => {
    expect(ext()).toEqual('eggs')
  })
})
