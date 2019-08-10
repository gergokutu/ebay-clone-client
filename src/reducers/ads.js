const initialState  = [
    {
      title: 'Ad1',
      price: 1000
    },
    {
      title: 'Ad2',
      price: 2000
    },
    {
      title: 'Ad3',
      price: 3000
    }
  ]

  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    default:
      return state
    }
  }
  
  export default reducer