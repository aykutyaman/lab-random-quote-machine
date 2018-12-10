const initialState = {
  author: '',
  text: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        author: action.quoteAuthor,
        text: action.quoteText
      }
    default:
      return state
  }
}

export default reducer
