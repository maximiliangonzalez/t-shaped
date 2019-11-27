export const changeCurrentTopic = topic => ({
  type: 'changeCurrentTopic',
  payload: topic
});

export const getTopics = () => dispatch => {
  fetch('/topic')
  .then(res => res.json())
  .then(res => {
    if (!(res instanceof Array)) {
      return;
    }
    dispatch({
      type: 'populateFollowing',
      payload: res
    })
  })
  .catch(err => console.log(err));
};

export const addTopic = name => dispatch => {
  fetch('/topic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name})
  })
  .then(res => res.json())
  .then(res => dispatch({
    type: 'addTopic',
    payload: res
  }))
  .catch(err => console.log(err));
};

export const deleteTopic = _id => dispatch => {
  fetch('/topic', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({_id})
  })
  .then(() => {
    dispatch({
      type: 'deleteTopic',
      payload: _id
    });
  })
  .catch(err => console.log(err));
};

export const changeConfidence = _id => dispatch => {
  fetch('/topic/confidence', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({_id})
  })
  .then(() => dispatch({
    type: 'changeConfidence',
    payload: _id
  }))
  .catch(err => console.log(err));
};

export const addNote = (_id, note) => dispatch => {
  fetch('/topic/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({_id, note})
  })
  .then(res => res.json())
  .then(res => console.log('here the res', res))
  .then(() => dispatch({
    type: 'addNote',
    payload: {_id, note}
  }))
  .catch(err => console.log(err));
};