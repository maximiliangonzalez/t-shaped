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
        currentTopic: {...state.currentTopic, notes: [state.currentTopic.notes, action.payload.note]}
      };
    case 'updateNote':
      return {
        ...state,
        currentTopic: {...state.currentTopic, notes: state.currentTopic.notes.map(note => note === action.payload.oldNote ? action.payload.newNote : note)}
      };
    case 'deleteNote':
      return {
        ...state,
        currentTopic: {...state.currentTopic, notes: state.currentTopic.notes.filter(note => note !== action.payload.note)}
      };
    default:
      return state;
  }
};

export default topicReducer;