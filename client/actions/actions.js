// refactor this one later to only get the names of topics - we don't need to get the notes etc. until a user clicks on a topic
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