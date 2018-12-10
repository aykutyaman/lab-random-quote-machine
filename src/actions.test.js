import { fetch } from './actions'

describe('actions', () => {
  test('create a fetch action to get data', () => {
    expect(fetch()).toEqual({ type: 'FETCH' })
  })
})
