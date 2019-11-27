import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal.jsx';
import TopicModalContent from '../components/TopicModalContent.jsx';
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
  
  const currentTopic = useSelector(store => store.topics.currentTopic);

  return (
    <div className="offset-top">
      <Modal close={close} display={currentTopic}>
        <TopicModalContent />
      </Modal>
      <TopicList />
    </div>
  );
};

export default TopicsContainer;
