import axios from 'axios'


const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY
// DEFINITIONS
export const YOUTUBE_BEGIN = 'YOUTUBE_BEGIN'
export const YOUTUBE_END = 'YOUTUBE_END'
export const YOUTUBE_SEARCH = 'YOUTUBE_SEARCH'

// ACTION CREATORS
export const youtubeBegin = () => ({ type: YOUTUBE_BEGIN })
export const youtubeEnd = () => ({ type: YOUTUBE_END })
export const searchYoutube = (data) => ({ type: YOUTUBE_SEARCH, data })

// LOGIN
export const startGetVideos = (keyword, setSubmitting) => {
  return async (dispatch, getState) => {
    dispatch(youtubeBegin())
    try {
      console.log("startGetVideos -> keyword", keyword)
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&order=viewCount&q=${keyword}&type=video&maxResult=100`)
      console.log("startGetVideos -> response", response)
      dispatch(searchYoutube(response.data))
    } catch (error) {
      console.warn(error.response)
      dispatch(youtubeEnd())
    }
  }
}