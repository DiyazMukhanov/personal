import React, { useState } from 'react';
import { Modal } from './Modal/index';
import './App.css'

export default function App() {
  const [modalIsShowing, setModalIsShowing] = useState(false)

  return (
    <div className='App'>
      <Modal 
      className='modalContent' 
      isOpened={modalIsShowing}
      onClose={() => setModalIsShowing(false)}
      >
          Some modal text
          <button onClick={() => setModalIsShowing(false)}>Close</button>
      </Modal>
      <button onClick={() => setModalIsShowing(true)}>Open modal</button>
    </div>
  );
}