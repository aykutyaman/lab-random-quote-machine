import reducer from './reducer'

describe('reducer', () => {
  test('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual({ author: '', text: '' })
  })

  test('handles FETCH_SUCCESS with empty state values', () => {
    const given = reducer({}, {
      type: 'FETCH_SUCCESS',
      quoteAuthor: 'Marcus Aurelius',
      quoteText: 'The best answer to anger is silence'
    })
    const expected = {
      author: 'Marcus Aurelius',
      text: 'The best answer to anger is silence'
    }
    expect(given).toEqual(expected)
  })

  test('handles FETCH_SUCCESS with state values', () => {
    const prevState = {
      author: 'Seneca',
      text: 'Sometimes even to live is an act of courage'
    }
    const given = reducer(prevState, {
      type: 'FETCH_SUCCESS',
      quoteAuthor: 'Marcus Aurelius',
      quoteText: 'The best answer to anger is silence'
    })
    const expected = {
      author: 'Marcus Aurelius',
      text: 'The best answer to anger is silence'
    }
    expect(given).toEqual(expected)
  })
})
