import {
  YOUTUBE_BEGIN,
  YOUTUBE_SEARCH,
  YOUTUBE_END
} from '../actions/youtube'

const initialState = {
  data: [],
  isLoggedIn: false,
  loading: false
}

const youtubeReducer = (state = initialState, action) => {
  console.log('Reducer: ', action)
  const { type, data } = action

  switch (type) {
    case YOUTUBE_BEGIN:
      return { ...state, loading: true }

    case YOUTUBE_SEARCH:
      return { ...state, loading: true, data: data }
    
    case YOUTUBE_END:
      return { ...state, loading: false }

    default:
      return state
  }
}

export default youtubeReducer