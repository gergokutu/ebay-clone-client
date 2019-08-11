import { ALL_ADS } from '../actions'

const reducer = (state = [], action = {}) => {
  switch (action.type) {
  case ALL_ADS:
    return action.payload
  default:
    return state
  }
}

export default reducer