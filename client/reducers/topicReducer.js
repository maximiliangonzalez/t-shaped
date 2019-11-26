const initialState = {
  following: []
}

const topicReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'populateFollowing':
      return {
        ...state,
        following: action.payload
      }
    default:
      return state;
  }
};

export default topicReducer;