import React from 'react';

const Modal = ({closeCriteria, closeCallback, display, children}) => {
  // close criteria is a list of places a user can click to close the modal
  // closeCallback is how to incude the modal to close
  const close = e => {
    if (closeCriteria.includes(e.target.id)) {
      closeCallback();
    }
  };

  return display ? (
    <section className="modal" id="background" onClick={e => close(e)}>
      {children}
    </section>
  ) : (
    null
  );
};

export default Modal;