import * as request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const ALL_ADS = 'ALL_ADS'

function allAds(payload) {
  return {
    type: ALL_ADS,
    payload
  }
}

export const getAds = () => dispatch => {
  request
    .get(`${baseUrl}/ads`)
    .then(response => {
      dispatch(allAds(response.body))
    })
    .catch(console.error)
}  