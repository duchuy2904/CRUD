import React from 'react';
import '../styles/modal.css'

const Modal = ({open, closeModal, title, children}) => {
  return open ? (
    <div className='modal-container'>
        <div className='modal'>
            <div className='modal-header'>
                <h2>{title}</h2>
                <button className='close-modal-btn' onClick={closeModal}>Close</button>
            </div>
            <div className='modal-body'>{children}</div>
        </div>
    </div>
  ) : null;
}

export default Modal