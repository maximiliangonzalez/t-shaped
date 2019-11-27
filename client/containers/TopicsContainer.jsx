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
  
  const currentTopic = useSelector(store => store.topics.currentTopic);

  return (
    <div className="offset-top">
      <Modal closeCriteria={['background', 'close-button', 'delete-button']} closeCallback={() => dispatch(changeCurrentTopic(null))} display={currentTopic}>
        <TopicModalContent />
      </Modal>
      <TopicList />
    </div>
  );
};

export default TopicsContainer;
