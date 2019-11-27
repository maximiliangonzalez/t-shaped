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
    case 'addTopic':
      return {
        ...state,
        following: [...state.following, {name: action.payload, confident: false}]
      }
    default:
      return state;
  }
};

export default topicReducer;