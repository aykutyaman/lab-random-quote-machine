import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export function* saga() {
  yield takeEvery('FETCH', function* () {
    const url = '/api/1.0/?method=getQuote&key=457653&format=json&lang=en';
    const response = yield call(axios.get, url);
    const { quoteAuthor, quoteText } = response.data;
    yield put({
      type: 'FETCH_SUCCESS',
      quoteAuthor,
      quoteText
    });
  });
}
