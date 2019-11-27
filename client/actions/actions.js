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
  .then(() => dispatch({
    type: 'addTopic',
    payload: name
  }))
  .catch(err => console.log(err));
};