const initialState = {
  following: [],
  currentTopic: null
}

const topicReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'changeCurrentTopic':
      return {
        ...state,
        currentTopic: action.payload
      }
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
      };
    case 'changeConfidence':
      return {
        ...state,
        following: state.following.map(topic => topic._id === action.payload ? {...topic, confident: !topic.confident} : topic)
      };
    case 'addNote':
      return {
        ...state,
        following: state.following.map(topic => topic._id === action.payload_id ? {...topic, notes: [...topic.notes, action.payload.note]} : topic)
      }
    case 'deleteNote':
      return {
        ...state,
        following: state.following.map(topic => topic._id === action.payload_id ? {...topic, notes: topic.notes.filter(note => note !== action.payload.note)} : topic)
      }
    default:
      return state;
  }
};

export default topicReducer;