import { mapStateToProps } from './AppContainer'

describe('AppContainer', () => {
  test('mapStateToProps returns exact state fields', () => {
    const state = {
      date: new Date(),
      author: 'Marcus Aurelius',
      text: 'The best answer to anger is silence'
    }
    const { author, text } = state;
    expect(mapStateToProps(state)).toEqual({ author, text })
  })
})
