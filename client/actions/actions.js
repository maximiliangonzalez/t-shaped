export const getTopics = () => dispatch => {
  fetch('/topic')
  .then(res => res.json())
  .then(res => dispatch({
    type: 'populateFollowing',
    payload: res
  }))
  .catch(err => console.log(err));
};