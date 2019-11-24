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