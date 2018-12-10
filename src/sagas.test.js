import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { cloneableGenerator } from 'redux-saga/utils'
import { rootSaga, requestFetch } from './sagas'

test('rootSaga', () => {
  const gen = cloneableGenerator(rootSaga)()

  expect(gen.next().value).toEqual(takeEvery('FETCH', requestFetch))
  expect(gen.next().done).toBe(true)
})

test('requestSaga', () => {
  const gen = cloneableGenerator(requestFetch)()

  const response = {
    data: {
      quoteAuthor: 'Marcus Aurelius',
      quoteText: 'The best answer to anger is silence'
    }
  }

  // make api call
  const url = '/api/1.0/?method=getQuote&key=457653&format=json&lang=en';
  expect(gen.next(response).value).toEqual(call(axios.get, url))

  // details of quote
  expect(gen.next(response).value).toEqual(
    put({ type: 'FETCH_SUCCESS', ...response.data })
  )

  // should be done
  expect(gen.next().done).toBe(true)

})
