import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TopicModal from '../components/TopicModal.jsx';
import TopicList from '../components/TopicList.jsx';
import { getTopics, changeCurrentTopic } from '../actions/actions';

const TopicsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopics());
  }, []);

  // if users clicks exit button or anywhere off of the pop-up, close sets currentTopic to null to stop modal from rendering anything
  const close = e => {
    if (['background', 'close-button', 'delete-button'].includes(e.target.id)) {
      dispatch(changeCurrentTopic(null));
    }
  };

  return (
    <div className="offset-top">
      <TopicModal 
        close={close}
      />
      <TopicList />
    </div>
  );
};

export default TopicsContainer;
