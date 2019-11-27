import React from 'react';

// TopicModal: a modal with more information about a selected topic
const Modal = ({close, display, children}) => {
  return display ? (
    <section className="modal" id="background" onClick={e => close(e)}>
      {children}
    </section>
  ) : (
    null
  );
};

export default Modal;