const initialState = {
  following: []
}

const topicReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'populateFollowing':
      return {
        ...state,
        following: action.payload
      };
    case 'addTopic':
      return {
        ...state,
        following: [...state.following, action.payload]
      };
    case 'deleteTopic': 
      return {
        ...state,
        following: state.following.filter(topic => topic._id !== action.payload)
      }
    default:
      return state;
  }
};

export default topicReducer;